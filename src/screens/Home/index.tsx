import React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import Suggestions from '../../components/Suggestions'
import Activities from '../../components/Activities'
import Tips from '../../components/Tips'
import Banner from '../../components/Banner'

import { Container, ScrollContainer, Header, BalanceWrapper, BalanceTitle, Balance } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <ScrollContainer>
        <Header>
          <MaterialCommunityIcon name="qrcode-scan" size={30} color="#10C86E" />

          <BalanceWrapper>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 100,00</Balance>
          </BalanceWrapper>

          <AntDesign name="gift" size={30} color="#10C86E" />
        </Header>

        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </ScrollContainer>
    </Container>
  );
}

export default Home;