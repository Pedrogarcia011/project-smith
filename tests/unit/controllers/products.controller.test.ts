import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import ProductController from '../../../src/controller/products.controller';
import productsService from '../../../src/service/products.service';
import productsController from '../../../src/controller/products.controller';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('deve criar um novo produto controller', async function () {
    req.body = {
      name: 'Martelo de Thor',
      price: '30 peças de ouro',
      orderId: 4,
    };

    await ProductController.createdProduct(req, res)

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(sinon.match({ name: 'Martelo de Thor', price: '30 peças de ouro' }));
  })

/*   it('deve retornar um erro interno do servidor em caso de erro', async function () {
    req.body = {
      name: 2,
      price: '30 peças de ouro',
      orderId: 4,
    };

    await ProductController.createdProduct(req, res)

    expect(res.status).to.have.been.calledWith(500);
  } )
 */
});
