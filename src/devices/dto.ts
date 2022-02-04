import { ArgsType, Field, Int, InputType } from '@nestjs/graphql';
import { Max, Min, IsOptional, Length, MaxLength } from 'class-validator';

/*
data transfer objects to be passed as arguments to the service
*/

@ArgsType()
export class PaginationArgs {
  @Field(type => Int)
  @Min(0)
  skip = 0;

  @Field(type => Int)
  @Min(1)
  @Max(50)
  take = 25;
}

@InputType()
export class NewDeviceArgs {
  @Field()
  @MaxLength(30)
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  model: string;

}