import VehicleBuilder from './builders/VehicleBuilder';
import Director from './director/director';
import Vehicle from './products/Vehicle';

const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder);

director.constructSedanCar();
const sedan: Vehicle = builder.getVehicle();
console.log(`Criado um veículo do tipo: ${sedan.vehicleType} com ${sedan.wheelsTotal} rodas.`);

director.constructTruckCar();
const truck: Vehicle = builder.getVehicle();
console.log(`Criado um veículo do tipo: ${truck.vehicleType} com ${truck.wheelsTotal} rodas.`);

director.constructMotorcycle();
const motorcycle: Vehicle = builder.getVehicle();
console.log(
  `Criado uma ${motorcycle.vehicleType} com ${motorcycle.engine.power} cilindradas, ${motorcycle.seats} assentos e ${motorcycle.wheelsTotal} rodas.`
);
