// EarningsItem.jsx
import React from 'react';
import PropTypes from 'prop-types';

const EarningsItem = ({ ticker, logo, searchKey, isLoading }) => {
  const handleClick = () => {
    window.location.href = `https://www.benzinga.com/quote/${ticker.toLowerCase()}`;
  };

  if (isLoading) return <div className="shimmer-logo"></div>;

  return (
    <div
      className="earnings-item"
      onClick={handleClick}
      aria-label={`View details for ${ticker}`}
    >
      <p className="ticker-item">{searchKey || ticker}</p>
      {logo ? (
        <img src={logo} alt={ticker} className="company-logo" />
      ) : (
        <div className="fallback-logo">{ticker}</div> // Fallback UI for missing logo
      )}
    </div>
  );
};


export default EarningsItem;