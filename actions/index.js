function getTrips() {
    return async(dispatch) => {
        const res = await fetch(`https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json`);
        const trips = await res.json();
        return dispatch({
            type: "GET_TRIPS",
            payload: trips
        })
    }
}

function setNextTrips(trips) {
    return {
        type: "SET_NEXT_TRIPS",
        payload: trips
    }
}

function setBookingSeats(trip) {
    return {
        type: "SET_BOOKING_SEATS",
        payload: trip
    }
}

function setAccount(account) {
    return {
        type: "SET_ACCOUNT",
        payload: account
    }
}

function setFirstName(name) {
    return {
        type: "SET_FIRSTNAME",
        payload: name
    }
}

function setLastName(name) {
    return {
        type: "SET_LASTNAME",
        payload: name
    }
}

function setPhoneNumber(number) {
    return {
        type: "SET_PHONE_NUMBER",
        payload: number
    }
}

function setBookings(obj) {
    return {
        type: "SET_BOOKINGS",
        payload: obj
    }
}

function getSeats(seat) {
    return {
        type: "PICK_SEATS",
        payload: seat
    }
}

function  isSeatAvailable(seatId) {
    return {
        type: "IS_SEAT_AVAILABLE",
        payload: seatId,
        picked: false
    }
}

function showModal(isModalDisplayed) {
    return {
        type: "SHOW_MODAL",
        payload: isModalDisplayed
    }
}

export { getTrips, setNextTrips, setBookingSeats, setAccount, setFirstName, setLastName, setPhoneNumber, setBookings, getSeats, showModal, isSeatAvailable }