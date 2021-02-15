import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { setBookingSeats, getSeats, SetIsSeatAvalable } from '../actions';
import { Header, BookSeats } from '../components';
import reservedSeat from '../utils/reservedSeat.svg';
import unreservedSeat from '../utils/unreservedSeat.svg';

export default function BookSeatsContainer() {
    const { tripId } = useParams();
    const nextTrips = useSelector((state) => state.nextTrips);
    const bookingSeat = useSelector((state) => state.bookingSeats);
    const pickSeats = useSelector((state) => state.pickSeats);
    const dispatch = useDispatch();
    const bookingSeatDetails = nextTrips.find((trip) => trip.id == tripId)
    useEffect(() => {
        dispatch(setBookingSeats(bookingSeatDetails))
    }, [nextTrips])
    const bookingSeatObj = bookingSeat.trip;

    // Allowing the user to pick seats
    const chooseSeats = (e) => {
        dispatch(SetIsSeatAvalable(e.target.id))
        const chosenSeats = bookingSeatObj.seats.find(seat => seat.id == e.target.id)
        dispatch(getSeats(chosenSeats))
        console.log("faf")
    }

    console.log(pickSeats)

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
                                            <BookSeats.Image key={seat.id} onClick={chooseSeats} key={seat.id} id={seat.id} src src={unreservedSeat} alt="Cars" />
                                            :
                                            <BookSeats.Image src={reservedSeat}  alt="Cars" />
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
                                    <BookSeats.BookingButton>Book {`${pickSeats.length < 2}` ? `${pickSeats.length}  seat` : `${pickSeats.length} seats`}</BookSeats.BookingButton>
                                    <BookSeats.TotalPrice>{pickSeats.length > 1 ? bookingSeatObj.price * pickSeats.length : bookingSeatObj.price} Ar</BookSeats.TotalPrice>
                                </BookSeats.BookingContainer>
                            </BookSeats.Frame>
                        </BookSeats>
                    </React.Fragment>
                    : <p>Loading...</p>
            }
        </React.Fragment>
    )
}
