import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import jwt from '../../../src/utils/jwt';
import UserModel from '../../../src/database/models/user.model';
import userService from '../../../src/service/user.service';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

const productNotName = {
    username: '',
    password: "terrível"
}

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

 /*  it('Ao não receber um name, retorne um erro', async () => {
    const httpRequestBody = productNotName;

    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(400);
  });

  it('Ao não receber um price retorne um erro', async () => {
    const httpRequestBody = productMock.notExistPriceBody;

    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"price" is required' });
  }); */

  // it('Ao não receber um orderId, retorne um erro', async () => {
  //   const httpRequestBody = productMock.notExistOrderIdBody;

  //   const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

  //   expect(httpResponse.status).to.equal(400);
  //   expect(httpResponse.body).to.be.deep.equal({ message: 'Invalid data' });
  // });

  /* it('deve retornar um token válido para um usuário existente', async function () {
    const username = 'testuser';
    const password = 'testpassword';

    // Crie um objeto de usuário simulado para retornar no stub
    const mockUser = {
      username,
      password: 'hashed_password', // Senha criptografada
    };

    // Configure um stub para simular a busca do usuário
    const findOneStub = sinon.stub(UserModel, 'findOne');
    findOneStub.resolves(mockUser);

    // Simule a geração do token JWT
    const jwtSignStub = sinon.stub(jwt, 'sign');
    jwtSignStub.returns('test-token'); // Token de exemplo

    // Chame a função de login
    const result = await userService.login(username, password);

    // Verifique se o resultado está correto
    expect(result.status).to.equal(200);

    // Restaure os stubs para evitar efeitos colaterais em outros testes
    sinon.restore();
  }); */

});