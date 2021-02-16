import React from 'react';
import { Modal } from '../components';
import modalIcon from '../utils/modalIcon.svg';
import { Link } from 'react-router-dom';

export default function ModalContainer({exitModal}) {
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
                    <Modal.Button>
                        <Link to="/account/:accountId">
                            Check your account
                        </Link>
                    </Modal.Button>
                </Modal.InnerModal>
            </Modal.OuterModal>
        </Modal>
    )
}
