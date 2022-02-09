import { Injectable } from '@nestjs/common';
import { PaginationArgs, NewDeviceArgs } from './dto';
import { Device, Organisation } from '../graphql.schema';

@Injectable()
export class DevicesService {
  /**
   * THIS IS THE ACTUAL PART WHERE WE CONNECT TO THE DATABASE
   */
   private readonly devices: Array<Device> = [
    { id: 19873, name: 'TsimShaTsui1', model: "enertainerL", owner: new Organisation()},
  ];

  async create(newDeviceArgs: NewDeviceArgs): Promise<Device> {
    var device: Device = {
      id: newDeviceArgs.id,
      model: newDeviceArgs.model,
      name:newDeviceArgs.name,
    };
    this.devices.push(device);
    return device;
  }

  async findOneById(id: number): Promise<Device> {
    return this.devices.find(device => device.id === id);
  }

  async findAll(): Promise<Device[]> {
    return this.devices;
  }

  async remove(id: number): Promise<boolean> {
    for( var i = 0; i < devices.length; i++){ 
                                   
      if ( devices[i].id === id) { 
          devices.splice(i, 1); 
          i--; 
          return true;
      }
    }
    return false;
    
  }
}
var devices = [
  new Device(),

]