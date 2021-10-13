import Client from './Client';
import Notify from './Notify';

//podemos acessar a classe sem alterar outra classe,
const cliente = new Client();
const notificacao = new Notify(cliente);

notificacao.sendEmail();
