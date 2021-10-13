import Transport from './Transport';
import IVehicle from './vehicles/interfaces/IVehicle';
import Truck from './vehicles/Truck';

export default class TruckTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Truck();
  }
}
