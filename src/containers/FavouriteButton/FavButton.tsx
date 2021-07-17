import React from "react";
import classNames from "classnames";
import { useLocalStorage } from "react-use";
import Button from "../../components/‌‌Button";
import PropsType from "./FavButton.props";

// our favButton for put an image into fav favList

// for this feature i used localStorage to store the fav list.
// it's something like that on localStorage =>  favList-51314164152  = true.
// and when user clicked on the button again i'll remove the property from localStorage.
const FavButton = React.memo<PropsType>(({ imageId }) => {
  // i used useLocalStorage hooks to handle figure out this image is favorited or not;
  const [isFavor, setFav, deleteFav] = useLocalStorage<boolean>(
    `favList-${imageId}`
  );
  const handleOnFavClick = () => {
    if (isFavor) {
      deleteFav();
    } else {
      setFav(true);
    }
  };
  const btnClassNames = classNames({
    "favourite-btn": true,
    selected: !!isFavor,
  });
  return (
    <Button className={btnClassNames} onClick={handleOnFavClick}>
      {isFavor ? "Favorited" : "Favourite"}
    </Button>
  );
});

export default FavButton;
