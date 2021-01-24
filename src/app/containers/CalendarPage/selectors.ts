import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';
import { RootState } from 'types';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.calendar || initialState;

export const selectCountPlannerTime = createSelector(
  [selectDomain],
  calendar => calendar.value,
);

export const selectCountPlannerMonth = createSelector(
  [selectDomain],
  calendar => calendar.month,
);

export const selectCountPlannerYear = createSelector(
  [selectDomain],
  calendar => calendar.year,
);

export const selectCountPlannerDaysAmount = createSelector(
  [selectDomain],
  calendar => calendar.amount,
);

export const selectCountPlannerFirstDay = createSelector(
  [selectDomain],
  calendar => calendar.firstDay,
);

export const selectCountPlannerLastingDays = createSelector(
  [selectDomain],
  calendar => calendar.lastingDaysAmount,
);

export const selectCountPlannerRowsAmount = createSelector(
  [selectDomain],
  calendar => calendar.rowsAmount,
);

export const selectCountXDirectionOfLastDate = createSelector(
  [selectDomain],
  calendar => calendar.lastDayXPosition,
);

export const selectCountStartingDaySecondRow = createSelector(
  [selectDomain],
  calendar => calendar.firstDaySecondRow,
);

export const registerList = createSelector(
  [selectDomain],
  calendar => calendar.register,
);

export const choosedDate = createSelector(
  [selectDomain],
  calendar => calendar.choosedDate,
);

export const choosedYear = createSelector(
  [selectDomain],
  calendar => calendar.choosedYear,
);

export const choosedMonth = createSelector(
  [selectDomain],
  calendar => calendar.month,
);