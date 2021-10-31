import { render, screen } from '@testing-library/react';
import { citiesHandlerException } from '../../../mocks/handlers';
import { server } from '../../../mocks/server';
import CitiesPage from '../cities';

describe('Test request', () => {
    test('displays returned cities on successful fetch', async () => {
        render(<CitiesPage />);

        // Pick all city card elements
        const cityCards = await screen.findAllByRole('article', { name: /card element$/i });

        // Check that there are 6 cards
        expect(cityCards).toHaveLength(7);

        // Check that they correspond exactly to the cities in the mock
        expect(screen.getByRole('article', { name: 'valtech_ card element' })).toBeInTheDocument();
        expect(screen.getByRole('article', { name: 'Venice card element' })).toBeInTheDocument();
        expect(screen.getByRole('article', { name: 'Berlin card element' })).toBeInTheDocument();
        expect(screen.getByRole('article', { name: 'Barcelona card element' })).toBeInTheDocument();
        expect(screen.getByRole('article', { name: 'Paris card element' })).toBeInTheDocument();
        expect(screen.getByRole('article', { name: 'Amsterdam card element' })).toBeInTheDocument();
        expect(screen.getByRole('article', { name: 'London card element' })).toBeInTheDocument();
    });

    test('displays error message when fetching cities raises error', async () => {
        server.use(citiesHandlerException);
        render(<CitiesPage />);

        const errorDisplay = await screen.findByText('Failed to fetch cities');
        expect(errorDisplay).toBeInTheDocument();

        // Pick all city card elements
        const cityCards = screen.queryAllByRole('article', { name: /card element$/i });
        expect(cityCards).toEqual([]);
    });
});
