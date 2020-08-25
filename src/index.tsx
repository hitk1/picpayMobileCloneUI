import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './routes'

const src: React.FC = () => {
  return (
      <>
        <StatusBar backgroundColor="#000" barStyle="light-content"/>
        <Routes />
      </>
  )
}

export default src;