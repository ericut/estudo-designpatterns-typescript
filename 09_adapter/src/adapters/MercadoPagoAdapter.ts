import MercadoPago from '../mercadopago/MercadoPago';
import IPayPalPayment from '../paypal/IPayPalPayment';
import Token from '../utils/Token';

export default class MercadoPagoAdapter implements IPayPalPayment {
  constructor(private mercadopago: MercadoPago) {
    console.log('Adaptando o Mercado Pago utilizando métodos e padrõs do PayPal');
  }
  authToken(): Token {
    return this.mercadopago.authToken();
  }
  paypalPayment(): void {
    return this.mercadopago.enviarPagamento();
  }
  paypalReceive(): void {
    return this.mercadopago.receberPagamento();
  }
}
