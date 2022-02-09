import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PaginationArgs, NewDeviceArgs } from './dto';
import { Device } from '../graphql.schema';
import { DevicesService } from './service';


@Resolver('Device')
export class DevicesResolver {
  constructor(private readonly devicesService: DevicesService) {}

  @Query('device')
  async device(@Args('id') id: number): Promise<Device> {
    const device = await this.devicesService.findOneById(id);
    if (!device) {
      throw new NotFoundException(id);
    }
    return device;
  }

  @Query('devices')
  devices(): Promise<Device[]> {
    return this.devicesService.findAll();
  }

  @Mutation('createDevice')
  async addDevice(
    @Args('newDeviceArgs') newDeviceArgs: NewDeviceArgs,
  ): Promise<Device> {
    return await this.devicesService.create(newDeviceArgs);
  }

  @Mutation('removeDevice')
  async removeDevice(@Args('id') id: number) {
    return this.devicesService.remove(id);
  }

}