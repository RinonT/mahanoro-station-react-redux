import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { setBookingSeats } from '../actions';
import { Header, BookSeats } from '../components';
import reservedSeat from '../utils/reservedSeat.svg';
import unreservedSeat from '../utils/unreservedSeat.svg';

export default function BookSeatsContainer() {
    const { tripId } = useParams();
    const nextTrips = useSelector((state) => state.nextTrips);
    const bookingSeat = useSelector((state) => state.bookingSeats);
    const dispatch = useDispatch();
    const bookingSeatDetails = nextTrips.find((trip) => trip.id == tripId)
    useEffect(() => {
        dispatch(setBookingSeats(bookingSeatDetails))
    }, [nextTrips])
    const bookingSeatObj = bookingSeat.trip;
    return (
        <React.Fragment>
            {
                bookingSeatObj ?
                    <React.Fragment>
                        <Header.PageTitle>
                            Book a seat to
                            <span>{bookingSeatObj.destination}</span>
                        </Header.PageTitle>
                        <BookSeats>
                            <BookSeats.Frame>
                                <BookSeats.Subtitle>Pick a seat</BookSeats.Subtitle>
                                {
                                    bookingSeatObj.seats.map(seat => {
                                        return seat.isAvailable ?
                                         <BookSeats.Image key={seat.id}  src={reservedSeat} alt="Cars" /> 
                                        :
                                        <BookSeats.Image key={seat.id} src={unreservedSeat} alt="Cars" /> 
                                    })
                                }
                            </BookSeats.Frame>
                            <BookSeats.Frame>
                                <BookSeats.Subtitle>Trip information:</BookSeats.Subtitle>
                                <BookSeats.InfoContainer>
                                    <BookSeats.Info>Departure time:</BookSeats.Info>
                                    <BookSeats.Info>{bookingSeatObj.departureTime}</BookSeats.Info>
                                </BookSeats.InfoContainer>
                                <BookSeats.InfoContainer>
                                    <BookSeats.Info>Driver:</BookSeats.Info>
                                    <BookSeats.Info>{bookingSeatObj.driverName}</BookSeats.Info>
                                </BookSeats.InfoContainer>
                                <BookSeats.InfoContainer>
                                    <BookSeats.Info>Driver's contact:</BookSeats.Info>
                                    <BookSeats.Info>{bookingSeatObj.driverContact}</BookSeats.Info>
                                </BookSeats.InfoContainer>
                                <BookSeats.InfoContainer>
                                    <BookSeats.Info>Estimated duration:</BookSeats.Info>
                                    <BookSeats.Info>{bookingSeatObj.estimatedDuration}</BookSeats.Info>
                                </BookSeats.InfoContainer>
                                <BookSeats.InfoContainer>
                                    <BookSeats.Info>Breaks:</BookSeats.Info>
                                    <BookSeats.Info>{bookingSeatObj.breaks}</BookSeats.Info>
                                </BookSeats.InfoContainer>
                                <BookSeats.BookingContainer>
                                    <BookSeats.Price>{bookingSeatObj.price} Ar/seat</BookSeats.Price>
                                    <BookSeats.BookingButton>Book 2 seats</BookSeats.BookingButton>
                                    <BookSeats.TotalPrice>40000ar</BookSeats.TotalPrice>
                                </BookSeats.BookingContainer>
                            </BookSeats.Frame>
                        </BookSeats>
                    </React.Fragment>
                    : <p>Loading...</p>
            }
        </React.Fragment>
    )
}
