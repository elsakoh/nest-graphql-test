import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

/*
This is the Typescript version of implementing GraphQL types
*/
@ObjectType({description: "lat lng"})
export class LatLng{ 
    @Field(type=>Float)
    lat: number;

    @Field(type=>Float)
    lng: number;
}

@ObjectType({ description: 'device' })
export class Device {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  model: string;

  @Field()
  creationDate: Date;

  @Field()
  latlng: LatLng;
}

