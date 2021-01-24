import { PayloadAction } from '@reduxjs/toolkit';
// Importing from `utils` makes them more type-safe ✅
import { createSlice } from 'utils/@reduxjs/toolkit';
import { CalendarState } from './types';
import { RootState } from 'types';
import { AppThunk } from 'store/configureStore';

// those functions are for year manipulation
import { yearUpdateInc, yearUpdateDec } from './functions/yearUpdate';
// those functions are for month manipulation
import { monthUpdateInc, monthUpdateDec } from './functions/monthUpdate';
// this function returns the amount of days in given month
import { monthDaysAmount } from './functions/monthDaysAmount';
// this function returns the amount of days in given month
import { firstDayReturner } from './functions/firstDayReturner';
// this function returns the amount of days in given month
// this function returns the amount of days in given month
import { rowsAmountReturner } from './functions/rowsAmountReturner';

// The initial state of the Calendar container
export const initialState: CalendarState = {

  value: new Date().toLocaleTimeString(),

  day: new Date().getDate(),

  month: (new Date().getMonth() + 1),

  year: (new Date().getFullYear()),
  
  // all three are the same and return total amount
  amount: (new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()),
  
  initialAmount: (new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate()),
  
  lastingDaysAmount: (new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate()),
  //
  rowsAmount: (new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDay() +1)/7,
  
  firstDay: (new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDay()+1),
  
  lastDayXPosition: 0,
  
  firstDaySecondRow: 0,
  
  register: [],
  
  choosedDate : '',
  
  choosedYear : new Date().getFullYear(),
}

const calendarPageSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    refreshPlanner(state) {
      // it refreshes to the initial value
      state.value = new Date().toLocaleTimeString(); 
    },
    incrementMonth(state) {
      state.year = yearUpdateInc(state.month,state.year);
      state.month = monthUpdateInc(state.month);
      state.amount = monthDaysAmount(state.month,state.year);
      state.firstDay = firstDayReturner(state.month,state.year);
      state.lastingDaysAmount = monthDaysAmount(state.month,state.year);
      state.rowsAmount = rowsAmountReturner(state.month,state.year);
    },
    decrementMonth(state) {
      state.year = yearUpdateDec(state.month,state.year);
      state.month = monthUpdateDec(state.month);
      state.amount = monthDaysAmount(state.month,state.year);
      state.firstDay = firstDayReturner(state.month,state.year);
      state.lastingDaysAmount = monthDaysAmount(state.month,state.year);
      state.rowsAmount = rowsAmountReturner(state.month,state.year);
    },
    decreaseYear(state) {
      state.year -= 1;
    },
    increaseYear(state) {
      state.year -= 1;
    },
    changeRemainingDaysAmount(state) {
      state.lastingDaysAmount -= 1;
    },
    changeRemainingRowsAmount(state,action: PayloadAction<number>) {
      state.rowsAmount = action.payload;
    },
    setXDirectionOfLastDate(state,action: PayloadAction<number>) {
      state.lastDayXPosition = Number.parseInt((action.payload).toFixed(1));
    },
    changeFirstDaySecondRow(state,action: PayloadAction<number>) {
      state.firstDaySecondRow = Number.parseInt((action.payload).toFixed(1));
    },
    initialiseLastingDays(state,action: PayloadAction<number>) {
      state.lastingDaysAmount = Number.parseInt((action.payload).toFixed(1));
    },
    changeRegister(state,action: PayloadAction<number[]>) {
      state.register = action.payload;
    },
    chooseDate(state,action: PayloadAction<string>) {
      state.choosedDate = action.payload;
    },
    chooseYear(state,action: PayloadAction<number>) {
      state.choosedYear = action.payload;
    },
  }
});

// 'reducer' will be used to add this slice with injection to our Redux store
// 'actions' will be used to trigger change in the state from where ever you want
//  name will be used to add this slice to the Redux store

export const { actions, reducer, name: sliceKey } = calendarPageSlice;

export const incrementIfSmaller = () : AppThunk => {
  return (dispatch) => {
    dispatch(actions.incrementMonth());
  }
}

export const decrementIfBigger = () : AppThunk => {
  return (dispatch) => {
    dispatch(actions.decrementMonth());
  }
}

//this function is fired 1st and it is for clearing all data placed previously in the calendar
export const clearEmptyCells = () : AppThunk => {
  return () => {

    // firstly clear existing data for all rows
    for (let i:number = 1; i <= 7; i++) {
      let targetAreaToFree : NodeList = document.querySelectorAll(`[data-x='${i}']`);
      for (const el of  <any>targetAreaToFree) {
        el.innerHTML = '';
        if (el.classList.contains("contains_clickable_data")) {
          el.classList.remove("contains_clickable_data");
        }
      }
    }
  }
}

// FIRST ROW -------------------------------------------
export const insertRemainingCells = (): AppThunk => {

  return (dispatch,getState) => {
    
    const state: RootState = getState();

    // secondly: initialise the lasting days, use "EXCLAMATION MARK"
    console.log('insertRemainingCells');

    console.log('month: ' + state.calendar!.month);
    console.log('year: ' + state.calendar!.year);

    const initialValue : number = monthDaysAmount(state.calendar!.month, state.calendar!.year);
    dispatch(actions.initialiseLastingDays(initialValue));
    
    // firstDay
    let emptyAmount: number = state.calendar!.firstDay;
    let amount: number = 7 - emptyAmount;

    let lastingDays = state.calendar!.lastingDaysAmount;
    let daysAmountTotal = state.calendar!.amount;
    console.log('insertRemainingCells: ')
    console.log('lastingDays: ' + lastingDays);
    console.log('lastingDays: ' + daysAmountTotal);

    // this for loop is for inserting data only in the first row
    for (let j: number = 0; j <= amount; j++) {

      // We use querySelector because it returns the first element within the document that matches the specified selector
      let targetArea: Element | any = document.querySelector(`[data-x='${emptyAmount + j}']`);
      console.log(targetArea);

      // we insert 1 in it's current position, so according to week's day
      targetArea.innerHTML = `${j+1}`;

      // apply class to differentiate elements
      targetArea.classList.add("contains_clickable_data");

      // for each iteration we substract a value from the initial pool, returned by function
      dispatch(actions.changeRemainingDaysAmount());
    }

    console.log('loop finishes. Time for all remaining rows.')

    // final operation is to recalculate the following:
    // 1. change remaning rows amount
    // 2. set x direction of last date
    // 3. change first day in a second calendar's row

    dispatch(rowsAmountReturnerFellow());

  }
}

// SECOND ROW -------------------------------------------
export const insertAllRemainingCells = (): AppThunk => {

  return (dispatch,getState) => {

    console.log('this functions works as a last one');
    
    const state: RootState = getState();

    let startingDay = state.calendar!.firstDaySecondRow;
    let rowsAmount = state.calendar!.rowsAmount;
    let daysAmount = state.calendar!.lastingDaysAmount;
    let initialAmount = state.calendar!.initialAmount;

    console.log('we are starting the second row:');

    for (let j: number = 2; j <= rowsAmount; j++) {
      // we are staring with a second row, so iterator starts with 2
      let targetArea : NodeList = document.querySelectorAll(`[data-y='${j}']`);
      console.log('new loop starts');

      for (const el of <any>targetArea) {
      //daysAmount - this is the reason why we need 2 initally same values
        if (startingDay > state.calendar!.amount) {
            break;
        }
        el.innerHTML = `${startingDay}`;
        el.classList.add("contains_clickable_data");
        startingDay++;
        } 
    }

    dispatch(rowsAmountReturnerFellow());
  }
}

export const rowsAmountReturnerFellow = (): AppThunk => {
  // this functions works as a synchronizer for next operations
  return (dispatch,getState) => {

    const state: RootState = getState();

    // from now the remaining days amount is equal to:
    console.log('this functions works as a synchronizer for next operations');

    let lastingDays = state.calendar!.lastingDaysAmount;
    console.log('lastingDays: ' + lastingDays);
    let daysAmountTotal = state.calendar!.amount;
    console.log('daysAmountTotal: ' + daysAmountTotal);

    let lastingDayYDirection: number = lastingDays/7;
    let lastingRows: number = Math.floor((lastingDays/7) + 2);
    let lastDayXDirection: number = Math.abs(Math.floor(lastingDayYDirection) - parseInt(lastingDayYDirection.toFixed(2),10));
    let firstDaySecondRow = daysAmountTotal - lastingDays;

    dispatch(actions.changeRemainingRowsAmount(lastingRows));
    dispatch(actions.setXDirectionOfLastDate(lastDayXDirection*7));
    dispatch(actions.changeFirstDaySecondRow(firstDaySecondRow+1));

    console.log('synchronizer finishes operations');

  }
}

// specify number is a function to highlight the current day
export const specifyNumber = () : AppThunk => {
  return (dispatch,getState) => {

    // first part = clear existing data:
    const state = getState();
    let month = new Date().getMonth() + 1;
    if (state.calendar!.month !== month) {
      let targets_existing = document.getElementsByClassName('today');
      if (targets_existing.length) {
        for (const item of <any>targets_existing) {
          item.classList.remove('today');
        }
      }
      return;
    }
    // calendar is cleared

    // second part = specify the current day
    let targets = document.getElementsByClassName('contains_clickable_data');
    if (targets.length) {
      for (const item of <any>targets) {
        // apply class 'today'
        if (Number.parseInt(item.innerHTML) === new Date().getDate()) {
          item.classList.add('today');
          console.log('today class added');
        }
      }
    }

  }
} 