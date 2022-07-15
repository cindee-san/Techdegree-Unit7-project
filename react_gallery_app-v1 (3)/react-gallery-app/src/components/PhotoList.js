import React from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";

const PhotoList = (props) => {
  const results = props.data;
  let photos;
  if (results.length > 0) {
    photos = results.map((photo) => <Photo url={photo.url_c} key={photo.id} />);
  } else {
    photos = <NotFound />
  }
  //returns the query as a topic, used to define title of search results
  return (
  <div className="photo-container">
  <h2>{`${props.topic} Photos`}</h2>
  <ul>{photos}</ul>
  </div>
  )
};

export default PhotoList;

