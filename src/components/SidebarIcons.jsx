import React from 'react';
import { FaFacebookMessenger, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 1000,
      }}
    >
      {/* Messenger */}
      <a
        href="http://m.me/pnhitsolution/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#0084FF',
          color: 'white',
          padding: '10px',
          borderRadius: '50%',
          textAlign: 'center',
        }}
      >
        <FaFacebookMessenger size={24} />
      </a>

      {/* WhatsApp */}
      <a
        href="http://wa.me/8801873003333"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#25D366',
          color: 'white',
          padding: '10px',
          borderRadius: '50%',
          textAlign: 'center',
        }}
        
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Email */}
      <a
        href="mailto:info@it.pnhbd.com"
        style={{
          backgroundColor: '#EA4335',
          color: 'white',
          padding: '10px',
          borderRadius: '50%',
          textAlign: 'center',
        }}
      >
        <FaEnvelope size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;
