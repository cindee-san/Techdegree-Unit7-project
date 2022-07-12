import React from 'react';
import Photo from './Photo';

const PhotoList = props => {
    const results = props.data;
    let photos = results.map( photo =>
        <Photo url={photo.url_c} key={photo.id}/>
        );
    return(
        <ul>
            {photos}
        </ul>
    );
}

export default PhotoList;