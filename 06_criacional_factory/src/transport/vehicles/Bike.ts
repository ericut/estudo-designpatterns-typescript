import IVehicle from './interfaces/IVehicle';

export default class Bike implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log('Iniciar o trajeto...');
  }
  getCargo(): void {
    console.log('Pacote coletado!');
  }
}
