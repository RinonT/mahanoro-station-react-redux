import styled from 'styled-components';

const Container = styled.header`
    background: #0F0E17;
    margin-bottom: 55px;
    padding-top: 28px;
    padding-bottom: 28px;
    padding-left: 32px;
    padding-right: 32px;

    @media(min-width: 1114px) {
        padding-left: 0;
        padding-right: 0;
    }
`;

const HeaderContainer = styled.div`
    max-width: 1114px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const HeadingContainer = styled.div`
    display: flex; 
`;

const Title = styled.h1`
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;
    /* identical to box height */
    color: #FFFFFE;
`;
const Logo = styled.img`
    width: 35px;
    height: 41px;
    margin-top: 23px;
    margin-right: 30px;
`
const LinkContainer = styled.div`
    padding-top: 28px;
    padding-bottom: 28px;

    a {
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        color: #A7A9BE;
    }
`;
const Link = styled.a``;

const PageTitle = styled.h2`
    font-style: normal;
    font-weight: bold;
    word-wrap: break-word ;
    font-size: 64px;
    line-height: 76px;
    /* identical to box height */
    color: #000000;
`;

const Span = styled.span`
    font-weight: 300;
    font-size: 64px;
    line-height: 76px;
    color: #E53170;
`;

const PageTitleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img {
        width: 118px;
        height: 118px;
        margin-top: 67px;
        margin-right: 55px;
    }
`

export {
    Container,
    HeaderContainer,
    HeadingContainer,
    PageTitleContainer,
    Logo,
    Title,
    Span,
    LinkContainer,
    Link,
    PageTitle
}