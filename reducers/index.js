import { combineReducers } from "redux";
import { trips } from './tripsReducer';
import { nextTrips } from './nextTripsReducer';
import {  bookingSeats } from './bookingSeatsReducer';
import {  account } from './accountReducer';
import {  pickSeats } from './pickSeatsReducer';
import {  showModal } from './showModalReducer';



export default combineReducers({
   trips,
   nextTrips,
   bookingSeats,
   pickSeats,
   showModal,
   account
})