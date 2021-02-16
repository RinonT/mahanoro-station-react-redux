function pickSeats(state=[], action) {
    switch (action.type) {
        case "PICK_SEATS":
            return [...state,  action.payload];
        default:
            return state;
    }
}

export { pickSeats };