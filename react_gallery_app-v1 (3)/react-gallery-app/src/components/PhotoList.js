import React from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";

const PhotoList = (props) => {
  const results = props.data;
  let photos;
  if (results.length > 0) {
    photos = results.map((photo) => <Photo url={photo.url_c} key={photo.id} />);
  } else {
    photos = <NotFound />;
  }
  return <ul>{photos}</ul>;
};

export default PhotoList;

// const results = props.data.photos;
// let photos;
// if (results.length > 0) {
//     photos = results.map( photo => <Photo url={photo.url_c} key={photo.id}/>)
// }  else {
//     photos = <NotFound />
// };
