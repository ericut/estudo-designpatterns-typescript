// responsabilidade única de CRUD
export default class Client {
  email: string;

  create(): void {}

  read(): void {}

  update(): void {}

  delete(): void {}

  // se adicionar outra responsabilidade fugindo do escopo de CRUD, estaríamos violando o primeiro princípio
  // levaríamos este método para outro arquivo para criar uma outra responsabilidade
  //
  // sendEmail(): boolean {
  //   return true
  // }
}
