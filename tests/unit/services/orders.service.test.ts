import chai, { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '.././../../src/database/models/order.model';
import ProductModel from '../../../src/database/models/product.model';
import ListOrderService from '../../../src/service/order.service';
import app from '../../../src/app';
import chaiHttp from 'chai-http';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('deve listar os pedidos com os produtos', async function () {

    const mockOrder = [
      {
        id: 1,
        userId: 1,
        productIds: [1, 2],
      },
      {
        id: 2,
        userId: 2,
        productIds: [3, 4],
      },
    ];

    sinon.stub(ListOrderService, 'listOrderService').resolves(mockOrder);


    const response = await chai.request(app).get('/orders');


    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(mockOrder);
  })
});
