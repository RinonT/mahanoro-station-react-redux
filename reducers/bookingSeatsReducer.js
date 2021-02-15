function bookingSeats(state={}, action) {
    switch (action.type) {
        case "SET_BOOKING_SEATS":
            return {...state, trip: action.payload}; 
        default:
            return state;
    }
}

export { bookingSeats };