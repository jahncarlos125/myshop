import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const CardContainer = styled.View`
  height: 90px;
  flex-direction: row;
  margin-bottom: 10px;
  background-color: #E5E6E8;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const Image = styled.Image`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-radius: 10px;
`;

export const InfoContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: 'Poppins_500Medium';
  font-size: ${RFValue(16)}px;
  margin-left: 10px;
`;

export const Price = styled.Text`
  font-size: ${RFValue(18)}px;
  margin-left: 10px;
  font-family: 'Poppins_700Bold';
  color: #F28705;
`;

export const BtnContainer = styled.View`
  background-color: #FFF;
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
`;

export const AddBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const Quantity = styled.Text`
  font-size: ${RFValue(13)}px;
  padding: 0 12px;
`;

export const RemoveBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;