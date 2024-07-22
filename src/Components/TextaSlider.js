// src/TextSlider.js
import React from 'react';

const TextSlider = ({ text }) => {
  const sliderStyle = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
  };

  const textStyle = {
    display: 'inline-block',
    paddingLeft: '100%',
    animation: 'slide-left 30s linear infinite', // Duration 10s
  };

  return (
    <div style={sliderStyle}>
      <div style={textStyle}>{text}</div>
      <style>
        {`
          @keyframes slide-left {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default TextSlider;
