import Transport from './Transport';
import IVehicle from './vehicles/interfaces/IVehicle';
import Motorcycle from './vehicles/Motorcycle';

export default class MotorcycleTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Motorcycle();
  }
}
