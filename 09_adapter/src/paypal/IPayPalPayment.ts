import Token from '../utils/Token';

export default interface IPayPalPayment {
  authToken(): Token;
  paypalPayment(): void;
  paypalReceive(): void;
}
