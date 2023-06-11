import React from 'react';
import styles from '../style';

const Signature = () => {
  const [showPopup, setShowPopup] = React.useState(false);

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
              <canvas height='100' width='300' className={`${styles.canvas}`}></canvas>
              <button className={`${styles.button} ${styles.buttonHover}`}>Clear</button>
              <button className={`${styles.button} ${styles.buttonHover}`}>Submit</button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
  
}

export default Signature;