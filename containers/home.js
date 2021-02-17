import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTrips } from '../actions';
import { Trips, Header } from '../components';
import thumbsUpIcon from '../utils/thumbs-up.svg';
import taxiBrouseSvg from '../utils/taxi-brousse.svg';



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
                <Trips.Icon src={thumbsUpIcon} alt="thumbs up icon"/>
                <Link to={`/city/${destination}`}>
                    <Trips.CityName>{destination}</Trips.CityName>
                </Link>
            </Trips.CityNameContainer>
        )
    })

    return (
        <React.Fragment>
            <Trips.HeaderContainer>
                <Trips.Icon src={taxiBrouseSvg} alt="A clock image"/>
                <Header.PageTitle>
                    Where are you going?
                </Header.PageTitle>
            </Trips.HeaderContainer>
            <Trips>
                {cityNamesEl}
            </Trips>
        </React.Fragment>
    )
}
