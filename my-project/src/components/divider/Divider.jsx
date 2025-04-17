import React from 'react';

const Divider = ({ width, color, gradient, thickness, margin }) => {
  const dividerStyle = {
    width: width || '100%',
    height: thickness || '2px',
    margin: margin || '20px 0',
    background: gradient || color || '#000',
  };

  return <div style={dividerStyle}></div>;
};

export default Divider;