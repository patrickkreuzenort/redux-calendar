import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from '../NavBar';
import { PageWrapper } from 'app/components/PageWrapper';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home - React Redux Calendar</title>
        <meta
          name="description"
          content="A React Redux Calendar made for mass"
        />
      </Helmet>
      <NavBar />
      <PageWrapper>
      </PageWrapper>
    </>
  );
}
