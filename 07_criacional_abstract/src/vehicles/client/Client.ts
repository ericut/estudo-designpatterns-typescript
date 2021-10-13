import IAircraft from '../aerial/interfaces/IAircraft';
import ITransportFactory from '../factories/interfaces/ITransportFactory';
import ILandVehicle from '../land/interfaces/ILandVehicle';

export default class Client {
  private vehicle: ILandVehicle;
  private aircraft: IAircraft;

  constructor(factory: ITransportFactory) {
    this.vehicle = factory.createTransportVehicle();
    this.aircraft = factory.createTransportAircraft();
  }

  startRoute(): void {
    this.vehicle.startRoute();
    this.aircraft.startRoute();
  }
}
