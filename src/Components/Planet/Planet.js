import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Details from './Components/Details';
import Residents from './Components/Residents';
import Films from './Components/Films';

const AppWrapper = styled.div`
    position: relative;
    display: block;
    margin-bottom: 50px;
    padding: 25px;
    transform: translate3d(0, 0, 0);
    background-color: #071654;

    > h2 {
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        transform: translateY(-100%);
    }

    &:last-child {
        margin-bottom: 0;
    }

    > div {
        margin: 0 0 25px;
        padding: 25px;
        border-radius: 30px;
        overflow: hidden;
        transform: translate3d(0, 0, 0);

        &:first-child {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }

        &:last-child {
            margin-bottom: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }

    ul,
    ol {
        list-style-type: none;
    }

    .card-headline {
        font-size: 45px;
        margin-bottom: 25px;
    }
`;

export default function Planet({ endpoint }) {
    const BASE_URL = 'https://swapi.dev/api/';

    const [ planetData, setPlanetData ] = useState([]);
    const [ planetResidents, setPlanetResidents ] = useState([]);
    const [ planetFilms, setPlanetFilms ] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const getPlanetData = async () => {
            try {
                const response = await fetch(BASE_URL + endpoint, { signal });
                const result = await response.json();

                setPlanetData(result);

                getResidents(result.residents);
                getFilms(result.films);
            } catch (error) {
                console.log("Error", error)
            }
        }

        const getResidents = async (residents) => {
            try {
                const response = await Promise.all(
                    residents.map(url => fetch(url, { signal }).then(res => res.json()))
                )

                setPlanetResidents(response);
            } catch (error) {
                console.log("Error", error)
            }
        }

        const getFilms = async (films) => {
            try {
                const response = await Promise.all(
                    films.map(url => fetch(url, { signal }).then(res => res.json()))
                )

                setPlanetFilms(response);
            } catch (error) {
                console.log("Error", error)
            }
        }

        getPlanetData();

        return () => {
            console.error('React.StrictMode error below called on cleanup. I think that nothing is wrong here.');
            abortController.abort();

            setPlanetData([]);
            setPlanetResidents([]);
            setPlanetFilms([]);
        }
    }, [ endpoint ]);

    return (
        <AppWrapper>
            <Details planet={planetData} />
            <Residents residents={planetResidents} />
            <Films films={planetFilms} />
        </AppWrapper>
    )
}