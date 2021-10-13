import Token from '../utils/Token';
import IMercadoPagoPayment from './IMercadoPagoPayment';

export default class MercadoPago implements IMercadoPagoPayment {
  private token: Token;
  authToken(): Token {
    return new Token();
  }
  enviarPagamento(): void {
    this.token = this.authToken();
    console.log('Token: ' + this.token.getToken());
    console.log('Enviando pagamento via MercadoPago.');
  }
  receberPagamento(): void {
    console.log('Recebendo pagamento vida MercadoPago.');
  }
}
