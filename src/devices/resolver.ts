import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { PaginationArgs, NewDeviceArgs } from '../dto/device';
import { Device } from '../models/device';
import { DevicesService } from './service';

const pubSub = new PubSub();

@Resolver(of => Device)
export class DevicesResolver {
    constructor(private readonly devicesService: DevicesService) {}

  @Query(returns => Device)
  async device(@Args('id') id: string): Promise<Device> {
    const device = await this.devicesService.findOneById(id);
    if (!device) {
      throw new NotFoundException(id);
    }
    return device;
  }

  @Query(returns => [Device])
  devices(@Args() paginationArgs: PaginationArgs): Promise<Device[]> {
    return this.devicesService.findAll(paginationArgs);
  }

  @Mutation(returns => Device)
  async addDevice(
    @Args('newDeviceArgs') newDeviceArgs: NewDeviceArgs,
  ): Promise<Device> {
    return await this.devicesService.create(newDeviceArgs);
  }

  @Mutation(returns => Boolean)
  async removeDevice(@Args('id') id: string) {
    return this.devicesService.remove(id);
  }

}