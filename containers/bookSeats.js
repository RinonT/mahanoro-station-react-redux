import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { setBookingSeats } from '../actions';

export default function BookSeatsContainer() {
    const { tripId } = useParams();
    const nextTrips = useSelector((state) => state.nextTrips);
    const bookingSeat = useSelector((state) => state.bookingSeats);
    const dispatch = useDispatch();
    const bookingSeatDetails = nextTrips.filter((trip) => trip.id === tripId)
   useEffect(() => {
        dispatch(setBookingSeats(bookingSeatDetails))
   }, [])
   console.log(bookingSeat)
    return (
        <div>
            Hello
        </div>
    )
}
