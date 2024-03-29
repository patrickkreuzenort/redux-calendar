import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { HeaderTable } from './HeaderTable';
import { BodyTable } from './BodyTable';

// import functions, which manipulate of slice
import { incrementIfSmaller, decrementIfBigger } from '../slice'
import { selectCountPlannerMonth, selectCountPlannerYear } from '../selectors';

// functions to clear cells
import { 
    clearEmptyCells, 
    insertRemainingCells,
    insertAllRemainingCells,
    specifyNumber
} from '../slice';

export function Calendar() : JSX.Element {

    // Used to dispatch slice actions
    const dispatch = useDispatch();

    const month = useSelector(selectCountPlannerMonth);
    const year = useSelector(selectCountPlannerYear);

    // 1 - function to clear cells after month change
    useEffect(() => {
        console.log('clearEmptyCells');
        dispatch(clearEmptyCells());
        console.log('clearEmptyCells finished');
    },[month]);

    
    // 2 - funtion to insert remaining cells in first row
    useEffect(() => {
        console.log('insertRemainingCells');
        dispatch(insertRemainingCells());
        console.log('insertRemainingCells finished');
    },[month]);
    
    
    // 3 - funtion to insert all remaing cells in all remaining cells
    useEffect(() => {
        console.log('insertAllRemainingCells');
        dispatch(insertAllRemainingCells());
        console.log('insertAllRemainingCells finished');
    },[month]);

        
    // 4 - funtion to specifyNumber
    useEffect(() => {
        console.log('specifyNumber');
        dispatch(specifyNumber());
        console.log('specifyNumber finished');
    },[month]);
    

    return (
        <>
            <CalendarWrapper>
                    <div className="first-button">
                        <button onClick={() => dispatch(decrementIfBigger())}>
                            -
                        </button>
                    </div>
                    <div className="calendar-header">
                        <h2>{month}.{year}</h2>
                    </div>
                    <div className="second-button">
                        <button onClick={() => dispatch(incrementIfSmaller())}>
                            +
                        </button>
                    </div>
            </CalendarWrapper>
            <CalendarTable>
                <HeaderTable/>
                <BodyTable/>
            </CalendarTable>
        </>
    )

}

const CalendarWrapper = styled.div`

    display: flex;
    flex-flow: row;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: space-between;

`;

const CalendarTable = styled.table`

    width: 1024px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

`;