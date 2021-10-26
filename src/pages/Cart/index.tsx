import React, { useLayoutEffect } from 'react';
import { Container, Footer, EmptyText, TotalContainer, TotalLabel, TotalValue } from './styles';
import { useApp } from '../../contexts/app';
import { FlatList, Text } from 'react-native';
import ProductCart from '../../components/ProductCart';

function Cart({ navigation }){
  const { cart, total } = useApp();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Meu carrinho"
    })
  })

  if(cart.length > 0){
    return (
      <Container>
        <FlatList 
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <ProductCart product={item}/>
          )}
        />
        <Footer>
          <TotalContainer>
            <TotalLabel>Total</TotalLabel>
            <TotalValue>${total}</TotalValue>
          </TotalContainer>
        </Footer>
      </Container>
    );
  }

  return (
    <Container>
      <EmptyText>Não ha nada no carrinho</EmptyText>
    </Container>
  )
}

export default Cart;