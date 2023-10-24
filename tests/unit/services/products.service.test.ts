import { expect } from 'chai';
import sinon from 'sinon';
import CreatedProductService from '../../../src/service/products.service';
import ProductModel from '../../../src/database/models/product.model';
import productsService from '../../../src/service/products.service';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('deve criar um novo produto service', async function () {
    const productData = ProductModel.build({
      id: 1,
      name: 'Martelo de Thor',
      price: '30 peças de ouro',
      orderId: 4,
    });

    sinon.stub(ProductModel, 'create').resolves(productData);

    const responseProduct = {
      name: 'Martelo de Thor',
      price: '30 peças de ouro',
      orderId: 4,
    }

    const createdProduct = await CreatedProductService.createProduct(responseProduct);

    expect(createdProduct).to.be.deep.equal(productData.dataValues);
  });

  it('deve listar todos os produtos', async function () {
    const listProduts = ProductModel.bulkBuild([
      { name: 'ProductOne', price: '100 gold', orderId: 1 },
      { name: 'ProductTwo', price: '200 gold', orderId: 2 },
      { name: 'ProductTree', price: '300 gold', orderId: 3 },
    ])

    sinon.stub(ProductModel, 'findAll').resolves(listProduts);
  
    const responseProducts = await productsService.listProductService();
  
    expect(responseProducts).to.be.deep.equal(listProduts);
  });
  
});
