import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { IdOrder, OrderRes } from '../types/Order';

async function listOrderService(): Promise<IdOrder[]> {
  try {
    const order = await OrderModel.findAll({
      include: [
        {
          model: ProductModel,
          as: 'productIds',
          attributes: ['id'],
        },
      ],
    }) as unknown as OrderRes[];
        
    return order.map((indexOrder) => {
      const productIds = indexOrder.productIds.map((product) => product.id).sort();
      return { id: indexOrder.id, userId: indexOrder.userId, productIds,
      };
    });    
  } catch (error) {
    throw new Error('Erro Servidor');
  }
}

export default {
  listOrderService,
};