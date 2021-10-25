import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: #B3C5D5;
  padding: 0 10px;
`;

export const CartBtnContainer = styled.TouchableOpacity``;

export const Badge = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 20px;
  background-color: red;
  position: absolute;
  top: -5px;
  right: -5px;
  z-index: 1;
  align-items: center;
  justify-content: center;
`;

export const BadgeText = styled.Text`
  color: #FFF;
`;

export const CartIcon = styled(AntDesign)``;