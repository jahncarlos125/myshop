import { useNavigation } from '@react-navigation/core';
import React, { useLayoutEffect } from 'react';
import { FlatList, View } from 'react-native';
import { TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useApp } from '../../contexts/app';

// import { Container } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { products } = useApp();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <AntDesign name="shoppingcart" size={24} color="#0E1D47" />
        </TouchableOpacity>
      ),
      title: "Brito's shop"
    })
  })

  return (
    <FlatList 
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <Text>{item.name}</Text>
      )}
    />
  )
}

export default Home;