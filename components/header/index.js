import React from 'react';

import {
    Container,
    HeaderContainer,
    HeadingContainer,
    PageTitleContainer,
    Logo,
    Span,
    Title,
    LinkContainer,
    Link,
    PageTitle
} from './styles/header';

export default function Header({children, restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.HeaderContainer = function HeaderHeaderContainer({children, ...restProps}) {
    return <HeaderContainer {...restProps}>{children}</HeaderContainer>
}

Header.HeadingContainer = function HeaderHeadingContainer({children, ...restProps}) {
    return <HeadingContainer {...restProps}>{children}</HeadingContainer>
}

Header.PageTitleContainer = function HeaderPageTitleContainer({children, ...restProps}) {
    return <PageTitleContainer {...restProps}>{children}</PageTitleContainer>
}


Header.Logo = function HeaderLogo({src, ...restProps}) {
    return <Logo src={src} {...restProps} />
}

Header.Span = function HeaderSpan({children, ...restProps}) {
    return <Span {...restProps} > {children} </Span>
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