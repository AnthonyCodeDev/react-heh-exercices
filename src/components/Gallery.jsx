

// Gallery.jsx
import React from 'react';
import Photo from './Photo';

const Gallery = ({ photos }) => {
    return (
        <div style={styles.gallery}>
            <h1 style={styles.title}>Galerie de photos</h1>
            <div style={styles.photosContainer}>
                {photos.map((photo) => (
                    <Photo
                        key={photo.id}
                        id={photo.id}
                        imageUrl={photo.download_url}
                        author={photo.author}
                        size={{ width: '300px', height: '200px' }}
                    />
                ))}
            </div>
        </div>
    );
};

const styles = {
    gallery: {
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#222',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    photosContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '10px',
        flexWrap: 'nowrap',
        flexDirection: 'column',
    },
};

export default Gallery;