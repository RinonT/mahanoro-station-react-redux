import React from 'react';
import { Header } from '../components'

export default function HeaderContainer() {
    return (
        <React.Fragment>
        <Header>
            <Header.Title>Mahanoro station</Header.Title>
            <Header.LinkContainer>
                <Header.Link>My account</Header.Link>
            </Header.LinkContainer>
        </Header>
        </React.Fragment>
    )
}
