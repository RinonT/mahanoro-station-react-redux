import React from 'react';
import {
    Container,
    Frame,
    Image,
    Day,
    Time,
    Date,
    SeatsInfo,
    ButtonContainer,
    Button
} from './styles/nextTrips';

export default function NextTrips({children, restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

NextTrips.Frame = function NextTripsFrame({children, restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}
NextTrips.Image = function NextTripsImage({src, restProps}) {
    return <Image src={src} {...restProps} /> 
}
NextTrips.Day = function NextTripsDay({children, restProps}) {
    return <Day {...restProps}>{children}</Day>
}
NextTrips.Time = function NextTripsTime({children, restProps}) {
    return <Time {...restProps}>{children}</Time>
}
NextTrips.Date = function NextTripsDate({children, restProps}) {
    return <Date {...restProps}>{children}</Date>
}
NextTrips.SeatsInfo = function NextTripsSeatsInfo({children, restProps}) {
    return <SeatsInfo {...restProps}>{children}</SeatsInfo>
}
NextTrips.ButtonContainer = function NextTripsButtonContainer({children, restProps}) {
    return <ButtonContainer {...restProps}>{children}</ButtonContainer>
}
NextTrips.Button = function NextTripsButton({children, restProps}) {
    return <Button {...restProps}>{children}</Button>
}
