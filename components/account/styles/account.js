import styled from 'styled-components';
 
const Container = styled.div`
    max-width: 1114px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    justify-content: center;
    padding-left: 16px;
    padding-right: 16px;

    @media(min-width: 1114px) {
        grid-template-columns: 35% auto;
        column-gap: 76px;
        justify-content: unset;
    }
`;
const HeadingContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    img {
        width: 134px;
        height: 134px;
        margin-top: 60px;
        margin-right: 80px;
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
const Form = styled.form``;
const Label = styled.label`
    display: block;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
    color: #0F0E17;
`;

const Input = styled.input`
    background: #000000;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #FF8906;
    padding-top: 28px;
    padding-bottom: 28px;
    padding-left: 22px;
`;

const Button = styled.button`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    background: #E53170;
    color: #FFFFFF;
    margin-top: 42px;
    padding-top: 28px;
    padding-bottom: 28px; 
    padding-left: 32px;
    padding-right: 32px;
`;

const GroupContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Group = styled.div``;
const Image = styled.img`
    width: 65px;
    height: 65px;
`;

const Span = styled.span`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    padding: 0;
    color: #000000;
`;
const CancelButton = styled.button`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    background: #E53170;
    color: #FFFFFF;
    background: #FF8906;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 12px;
    padding-right: 12px;
`;

export {
    Container,
    HeadingContainer,
    Frame,
    Subtitle,
    Form,
    Label,
    Input,
    Button,
    GroupContainer,
    Group,
    Image,
    Span,
    CancelButton
}