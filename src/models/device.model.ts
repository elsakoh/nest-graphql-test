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
  id: string;

  name: string;

  model?: string;

  creationDate: Date;

  latlng: LatLng;
}

