import Payonner from '../payonner/Payonner';
import IPayPalPayment from '../paypal/IPayPalPayment';
import Token from '../utils/Token';

export default class PayonnerAdapter implements IPayPalPayment {
  constructor(private payonner: Payonner) {
    console.log('Adaptando o Payonner utilizando os métodos e padrões do PayPal');
  }
  authToken(): Token {
    return this.payonner.authToken();
  }
  paypalPayment(): void {
    return this.payonner.sendPayment();
  }
  paypalReceive(): void {
    return this.payonner.receivePayment();
  }
}
