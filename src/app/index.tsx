/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { Calendar } from './containers/CalendarPage/Loadable';

import { NotFoundPage } from './containers/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Redux Calendar"
        defaultTitle="Redux Calendar"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Redux Calendar" />
      </Helmet>

      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route path={process.env.PUBLIC_URL + '/calendar'} component={Calendar} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
