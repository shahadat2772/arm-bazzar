import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import "./App.css";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <Header></Header>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Shop></Shop>
      </div>
    </div>
  );
}

export default App;
