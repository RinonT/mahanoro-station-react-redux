import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBookings } from '../actions';
import { Modal } from '../components';
import modalIcon from '../utils/modalIcon.svg';
import { Link } from 'react-router-dom';

export default function ModalContainer({ exitModal, destination, departureTime, numberOfSeats, price }) {
    const dispatch = useDispatch();

    const userbooking = {
        destination: destination,
        departureTime: departureTime,
        numberOfSeats: numberOfSeats,
        price: price,
    } 

    // Set booking
    const setUserBooking = () => { 
        dispatch(setBookings(userbooking))
    }

    return (
        <Modal>
            <Modal.OuterModal>
                <Modal.InnerModal>
                    <Modal.CancelButton onClick={exitModal}>x</Modal.CancelButton>
                    <Modal.HeadingContainer>
                        <Modal.Icon src={modalIcon} alt="confirmed icon" />
                        <Modal.Heading>
                            Booking confirmed
                     </Modal.Heading>
                    </Modal.HeadingContainer>
                    <Modal.Text>
                        Thank you for trusting our services.
                        Your booking has been added to your account. You can review it there.
                    </Modal.Text> 
                    <Link  to="/account/:accountId" onClick={setUserBooking} >
                        <Modal.Button >
                            Check your account
                        </Modal.Button>
                    </Link>
                </Modal.InnerModal>
            </Modal.OuterModal>
        </Modal>
    )
}
