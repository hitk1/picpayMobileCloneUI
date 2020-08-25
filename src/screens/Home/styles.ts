import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #000;
`;

export const ScrollContainer = styled.ScrollView`
    
`;

export const Header = styled.View`
    height: 50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BalanceWrapper = styled.View``;

export const BalanceTitle = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    text-align: center;
`;

export const Balance = styled.Text`
    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`;

