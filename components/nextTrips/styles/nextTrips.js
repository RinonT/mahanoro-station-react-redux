import styled from 'styled-components';

const Container = styled.div`
        display: grid;
        justify-content: center;
        

    @media(min-width: 1114px){
        max-width: 1114px;
        margin-left: auto;
        margin-right: auto;
        padding-right: 16px;
        padding-left: 16px;
        display: flex;
        justify-content: space-between;
    }
`;

const Frame = styled.div``;
const Image = styled.img`
    width: 93px;
    height: 93px;
`;
const Day = styled.span`
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;
    color: #FF8906
`;

const Time = styled.span`${Day}`;
const Date = styled.span`
    ${Day};
    color: #000000;
`;

const SeatsInfo = styled.span`${Date}`;
const ButtonContainer = styled.div`
    background: #E53170;
    margin-bottom: 32px;
`;
const Button = styled.button`
    ${Day}; 
    background: #E53170;
    margin-bottom: 32px;
    padding-top: 31px;
    padding-bottom: 31px;
    padding-left: 25px;
    padding-right: 25px;
    color: #FFFFFF;
    border: transparent;
`;

export {
    Container,
    Frame,
    Image,
    Day,
    Time,
    Date,
    SeatsInfo,
    ButtonContainer,
    Button
}