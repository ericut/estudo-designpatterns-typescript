import Token from '../utils/Token';

export default interface IMercadoPagoPayment {
  authToken(): Token;
  enviarPagamento(): void;
  receberPagamento(): void;
}
