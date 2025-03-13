const Photo = ({ imageUrl }) => {
    return (
        <div style={styles.photoContainer}>
            <img src={imageUrl} alt="Random" style={styles.image} />
        </div>
    );
};

const styles = {
    photoContainer: {
        border: "2px solid green",
        padding: "5px",
        // align to center
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "auto",
    },
};

export default Photo;
