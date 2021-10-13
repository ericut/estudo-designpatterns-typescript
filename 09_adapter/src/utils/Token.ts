export default class Token {
  // https://jwt.io/
  private token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikhjb2RlIFVzZXIiLCJpYXQiOjE1MTYyMzkwMjJ9.URgu29G1B3NyeNErPlq1qJCWBm7Y7VxK0S9kjRpfJx8';

  getToken(): string {
    return this.token;
  }
}
