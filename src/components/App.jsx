import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

function App() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    setSearchText(text);
  };

  return (
    <div>
      <Searchbar handleSearch={handleSearch} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <ImageGallery searchText={searchText} />
    </div>
  );
}

export default App;
