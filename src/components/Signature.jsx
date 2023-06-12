import React from "react";
import styles from "../style";
import Canvas from "./Canvas";

const Signature = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const [drawingDataURL, setDrawingDataURL] = React.useState("");

  const clearCanvas = () => {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSignatureSubmit = (dataURL) => {
    setDrawingDataURL(dataURL);
    setShowPopup(false);
  };

  return (
    <section id="signature">
      <h1 className={`${styles.heading}`}>Enter your signature</h1>

      <div className="flex md:flex-row flex-col">
        <div>
          <p className={`${styles.paragraph} text-[#ffffff]`}>
            This button opens a canvas. <br />
            You can draw your signature there and submit it.
          </p>

          <button
            onClick={() => setShowPopup(true)}
            className={`${styles.button} my-[20px]`}
          >
            sign now
          </button>

          {showPopup && (
            <button
              className={`${styles.button} close`}
              onClick={() => setShowPopup(false)}
            >
              cancel signing
            </button>
          )}
        </div>

        <div
          className={`${styles.canvas} p-[10px] bg-[#ffffff] justify-start w-[330px] h-[210px] `}
          style={{ marginLeft: "auto", marginRight: "auto", marginBottom: 40 }}
        >
          <h2 className={`${styles.paragraph} text-primary `}>you entered:</h2>
          {drawingDataURL && <img src={drawingDataURL} alt="Signature" />}
        </div>

        {showPopup && (
          <div
            className="popup-content"
            style={{ marginLeft: "auto", marginRight: "auto", display: "flex" }}
          >
            <div>
              <Canvas
                clearCanvas={clearCanvas}
                onSignatureSubmit={handleSignatureSubmit}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Signature;
