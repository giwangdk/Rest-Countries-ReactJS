/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from './atoms';
import { Navbar } from './molecules';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container>
        {children}
      </Container>
    </>
  );
}

export default Layout;
