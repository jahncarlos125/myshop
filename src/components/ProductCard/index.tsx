import React from 'react';
import { Text } from 'react-native';
import { Product } from '../../interfaces';
import { CartContainer, Container, Content, Image, Price, Title } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../contexts/app';

export function ProductCard({ product }: {product: Product}){
  const { addProductInCart } = useApp();
  const { image, name, price } = product;
  return (
    <Container>
      <Image 
        source={{uri: image}}
      />
      <Content>
        <Title>{name}</Title>
        <Price>${price}</Price>
        <CartContainer 
          onPress={() => addProductInCart(product)}
        >
          <Ionicons name="add-outline" size={28} color="#fff" />
        </CartContainer>
      </Content>
    </Container>
  );
}

export default ProductCard;