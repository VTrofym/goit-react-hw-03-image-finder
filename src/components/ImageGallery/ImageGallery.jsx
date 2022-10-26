import { Component } from 'react';
// import {Loader}
import { getGalleryService } from 'Helpers/Api';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    isLoadind: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query && this.props.query !== '') {
      this.setState({ isLoadind: true });
      const data = await getGalleryService(this.props.query);
      this.setState({
        images: data.hits,
        page: 1,
        isLoadind: false,
      });
    }
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      this.setState({ isLoadind: true });
      const data = await getGalleryService(this.props.query, this.state.page);

      this.setState(prev => ({
        images: [...prev.images, ...data.hits],
        isLoadind: false,
      }));
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <>
        {/* {this.state.isLoadind && <Loader />} */}
        <ul className="gallery">
          {this.state.images.map(image => (
            <ImageGalleryItem
              key={image.id}
              toggleModal={this.props.toggleModal}
              url={image.webformatURL}
              largeImage={image.largeImageURL}
            />
          ))}
        </ul>
        <button onClick={this.loadMore} type="button">
          Load more
        </button>
      </>
    );
  }
}
