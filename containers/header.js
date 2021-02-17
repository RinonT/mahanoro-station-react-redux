import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components';
import logoIcon from '../utils/logo.svg';

export default function HeaderContainer() {
    return (
        <React.Fragment>
            <Header>
                <Header.HeaderContainer>
                    <Header.HeadingContainer>
                        <Header.Logo src={logoIcon} alt="logo" />
                        <Header.Title>Mahanoro station</Header.Title>
                    </Header.HeadingContainer>
                    <Header.LinkContainer>
                        <Link to="/account/:accountId">My account</Link>
                    </Header.LinkContainer>
                </Header.HeaderContainer>
            </Header>
        </React.Fragment>
    )
}
