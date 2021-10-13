import * as chalk from 'chalk';
import DataBase from '../servers/DataBase';
import Middleware from './Middleware';

export default class CheckWeakPasswordMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    const users = DataBase.filter((item) => item.email === email);
    if (users[0].password === '123456') {
      console.log(chalk.red('Atenção: sua senha é fraca! Por favor, troque sua senha.'));
      return this.checkNext(email, password);
    }
    return this.checkNext(email, password);
  }
}
