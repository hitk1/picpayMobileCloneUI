import React from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'

// import { Container } from './styles';

interface IProps {
    onPress(): void
    isFocused: boolean
}

const PayButton: React.FC<IProps> = ({ onPress, isFocused }) => {
  return (
      <TouchableWithoutFeedback
        onPress={onPress}
      >
          <LinearGradient
            colors={ isFocused ? ['#FFF', '#CCC'] : ['#00FC6C', '#00AC4A']}
            start={{x: 1, y: 0.2}}
            style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center'
            }}
      >
          <Icon name="attach-money" color={isFocused ? '#000' : '#FFF'} size={30}/>
          <Text style={{ 
                color: isFocused ? '#000' : '#FFF',
                fontSize: 12
              }}>Pagar</Text>
      </LinearGradient>
      </TouchableWithoutFeedback>
  );
}

export default PayButton;