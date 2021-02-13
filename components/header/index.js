import React from 'react';

import {
    Container,
    Title,
    LinkContainer,
    Link,
    PageTitle
} from './styles/header';

export default function Header({children, restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Title = function HeaderTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Header.LinkContainer = function HeaderLinkContainer({children, ...restProps}) {
    return <LinkContainer {...restProps}>{children}</LinkContainer>
}

Header.Link = function HeaderLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

Header.PageTitle = function HeaderPageTitle({children, ...restProps}) {
    return <PageTitle {...restProps}>{children}</PageTitle>
}