import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import App from '../App.js';

export default {
  title: 'Badges',
  component: Welcome,
};

export const ToStorybook = () => <App/>;

ToStorybook.story = {
  name: 'All Badges',
};
