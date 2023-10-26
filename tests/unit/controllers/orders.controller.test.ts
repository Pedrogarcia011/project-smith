import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import OrderService from '../../../src/service/order.service';
import app from '../../../src/app';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Deve retornar um erro caso ocorra um erro no serviço', async function () {
    // Configurar um stub ou mock para simular um erro no serviço `listOrderService`.
    const error = new Error('Erro no serviço');
    sinon.stub(OrderService, 'listOrderService').rejects(error);
  
    // Execute a função do controlador.
    const res = await chai.request(app).get('/orders');
  
    // Verifique se a resposta possui status 500.
    expect(res).to.have.status(500);
  
    // Verifique se a resposta contém a mensagem de erro (você pode verificar com base na sua resposta esperada).
  
    // Restaure o stub ou mock após o teste.
  });
});
