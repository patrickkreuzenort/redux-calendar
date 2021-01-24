export interface CalendarPage {
  // EXPLANATION: value is new Date().toLocaleTimeString() and it returns string value like: "2021-1-20 21:51:45"
  value: string;
    // EXPLANATION: day is new Date().getDate() and it returns number value
  day: number;
    // EXPLANATION: month is new Date().getMonth() + 1 and it returns number value
  month: number;
    // EXPLANATION: year is new Date().getFullYear() and it returns number value
  year: number;
    // EXPLANATION: amount AND initialAmount is new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate() and it returns number of days in CURRENT month
  amount: number;
  initialAmount: number;
   // EXPLANATION: lastingDayAmount is new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate() and it returns number of days in CURRENT month
  lastingDaysAmount: number;
    // EXPLANATION: amount is new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()/7 and it 
  rowsAmount: number;
    // EXPLANATION: firstDay is new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDay() +1 and it returns 
  firstDay: number;
    // EXPLANATION: lastDayXPosition is initially 0
  lastDayXPosition: number;
    // EXPLANATION: startingDaySecondRow is initially 0
  firstDaySecondRow: number;
    // EXPLANATION: register is initially an empty table
  register: number[];
    // EXPLANATION: choosed date is from calendar
  choosedDate : string;
    // EXPLANATION: choosedYear is a year, which is manipulated
  choosedYear : number;
}
/* 
  If you want to use 'CalendarState' keyword everywhere in your feature folder, 
  instead of the 'CalendarPage' keyword.
*/
export type CalendarState = CalendarPage;