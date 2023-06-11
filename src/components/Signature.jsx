import React from 'react';
import styles from '../style';
import Canvas from './Canvas';

const Signature = () => {
  const [showPopup, setShowPopup] = React.useState(false);

  const clearCanvas = () => {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <section>
      <h1 className={`flex-1 font-poppins font-semibold ss:text-[36px] text-[26px] text-white sm:pt-16 pt-6`}>
        Enter your signature 
      </h1>

      <button 
        onClick={() => setShowPopup(true)}
        className={`${styles.button} ${styles.buttonHover}`}
      >
        SIGNATURE POPUP
      </button>

      {showPopup && (
        <div className="popup" style={{ display: 'flex' }}>
          <div className="popup-content" style={{ marginLeft: 'auto', marginRight: 0 }}>
            <span className="close" onClick={() => setShowPopup(false)}>
              &times;
            </span>

            <div>
              <Canvas clearCanvas={clearCanvas} />
              <button className={`${styles.button} ${styles.buttonHover}`}>Submit</button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

export default Signature;
