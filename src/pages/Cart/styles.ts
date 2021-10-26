import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px 10px 0;
  background-color: #FFF;
  flex: 1;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  align-self: center;
  font-family: 'Poppins_400Regular';
  font-size: ${RFValue(13)}px;
`;

export const Footer = styled.View``;

export const TotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const TotalLabel = styled.Text`
  font-family: 'Poppins_500Medium';
  font-size: ${RFValue(16)}px;
`;

export const TotalValue = styled.Text`
  font-family: 'Poppins_700Bold';
  color: #F28705;
  font-size: ${RFValue(18)}px;
`;