export interface Product {
  id: string;
  createdAt: string;
  name: string;
  price: string;
  image: string;
  stock: number;
};

export interface ProductCart extends Product {
  quantity: number;
}