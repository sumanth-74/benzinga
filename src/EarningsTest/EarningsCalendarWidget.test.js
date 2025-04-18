import React from 'react';
import { render, screen } from '@testing-library/react';
import EarningsCalendarWidget from '../EarningsWidget/EarningsCalendarWidget';
import * as api from '../EarningsWidget/EarningsApi';

jest.mock('../EarningsWidget/EarningsApi');

describe('EarningsCalendarWidget Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render loading shimmer initially', () => {
    render(<EarningsCalendarWidget />);
    expect(screen.getByText('Most Anticipated Earnings Releases')).toBeInTheDocument();
  });

  it('should render error message on API failure', async () => {
    api.fetchEarningsData.mockRejectedValueOnce(new Error('API Error'));
    render(<EarningsCalendarWidget />);
    expect(await screen.findByText('Failed to load data. Please try again later.')).toBeInTheDocument();
  });

});
