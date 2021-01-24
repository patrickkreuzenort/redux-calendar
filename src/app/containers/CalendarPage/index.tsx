import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from '../../components/Link';
import { PageWrapper } from '../../components/PageWrapper';
import { Div_Flex_Space_Between } from '../../components/Div_Flex_Space_Between';
import { Calendar } from './components/Calendar';
import { useInjectReducer } from 'utils/redux-injectors';
import { sliceKey, reducer, actions, initialState } from './slice';

import { selectCountPlannerTime } from './selectors';

import { Helmet } from 'react-helmet-async';

export function CalendarPage() {

  // Used to dispatch slice actions
  const dispatch = useDispatch();

  // Inject the slice to Redux
  useInjectReducer({ key: sliceKey, reducer: reducer });

  // `selectors` are used to read the state.
  const time = useSelector(selectCountPlannerTime);

  // useEffect is used to "reset" the value to the initial
  React.useEffect(() => {
    setInterval(() => {
      dispatch(actions.refreshPlanner());
    }, 1000);
  },[]);

  return (
    <>
      <Helmet>
        <title>Redux Calendar Page</title>
        <meta name="description" content="Redux Calendar Page" />
      </Helmet>
      <Div_Flex_Space_Between>
        <Link to="/">Home</Link>
        <span>{time}</span>
      </Div_Flex_Space_Between>
      <PageWrapper>
        <Calendar/>
      </PageWrapper>
    </>
  );
}
