import { Module } from '@nestjs/common';
import { DevicesResolver } from './resolver';
import { DevicesService } from './service';

@Module({
  providers: [DevicesResolver, DevicesService],
})
export class DevicesModule {}