import React from 'react';
import styled from 'styled-components/macro';

import { Row } from './types';

export function BodyTableCreator(props: Row) : JSX.Element {

    let tabulars : JSX.Element[] = []; 

    for (let i: number = 1; i <= 7; i++) {
        tabulars.push(<Td key={props.keys+'_td_'+i} data-x={i} data-y={props.row}></Td>)
    }

    return (
        <Tr key={props.keys}>{tabulars}</Tr>
    )
}


const Td = styled.td`

    height: 50px;
    width: 140px;
    color: white;
    border-radius: 5px;
    border: 2px solid #222222;
    user-select: none;

`;

const Tr = styled.tr`

`;