import React from 'react';
import { Text } from 'react-native';
import { Product } from '../../interfaces';
import { CartContainer, Container, Content, Image, Price, Title } from './styles';
import { Ionicons } from '@expo/vector-icons';

export function ProductCard({ name, image, price }: Partial<Product>){
  return (
    <Container>
      <Image 
        source={{uri: image}}
      />
      <Content>
        <Title>{name}</Title>
        <Price>${price}</Price>
        <CartContainer>
          <Ionicons name="add-outline" size={28} color="#fff" />
        </CartContainer>
      </Content>
    </Container>
  );
}

export default ProductCard;