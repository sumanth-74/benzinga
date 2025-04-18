import React, { useState, useEffect } from 'react';
import EarningsDay from './EarningsDay';
import './EarningsCalendarWidget.css';
import earning from '../earning.svg';
import { fetchEarningsData, fetchLogosData } from './EarningsApi';
import { filterRecentEarnings, organizeEarningsData, formatWeekDates } from './EarningsUtils';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDates = formatWeekDates(days);

const EarningsCalendarWidget = () => {
  const [earningsData, setEarningsData] = useState([]);
  const [logos, setLogos] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const earnings = await fetchEarningsData();
        const recentEarnings = filterRecentEarnings(earnings);

        setEarningsData(recentEarnings);

        const tickers = recentEarnings.map((e) => e.ticker);
        const logosData = await fetchLogosData(tickers);

        const logoMap = tickers.reduce((acc, ticker) => {
          const logoItem = logosData.find((item) => item.search_key === ticker);
          acc[ticker] = logoItem
            ? { logo: logoItem.files.mark_vector_light, searchKey: logoItem.search_key }
            : { logo: null, searchKey: null };
          return acc;
        }, {});

        setLogos(logoMap);
      } catch (err) {
        setError('Failed to load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const organizedData = organizeEarningsData(earningsData);

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="earnings-calendar-widget">
      <div className="widget-header">
        <img src={earning} alt="Earnings Whispers Logo" className="widget-logo" />
        <div>
          <h1>Most Anticipated Earnings Releases</h1>
          <div>for the week beginning</div>
          <h1>{weekDates[0]}</h1>
        </div>
      </div>
      {loading ? (
        <div className="shimmer-container">
          {days.map((day, index) => (
            <div key={index} className="shimmer-day">
              <div className="shimmer-day-header"></div>
              {Array.from({ length: 30 }, (_, i) => (
                <div key={i} className="shimmer-item"></div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="earnings-table">
          {days.map((day) => (
            <EarningsDay
              key={day}
              day={day}
              beforeOpen={organizedData[`${day}-before`] || []}
              afterClose={organizedData[`${day}-after`] || []}
              logos={logos}
              isLoading={loading}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EarningsCalendarWidget;