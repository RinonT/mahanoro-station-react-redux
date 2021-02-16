function bookingSeats(state = [], action) {
    switch (action.type) {
        case "SET_BOOKING_SEATS":
            return [action.payload];
        case "IS_SEAT_AVAILABLE":
            return state.map(state => {
                return {
                    ...state,
                    seats: state.seats.map(seat => {
                        if (seat.id == action.payload) {
                            return {
                                ...seat,
                                picked: !action.picked,
                                isAvailable: !seat.isAvailable
                            }
                        }
                        return { ...seat }
                    })
                }
    })


        default:
    return state;
}
}

export { bookingSeats };