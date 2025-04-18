import React from 'react';
import { render, screen } from '@testing-library/react';
import EarningsItem from '../EarningsWidget/EarningsItem';

describe('EarningsItem Component', () => {
  it('should not render if logo is missing after loading', () => {
    render(<EarningsItem ticker="AAPL" isLoading={false} logo={null} />);
    expect(screen.queryByText('AAPL')).not.toBeInTheDocument();
  });

  it('should render logo and ticker when data is available', () => {
    render(
      <EarningsItem
        ticker="AAPL"
        logo="logo.svg"
        searchKey="AAPL"
        isLoading={false}
      />
    );
    expect(screen.getByText('AAPL')).toBeInTheDocument();
    expect(screen.getByAltText('AAPL')).toHaveAttribute('src', 'logo.svg');
  });

});
