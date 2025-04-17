import React from 'react';
import './SocialButton.css';

const SocialButton = ({ icon, alt, href, width, height }) => (
  <a className="social-btn" href={href} target="_blank" rel="noopener noreferrer">
    <img width={width} height={height} src={icon} alt={alt} />
  </a>
);

export default SocialButton;