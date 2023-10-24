import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import UserModel from '../../../src/database/models/user.model';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  const sucessLogin = {
    username: 'Hagar',
    password: 'terrível'
  }
  it('Deve retornar um token ao usuario fazer login', async function () {
    const dataLogin = (sucessLogin);

    const response = UserModel.findOne({ where: { username: dataLogin.username }})

    sinon.stub(UserModel, 'findOne').returns(response);

    const httpResponse = await chai.request(app).post('/login').send(dataLogin);

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.have.key('token');
  })
});
