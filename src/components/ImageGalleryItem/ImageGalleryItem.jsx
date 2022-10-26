import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({ url, largeImage, toggleModal }) => {
  return (
    <li
      onClick={() => toggleModal(largeImage)}
      className={css.ImageGalleryItem}
    >
      <img className={css.ImageGalleryItemImage} src={url} alt="" />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};

// import { Component } from 'react';
// import { getGalleryService } from 'Helpers/Api';

// export class ImageGalleryItem extends Component {
//   state = {
//     images: [],
//   };

//   async componentDidUpdate(_, prevState) {
//     const data = await getGalleryService();
//     console.log('data', data);

//   }
//   render() {
//     return (
//       <li className="gallery-item">
//         <img src="" alt="" />
//       </li>
//     );
//   }
// }
