
// component/gallery.jsx
import { useState } from "react";
import Photo from "./Photo";

const Gallery = ({ photos }) => {
    const [search, setSearch] = useState("");

    const filteredPhotos = photos.filter(photo =>
        photo.author.toLowerCase().includes(search.toLowerCase())
    );

    // handle click on checkbox, and hide the photo id
    const hide_id = document.getElementById("hide_id");
    hide_id.addEventListener("click", () => {
        const ids = document.getElementsByClassName("id");
        if (hide_id.checked) {
            for (let i = 0; i < ids.length; i++) {
                ids[i].style.display = "none";
            }
        } else {
            for (let i = 0; i < ids.length; i++) {
                ids[i].style.display = "inline";
            }
        }
    });

    return (
        <div style={styles.gallery}>
            <h1 style={styles.title}>Galerie de photos</h1>
            <input
                type="text"
                placeholder="Rechercher par auteur..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={styles.searchBar}
            />
            <input type="checkbox" name="hide_id" id="hide_id" />
            <label htmlFor="hide_id">Masquer les ID</label>
            <br />
            <div style={styles.photosContainer}>
                {filteredPhotos.map((photo) => (
                    <Photo
                        key={photo.id}
                        id={photo.id}
                        imageUrl={photo.download_url}
                        size={{ width: "300px", height: "200px" }}
                        author={photo.author}
                        my_id={photo.id}
                    />
                ))}
            </div>
        </div>
    );
};

const styles = {
    gallery: {
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
    searchBar: {
        padding: "10px",
        margin: "10px 0",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        width: "93%",
        maxWidth: "400px",
    },
    photosContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "10px",
        flexWrap: "nowrap",
        flexDirection: "column",
    },
};

export default Gallery;