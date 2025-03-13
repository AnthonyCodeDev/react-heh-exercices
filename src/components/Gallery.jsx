

// component/gallery.jsx
import Photo from "./Photo";

const Gallery = () => {
    return (
        <div style={styles.gallery}>
            <h1 style={styles.title}>Galerie de photos</h1>
            <div style={styles.photosContainer}>
                <Photo id={1} imageUrl="https://picsum.photos/300/200" size={{ width: "300px", height: "200px" }} />
                <Photo id={2} imageUrl="https://picsum.photos/300/200" size={{ width: "200px", height: "100px" }} />
                <Photo id={2} imageUrl="https://picsum.photos/300/200" size={{ width: "100px", height: "50px" }} />
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
        alignItems: "baseline",
    },
};

export default Gallery;
