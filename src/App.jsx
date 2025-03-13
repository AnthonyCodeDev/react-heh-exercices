import Gallery from "./components/Gallery";

function App() {
  return (
    <div style={styles.app}>
      <Gallery />
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
  },
};

export default App;
