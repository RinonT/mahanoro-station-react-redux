import styled from 'styled-components';

const Container = styled.div`
    display: grid;

    @media(min-width: 1114px) {
        grid-template-columns: auto auto;
        column-gap: 72px;
    }
`;
const Frame = styled.div``;
const Subtitle = styled.h2`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #0F0E17;
`;
const Image = styled.img``;
const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Info = styled.span`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    :first-of-type {
        color: #A7A9BE;
    }
`;
const BookingContainer = styled.div`
    
`;
const Price = styled.p`
    font-weight: 500;
    font-size: 48px;
    line-height: 57px;
    color: #FF8906;
`;
const BookingButton = styled.button`
    background: #E53170;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;
    padding-top: 22px;
    padding-bottom: 22px;
    padding-left: 50px;
    padding-right: 50px;
`;
const TotalPrice = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #000000
`;

export {
    Container,
    Frame,
    Subtitle,
    Image,
    InfoContainer,
    Info,
    BookingContainer,
    Price,
    BookingButton,
    TotalPrice
}