import IVehicleMotorcycle from './IVehicleMotorcycle';

export default class Motorcycle implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configurationMotorcycle(color, year, engine);
  }

  startVehicle(): void {
    console.log('Ligando os motores...');
  }
  configurationMotorcycle(color: string, year: number, engine: number): void {
    console.log(`Uma moto da cor ${color}, do ano ${year} com ${engine} cilindradas.`);
    this.startVehicle();
  }
}
