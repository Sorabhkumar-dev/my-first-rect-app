import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Faster Corp" home="Home" about="About us" contact="Contact us" />
      <div className="container my-3">
      <TextForm  heading = "Enter Text here"/>
      </div>
    </>
  );
}

export default App;
