import DataBase from '../servers/DataBase';
import Middleware from './Middleware';
import * as chalk from 'chalk';
import PermissionType from '../servers/PermissionType';

export default class CheckPermissionMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    const users = DataBase.filter((item) => item.email === email);
    if (!users.length) {
      console.log(chalk.red('E-mail não cadastrado.'));
      return false;
    }
    if (users[0].permission === PermissionType.ADMIN) {
      console.log(chalk.blue(`Seja bem-vindo administrador, ${users[0].email}!`));
      return false;
    }
    console.log(chalk.blue('Seja bem-vindo usuário.'));
    return this.checkNext(email, password);
  }
}
