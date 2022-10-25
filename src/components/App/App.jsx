import { Component } from 'react';
import { Searchbar } from "components/Searchbar";
// import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { ImageGallery } from "components/ImageGallery";
// import { getGalleryService } from 'Helpers/Api';

export class App extends Component {
  state = {
    savedQuery: '',
  }

  handleSubmit = query => {
    this.setState({ savedQuery: query });
  };

  render() {
    return (
      <div>
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery query={this.state.savedQuery} />
      </div>
    );
  }
}
