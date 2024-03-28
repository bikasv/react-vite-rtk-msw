import { render, screen } from '@testing-library/react';

import { AboutYou } from '..';

describe('AboutYou', () => {
  it('should render the AboutYou', () => {
    render(<AboutYou />);

    expect(screen.queryByText('Enter first name')).toBeTruthy();
  });
});
