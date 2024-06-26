/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import './ImageList.css'
import ImageCard from './ImageCard'


const ImageList = (props) => {
   const images =  props.images.map(image =>
    {
        return <ImageCard key={image.id} image={image} />
    })
    return(
        <div className='image-list'>{images}</div>
    );
}

export default ImageList;