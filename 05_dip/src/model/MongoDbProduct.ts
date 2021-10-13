import IDbProduct from './IDbProduct';

export default class MongoDbProduct implements IDbProduct {
  getProductById(produtId: number): string {
    return `MongoDB - Exibindo os dados do produto: ${produtId}`;
  }
}
