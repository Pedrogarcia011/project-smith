import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

async function createProduct(product: ProductInputtableTypes): Promise<Product> {
  const createdProduct = await ProductModel.create(product);

  const newProduct = createdProduct.dataValues;

  return newProduct;
}

export default {
  createProduct,
};