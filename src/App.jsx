import React from "react";
import SearchBar from "./components/SearchBar";
import pixabay from "./Api/pixabay";
import ImageList from "./components/ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await pixabay.get(
      `/api/?key=43470076-7855e18965a0e7e08db9d2058&q=${term}&image_type=photo`
    );

    this.setState({ images: response.data.hits });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
