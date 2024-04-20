/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";

class ImageCard extends React.Component {
  constructor(props){
    super(props);

    this.state = {spans: 0}

    this.imageRef = React.createRef();
  } 

  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSPans)
    
  }

  setSPans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans  = Math.ceil(height / 10);

    this.setState({spans: spans})
  }
  
  render() {
    const { largeImageURL, tags } = this.props.image;

    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref = {this.imageRef} src={largeImageURL} alt={tags} />
      </div>
    );
  }
}

export default ImageCard;
