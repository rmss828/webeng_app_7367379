import React, { useEffect, useRef } from "react";
import styles from "../style";

const Canvas = ({ clearCanvas, onSignatureSubmit }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const { width, height } = canvas.getBoundingClientRect();

    canvas.width = width;
    canvas.height = height;

    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.lineCap = "round";

    contextRef.current = context;
  }, []);

  const startDrawing = (event) => {
    const canvas = canvasRef.current;
    const context = contextRef.current;

    context.beginPath();
    context.moveTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("touchmove", draw);
  };

  const draw = (event) => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    const rect = canvas.getBoundingClientRect();

    let offsetX, offsetY;

    if (event.type === "mousemove") {
      offsetX = event.clientX - rect.left;
      offsetY = event.clientY - rect.top;
    } else if (event.type === "touchmove") {
      offsetX = event.touches[0].clientX - rect.left;
      offsetY = event.touches[0].clientY - rect.top;
    }

    if (offsetX !== undefined && offsetY !== undefined) {
      context.lineTo(offsetX, offsetY);
      context.stroke();
    }
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    canvas.removeEventListener("mousemove", draw);
  };

  const handleSubmit = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL();
    onSignatureSubmit(dataURL);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        style={{
          background: "white",
          cursor: "crosshair",
          touchAction: "none",
        }}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        onTouchStart={startDrawing}
        onTouchEnd={stopDrawing}
        onTouchCancel={stopDrawing}
        onTouchMove={(event) => {
          event.preventDefault();
          draw(event.touches[0]);
        }}
      ></canvas>

      <div className={`${styles.buttonContainer}`}>
        <button
          className={`${styles.button} ${styles.buttonHover}`}
          onClick={clearCanvas}
        >
          clear
        </button>
        <button
          className={`${styles.button} ${styles.buttonHover}`}
          onClick={handleSubmit}
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default Canvas;
