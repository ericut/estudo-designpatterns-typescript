import IVehicleCar from './IVehicleCar';

export default class Car implements IVehicleCar {
  constructor(color: string, year: number, engine: number, seats: number) {
    this.configurationCar(color, year, engine, seats);
  }

  startVehicle(): void {
    console.log('Ligando os motores...');
  }
  configurationCar(color: string, year: number, engine: number, seats: number): void {
    console.log(`Carro da cor ${color}, do ano ${year} com motor de ${engine} e com ${seats} assentos.`);
    this.startVehicle();
  }
}
