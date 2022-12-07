import React, { useState } from "react";

const Overlay = ({ txt, setTxt }) => {
  const [newText, getText] = useState("");
  const [newText2, getText2] = useState("");

  let replacer = () => {
    const update = txt.replaceAll(newText, newText2);
    setTxt(update);
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Replace Word
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Find Words"
                onChange={(e) => getText(e.target.value)}
                value={newText}
              />
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="Replace Word"
                onChange={(e) => getText2(e.target.value)}
                value={newText2}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={replacer}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
