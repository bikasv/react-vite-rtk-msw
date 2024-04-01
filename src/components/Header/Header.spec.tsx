import { render, screen } from '@testing-library/react';

import { Header } from './Header';

describe('Header', () => {
  it('should render the Header with default value', () => {
    render(<Header />);

    expect(screen.queryByText('React Seed')).toBeTruthy();
  });

  it('should render the Header', () => {
    render(<Header title="test" />);

    expect(screen.queryByText('test')).toBeTruthy();
  });
});
