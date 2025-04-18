import React from 'react';
import PropTypes from 'prop-types';
import EarningsItem from './EarningsItem';

const EarningsDay = ({ day, beforeOpen, afterClose, logos, isLoading }) => {
  const getClassName = () => (day === 'Friday' ? 'earnings-day last-column' : 'earnings-day');

  const renderEarningsColumn = (title, earnings) => (
    <div className="earnings-column">
      <h4 className="widget-header-h4">{title}</h4>
      {earnings.map((earning) => (
        <EarningsItem
          key={earning.ticker}
          ticker={earning.ticker}
          logo={logos[earning.ticker]?.logo}
          searchKey={logos[earning.ticker]?.searchKey}
          isLoading={isLoading}
        />
      ))}
    </div>
  );

  return (
    <div className={getClassName()}>
      <h3 className="widget-day">{day}</h3>
      <div className="earnings-section">
        {renderEarningsColumn('Before Open', beforeOpen)}
        {day !== 'Friday' && renderEarningsColumn('After Close', afterClose)}
      </div>
    </div>
  );
};

EarningsDay.propTypes = {
  day: PropTypes.string.isRequired,
  beforeOpen: PropTypes.array.isRequired,
  afterClose: PropTypes.array.isRequired,
  logos: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default EarningsDay;