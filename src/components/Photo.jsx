

// Photo.jsx
import React from 'react';

const Photo = ({ id, imageUrl, author, size }) => {
    return (
        <div style={{ ...styles.photoContainer, width: size.width, height: size.height }}>
            <h6>
                {author}
            </h6>
            <img
                src={`${imageUrl}?w=${parseInt(size.width)}&h=${parseInt(size.height)}`}
                alt={`Photo ${id}`}
                style={{ ...styles.image, width: size.width, height: size.height }}
            />
        </div>
    );
};

const styles = {
    photoContainer: {
        padding: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '50px',
    },
    image: {
        objectFit: 'cover',
    },
};

export default Photo;
