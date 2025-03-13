import Photo from "./Photo";

const Gallery = () => {
    return (
        <div style={styles.gallery}>
            <h1 style={styles.title}>Galerie de photos</h1>
            <div style={styles.photosContainer}>
                <Photo imageUrl="https://picsum.photos/300/200" />
                <Photo imageUrl="https://picsum.photos/300/200" />
            </div>
        </div>
    );
};

const styles = {
    gallery: {
        border: "2px solid red",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#222",
        color: "#fff",
        // align to center
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
    },
    photosContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "10px",
    },
};

export default Gallery;
