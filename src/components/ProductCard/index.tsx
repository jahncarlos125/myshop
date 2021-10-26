import React from 'react';
import NumberFormat from 'react-number-format';
import { Product } from '../../interfaces';
import { CartAddContainer, CartContainer, CartLeft, CartQuantityContainer, CartQuantityText, CartRight, Container, Content, Image, Price, Title } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../contexts/app';

export function ProductCard({ product }: {product: Product}){
  const { addProductInCart, cart, removeProductInCart, currencyFormat } = useApp();
  const { image, name, price, id } = product;
  const index = cart.findIndex((item) => item.id === id);

  return (
    <Container>
      <Image 
        source={{uri: image}}
      />
      <Content>
        <Title>{name}</Title>
        <Price>{currencyFormat(Number(price))}</Price>
        {
          index !== -1 ?
          (
          <CartContainer>
            <CartLeft onPress={() => removeProductInCart(product)}>
              <Ionicons name="remove" size={28} color="#fff" />
            </CartLeft>
            <CartQuantityContainer>
              <CartQuantityText>{cart[index].quantity || 0}</CartQuantityText>
            </CartQuantityContainer>
            <CartRight onPress={() => addProductInCart(product)}>
              <Ionicons name="add-outline" size={28} color="#fff" />
            </CartRight>
          </CartContainer>
          ):
          (
            <CartAddContainer 
              onPress={() => addProductInCart(product)}
            >
              <Ionicons name="add-outline" size={28} color="#fff" />
            </CartAddContainer>
          )
        }
      </Content>
    </Container>
  );
}

export default ProductCard;