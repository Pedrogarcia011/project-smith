import express from 'express';
import productsController from './controller/products.controller';

const app = express();

app.use(express.json());

app.post('/products', productsController.createdProduct);

export default app;
