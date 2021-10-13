import ILandVehicle from './interfaces/ILandVehicle';

export default class Scooter implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log('Saindo para entrega...');
  }
  getCargo(): void {
    console.log('Peguei a encomenda, estou pronto!');
  }
}
