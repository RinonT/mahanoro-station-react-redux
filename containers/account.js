import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAccount, setFirstName, setLastName, setPhoneNumber } from '../actions';
import { Header, Account } from '../components';
import taxiBrousseImg from '../utils/taxi-brousse.svg';
import userPhoto from '../utils/user-photo.svg';


export default function AccountContainer() {
    const account = useSelector(state => state.account);
    const dispatch = useDispatch();
    
    const updatedAccount = {
        firstName: account.firstName,
        lastName: account.lastName,
        phoneNumber: account.phoneNumber,
        myBookings: account.myBookings
    }
  
    const updatingAccount = (e) => {
        e.preventDefault();
        dispatch(setAccount(updatedAccount))
    }
    return (
        <React.Fragment>
            <Account.HeadingContainer>
                <Account.Image src={userPhoto} alt="user photo"/>
            <Header.PageTitle>
                My account 
                <Header.Span>{account.firstName} {account.lastName}</Header.Span>
            </Header.PageTitle>
            </Account.HeadingContainer>
            <Account>
                <Account.Frame>
                    <Account.Subtitle>My personal information</Account.Subtitle>
                    <Account.Form onSubmit={updatingAccount}>
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
                        account.myBookings.map(booking => {
                            return <Account.GroupContainer>
                                <Account.Group>
                                    <Account.Image src={taxiBrousseImg} alt="A photo of a car" />
                                </Account.Group>
                                <Account.Group>
                                    <Account.Span>{booking.destination}</Account.Span>
                                    <Account.Span>{booking.departureTime}</Account.Span>
                                </Account.Group>
                                <Account.Group>
                                    <Account.Span> {`${booking.numberOfSeats === 1}` ? `${booking.numberOfSeats}  seat` : `${booking.numberOfSeats} seats`} </Account.Span>
                                    <Account.Span>{booking.price} Ar</Account.Span>
                                </Account.Group>
                                <Account.Group>
                                    <Account.CancelButton>Cancel</Account.CancelButton>
                                </Account.Group>
                            </Account.GroupContainer>
                        })
                    }
                </Account.Frame>
            </Account>
        </React.Fragment>
    )
}
