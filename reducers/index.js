import { combineReducers } from "redux";
import { trips } from './tripsReducer';
import { nextTrips } from './nextTripsReducer';
import {  bookingSeats } from './bookingSeatsReducer';

export default combineReducers({
   trips,
   nextTrips,
   bookingSeats
})