import IPlataform from '../plataforms/IPlataform';
import Live from './Live';

export default class AdvancedLive extends Live {
  constructor(plataform: IPlataform) {
    super(plataform);
  }
  subtitles(): void {
    console.log('Legendas ativadas na transmissão!');
  }
  comments(): void {
    console.log('Comentários liberados na transmissão!');
  }
}
