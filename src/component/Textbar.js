import React, { useState, useEffect } from "react";
import classes from "./Textbar.module.css";
import Overlay from "./Overlay";

export default function Textbar(props) {
  const [text, setText] = useState("");
  const [truthyValueLength, setTruthyValueLength] = useState(0);

  useEffect(() => {
    var value = text.split(" ");
    const count = value.filter(Boolean).length;
    setTruthyValueLength(count);
  }, [text]);

  const UpperCaseBtn = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const lowerCaseBtn = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearTextBtn = () => {
    let newText = "";
    setText(newText);
  };
  const extraSpaceRemoveBtn = () => {
    let newText = text.trim();
    setText(newText);
  };

  const clipboardHandler = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard");
    });
  };

  const reverseStringHandler = () => {
    const str = text.split("").reverse().join("");
    setText();
  };

  const textSelectHandler = () => {};
  return (
    <>
      <Overlay txt={text} setTxt={setText} />
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control ${classes.tArea}`}
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Text Convertor"
          ></textarea>
          <br />
          <div className={classes["btn-container"]}>
            <button
              type="button"
              className={`btn btn-dark`}
              onClick={UpperCaseBtn}
            >
              Convert to Uppercase
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={lowerCaseBtn}
            >
              Convert to Lowercase
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={clearTextBtn}
            >
              Clear Test
            </button>
            <button
              type="button"
              onClick={textSelectHandler}
              className="btn btn-dark"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Text Convertor
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={reverseStringHandler}
            >
              Reverse String
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={clipboardHandler}
            >
              Copy to Clipboard
            </button>
            <br />
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="preview">Preview</h1>
        <p>{text}</p>
        <p>
          {text.length} Characters and {truthyValueLength} Words
        </p>
      </div>
    </>
  );
}
