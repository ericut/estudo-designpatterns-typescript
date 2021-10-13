import Transport from './transport/Transport';
import CarTransport from './transport/CarTransport';
import MotorcycleTransport from './transport/MotorcycleTransport';
import BikeTransport from './transport/BikeTransport';
import TruckTransport from './transport/TruckTransport';

declare var process;

let transport: Transport;

if (process.argv.includes('--uber')) {
  transport = new CarTransport();
} else if (process.argv.includes('--log')) {
  transport = new MotorcycleTransport();
} else if (process.argv.includes('--rappi')) {
  transport = new BikeTransport();
} else if (process.argv.includes('--sedex')) {
  transport = new TruckTransport();
} else {
  console.error('Selecione o tipo de entrega.');
}

if (transport) {
  transport.startTransport();
}
