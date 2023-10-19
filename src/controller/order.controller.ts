import { Request, Response } from 'express';
import orderService from '../service/order.service';

async function listOrderController(req: Request, res: Response): Promise<void> {
  try {
    const orderResponse = await orderService.listOrderService();

    res.status(200).json(orderResponse);
  } catch (error) {
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
}

export default {
  listOrderController,
};