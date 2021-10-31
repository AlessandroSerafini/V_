import React, { ReactElement, useEffect, useState } from 'react';
import CityCard, { City } from '../../components/cityCard/cityCard';
import { getCities } from '../../services/citiesService';

// -----------------------------------------------------------------
// I n t e r f a c e s
// -----------------------------------------------------------------

/**
 * Page that takes care of rendering city cards
 *
 * @component
 * @category Components
 * @subcategory Screens
 * @returns {ReactElement | null}
 */
const CitiesPage = (): ReactElement => {
    // -----------------------------------------------------------------
    // S t a t e
    // -----------------------------------------------------------------

    const [error, setError] = useState<string | null>(null);
    const [isFetching, setFetching] = useState<boolean>(false);
    const [cities, setCities] = useState<Array<City>>([]);

    // -----------------------------------------------------------------
    // W o r k i n g   m e t h o d s
    // -----------------------------------------------------------------
    const fetchCities = async () => {
        try {
            setFetching(true);
            const { data } = await getCities();
            setCities(data);
            setError(null);
        } catch (err: any) {
            setError('Failed to fetch cities');
        } finally {
            setFetching(false);
        }
    };

    // -----------------------------------------------------------------
    // u s e E f f e c t   m e t h o d s
    // -----------------------------------------------------------------
    useEffect(() => {
        fetchCities();
        return () => {
            setCities([]);
        };
    }, []);

    // -----------------------------------------------------------------
    // T e m p l a t e
    // -----------------------------------------------------------------

    return (
        <div className="cities">
            {error ? (
                <p className="error">{error}</p>
            ) : (
                <>
                    {isFetching ? (
                        <p>loading...</p>
                    ) : (
                        <>
                            {cities.map(({ id, country, name, description, image }: City, i) => (
                                <CityCard
                                    key={id}
                                    country={country}
                                    name={name}
                                    description={description}
                                    image={image}
                                    alwaysVisible={i === 0}
                                    callback={
                                        i > 0
                                            ? (cityName: string) => alert(`You chose ${cityName}`)
                                            : undefined
                                    }
                                />
                            ))}
                        </>
                    )}
                </>
            )}
        </div>
    );
};
export default CitiesPage;
