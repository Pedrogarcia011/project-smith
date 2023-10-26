import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import UserModel from '../../../src/database/models/user.model';
import app from '../../../src/app';
import loginMock from '../../mocks/login.mock';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  /* it('Deve retornar um token ao usuario fazer login', async function () {
    const loginData = {
      username: 'Eddie',
      password: 'sortudo',
    }

    sinon.stub(UserModel, 'findOne').resolves(UserModel.build(loginMock.userMock));

    const resultHttp = await chai.request(app).post('/login').send(loginData);

    expect(resultHttp.status).to.equal(200);
  }) */

  it('Deve retornar um erro caso não tenha dados inseridos', async function () {
    const loginData = {
      username: 'Hagar',
      password: '',
    }

    const response = UserModel.findOne({ where: { username: loginData.username } });

    sinon.stub(UserModel, 'findOne').returns(response);

    const resultHttp = await chai.request(app).post('/login').send(loginData);

    expect(resultHttp.status).to.equal(400);
  });

  it('Deve retornar um erro caso os dados forem incorretos', async function () {
    const loginData = {
      username: 'Hagar',
      password: 'error',
    }

    const response = UserModel.findOne({ where: { username: loginData.username } });

    sinon.stub(UserModel, 'findOne').returns(response);

    const resultHttp = await chai.request(app).post('/login').send(loginData);

    expect(resultHttp.status).to.equal(401);
  });
});
