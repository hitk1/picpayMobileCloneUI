import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    contentContainerStyle: {
        alignItems: 'center',
    }
}))`
  background: #1E222B;
  height: 130px;
`;

export const Option = styled.View`
    width: 80px;
    margin-right: 16px;
    align-items: center;
`;

export const Img = styled.Image``;

export const Description = styled.Text`
    color: #FFF;
    font-weight: bold;
    margin-top: 8px;
`;

