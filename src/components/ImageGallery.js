import React, { useState, useEffect } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import firebaseConfig from '../firebaseConfig';

// Initialize Firebase
const storage = getStorage();

const ImageGallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const imageRef = ref(storage, 'images');

    listAll(imageRef)
      .then((result) => {
        const urls = [];

        result.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            urls.push(url);
            setImageUrls(urls);
          });
        });
      })
      .catch((error) => {
        console.error('Error fetching images:', error.message);
      });
  }, []);

  return (
    <div>
      <div className="gallery-container">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            className={`gallery-image-${index}`} // Unique class name
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
