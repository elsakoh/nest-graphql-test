
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateDeviceArgs {
    id: number;
    name: string;
    model: string;
}

export abstract class IQuery {
    abstract devices(): Nullable<Nullable<Device>[]> | Promise<Nullable<Nullable<Device>[]>>;

    abstract device(id: string): Nullable<Nullable<Device>[]> | Promise<Nullable<Nullable<Device>[]>>;
}

export abstract class IMutation {
    abstract createDevice(createDeviceArgs?: Nullable<CreateDeviceArgs>): Nullable<Device> | Promise<Nullable<Device>>;

    abstract removeDevice(id: number): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export class Device {
    id: number;
    name: string;
    model: string;
    owner?: Nullable<Organisation>;
}

export class Organisation {
    name: string;
    devices?: Nullable<Nullable<Device>[]>;
}

type Nullable<T> = T | null;
