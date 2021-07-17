import * as React from "react";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import BeatLoader from "react-spinners/BeatLoader";
import SinglePhoto from "../../components/SinglePhoto";
import { getRecentPhotos } from "../../api";
import { PhotoType } from "./Gallery.props";
import * as Styled from "./Gallery.styled";

// this is Gallery Container that contain fetching logic and infinite loading logic.
const Gallery = React.memo(() => {
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [list, setList] = useState<PhotoType[]>([]);

  // write  this section to get data and even add  data to list when infinite load is called
  const handleGetData = () => {
    getRecentPhotos(page).then((data: any) => {
      setList([...list, ...data?.photos.photo]);
      // this line is for checking if pagination is done or not.
      // checking if current page equals to final page that came from the api response.
      setHasMore(data?.photos.pages !== page);
      setLoading(false);
    });
  };

  // this hook will be called once when component is mounted and after that when page number is changed
  useEffect(() => {
    setLoading(true);
    handleGetData();
  }, [page]);

  const handleInfiniteOnLoad = () => {
    if (!loading && hasMore) {
      setPage(page + 1);
    }
  };

  return (
    <Styled.Container>
      <InfiniteScroll
        initialLoad={false}
        loadMore={handleInfiniteOnLoad}
        hasMore={!loading && hasMore}
        pageStart={0}
      >
        <Styled.GalleryContainer>
          {list?.map((item: PhotoType) => (
            <SinglePhoto image={item} />
          ))}
        </Styled.GalleryContainer>
      </InfiniteScroll>
      <Styled.Loader>
        <BeatLoader color="#333" loading={loading} size={18} />
      </Styled.Loader>
    </Styled.Container>
  );
});
export default Gallery;
