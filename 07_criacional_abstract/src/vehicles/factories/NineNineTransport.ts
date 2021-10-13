import IAircraft from '../aerial/interfaces/IAircraft';
import ILandVehicle from '../land/interfaces/ILandVehicle';
import ITransportFactory from './interfaces/ITransportFactory';
import Motorcycle from '../land/Motorcycle';
import Helicopter from '../aerial/Helicopter';

export default class NineNineTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new Motorcycle();
  }
  createTransportAircraft(): IAircraft {
    return new Helicopter();
  }
}
