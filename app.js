import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, NextTrips, BookSeats, Account } from './pages';
import HeaderContainer from './containers/header';

export default function App() {
    return (
        <React.Fragment>
            <HeaderContainer />
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
                <Route exact path="/account/:accountId">
                    <Account />
                </Route>
            </Switch>
        </React.Fragment>
    )
}
