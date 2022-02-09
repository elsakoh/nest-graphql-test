import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DevicesModule } from './devices/module';

@Module({
  imports: [
    DevicesModule,
    GraphQLModule.forRoot({
      playground: true,
      typePaths: ['./**/*.graphql'],
    }),
  ],
})
export class AppModule {}
