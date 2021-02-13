function nextTrips(state=[], action) {
    switch (action.type) {
        
        case "SET_NEXT_TRIPS":
            return action.payload; 
        default:
            return state;
    }
}

export { nextTrips };