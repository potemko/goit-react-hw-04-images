import { useEffect, useState } from 'react';
import css from './ImageGallary.module.css';
import { RotatingLines } from 'react-loader-spinner';
import Scroll from 'react-scroll';
import Button from 'components/Button/Button';
import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import { getSearch } from '../../services/getSearch';



const ImageGallery = ({ searchText }) => {
  const [myData, setmyData] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [open, setopen] = useState(false);
  const [currentImageIndex, setcurrentImageIndex] = useState(0);

  useEffect(() => {
    if(searchText === '') {
      return
    }
    setloading(true);
    getSearch(searchText, page)
      .then(response => response.json())
      .then(data =>
        setmyData(prevState => 
          [...prevState, ...data.hits],
        )
      )
      .finally(() => setloading(false));
  }, [searchText, page]);

const loadMoreImages = () => {
  setpage(prevPage => prevPage + 1);
  scrollWindow()
};


  const scrollWindow = () => {
    const scroll = Scroll.animateScroll;
    scroll.scrollToBottom({ smooth: true, delay: 1000 });
  };

  const clickImage = index => {
    setopen(true);
    setcurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setopen(false);
  };

  return (
    <div className={css.Gallary_container}>
      {loading && (
        <div className={css.spiner}>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      )}
      {myData.length > 0 && (
        <div>
          <ImageGalleryItem
            myData={myData}
            currentImageIndex={currentImageIndex}
            open={open}
            clickImage={clickImage}
            closeLightbox={closeLightbox}
          />

          <Button loadMoreImages={loadMoreImages} />
        </div>
      )}
    </div>
  );
};

export default ImageGallery

//  class ImageGallery extends Component {
//    state = {
//      myData: [],
//      loading: false,
//      page: 1,
//      open: false,
//      currentImageIndex: 0,
//    };



//     componentDidUpdate(prevProps, prevState) {
//       if (
//         prevProps.searchText !== this.props.searchText ||
//         prevState.page !== this.state.page
//       ) {
//         this.setState({ loading: true });

//         getSearch(this.props.searchText, this.state.page)
//           .then(response => response.json())
//           .then(data =>
//             this.setState(prevState => ({
//               myData: [...prevState.myData, ...data.hits],
//             }))
//           )
//           .finally(() => this.setState({ loading: false }));
//       }
//     }

//    loadMoreImages = () => {
//      this.setState(
//        prevState => ({ page: prevState.page + 1 }),
//        () => {
//          this.scrollWindow();
//        }
//      );
//    };

//    scrollWindow = () => {
//      const scroll = Scroll.animateScroll;
//      scroll.scrollToBottom({ smooth: true, delay: 1000 });
//    };

//    clickImage = index => {
//      this.setState({
//        open: true,
//        currentImageIndex: index,
//      });
//    };

//    closeLightbox = () => {
//      this.setState({ open: false });
//    };

//    render() {
//      const { myData, loading } = this.state;
//      return (
//        <div className={css.Gallary_container}>
//          {loading && (
//            <div className={css.spiner}>
//              <RotatingLines
//                strokeColor="grey"
//                strokeWidth="5"
//                animationDuration="0.75"
//                width="96"
//                visible={true}
//              />
//            </div>
//          )}
//          {myData.length > 0 && (
//            <div>
//              <ImageGalleryItem
//                myData={this.state.myData}
//                currentImageIndex={this.state.currentImageIndex}
//                open={this.state.open}
//                clickImage={this.clickImage}
//                closeLightbox={this.closeLightbox}
//              />

//              <Button loadMoreImages={this.loadMoreImages} />
//            </div>
//          )}
//        </div>
//      );
//    }
//  }

//  export default ImageGallery;


