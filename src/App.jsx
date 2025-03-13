import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Gallery from './components/Gallery';

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://picsum.photos/v2/list?limit=10&page=3');
        setPhotos(response.data);
        setError(null); // Réinitialiser l'erreur en cas de succès
      } catch (error) {
        setError('Erreur lors de la récupération des photos. Veuillez réessayer.');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div style={styles.app}>
      {loading && (
        <div style={styles.spinnerContainer}>
          <div style={styles.spinner}></div>
        </div>
      )}
      {error && <p style={styles.error}>{error}</p>}
      {!loading && !error && <Gallery photos={photos} />}
    </div>
  );
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
  },
  message: {
    fontSize: '18px',
    color: '#555',
  },
  error: {
    fontSize: '18px',
    color: 'red',
  },
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '5px solid rgba(255, 255, 255, 0.3)',
    borderTop: '5px solid #fff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
};

export default App;
