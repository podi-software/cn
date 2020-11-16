export interface IError {
  code: number;
  message: string;
  name: string;
}

export class InvalidRequest extends Error implements IError {
  code: number;
  message: string;
  name: string;

  constructor(message: string) {
    super(message);

    this.code = 400;
    this.message = message;
    this.name = InvalidRequest.constructor.name;
  }
}
