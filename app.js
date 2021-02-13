import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, NextTrips } from './pages';
import BookSeats from './pages/bookSeats';

export default function App() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/city/:destination">
                    <NextTrips />
                </Route>
                <Route exact path="/trip/:tripId">
                    <BookSeats />
                </Route>
            </Switch>
        </React.Fragment>
    )
}
