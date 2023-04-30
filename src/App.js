import "./App.css";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [alert,setAlert] = useState(null)
  
  
  const showAlert = (alertType,messageType) => {
    setAlert({
      type:alertType,
      message:messageType
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  return (
    <>
      <Navbar title="Faster Corp" home="Home" about="About us" contact="Contact us" />
      <Alert alert = {alert}/>
      <div className="container my-3">
      <TextForm  heading = "Enter Text here" showAlert = {showAlert}/>
      </div>
    </>
  );
}

export default App;
