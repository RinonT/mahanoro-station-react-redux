import React from 'react';
import {
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
} from './styles/account';

export default function Account({children, restProps}) {
    return <Container {...restProps}>{children}</Container>
}
Account.HeadingContainer = function AccountHeadingContainer({children, restProps}) {
    return <HeadingContainer {...restProps}>{children}</HeadingContainer>
}
Account.Frame = function AccountFrame({children, restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}
Account.Subtitle = function AccountSubtitle({children, restProps}) {
    return <Subtitle {...restProps}>{children}</Subtitle>
}
Account.Form = function Account({onSubmit, children, restProps}) {
    return <Form onSubmit={onSubmit} {...restProps}>{children}</Form>
}
Account.Label = function AccountLabel({children, restProps}) {
    return <Label {...restProps}>{children}</Label>
}
Account.Input = function AccountInput({type, value, onChange, restProps}) {
    return <Input type={type} value={value} onChange={onChange} {...restProps} />
}
Account.Button = function AccountButton({children, restProps}) {
    return <Button {...restProps}>{children}</Button>
}
Account.GroupContainer = function AccountGroupContainer({children, restProps}) {
    return <GroupContainer {...restProps}>{children}</GroupContainer>
}
Account.Group = function AccountGroup({children, restProps}) {
    return <Group {...restProps}>{children}</Group>
}
Account.Image = function AccountImage({src, restProps}) {
    return <Image {...restProps} src={src} /> 
}
Account.Span = function AccountSpan({children, restProps}) {
    return <Span {...restProps}>{children}</Span>
}
Account.CancelButton = function AccountCancelButton({children, restProps}) {
    return <CancelButton {...restProps}>{children}</CancelButton>
}
