import { Component } from 'react';
import { getGalleryService } from 'Helpers/Api';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      const data = await getGalleryService(this.props.query);
      this.setState({ images: data.hits });
      this.setState({page: 1})
    }
    if (prevState.page !== this.state.page) {
      const data = await getGalleryService(this.props.query, this.state.page);

      this.setState(prev => ({
        images: [...prev.images, ...data.hits],
      }));
    }
  }

loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <>
        <ul className="gallery">
          {this.state.images.map(image => (
            <li key={image.id}>
              <img src={image.webformatURL} alt="littleImage" />
            </li>
          ))}
        </ul>
        <button onClick={this.loadMore} type="button">
          Load more
        </button>
      </>
    );
  }
}
