import { Injectable } from '@nestjs/common';
// import { NewRecipeInput } from './dto/new-recipe.input';
import { PaginationArgs, NewDeviceArgs } from '../dto/device';
import { Device } from '../models/device.model';

@Injectable()
export class DevicesService {
  /**
   * THIS IS THE ACTUAL PART WHERE WE CONNECT TO THE DATABASE
   */

  async create(data: NewDeviceArgs): Promise<Device> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Device> {
    return {} as any;
  }

  async findAll(paginationArgs: PaginationArgs): Promise<Device[]> {
    return devices as Device[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
var devices = [
  new Device(),

]