import styled from 'styled-components';

const Container = styled.div`
    max-width: 1114px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 32px;
    padding-right: 32px;
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
const BookingContainer = styled.div``;

const SeatsContainer = styled.div`
    display: grid;
    grid-template-columns: 60px 60px 60px 60px;
    grid-template-areas: "blank blank image1 image2"
                          "image3 image4 image5 image6"
                          "image7 image8 image9 image10"
                          "image11 image12 image13 image14"
                          "image15 image16 image17 image18";

    img:nth-of-type(1) {
        grid-area: image1; 
    }

    img:nth-of-type(2) {
        grid-area: image2;
    }
     img:nth-of-type(3) {
        grid-area: image3;
    }
     img:nth-of-type(4) {
        grid-area: image4;
    }
     img:nth-of-type(5) {
        grid-area: image5;
    }
     img:nth-of-type(6) {
        grid-area: image6;
    }
     img:nth-of-type(7) {
        grid-area: image7;
    }
     img:nth-of-type(8) {
        grid-area: image8;
    }
     img:nth-of-type(9) {
        grid-area: image9;
    }
     img:nth-of-type(10) {
        grid-area: image10;
    }
     img:nth-of-type(11) {
        grid-area: image11;
    }
     img:nth-of-type(12) {
        grid-area: image12;
    }
     img:nth-of-type(13) {
        grid-area: image13;
    }
     img:nth-of-type(14) {
        grid-area: image14;
    }
     img:nth-of-type(15) {
        grid-area: image15;
    }
     img:nth-of-type(16) {
        grid-area: image16;
    }
    img:nth-of-type(17) {
        grid-area: image17;
    }
    img:nth-of-type(18) {
        grid-area: image18;
    }
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
    SeatsContainer,
    Image,
    InfoContainer,
    Info,
    BookingContainer,
    Price,
    BookingButton,
    TotalPrice
}