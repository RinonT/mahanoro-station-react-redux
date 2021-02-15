import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components'

export default function HeaderContainer() {
    return (
        <React.Fragment>
        <Header>
            <Header.Title>Mahanoro station</Header.Title>
            <Header.LinkContainer>
                <Link to="/account/:accountId">My account</Link>
            </Header.LinkContainer>
        </Header>
        </React.Fragment>
    )
}
