import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setNextTrips } from '../actions';
import { Header, NextTrips } from '../components';

export default function NextTripsContainer() {
    const trips = useSelector(state => state.trips);
    const nextTrips = useSelector(state => state.nextTrips);
    const dispatch = useDispatch();
    const { destination } = useParams();
    // Get the array of trips that we have per destination
    const nextTripsDetails = trips !== [] && trips.filter(trip => trip.destination === destination);
    
    useEffect(() => {
        dispatch(setNextTrips(nextTripsDetails));
    }, [trips])

    // Number of seats available
    const numberOfSeats = (arr) => {
        return arr.filter(seat => seat.isAvailable).length
    }
 
    function getDates(timestamp) {
        let date = new Date(timestamp).toLocaleDateString();
        let dateFormated = date.replace(/(\d+)\/(\d+)\/(\d+)/g, "$2/0$1/$3");
        return dateFormated;
    }
    // Formating date
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (
        <React.Fragment>
            <Header.PageTitle>
                    Next trips to 
                    <span>{destination}</span>
            </Header.PageTitle>
            {
                nextTrips && nextTrips.map(trip => {
                    return (
                        <NextTrips key={trip.id}>
                            <NextTrips.Frame>
                                <NextTrips.Image src="" alt="taxi-brousse" />
                            </NextTrips.Frame>
                            <NextTrips.Frame>
                                <NextTrips.Day>{weekdays[new Date(trip.departureTime).getDay()]}</NextTrips.Day>
                                <NextTrips.Time>{`${new Date(trip.departureTime).getHours()}:${new Date(trip.departureTime).getMinutes() < 10 ? "0" + new Date(trip.departureTime).getMinutes() : new Date(trip.departureTime).getMinutes()}`}</NextTrips.Time>
                            </NextTrips.Frame>
                            <NextTrips.Frame>
                                <NextTrips.Date>{getDates(trip.departureTime)}</NextTrips.Date>
                                <NextTrips.SeatsInfo>
                                     { numberOfSeats(trip.seats) < 2 ? `${numberOfSeats(trip.seats)} seat` : `${numberOfSeats(trip.seats)} seats`} left
                                </NextTrips.SeatsInfo>
                            </NextTrips.Frame>
                            <NextTrips.Frame> 
                                <Link to={`/trip/${trip.id}`}>
                                    <NextTrips.Button>Book a seat</NextTrips.Button>
                                </Link>
                            </NextTrips.Frame>
                        </NextTrips>
                    )
                })
            }
        </React.Fragment>
    )
}
