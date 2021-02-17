import React from 'react';
import  {
    Container,
    Frame,
    Subtitle,
    SeatsContainer,
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

BookingSeats.SeatsContainer = function BookingSeatsSeatsContainer({children, restProps}) {
    return <SeatsContainer {...restProps}>{children}</SeatsContainer>
}

BookingSeats.Image = function BookingSeatsImage({src, onClick, id, restProps}) {
    return <Image src={src} onClick={onClick} id={id} {...restProps} /> 
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

BookingSeats.BookingButton = function BookingSeatsBookingButton({onClick, children, restProps}) {
    return <BookingButton onClick={onClick} {...restProps}>{children}</BookingButton>
}

BookingSeats.TotalPrice = function BookingSeatsTotalPrice({children, restProps}) {
    return <TotalPrice {...restProps}>{children}</TotalPrice>
}


