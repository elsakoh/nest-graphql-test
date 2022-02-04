import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DevicesModule } from './devices/module';

@Module({
  imports: [
    DevicesModule,
    GraphQLModule.forRoot(
      {
        debug: false,
        playground: true,
        autoSchemaFile: true,
      }
    ),
  ],
})
export class AppModule {}
