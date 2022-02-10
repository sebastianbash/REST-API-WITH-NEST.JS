export class CreateUserDTO {
  readonly fullname: string;
  readonly age: number;
  readonly email: string;
  readonly createdAt = Date;
}
