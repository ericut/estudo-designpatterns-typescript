import IBuilder from '../builders/IBuilder';
import Engine from '../components/Engine';
import Transmission from '../components/Transmission';
import VehicleType from '../components/VehicleType';
import Wheel from '../components/Wheel';

export default class Director {
  constructor(private builder: IBuilder) {}

  constructSedanCar() {
    this.builder.setVehicleType(VehicleType.SEDAN);
    this.builder.setSeats(5);
    this.builder.setTransmission(Transmission.AUTOMATIC);
    this.builder.setEngine(new Engine(1600));
    for (var i = 0; i < 4; i++) {
      this.builder.addWheel(new Wheel(15));
    }
  }

  constructTruckCar() {
    this.builder.setVehicleType(VehicleType.TRUCK);
    this.builder.setSeats(3);
    this.builder.setTransmission(Transmission.AUTOMATIC_SEQUENTIAL);
    this.builder.setEngine(new Engine(13000));
    for (var i = 0; i < 6; i++) {
      this.builder.addWheel(new Wheel(22));
    }
  }

  constructMotorcycle() {
    this.builder.setVehicleType(VehicleType.MOTORCYCLE);
    this.builder.setSeats(2);
    this.builder.setTransmission(Transmission.MANUAL);
    this.builder.setEngine(new Engine(750));
    for (var i = 0; i < 2; i++) {
      this.builder.addWheel(new Wheel(16));
    }
  }
}
