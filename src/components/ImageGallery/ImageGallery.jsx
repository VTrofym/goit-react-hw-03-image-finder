import { Component } from 'react';
import { getGalleryService } from 'Helpers/Api';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      const data = await getGalleryService(this.props.query)
      this.setState({ images: data.hits })
    }
    if (prevState.page !== this.props.page) {
      this.setState({ page: this.props.page })
    }
    // if ("ваша перевірка") {
    //   const data = await getGalleryService(this.props.query, page)
    // }
  }

  render() {
    return (
      <ul className="gallery">
        {this.state.images.map(image => (
          <li key={image.id}>
            <img src={image.webformatURL} alt="littleImage" />
          </li>
        ))}
      </ul>
    );
  }
}
