import React from 'react';
import { render, screen } from '@testing-library/react';
import EarningsDay from '../EarningsWidget/EarningsDay';

describe('EarningsDay Component', () => {
  const logos = {
    AAPL: { logo: 'logo.svg', searchKey: 'AAPL' },
  };

  it('should render day header', () => {
    render(<EarningsDay day="Monday" beforeOpen={[]} afterClose={[]} logos={logos} isLoading={false} />);
    expect(screen.getByText('Monday')).toBeInTheDocument();
  });

  it('should render "Before Open" and "After Close" sections', () => {
    render(
      <EarningsDay
        day="Monday"
        beforeOpen={[{ ticker: 'AAPL' }]}
        afterClose={[{ ticker: 'GOOG' }]}
        logos={logos}
        isLoading={false}
      />
    );
    expect(screen.getByText('Before Open')).toBeInTheDocument();
    expect(screen.getByText('After Close')).toBeInTheDocument();
  });

  it('should not render "After Close" section for Friday', () => {
    render(<EarningsDay day="Friday" beforeOpen={[]} afterClose={[]} logos={logos} isLoading={false} />);
    expect(screen.queryByText('After Close')).not.toBeInTheDocument();
  });
});
