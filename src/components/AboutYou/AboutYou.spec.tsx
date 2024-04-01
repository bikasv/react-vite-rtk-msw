import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockedUseNavigate } from '../../../mocks/setupTest';
import { renderWithProviders } from '../../../mocks/Wrapper';
import { AboutYou } from '..';

describe('About You page', () => {
  it('should render About You page', () => {
    renderWithProviders(<AboutYou />);

    expect(screen.getByText('Enter title')).toBeInTheDocument();
  });

  it('should handle unfilled form submission', async() => {
    const user = userEvent.setup();

    renderWithProviders(<AboutYou />);

    await user.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(screen.getAllByText('Please select a value from below')[0]).toBeInTheDocument();
    });
  });

  it('should handle successful form filling', async() => {
    const user = userEvent.setup();

    renderWithProviders(<AboutYou />);

    await user.selectOptions(screen.getByTestId('title'), ['Mr']);
    await user.type(screen.getByTestId('first'), 'first');
    await user.type(screen.getByTestId('last'), 'last');
    await user.selectOptions(screen.getByTestId('gender'), ['Male']);
    await user.type(screen.getByTestId('dob'), '1999-01-01');

    await user.click(screen.getByText('Submit'));

    await waitFor(() => expect(mockedUseNavigate).toHaveBeenCalledWith('/contact'));
  });
});
