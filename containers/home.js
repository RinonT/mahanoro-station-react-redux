import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTrips } from '../actions';
import { Trips } from '../components';
import HeaderContainer from './header';


export default function HomeContainer() {
    console.log(getTrips());
    return (
         <React.Fragment>
             <HeaderContainer />
             <Trips>
                 <Trips.CityNameContainer>
                     <Trips.CityName>Antananarivo</Trips.CityName>
                 </Trips.CityNameContainer>
             </Trips>
        </React.Fragment>
    )
}
