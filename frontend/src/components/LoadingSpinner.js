import React from 'react';

import spinner from '../images/spinner.gif'

function LoadingSpinner() {
  return (
    <div className="load-spinner">
        <img className="load-spinner__image" src={spinner} alt="spinner"/>
        <p className="load-spinner__text">Loading...</p>
    </div>
  );
}

export default LoadingSpinner;