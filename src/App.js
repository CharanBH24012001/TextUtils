import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("white");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "white") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.title = "TextUtils-Dark Mode";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("white");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils-Light Mode";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className="container">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />}></Route> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the Text to Analyze"
          mode={mode}
        />
        {/* ></Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
