import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { setBookingSeats, getSeats, showModal } from '../actions';
import { Header, BookSeats } from '../components';
import ModalContainer from './modal';
import reservedSeat from '../utils/reservedSeat.svg';
import unreservedSeat from '../utils/unreservedSeat.svg';
import pickedSeat from '../utils/pickedSeat.svg';


export default function BookSeatsContainer() {
    const { tripId } = useParams();
    const nextTrips = useSelector((state) => state.nextTrips);
    const bookingSeat = useSelector((state) => state.bookingSeats);
    const pickSeats = useSelector((state) => state.pickSeats);
    const isModalDisplayed = useSelector((state) => state.showModal);
    const dispatch = useDispatch();
    const bookingSeatDetails = nextTrips.find((trip) => trip.id == tripId)

    useEffect(() => {
        dispatch(setBookingSeats(bookingSeatDetails))
    }, [nextTrips]);

    console.log(isModalDisplayed);

    const bookingSeatObj = bookingSeat.trip;

    // Allowing the user to pick seats
    const chooseSeats = (e) => {
        const chosenSeats = bookingSeatObj.seats.find(seat => seat.id == e.target.id);
        chosenSeats.isAvailable = false;
        chosenSeats.passengerFirstName = true;
        dispatch(getSeats(chosenSeats))
    }

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
                                        return seat.isAvailable && seat.passengerFirstName === "" ?
                                            <BookSeats.Image key={seat.id} onClick={chooseSeats} id={seat.id} src src={unreservedSeat} alt="Cars" />
                                            : !seat.isAvailable && seat.passengerFirstName === "" ?
                                                <BookSeats.Image key={seat.id} src={reservedSeat} alt="Cars" />
                                                :
                                                <BookSeats.Image onClick={chooseSeats} key={seat.id} src={pickedSeat} alt="Cars" />
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
                                    <BookSeats.BookingButton onClick={(e) => dispatch(showModal(true))}>Book {`${pickSeats.length < 2}` ? `${pickSeats.length}  seat` : `${pickSeats.length} seats`}</BookSeats.BookingButton>
                                    <BookSeats.TotalPrice>{pickSeats.length > 1 ? bookingSeatObj.price * pickSeats.length : bookingSeatObj.price} Ar</BookSeats.TotalPrice>
                                </BookSeats.BookingContainer>
                            </BookSeats.Frame>
                        </BookSeats>
                        {
                            isModalDisplayed && <ModalContainer exitModal={() => dispatch(showModal(false))} />
                        }
                    </React.Fragment>
                    : <p>Loading...</p>
            }
        </React.Fragment>
    )
}
