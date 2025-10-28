import { useState } from 'react';
import './Contact.css';
import DecryptedText from '../decripted-text/DecriptedText';

const Contact = () => {
  const [showDesktopTip, setShowDesktopTip] = useState(false);

  const isDesktop = !/Mobi|Android/i.test(navigator.userAgent);
  const phoneNumber = '+39 389 145 6505';

  const [showInfo, setShowInfo] = useState(false);

  const handlePhoneClick = () => {
    if (isDesktop) {
      setShowDesktopTip(true);
      setTimeout(() => setShowDesktopTip(false), 5000);
    } else {
      window.location.href = `tel:${phoneNumber.replace(/\s+/g, '')}`;
    }
  };

  const handleInfoClick = () => {
    setShowInfo((prev) => !prev);
  };

  return (
    <div className="contact-container">
      <div
        className="contact-item mail"
        onClick={() => (window.location.href = 'mailto:info@gliz.it')}
      >
        <h3 className="contact-text">
          <DecryptedText
            text="Mail"
            animateOn="view"
            revealDirection="center"
            speed="200"
          />
        </h3>
      </div>

      <div className="contact-item phone" onClick={handlePhoneClick}>
        <h3 className="contact-text">
          <DecryptedText
            text="Chiamaci"
            animateOn="view"
            revealDirection="center"
            speed="200"
          />
        </h3>

        {showDesktopTip && (
          <div className="desktop-phone-tip">
            <p>{phoneNumber}</p>
          </div>
        )}
      </div>

      <div className="contact-item info" onClick={handleInfoClick}>
        <h3 className="contact-text">
          <DecryptedText
            text="Info"
            animateOn="view"
            revealDirection="center"
            speed="200"
          />
        </h3>
        {showInfo && (
          <div className="info-tip">
            <p>
              {' '}
              <b>Gliz S.r.l</b> CF/PIVA: 03141140842 REA:AG-229711
            </p>
            <p>Viale Emporium 73, Agrigento</p>
            <p>
              PEC:<b> gliz@pecimprese.it</b> SDI:T9K4ZHO
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
