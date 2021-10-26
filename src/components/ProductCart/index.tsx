import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../contexts/app';
import { 
  CardContainer,
  Image,
  InfoContainer,
  Title,
  Price,
  BtnContainer,
  RemoveBtn,
  Quantity,
  AddBtn
} from './styles';
import { ProductCart as ProductCartInterface } from '../../interfaces';

function ProductCart({ product }: {product: ProductCartInterface}){
  const {removeProductInCart, addProductInCart} = useApp();

  return (
    <CardContainer>
      <Image source={{uri: product.image}} />
      <InfoContainer>
        <Title>{product.name}</Title>
        <Price>${(Number(product.price) * product.quantity)}</Price>
      </InfoContainer>
      <BtnContainer>
        <RemoveBtn onPress={() => removeProductInCart(product)}>
          <Ionicons name="remove" size={24} color="#f34336" />
        </RemoveBtn>
        <Quantity>{product.quantity}</Quantity>
        <AddBtn onPress={() => addProductInCart(product)}>
          <Ionicons name="add-outline" size={24} color="#034C8C" />
        </AddBtn>
      </BtnContainer>
    </CardContainer>
  );
}

export default ProductCart;