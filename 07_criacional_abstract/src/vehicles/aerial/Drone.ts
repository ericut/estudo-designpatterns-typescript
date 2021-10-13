import IAircraft from './interfaces/IAircraft';

export default class Drone implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log('Iniciando motores, partindo...');
  }
  getCargo(): void {
    console.log('Encomenda carregada. Saindo para entrega!');
  }
  checkWind(): void {
    console.log('Ventos verificados, 10km sudeste.');
  }
}
