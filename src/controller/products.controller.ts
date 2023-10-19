import { Request, Response } from 'express';
import { Product } from '../types/Product';
import productsService from '../service/products.service';

async function createdProduct(req: Request, res: Response): Promise<void> {
  try {
    const productData = req.body as Product;

    const createeProduct = await productsService.createProduct(productData);

    res.status(201).json(createeProduct);
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

async function listProductController(req: Request, res: Response): Promise<void> {
  try {
    const products = await productsService.listProductService();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
}

export default {
  createdProduct,
  listProductController,
};