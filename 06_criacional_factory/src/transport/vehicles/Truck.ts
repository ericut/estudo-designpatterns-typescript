import IVehicle from './interfaces/IVehicle';

export default class Truck implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log('Ligando os motores, vamos para o trajeto!');
  }
  getCargo(): void {
    console.log('Carga coletada com sucesso!');
  }
}
