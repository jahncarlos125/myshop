import { useNavigation } from '@react-navigation/core';
import React, { useLayoutEffect } from 'react';
import { FlatList, View } from 'react-native';
import { TouchableOpacity, Text } from 'react-native';
import { useApp } from '../../contexts/app';
import ProductCard from '../../components/ProductCard';
import { Container, CartBtnContainer, CartIcon, Badge, BadgeText } from './styles';

// import { Container } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { products, cart } = useApp();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CartBtnContainer>
          {cart.length > 0 && (
            <Badge>
              <BadgeText>{cart.length}</BadgeText>
            </Badge>
          )}
          <CartIcon name="shoppingcart" size={24} color="#FFF" />
        </CartBtnContainer>
      ),
      title: "Brito's shop"
    })
  })

  return (
    <Container>
      <FlatList 
        data={products}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <ProductCard 
            product={item}
          />
        )}
      />
    </Container>
  )
}

export default Home;