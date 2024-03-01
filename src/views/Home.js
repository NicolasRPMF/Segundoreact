// Home.js
import React from 'react';
import ContainerComponent from '../components/ContainerComponent';
import VisualComponent from '../components/VisualComponent';

const Home = () => {
  return (
    <VisualComponent>
      <h1>Home Page</h1>
      <ContainerComponent />
    </VisualComponent>
  );
};

export default Home;
