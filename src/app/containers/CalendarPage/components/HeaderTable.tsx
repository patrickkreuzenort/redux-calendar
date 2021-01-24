import React from 'react';
import styled from 'styled-components/macro';

export function HeaderTable() : JSX.Element {

    let days : string[] = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    return (
        <thead><tr>{days.map((item : string) => <Th key={item}>{item}</Th>)}</tr></thead>
    )
}


const Th = styled.th`
    
    width: 140px;
    height: 50px;
    background-color: #292F33;
    color: white;
    font-weight: 500;
    border-radius: 5px;
    border: 2px solid #222222;
    padding: 3px;
    pointer: none;
    user-select: none;

`;