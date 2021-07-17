import React from "react";
import Img from "react-cool-img";
import FavButton from "../../containers/FavouriteButton";
import { shortenName } from "../../utils/helpers";
import * as Styled from "./SinglePhoto.styled";
import PropsType from "./SinglePhoto.props";

// this is our image component that contain image and the details
const SinglePhoto = React.memo<PropsType>(({ image }) => (
  <Styled.Container>
    <Img
      src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
      alt={image.title}
      key={image.id}
      debounce={350}
      style={{ backgroundColor: "#eee" }}
    />
    <Styled.Overley>
      <Styled.Caption>
        {image.title && (
          // i used shortenName for shorting the title and the owner name
          <div className="image-title">{shortenName(image.title)}</div>
        )}
        {image.ownername && (
          <div className="image-owner">{shortenName(image.ownername, 20)}</div>
        )}
      </Styled.Caption>
      <FavButton imageId={image.id} />
    </Styled.Overley>
  </Styled.Container>
));

export default SinglePhoto;
