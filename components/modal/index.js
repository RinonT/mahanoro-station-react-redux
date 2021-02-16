import React from 'react';
import {
    Container,
    OuterModal,
    InnerModal,
    CancelButton,
    HeadingContainer,
    Icon,
    Heading,
    Text,
    Button,
} from './styles/modal';


export default function Modal({ children, restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Modal.OuterModal = function ModalOuterModal({ children, restProps }) {
    return <OuterModal {...restProps}>{children}</OuterModal>
}

Modal.InnerModal = function ModalInnerModal({ children, restProps }) {
    return <InnerModal {...restProps}>{children}</InnerModal>
}

Modal.CancelButton = function ModalCancelButton({onClick, children, restProps }) {
    return <CancelButton onClick={onClick} {...restProps}>{children}</CancelButton>
}

Modal.HeadingContainer = function ModalHeadingContainer({ children, restProps }) {
    return <HeadingContainer {...restProps}>{children}</HeadingContainer>
}

Modal.Icon = function ModalIcon({ src, restProps }) {
    return <Icon src={src} {...restProps} /> 
}

Modal.Heading = function ModalHeading({ children, restProps }) {
    return <Heading {...restProps}>{children}</Heading>
}

Modal.Text = function ModalText({ children, restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Modal.Button = function ModalButton({ children, restProps }) {
    return <Button {...restProps}>{children}</Button>
}