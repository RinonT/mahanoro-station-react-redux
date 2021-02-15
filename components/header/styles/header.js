import styled from 'styled-components';

const Container = styled.header`
    background: #0F0E17;
    display: flex;
    justify-content: space-between;
    margin-bottom: 112px;
    padding-top: 28px;
    padding-bottom: 28px;
`;

const Title = styled.h1`
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;
    /* identical to box height */
    color: #FFFFFE;
`;

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
    font-size: 64px;
    line-height: 76px;
    /* identical to box height */
    color: #000000;
`;

export {
    Container,
    Title,
    LinkContainer,
    Link,
    PageTitle
}