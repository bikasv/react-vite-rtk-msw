import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockedUseNavigate } from '../../../mocks/setupTest';
import { renderWithProviders } from '../../../mocks/Wrapper';
import { Contact } from '..';

describe('Contact page', () => {
  it('should render Contact page', () => {
    renderWithProviders(<Contact />);

    expect(screen.getByText('Enter email')).toBeInTheDocument();
  });

  it('should handle unfilled form submission', async() => {
    const user = userEvent.setup();

    renderWithProviders(<Contact />);

    await user.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(screen.getByText('Please input the valid email address')).toBeInTheDocument();
    });
  });

  it('should handle successful form filling', async() => {
    const user = userEvent.setup();

    renderWithProviders(<Contact />, {
      preloadedState: {
        about: {
          dob: '1999-01-01',
          first: 'first',
          gender: undefined,
          last: 'Last',
          title: undefined,
        },
      },
    });

    await user.type(screen.getByTestId('email'), 'a@b.com');
    await user.type(screen.getByTestId('phone'), '07833876675');

    await user.click(screen.getByText('Submit'));

    await waitFor(() => expect(mockedUseNavigate).toHaveBeenCalledWith('/'));
  });
});
