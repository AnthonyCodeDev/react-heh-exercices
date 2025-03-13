// component/photo.jsx
const Photo = ({ id, imageUrl, size }) => {
    return (
        <div style={{ ...styles.photoContainer, width: size.width, height: size.height }}>
            <img src={imageUrl} alt={`Photo ${id}`} style={{ ...styles.image, width: size.width, height: size.height }} />
        </div>
    );
};

const styles = {
    photoContainer: {
        border: "2px solid green",
        padding: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        objectFit: "cover",
    },
};

export default Photo;