import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import ProductController from '../../../src/controller/products.controller';
import productsService from '../../../src/service/products.service';
import productsController from '../../../src/controller/products.controller';
import ProductModel from '../../../src/database/models/product.model';

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

  it('deve lidar com erro interno do servidor', async function () {
    req.body = {
      name: 'Martelo de Thor',
      price: '30 peças de ouro',
      orderId: 4,
    };
  
    // Simule um erro no serviço
    sinon.stub(productsService, 'createProduct').rejects(new Error('Erro interno'));
  
    await ProductController.createdProduct(req, res);
  
    // Verifique se a resposta é um erro interno do servidor (status 500)
    expect(res.status).to.have.been.calledWith(500);
    expect(res.json).to.have.been.calledWith(sinon.match({ error: 'Erro interno do servidor' }));
  });
  

  it('deve listar todos os produtos', async function () {
    const listProduts = ProductModel.bulkBuild([
      { name: 'ProductOne', price: '100 gold', orderId: 1 },
      { name: 'ProductTwo', price: '200 gold', orderId: 2 },
      { name: 'ProductTree', price: '300 gold', orderId: 3 },
    ])

    sinon.stub(productsService, 'listProductService').resolves(listProduts);
  
    await productsController.listProductController(req, res);
  
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(listProduts);
  });

  it('deve lidar com erro interno do servidor', async function () {
    // Simule um erro no serviço
    sinon.stub(productsService, 'listProductService').rejects(new Error('Erro interno'));
  
    await productsController.listProductController(req, res);
  
    // Verifique se a resposta é um erro interno do servidor (status 500)
    expect(res.status).to.have.been.calledWith(500);
    expect(res.json).to.have.been.calledWith(sinon.match({ error: 'Erro interno no servidor' }));
  });
  
});
