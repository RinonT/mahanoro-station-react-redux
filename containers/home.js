import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTrips } from '../actions';
import { Trips } from '../components';
import HeaderContainer from './header';


export default function HomeContainer() { 
    const trips = useSelector((state) => state.trips);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrips())
    }, [])

    // City's element
    const cityNamesArr = trips !== [] && trips.map(trip => trip.destination);
    // Remove duplicated names in the array
    const removeDuplicatedCityNames = cityNamesArr.filter((data, index) => {
        return cityNamesArr.indexOf(data) === index;
    })

    const cityNamesEl = trips !== [] && removeDuplicatedCityNames.map(destination => {
        return (
            <Trips.CityNameContainer key={destination}>
                <Link to={`/city/${destination}`}>
                    <Trips.CityName>{destination}</Trips.CityName>
                </Link>
            </Trips.CityNameContainer>
        )
    })

    return (
        <React.Fragment>
            <HeaderContainer />
            <Trips>
                {cityNamesEl}
            </Trips>
        </React.Fragment>
    )
}
