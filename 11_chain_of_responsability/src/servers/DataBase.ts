import PermissionType from './PermissionType';

interface DataBaseItem {
  email: string;
  password: string;
  permission: PermissionType;
}

const DataBase: DataBaseItem[] = [
  { email: 'contato@ericli.com.br', password: '123456', permission: PermissionType.ADMIN },
  { email: 'user@ericli.com.br', password: 'u53rp@ss', permission: PermissionType.USER },
];

export default DataBase;
