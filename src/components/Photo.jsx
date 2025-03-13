// component/photo.jsx
const Photo = ({ id, imageUrl, size, author, my_id }) => {
    return (
        <div style={{ ...styles.photoContainer, width: size.width, height: size.height }}>
            <img src={imageUrl} alt={`Photo ${id}`} style={{ ...styles.image, width: size.width, height: size.height }} />
            <p style={styles.author}>{author} <span class="id">#{my_id}</span></p>
        </div>
    );
};

const styles = {
    photoContainer: {
        padding: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        objectFit: "cover",
    },
    author: {
        marginTop: "5px",
        fontSize: "14px",
        color: "#fff",
    }
};

export default Photo;
