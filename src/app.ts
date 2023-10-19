import express from 'express';
import productsController from './controller/products.controller';
import orderController from './controller/order.controller';

const app = express();

app.use(express.json());

app.post('/products', productsController.createdProduct);
app.get('/products', productsController.listProductController);
app.get('/orders', orderController.listOrderController);

export default app;
