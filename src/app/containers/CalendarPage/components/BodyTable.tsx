import React from 'react';

import { BodyTableCreator } from './BodyTableCreator/BodyTableCreator';

export function BodyTable() : JSX.Element {
   
   return (
    <tbody>
        <BodyTableCreator row={1} keys={1}/>
        <BodyTableCreator row={2} keys={2}/>
        <BodyTableCreator row={3} keys={3}/>
        <BodyTableCreator row={4} keys={4}/>
        <BodyTableCreator row={5} keys={5}/>
        <BodyTableCreator row={6} keys={6}/>
    </tbody>
)

}
