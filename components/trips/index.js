import React from 'react';
import {Container, CityNameContainer, CityName } from './styles/trips';

export default function Trips({children, restProps}) {
   return <Container {...restProps}>
        {children}
    </Container>
}

Trips.CityNameContainer = function TripsCityNameContainer({children, restProps}) {
    return <CityNameContainer {...restProps}>{children}</CityNameContainer>
}

Trips.CityName = function TripsCityName({children, restProps}) {
    return <CityName {...restProps}>{children}</CityName>
}