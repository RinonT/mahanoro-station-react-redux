function pickSeats(state=[], action) {
    switch (action.type) {
        case "PICK_SEATS":
            return [...state,  action.payload];
        case "SET_IS_SEAT_AVAILABLE":
            return state.find(item => {
                 if(item.id == action.payload) {
                     return {
                        ...state,
                    isAvailable: false
                     }
 
                }
            })
        default:
            return state;
    }
}

export { pickSeats };