import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})`
    background: #000;
    flex: 1;
`;

export const HeaderContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
`;

export const BalanceContainer = styled.View`
    flex-direction: row;
    align-items: center;

    margin: 10px 0;
`;

export const Value = styled.Text`
    font-size: 38px;
    color: #FFF;    
    font-weight: 200;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
    margin-left: 10px;
`;

export const Info = styled.Text`
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
`;

export const Actions = styled.View`
    flex-direction: row;
    margin-top: 40px;

`;

export const Action = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(255, 255, 255, 0.6);

    width: 130px;
    height: 45px;

    border-radius: 25px;
    margin: 0 10px;
`;

export const ActionDescription = styled.Text`
    font-size: 16px;
    color: #FFF;
    margin-left: 10px;
`;

export const UseBalance = styled.View`
    background: #1C1C13;
    height: 60px;
    flex-direction: row;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
`;

export const PaymentMethods = styled.View`
    margin-top: 25px;
    padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
    color: #8E8E93;
    text-transform: uppercase;
`;

export const Card = styled.View`
    background: #1E232A;
    padding: 20px;
    border-radius: 8px;

    margin: 10px 15px;
`;

export const CardBody = styled.View`
    flex-direction: row;
`;

export const CardDetails = styled.View`
    flex: 1;
    margin-right: 25px;
`;

export const CardTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
`;

export const CardInfo = styled.Text`
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 15px;
`;

export const Img = styled.Image`
    width: 60px;
`;

export const AddContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 25px;  
`;

export const AddDescription = styled.Text`
    color: #0DB060;
    font-size: 18px;
    font-weight: bold;
    margin-left: 15px;
`;

export const UseTicketButton = styled.TouchableOpacity`
    align-self: center;
    flex-direction: row;

    margin: 25px 0;
`;

export const UseTicketDescription = styled.Text`
    color: #0DB060;
    font-size: 16px;
    font-weight: bold;
    margin-left: 15px;
    text-decoration-line: underline;
`;
