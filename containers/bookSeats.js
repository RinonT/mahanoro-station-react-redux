import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { setBookingSeats, getSeats, isSeatAvailable, showModal } from '../actions';
import { Header, BookSeats } from '../components';
import ModalContainer from './modal';
import reservedSeat from '../utils/reservedSeat.svg';
import unreservedSeat from '../utils/unreservedSeat.svg';
import pickedSeatSvg from '../utils/pickedSeat.svg';
import taxiBrousseIcon from '../utils/taxi-brousse.svg';


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

    // Allowing the user to pick seats
    const chooseSeats = (e) => {
        const chosenSeats = bookingSeat[0].seats.find(seat => seat.id == e.target.id);
        dispatch(getSeats(chosenSeats))
        dispatch(isSeatAvailable(e.target.id))
    }

    function getDates(timestamp) {
        let date = new Date(timestamp).toLocaleDateString();
        let dateFormated = date.replace(/(\d+)\/(\d+)\/(\d+)/g, "$2/0$1/$3");
        return dateFormated;
    }
 
    return (
        <React.Fragment>
            {
                bookingSeat !== [] ? bookingSeat.map(seat => {
                    return <React.Fragment key={seat?.id}>
                        <Header.PageTitleContainer>
                            <BookSeats.Image src={taxiBrousseIcon} alt="A taxi image" />
                            <Header.PageTitle>
                                Book a seat to
                            <Header.Span>{seat?.destination}</Header.Span>
                            </Header.PageTitle>
                        </Header.PageTitleContainer>
                        <BookSeats>
                            <BookSeats.Frame>
                                <BookSeats.Subtitle>Pick a seat</BookSeats.Subtitle>
                                <BookSeats.SeatsContainer>
                                    {
                                        seat?.seats.map(seat => {
                                            return seat?.isAvailable && !seat?.picked || seat?.isAvailable && seat?.picked ?

                                                <BookSeats.Image key={seat?.id} onClick={(e) => {
                                                    chooseSeats(e);
                                                }} id={seat?.id} src src={unreservedSeat} alt="Cars" />
                                                : seat?.isAvailable == false && seat?.picked ?
                                                    <BookSeats.Image onClick={chooseSeats} key={seat?.id} src={pickedSeatSvg} id={seat?.id} alt="Cars" />
                                                    :
                                                    <BookSeats.Image key={seat?.id} src={reservedSeat} alt="Cars" />
                                        })
                                    }
                                </BookSeats.SeatsContainer>
                            </BookSeats.Frame>
                            <BookSeats.Frame>
                                <BookSeats.Subtitle>Trip information: </BookSeats.Subtitle>
                                <BookSeats.InfoContainer>
                                    <BookSeats.Info>Departure time: </BookSeats.Info>
                                    <BookSeats.Info>{`${`${new Date(seat?.departureTime).getHours()}:${new Date(seat?.departureTime).getMinutes() < 10 ? "0" + new Date(seat?.departureTime).getMinutes() : new Date(seat?.departureTime).getMinutes()}`}, ${getDates(seat?.departureTime)}`}</BookSeats.Info>
                                </BookSeats.InfoContainer>
                                <BookSeats.InfoContainer>
                                    <BookSeats.Info>Driver: </BookSeats.Info>
                                    <BookSeats.Info>{seat?.driverName}</BookSeats.Info>
                                </BookSeats.InfoContainer>
                                <BookSeats.InfoContainer>
                                    <BookSeats.Info>Driver's contact: </BookSeats.Info>
                                    <BookSeats.Info>{seat?.driverContact}</BookSeats.Info>
                                </BookSeats.InfoContainer>
                                <BookSeats.InfoContainer>
                                    <BookSeats.Info>Estimated duration: </BookSeats.Info>
                                    <BookSeats.Info>{seat?.estimatedDuration}</BookSeats.Info>
                                </BookSeats.InfoContainer>
                                <BookSeats.InfoContainer>
                                    <BookSeats.Info>Breaks: </BookSeats.Info>
                                    <BookSeats.Info>{seat?.breaks}</BookSeats.Info>
                                </BookSeats.InfoContainer>
                                <BookSeats.BookingContainer>
                                    <BookSeats.Price>{seat?.price} Ar/seat</BookSeats.Price>
                                    <BookSeats.BookingButton onClick={() => dispatch(showModal(true))}>Book {`${pickSeats.length < 2}` ? `${pickSeats.length}  seat` : `${pickSeats.length} seats`}</BookSeats.BookingButton>
                                    <BookSeats.TotalPrice>{pickSeats.length > 1 ? seat?.price * pickSeats.length : seat?.price} Ar</BookSeats.TotalPrice>
                                </BookSeats.BookingContainer>
                            </BookSeats.Frame>
                        </BookSeats>
                        {
                            isModalDisplayed && <ModalContainer exitModal={() => dispatch(showModal(false))} destination={seat.destination}
                                departureTime={`${`${new Date(seat?.departureTime).getHours()}:${new Date(seat?.departureTime).getMinutes() < 10 ? "0" + new Date(seat?.departureTime).getMinutes() : new Date(seat?.departureTime).getMinutes()}`}, ${getDates(seat?.departureTime)}`}
                                numberOfSeats={pickSeats.length}
                                price={pickSeats.length > 1 ? seat?.price * pickSeats.length : seat?.price} />
                        }
                    </React.Fragment>
                })
                    : <p>Loading...</p>
            }
        </React.Fragment>
    )
}
