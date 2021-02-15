import React from 'react';
import  {
    Container,
    Frame,
    Subtitle,
    Image,
    InfoContainer,
    Info,
    BookingContainer,
    Price,
    BookingButton,
    TotalPrice
} from './styles/bookSeats';

export default function BookingSeats({children, restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}
 
BookingSeats.Frame = function BookingSeats({children, restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}
BookingSeats.Subtitle = function BookingSeatsSubtitle({children, restProps}) {
    return <Subtitle {...restProps}>{children}</Subtitle>
}
BookingSeats.Image = function BookingSeatsImage({src, restProps}) {
    return <Image src={src} {...restProps} /> 
}
BookingSeats.InfoContainer = function BookingSeatsInfoContainer({children, restProps}) {
    return <InfoContainer {...restProps}>{children}</InfoContainer>
}
BookingSeats.Info = function BookingSeatsInfo({children, restProps}) {
    return <Info {...restProps}>{children}</Info>
}
BookingSeats.BookingContainer = function BookingSeatsBookingContainer({children, restProps}) {
    return <BookingContainer {...restProps}>{children}</BookingContainer>
}
BookingSeats.Price = function BookingSeatsPrice({children, restProps}) {
    return <Price {...restProps}>{children}</Price>
}
BookingSeats.BookingButton = function BookingSeatsBookingButton({children, restProps}) {
    return <BookingButton {...restProps}>{children}</BookingButton>
}
BookingSeats.TotalPrice = function BookingSeatsTotalPrice({children, restProps}) {
    return <TotalPrice {...restProps}>{children}</TotalPrice>
}

