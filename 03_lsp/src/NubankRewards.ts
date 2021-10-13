import IPaymentInstrument from './IPaymentInstrument';

export default class NubankRewards implements IPaymentInstrument {
  validate(): void {
    console.log('Verificar a pontuação no rewards');
  }
  collectPayment(): void {
    console.log('Pagar com a pontuação do rewards');
  }
}
