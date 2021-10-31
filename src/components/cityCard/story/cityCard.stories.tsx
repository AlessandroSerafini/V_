import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../../../__tests__/.jest-test-results.json';
import CityCard from '../cityCard';

export default {
    title: 'Components/CityCard',
    component: CityCard,
    decorators: [withTests({ results })],
} as ComponentMeta<typeof CityCard>;

const Template: ComponentStory<typeof CityCard> = (args) => (
    <div className="cities">
        <CityCard {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    country: 'Italy',
    name: 'Venice',
    description:
        'Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals.',
    image: 'https://t.ly/m6FJ',
    callback: (cityName: string) => alert(`You chose ${cityName}`),
};

export const InfoAlwaysVisible = Template.bind({});
InfoAlwaysVisible.args = {
    country: 'Front-end',
    name: 'valtech_',
    alwaysVisible: true,
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://t.ly/5rs4',
    callback: (cityName: string) => alert(`You chose ${cityName}`),
};

export const InfoAlwaysVisibleWithoutButton = Template.bind({});
InfoAlwaysVisibleWithoutButton.args = {
    country: 'Front-end',
    name: 'valtech_',
    alwaysVisible: true,
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://t.ly/5rs4',
};
