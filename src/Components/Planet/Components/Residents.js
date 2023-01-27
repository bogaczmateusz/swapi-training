import styled from 'styled-components';

import Loader  from './Loader';
import ResidentItem from "./ResidentItem";

const ResidentCard = styled.div`
    display: block;
    width: 100%;
    background-color: #704fc1;

    table {
        width: 100%;
        cellspacing: 0;
        cellpadding: 0;
        border-collapse: collapse;
        margin: 0;
        padding: 0;
        background-color: #af8eff;

        tbody {
            tr {
                &:first-child td {
                    padding-top: 10px;
                }

                &:last-child td {
                    padding-bottom: 10px;
                }

                &:nth-child(even) {
                    background-color: #a584f7;
                }
            }
        }

        th {
            text-align: left;
            background-color: #8564d7;
            padding: 10px;
        }

        td {
            padding:  5px 10px;
        }
    }

    .card-headline {
        color: #af8eff;
    }
`;

export default function Residents({ residents }) {
    return (
        <ResidentCard>
            <div>
                <h2 className="card-headline">Residents:</h2>
                {
                    residents.length === 0 ? <Loader /> :
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Height</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {residents.map(resident => <ResidentItem key={resident.name.toLowerCase().replace(/\s/g, '')} data={resident} />)}
                        </tbody>
                    </table>
                }
            </div>
        </ResidentCard>
    );
}