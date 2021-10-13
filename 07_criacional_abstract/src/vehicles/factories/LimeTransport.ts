import IAircraft from '../aerial/interfaces/IAircraft';
import ILandVehicle from '../land/interfaces/ILandVehicle';
import ITransportFactory from './interfaces/ITransportFactory';
import Scooter from '../land/Scooter';
import Drone from '../aerial/Drone';

export default class LimeTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new Scooter();
  }
  createTransportAircraft(): IAircraft {
    return new Drone();
  }
}
