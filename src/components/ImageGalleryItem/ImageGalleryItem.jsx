import { Component } from 'react';
import { getGalleryService } from 'Helpers/Api';

export class ImageGalleryItem extends Component {
  state = {
    images: [],
  };

  async componentDidUpdate(_, prevState) {
    const data = await getGalleryService();
    console.log('data', data);

  }
  render() {
    return (
      <li className="gallery-item">
        <img src="" alt="" />
      </li>
    );
  }
}
