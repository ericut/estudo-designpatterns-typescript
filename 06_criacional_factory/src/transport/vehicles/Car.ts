import IVehicle from './interfaces/IVehicle';

export default class Car implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log('Iniciar o trajeto...');
  }
  getCargo(): void {
    console.log('Pegamos os pssageiros, estamos prontos!');
  }
}
