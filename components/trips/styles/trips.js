import styled from "styled-components";

const Container = styled.div`
    display: grid;
    justify-content: center;
    @media(min-width: 1114px) {
        grid-template-columns: auto auto;
        column-gap: 82px;
        row-gap: 38px;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 55px;
    img {
        width: 128px;
        height: 128px;
    }
`;

const CityNameContainer = styled.div`
    display: flex;
    background-color: #000000;
    margin-bottom: 32px;
    padding-left: 32px;
    padding-right: 32px;
`;

const Icon = styled.img`
    width: 34px;
    height: 36px;
    margin-top: 32px;
    margin-right: 31px;
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

export { Container, HeaderContainer, CityNameContainer, Icon, CityName } 