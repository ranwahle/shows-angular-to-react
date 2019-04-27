import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import SearchShow from "../components/search-show/search-show"
import Home from "../components/home/home";
import ShowsList from "../components/shows-list/shows-list";

const getShows = () => {
    return [
        {name: 'show', image: {medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/158/395206.jpg'}},
        {name: 'show', image: {medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/158/395206.jpg'}},
        {name: 'show', image: {medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/158/395206.jpg'}},
        {name: 'show', image: {medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/158/395206.jpg'}},
        {name: 'show', image: {medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/158/395206.jpg'}},
        {name: 'show', image: {medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/158/395206.jpg'}},
        {name: 'show', image: {medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/158/395206.jpg'}},
        {name: 'show', image: {medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/158/395206.jpg'}},
        {name: 'show', image: {medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/158/395206.jpg'}},
        {name: 'show', image: {medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/158/395206.jpg'}},
        {name: 'show', image: {medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/158/395206.jpg'}},
        {name: 'show', image: {medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/158/395206.jpg'}},



        ]
}

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
storiesOf('Home component', module).add('Search show',() => <Home>
</Home>)

storiesOf('Search show', module).add('Search show', () => <SearchShow searchTerm={'Search this'}  onSearch={action('search')}/>);

storiesOf('Shows list', module).add('Shows list', () => <ShowsList shows={getShows()}/>)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
