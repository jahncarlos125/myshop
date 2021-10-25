import styled from 'styled-components/native';

export const Container = styled.View`
  margin-right: 5px;
  height: 300px;
  width: 100%;
  align-items: center;
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Image = styled.Image`
  width: 90%;
  height: 200px;
  border-radius: 20px;
  z-index: 1;
`;

export const Content = styled.View`
  width: 100%;
  height: 240px;
  margin-top: -150px;
  border-radius: 20px;
  background-color: #fff;
  padding-left: 15px;
`;

export const Title = styled.Text`
  font-family: 'Poppins_500Medium';
  font-size: 21px;
  margin-top: 160px;
`;

export const Price = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: 25px;
  color: #F28705;
`;

export const CartContainer = styled.TouchableOpacity`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #034C8C;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;