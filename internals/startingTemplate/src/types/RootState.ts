import { CalendarState } from 'app/containers/CalendarPage/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/

export interface RootState {
    calendar?: CalendarState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
