import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    position: absolute;
    padding-top: 231px;
    top: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
`;

const OuterModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InnerModal = styled.div`
    position: relative;
    display: grid;
    width: 65%;
    background: #FFFFFF;
    border: 5px solid #E53170;
    box-sizing: border-box;
    padding-left: 100px;
    padding-right: 100px;
`;

const CancelButton = styled.button`
    font-size: 28px;
    align-self: right;
    background: none;
    border: none;
    outline: none;
    padding-top: 48px;
    position: absolute;
    top: -44px; 
    right: 16px;
`;

const HeadingContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 32px;
`;

const Icon = styled.img`
    align-self: center;
    width: 50px; 
    margin-top: 8px;
    margin-right: 16px;
`;

const Heading = styled.h2`
    font-weight: bold;
    margin-top: 50px;
    font-size: 36px;
    line-height: 43px;
    /* identical to box height */
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #000000;
`;

const Text = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
`;

const Button = styled.button`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    background-color: #E53170;
    color: #FFFFFF;
    padding: 27px;
    margin-top: 25px;
    margin-bottom: 25px;
`;

export {
    Container,
    OuterModal,
    InnerModal,
    CancelButton,
    HeadingContainer,
    Icon,
    Heading,
    Text,
    Button,
}

