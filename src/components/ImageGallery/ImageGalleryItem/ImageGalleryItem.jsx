import React from "react";
import css from "./ImageGalleryItem.module.css"
import { Lightbox } from 'react-modal-image';

const ImageGalleryItem = ({myData,
  currentImageIndex,
  open,
  clickImage,
  closeLightbox}) => {
  return (
    <div>
     <ul className={css.ImageGallery}>
       {myData.map((hit, index) => (
         <li key={index} className={css.ImageGalleryItem}>
           <img
             className={css.ImageGalleryItem_image}
             src={hit.webformatURL}
             alt={hit.tags}
             onClick={() => clickImage(index)}
           />
         </li>
       ))}
     </ul>
     {open && (
       <Lightbox
         medium={myData[currentImageIndex].largeImageURL}
         alt={myData[currentImageIndex].tags}
         onClose={closeLightbox}
       />
     )}
   </div>
  )
}

export default ImageGalleryItem


//  const ImageGalleryItem = ({
//    myData,
//    currentImageIndex,
//    open,
//    clickImage,
//    closeLightbox,
//  }) => (
//    <div>
//      <ul className={css.ImageGallery}>
//        {myData.map((hit, index) => (
//          <li key={hit.id} className={css.ImageGalleryItem}>
//            <img
//              className={css.ImageGalleryItem_image}
//              src={hit.webformatURL}
//              alt={hit.tags}
//              onClick={() => clickImage(index)}
//            />
//          </li>
//        ))}
//      </ul>
//      {open && (
//        <Lightbox
//          medium={myData[currentImageIndex].largeImageURL}
//          alt={myData[currentImageIndex].tags}
//          onClose={closeLightbox}
//        />
//      )}
//    </div>
//  );

//  export default ImageGalleryItem