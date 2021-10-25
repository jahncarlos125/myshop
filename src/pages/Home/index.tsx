import { useNavigation } from '@react-navigation/core';
import React, { useLayoutEffect } from 'react';
import { FlatList, View } from 'react-native';
import { TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useApp } from '../../contexts/app';
import ProductCard from '../../components/ProductCard';
import { Container } from './styles';

// import { Container } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { products } = useApp();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <AntDesign name="shoppingcart" size={24} color="#FFF" />
        </TouchableOpacity>
      ),
      title: "Brito's shop"
    })
  })

  return (
    <Container>
      <FlatList 
        data={products}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ProductCard 
          name={item.name}
          image={item.image}
          price={item.price}
          />
        )}
      />
    </Container>
  )
}

export default Home;