import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  margin-right: 5px;
  width: ${RFPercentage(24)}px;
  align-items: center;
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Image = styled.Image`
  width: ${RFPercentage(16)}px;
  height: ${RFPercentage(16)}px;
  border-radius: 20px;
  z-index: 1;
`;

export const Content = styled.View`
  margin-top: ${RFPercentage(-11)}px;
  height: ${RFPercentage(30)}px;
  width: ${RFPercentage(20)}px;
  border-radius: 20px;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: 'Poppins_500Medium';
  font-size: ${RFValue(16)}px;
  margin-top: ${RFPercentage(12)}px;
  margin-left: 5px;
`;

export const Price = styled.Text`
  font-family: 'Poppins_700Bold';
  margin: ${RFPercentage(1)}px 0;
  font-size: ${RFValue(19)}px;
  color: #F28705;
`;

export const CartAddContainer = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: #034C8C;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const CartContainer = styled.View`
  width: 100%;
  height: 40px;
  background-color: #034C8C;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  flex-direction: row;
  justify-content: space-around;
`;

export const CartLeft = styled.TouchableOpacity`
  flex:1;
  align-items: center;
  justify-content: center;
  background-color: #f34336;
  height: 100%;
  border-bottom-left-radius: 20px;
`;

export const CartQuantityContainer = styled.View`
  background-color:#FFF;
  flex: 2;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

export const CartQuantityText = styled.Text`
  color: #034C8C;
  font-family: 'Poppins_700Bold';
  font-size: ${RFValue(16)}px;
`;

export const CartRight = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
`;