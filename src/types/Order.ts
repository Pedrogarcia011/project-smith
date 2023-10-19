export type Order = {
  id: number;
  userId: number;
  productId?: number;
};

export type OrderRes = {
  id: number;
  userId: number;
  productIds: { id: number }[];
};

export type IdOrder = {
  id: number;
  userId: number;
  productIds: number[];
};