import React from 'react';
import Photo from './Photo';

class PhotoContainer extends React.Component {
    render() {
        return (
            <div className= "photo-container">
                <Photo />
            </div>
        );
    }
}
export default PhotoContainer;