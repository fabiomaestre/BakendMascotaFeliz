import {Entity, model, property, hasMany} from '@loopback/repository';
import {Mascota} from './mascota.model';

@model()
export class Cliente extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idCliente?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  sexo: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono1: string;

  @property({
    type: 'string',
  })
  telefono2?: string;

  @property({
    type: 'string',
  })
  contrasena?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  listaReferido?: string[];

  @hasMany(() => Mascota)
  mascotas: Mascota[];

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
