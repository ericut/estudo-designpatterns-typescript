import IPaymentInstrument from './IPaymentInstrument';

export default abstract class NubankCard implements IPaymentInstrument {
  validate(): void {
    console.log('Validação básica');
  }
  collectPayment(): void {
    console.log('Pagamento realizado');
  }
}
