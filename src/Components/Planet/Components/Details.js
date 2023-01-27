import styled from 'styled-components';

import Loader  from './Loader';

const DetailsCard = styled.div`
    display: block;
    width: 100%;
    flex: 0 0 100%;
    background-color: #4f66d9;

    .card-headline {
        color: #8599ff
    }

    li {
        > span {
            font-style: italic;
            font-weight: 700;
            color: #8599ff;
        }
    }

    .planet-name {
        margin-bottom: 25px;

        > span {
            font-size: 25px;
            font-weight: 700;
            font-style: italic;
            display: block;
        }
    }
`;

export default function Details(props) {
    const { name, population, diameter, climate, terrain } = props.planet;

    return (
        <DetailsCard>
            <div>
                <h2 className="card-headline">Basic info:</h2>
                {
                    props.planet.length === 0 ? <Loader /> :
                    <div>
                        <ul>
                            <li className="planet-name">Name: <span>{ name }</span></li>
                            <li>Population: <span>{ population }</span></li>
                            <li>Diameter: <span>{ diameter }</span></li>
                            <li>Climate: <span>{ climate }</span></li>
                            <li>Terrain: <span>{ terrain }</span></li>
                        </ul>
                    </div>
                }
            </div>
        </DetailsCard>
    );
}