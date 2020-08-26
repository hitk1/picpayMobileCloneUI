import React, { useState, useCallback } from 'react';
import { Switch } from 'react-native'
import Header from 'react-native-linear-gradient';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import creditCardImage from '../../images/credit-card.png'

import {
  Container,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionDescription,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  CardBody,
  AddContainer,
  AddDescription,
  UseTicketButton,
  UseTicketDescription
} from './styles';

const Wallet: React.FC = () => {

  const [isVisible, setIsVisible] = useState(true)
  const [useBalance, setUseBalance] = useState(true)

  const handleToggleBalanceVisibility = useCallback(() => {
    setIsVisible(!isVisible)
  }, [isVisible])

  const handleToggleUseBalance = useCallback(() => {
    setUseBalance(!useBalance)
  }, [useBalance])

  return (
    <Container>
      <Header
        colors={ useBalance ? ['#52E78C', '#1AB563'] : ['#D3D3D3', '#868686']}
        style={{ height: 300 }}
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? '100,00' : '---'}</Bold>
            </Value>

            <EyeButton
              onPress={() => handleToggleBalanceVisibility()}
            >
              <FeatherIcon name={isVisible ? 'eye' : 'eye-off'} size={28} color='#FFF' />
            </EyeButton>

          </BalanceContainer>

          <Info>
            Seu saldo está rendendo 100% do CDI
          </Info>

          <Actions>
            <Action>
              <MaterialCommunityIcon name='cash' size={30} color='#FFF' />
              <ActionDescription>Adicionar</ActionDescription>
            </Action>
            <Action>
              <FontAwesomeIcon name='bank' size={20} color='#FFF' />
              <ActionDescription>Retirar</ActionDescription>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
        <Switch
          value={useBalance}
          onValueChange={() => handleToggleUseBalance()}
        />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Forma de Pagamento</PaymentMethodsTitle>
      </PaymentMethods>
      <Card>
        <CardBody>
          <CardDetails>
            <CardTitle>Cadastre seu cartão de crédito</CardTitle>
            <CardInfo>
              Cadastre seu cartão de crédito para fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
          </CardInfo>
          </CardDetails>

          <Img
            source={creditCardImage}
            resizeMode='contain'
          />
        </CardBody>
        <AddContainer>
          <AntDesignIcon name='pluscircleo' size={30} color='#0DB060' />
          <AddDescription>Adicionar cartão de crédito</AddDescription>
        </AddContainer>
      </Card>

      <UseTicketButton>
        <MaterialCommunityIcon name='ticket-outline' size={20} color='#0DB060' />
        <UseTicketDescription>
          Usar código promocional
        </UseTicketDescription>
      </UseTicketButton>
    </Container>
  );
}

export default Wallet;