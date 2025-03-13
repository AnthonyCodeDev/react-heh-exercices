// App.jsx
import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list?limit=10&page=3');
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des photos :', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div style={styles.app}>
      <Gallery photos={photos} />
    </div>
  );
}

const styles = {
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
  },
};

export default App;