import ProductModel, {
  ProductInputtableTypes, ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';

async function createProduct(product: ProductInputtableTypes): Promise<Product> {
  const createdProduct = await ProductModel.create(product);

  const newProduct = createdProduct.dataValues;

  return newProduct;
}

async function listProductService(): Promise<ProductSequelizeModel[]> {
  const product = await ProductModel.findAll();

  return product;
}

export default {
  createProduct,
  listProductService,
};