import { Component } from 'react';
import { Searchbar } from 'components/Searchbar';
// import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { ImageGallery } from 'components/ImageGallery';
import { Modal } from 'components/Modal';
import css from './App.module.css';
// import css from './App.module.css'
// import { getGalleryService } from 'Helpers/Api';

export class App extends Component {
  state = {
    savedQuery: '',
    largeImageURL: '',
    isOpenModal: false,
  };

  handleSubmit = query => {
    this.setState({ savedQuery: query });
  };

  toggleModal = url => {
    this.setState({
      largeImageURL: url,
    });
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery toggleModal={this.toggleModal} />
        {this.state.largeImageURL && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={this.state.largeImageURL}
          />
        )}
      </div>
    );
  }
}

// import { Component } from 'react';
// import { Searchbar } from './Searchbar';
// import { ImageGallery } from './ImageGallery';
// import css from './App.module.css';
// import { Modal } from './Modal';
// export class App extends Component {
//   state = {
//     savedQuery: '',
//     largeImageURL: '',
//     isOpenModal: false,
//   };
//   handleSubmit = query => {
//     this.setState({ savedQuery: query });
//   };
//   toggleModal = url => {
//     this.setState({
//       largeImageURL: url,
//     });
//   };
//   render() {
//     return (
//       <div className={css.App}>
//         <Searchbar handleSubmit={this.handleSubmit} />
//         <ImageGallery
//           toggleModal={this.toggleModal}
//           query={this.state.savedQuery}
//         />
//         {this.state.largeImageURL && (
//           <Modal
//             onClose={this.toggleModal}
//             largeImageURL={this.state.largeImageURL}
//           />
//         )}
//       </div>
//     );
//   }
// }
