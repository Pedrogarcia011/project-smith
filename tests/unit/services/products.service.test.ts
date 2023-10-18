import { expect } from 'chai';
import sinon from 'sinon';
import CreatedProductService from '../../../src/service/products.service';
import ProductModel from '../../../src/database/models/product.model';

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
});
