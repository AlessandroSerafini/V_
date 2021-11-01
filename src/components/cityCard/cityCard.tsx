import React, { ReactElement, useState } from 'react';
import './style/cityCard.scss';
import '../../style/style.scss';

// -----------------------------------------------------------------
// I n t e r f a c e s
// -----------------------------------------------------------------

export interface City {
    /**
     * City unique identifier
     */
    id: string;
    /**
     * The country to which the city belongs
     */
    country: string;
    /**
     * The name of the city
     */
    name: string;
    /**
     * Brief description of the city
     */
    description: string;
    /**
     * Image absolute url of the city
     */
    image: string;
}
export interface CityCardI extends Omit<City, 'id'> {
    /**
     * Always show content
     */
    alwaysVisible?: boolean;
    /**
     * Method triggered when button is clicked and used to determine if the button should be visible
     */
    callback?: (cityName: string) => void;
}

/**
 * Component that takes care of rendering a city card
 *
 * @param {GenericObject} anonymousObject - Input object used for deconstruction
 * @param {string} anonymousObject.country - The country to which the city represented on the card belongs
 * @param {string} anonymousObject.name - The name of the city represented on the card
 * @param {string} anonymousObject.description - Brief description of the city represented on the card
 * @param {string} anonymousObject.image - Image absolute url of the city represented on the card
 * @param {boolean} anonymousObject.alwaysVisible - Always show content
 * @param {(cityName: string) => void} anonymousObject.callback - Method triggered when button is clicked and used to determine if the button should be visible
 * @component
 * @category Components
 * @subcategory Fragment
 * @returns {ReactElement | null}
 */
export const CityCard = ({
    country,
    name,
    description,
    image,
    alwaysVisible = false,
    callback,
}: CityCardI): ReactElement => {
    // -----------------------------------------------------------------
    // S t a t e
    // -----------------------------------------------------------------
    const [isHovered, setHoveredState] = useState<boolean>(alwaysVisible);

    // -----------------------------------------------------------------
    // T e m p l a t e
    // -----------------------------------------------------------------
    return (
        <article
            onMouseEnter={() => {
                if (!alwaysVisible) setHoveredState(true);
            }}
            onMouseLeave={() => {
                if (!alwaysVisible) setHoveredState(false);
            }}
            className={`city-card${alwaysVisible ? ' always-visible' : ''}`}
            title={`${name} card element`}
            style={{ backgroundImage: `url(${image})` }}
        >
            <header>
                <p className="country">{country}</p>
                <h3 title="title">{name}</h3>
            </header>
            <main style={{ visibility: alwaysVisible || isHovered ? 'visible' : 'hidden' }}>
                <h4 title="description">{description}</h4>
                {!!callback && (
                    <button type="button" onClick={() => callback(name)}>
                        Explore more
                    </button>
                )}
            </main>
        </article>
    );
};
export default CityCard;
