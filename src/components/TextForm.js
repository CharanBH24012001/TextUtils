import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log("Uppercase was clicked " + text);
    setText(text.toUpperCase().trim());
    props.showAlert("Text Converted to Uppercase", "success");
  };
  const handleDownClick = () => {
    setText(text.toLowerCase().trim());
    props.showAlert("Text Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container my-3 mb-3">
        <div className="mb-3">
          <h2 className={`text-${props.mode === "white" ? "dark" : "light"}`}>
            {props.heading}
          </h2>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "white" ? "white" : "black",
              color: props.mode === "white" ? "black" : "white",
            }}
          ></textarea>
          <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2 " onClick={handleDownClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-2 " onClick={handleClearClick}>
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.length === 0 ? 0 : text.trim().split(" ").length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {text.length === 0 ? 0 : 0.008 * text.split(" ").length} Minutes to
          Read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Please Enter Something to Preview"}</p>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  heading: "Enter the Text To Analyze",
};
