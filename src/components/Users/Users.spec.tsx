import { fireEvent, screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';

import { server } from '../../../mocks/node';
import { renderWithProviders } from '../../../mocks/Wrapper';
import { Users } from '..';

describe('Users', () => {
  it('should render Users', async() => {
    renderWithProviders(<Users />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Mr Jerry Wood')).toBeInTheDocument();
    });
  });

  it('should handle fetch error', async() => {
    server.use(
      http.get('/api/users', () => HttpResponse.error()),
    );

    renderWithProviders(<Users />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Error fetching users')).toBeInTheDocument();
    });
  });

  it('should handle delete', async() => {
    renderWithProviders(<Users />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await screen.findByText('Mr Jerry Wood');

    const closeButton = screen.queryAllByRole('button')[0];

    fireEvent.click(closeButton);
    expect(screen.queryByText('Mr Jerry Wood')).not.toBeInTheDocument();
  });

  it('should handle delete failure', async() => {
    server.use(
      http.delete('/api/users/:id', () => HttpResponse.error()),
    );

    renderWithProviders(<Users />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await screen.findByText('Mr Jerry Wood');

    const closeButton = screen.queryAllByRole('button')[0];

    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText('Mr Jerry Wood')).toBeInTheDocument();
    });
  });
});
