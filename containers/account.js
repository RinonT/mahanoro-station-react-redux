import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAccount, setFirstName, setLastName, setPhoneNumber, setBookings } from '../actions';
import { Header, Account } from '../components';

export default function AccountContainer() {
    const account = useSelector(state => state.account);
    const dispatch = useDispatch();
    const updatedAccount = {
        firstName: account.firstName,
        lastName: account.lastName,
        phoneNumber: account.phoneNumber,
        bookings: account.bookings
    }

    return (
        <React.Fragment>
            <Header.PageTitle>
                My account
                <span>{account.firstName} {account.lastName}</span>
            </Header.PageTitle>
            <Account>
                <Account.Frame>
                    <Account.Subtitle>My personal information</Account.Subtitle>
                    <Account.Form onSubmit={(e) => {
                        e.preventDefault();
                        setAccount(updatedAccount)
                    }}>
                        <Account.Label>Fist name</Account.Label>
                        <Account.Input value={account.firstName} onChange={(e) => dispatch(setFirstName(e.target.value))} />
                        <Account.Label>Last name</Account.Label>
                        <Account.Input value={account.lastName} onChange={(e) => dispatch(setLastName(e.target.value))} />
                        <Account.Label>Phone number</Account.Label>
                        <Account.Input type="phone" value={account.phoneNumber} onChange={(e) => dispatch(setPhoneNumber(e.target.value))} />
                        <Account.GroupContainer>
                            <Account.Button>Update</Account.Button>
                        </Account.GroupContainer>
                    </Account.Form>
                </Account.Frame>
                <Account.Frame>
                    <Account.Subtitle>My account</Account.Subtitle>
                    {
                        account.bookings?.map(booking => {
                            return (
                                <Account.GroupContainer>
                                    <Account.Group>
                                        <Account.Image src="jjk" alt="A photo of a car" />
                                    </Account.Group>
                                    <Account.Group>
                                        <Account.Span>{booking.destination}</Account.Span>
                                        <Account.Span>{booking.departureTime}</Account.Span>
                                    </Account.Group>
                                    <Account.Group>
                                        <Account.Span>{`${booking.numberOfSeats > 1} ? ${booking.numberOfSeats} seats : ${booking.numberOfSeats} seat`}</Account.Span>
                                        <Account.Span>{booking.price} Ar</Account.Span>
                                    </Account.Group>
                                    <Account.Group>
                                        <Account.CancelButton>Cancel</Account.CancelButton>
                                    </Account.Group>
                                </Account.GroupContainer>
                            )
                        })
                    }
                </Account.Frame>
            </Account>
        </React.Fragment>
    )
}
