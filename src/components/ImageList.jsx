/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const ImageList = (props) => {
   const images =  props.images.map(({id, largeImageURL, tag}) =>
    {
        return <img key={id} src={largeImageURL} alt={tag} />
    })
    return(
        <div>{images}</div>
    );
}

export default ImageList;