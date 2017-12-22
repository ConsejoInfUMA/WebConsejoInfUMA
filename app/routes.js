import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
    </Switch>
);
