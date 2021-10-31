import { rest } from 'msw';
import { City } from '../components/cityCard/cityCard';
import { baseUrl } from '../http-client';

export const citiesResponseMock: Array<City> = [
    {
        id: 'valtech',
        country: 'Front-end',
        name: 'valtech_',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://t.ly/5rs4',
    },
    {
        id: 'venice',
        country: 'Italy',
        name: 'Venice',
        description:
            'Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals.',
        image: 'https://t.ly/m6FJ',
    },
    {
        id: 'berlin',
        country: 'Germany',
        name: 'Berlin',
        description:
            "Berlin is the capital and largest city of Germany by both area and population. Its 3.8 million inhabitants make it the European Union's most populous city.",
        image: 'https://t.ly/dd6R',
    },
    {
        id: 'barcelona',
        country: 'Spain',
        name: 'Barcelona',
        description:
            'Barcelona is a city on the coast of northeastern Spain. It is the capital and largest city of the autonomous community of Catalonia.',
        image: 'https://t.ly/lwMR',
    },
    {
        id: 'paris',
        country: 'France',
        name: 'Paris',
        description:
            'Paris is the capital and most populous city of France, with an estimated population of 2,175,601 residents as of 2018, in an area of more than 105 square kilometres.',
        image: 'https://t.ly/G8Tc',
    },
    {
        id: 'amsterdam',
        country: 'Netherlands',
        name: 'Amsterdam',
        description:
            'Amsterdam is the capital and most populous city of the Netherlands with a population of 872,680 within the city proper, 1,558,755 in the urban area.',
        image: 'https://t.ly/3l97',
    },
    {
        id: 'london',
        country: 'United Kingdom',
        name: 'London',
        description:
            'London is the capital and largest city of England and the United Kingdom. Standing on the River Thames in south-east England at the head of a 50-mile.',
        image: 'https://bit.ly/2ZDUf47',
    },
];

const citiesPath = `${baseUrl}/cities`;

const citiesHandler = rest.get(citiesPath, async (req, res, ctx) =>
    res(ctx.json(citiesResponseMock)),
);
export const citiesHandlerException = rest.get(citiesPath, async (req, res, ctx) =>
    res(ctx.status(500), ctx.json({ message: 'Deliberately broken request' })),
);

export const handlers = [citiesHandler];
