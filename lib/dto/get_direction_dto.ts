import 'reflect-metadata';
import { Type, plainToClass } from 'class-transformer';
import { IsNumber, IsPositive, Max, Min, validate } from 'class-validator';

import { InvalidRequest } from '../errors';

interface IGetDirection {
  heading: number;
  target: number;
}

export class GetDirectionRequest implements Partial<IGetDirection> {
  @Type(() => Number)
  heading?: number;

  @Type(() => Number)
  target?: number;
}

export class GetDirectionDto implements IGetDirection {
  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
    maxDecimalPlaces: 0
  })
  @IsPositive()
  @Min(0)
  @Max(359)
  heading: number;

  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
    maxDecimalPlaces: 0
  })
  @IsPositive()
  @Min(0)
  @Max(359)
  target: number;

  constructor(getDirection: GetDirectionRequest) {
    const convertedDto = <GetDirectionDto>(
      plainToClass(GetDirectionRequest, getDirection)
    );
    this.heading = convertedDto.heading;
    this.target = convertedDto.target;
  }

  async validateRequest(): Promise<void> {
    const errors = await validate(this);

    const errorMessages = errors.map((v) =>
      v.toString(false, true).replace(/\n/, '').trim()
    );

    if (errorMessages.length) {
      throw new InvalidRequest(errorMessages.join('\n'));
    }
  }
}
