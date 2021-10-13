import Middleware from './Middleware';
import * as chalk from 'chalk';
import DataBase from '../servers/DataBase';

export default class CheckUserMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    if (email.indexOf('@') === -1) {
      console.log(chalk.red('E-mail inválido.'));
      return false;
    }
    if (!DataBase.filter((item) => item.email === email && item.password === password).length) {
      console.log(chalk.red('E-mail e/ou senha inválidos!'));
      return false;
    }
    return this.checkNext(email, password);
  }
}
