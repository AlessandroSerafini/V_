import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CityCard from '../cityCard';
import renderer from 'react-test-renderer';

const countryVal = 'Italy';
const cityVal = 'Venice';
const descriptionVal =
    'Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals.';
const imageVal = 'https://via.placeholder.com/150';

describe('City card with button', () => {
    test('Render input parameters correctly', () => {
        const callbackMethod = jest.fn(() => null);

        render(
            <CityCard
                country={countryVal}
                name={cityVal}
                description={descriptionVal}
                image={imageVal}
                alwaysVisible
                callback={callbackMethod}
            />,
        );

        // Check that the city name is correct
        const title = screen.getByRole('heading', { level: 3, name: 'title' });
        expect(title).toHaveTextContent(cityVal);

        // Check that the country name is correct
        const country = screen.getByText(countryVal);
        expect(country).toBeInTheDocument();

        // Check that the description is correct
        const description = screen.getByText(descriptionVal);
        expect(description).toBeInTheDocument();

        // Check that the discover button is visible
        const discoverButton = screen.getByText('Explore more');
        expect(discoverButton).toHaveStyle({ visibility: 'visible' });

        // Check that the image is correct
        const card = screen.getByRole('article', { name: /card element$/i });
        expect(card).toHaveStyle(`background-image: url(${imageVal})`);
    });

    test('Hover interaction works correctly', () => {
        const callbackMethod = jest.fn(() => null);

        render(
            <CityCard
                country={countryVal}
                name={cityVal}
                description={descriptionVal}
                image={imageVal}
                callback={callbackMethod}
            />,
        );

        const card = screen.getByRole('article', { name: /card element$/i });

        // Check that the city description is hidden
        const description = screen.getByText(descriptionVal);
        expect(description).toHaveStyle({ visibility: 'hidden' });

        // Check that the discover button is hidden
        const discoverButton = screen.getByText('Explore more');
        expect(discoverButton).toHaveStyle({ visibility: 'hidden' });

        // Hover the card
        userEvent.hover(card);

        // Check that the city description is visible
        expect(description).toHaveStyle({ visibility: 'visible' });

        // Check that the discover button is visible
        expect(discoverButton).toHaveStyle({ visibility: 'visible' });

        // Click the discover button
        userEvent.click(discoverButton);

        // Ensure that the callback is only launched once
        expect(callbackMethod).toHaveBeenCalledTimes(1);

        // Execute callback by passing the id
        expect(callbackMethod).toHaveBeenCalledWith(cityVal);

        // Unhover the card
        userEvent.unhover(card);

        // Check that the city description is hidden
        expect(description).toHaveStyle({ visibility: 'hidden' });

        // Check that the discover button is hidden
        expect(discoverButton).toHaveStyle({ visibility: 'hidden' });
    });
});

test('City card without button', () => {
    render(
        <CityCard
            country={countryVal}
            name={cityVal}
            description={descriptionVal}
            image={imageVal}
        />,
    );

    // Check that the discover button is not in the document
    const discoverButton = screen.queryByText('Explore more');
    expect(discoverButton).not.toBeInTheDocument();
});

test('Snapshot test', () => {
    const el = renderer
        .create(
            <CityCard
                country={countryVal}
                name={cityVal}
                description={descriptionVal}
                image={imageVal}
            />,
        )
        .toJSON();
    expect(el).toMatchSnapshot();
});
