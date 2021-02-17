import React from 'react';
import {Container, HeaderContainer, CityNameContainer, Icon, CityName } from './styles/trips';

export default function Trips({children, restProps}) {
   return <Container {...restProps}>
        {children}
    </Container>
}

Trips.HeaderContainer = function TripsHeaderContainer({children, restProps}) {
    return <HeaderContainer {...restProps}>{children}</HeaderContainer>
}

Trips.CityNameContainer = function TripsCityNameContainer({children, restProps}) {
    return <CityNameContainer {...restProps}>{children}</CityNameContainer>
}

Trips.Icon = function TripsIcon({src, restProps}) {
    return <Icon src={src} {...restProps} /> 
} 
Trips.CityName = function TripsCityName({children, restProps}) {
    return <CityName {...restProps}>{children}</CityName>
}