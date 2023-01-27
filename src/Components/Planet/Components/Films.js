import styled from 'styled-components';

import Loader  from './Loader';
import FilmItem from "./FilmItem";

const FilmsCard = styled.div`
    display: block;
    width: 100%;
    background-color: #884fab;

    .card-headline {
        color: #be7fe5;
    }

    ul {
        display: flex;
        flex-wrap: wrap;

        li {
            display: block;
            padding: 5px 10px;
            margin: 0 15px 15px 0;
            border-radius: 10px;
            overflow: hidden;
            background-color: #bf84e3;
            transform: translate3d(0, 0, 0);
        }
    }
`;

export default function Films({ films }) {
    return (
        <FilmsCard>
            <div>
                <h2 className="card-headline">Films:</h2>
                {
                    films.length === 0 ? <Loader /> :
                    <div>
                        <ul>
                            {films.map(film => <FilmItem key={film.title.toLowerCase().replace(/\s/g, '')} data={film} />)}
                        </ul>
                    </div>
                }
            </div>
        </FilmsCard>
    );
}