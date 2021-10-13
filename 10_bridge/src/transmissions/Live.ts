import IPlataform from '../plataforms/IPlataform';
import ITransmission from './ITransmission';

export default class Live implements ITransmission {
  constructor(private plataform: IPlataform) {}

  broadcasting(): void {
    console.log('Iniciando a transmissão!');
  }
  result(): void {
    console.log('******** ON AIR ********');
  }
}
