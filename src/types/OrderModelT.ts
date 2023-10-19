import { ProductSequelizeModel } from '../database/models/product.model';

export type OrderModelT = {
  id: number;
  userId: number;
  // Outras propriedades do modelo Order, se houver
  productIds: ProductSequelizeModel[]; // Certifique-se de que ProductSequelizeModel também está definido corretamente
};
