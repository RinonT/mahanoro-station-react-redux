import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 82px;
`;

const CityNameContainer = styled.div`
    background-color: #000000;
`;

const CityName = styled.p`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;
    /* identical to box height */
    text-transform: uppercase;
    color: #FFFFFF;
`;

export {Container, CityNameContainer, CityName } 