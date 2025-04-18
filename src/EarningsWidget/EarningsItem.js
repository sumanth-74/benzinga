// EarningsItem.jsx
import React from 'react';
import PropTypes from 'prop-types';

const EarningsItem = ({ ticker, logo, searchKey, isLoading }) => {
  const handleClick = () => {
    window.location.href = `https://www.benzinga.com/quote/${ticker.toLowerCase()}`;
  };

  if (isLoading) return <div className="shimmer-logo"></div>;
  if (!logo) return null;

  return (
    <div
      className="earnings-item"
      onClick={handleClick}
      aria-label={`View details for ${ticker}`}
    >
      <p className="ticker-item">{searchKey}</p>
      <img src={logo} alt={ticker} className="company-logo" />
    </div>
  );
};

EarningsItem.propTypes = {
  ticker: PropTypes.string.isRequired,
  logo: PropTypes.string,
  searchKey: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

export default EarningsItem;