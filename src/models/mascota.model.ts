import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Cliente} from './cliente.model';

@model()
export class Mascota extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idMascota?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'boolean',
    required: true,
  })
  estado: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  rescindido: boolean;

  @property({
    type: 'string',
  })
  motivoInactivo?: string;

  @property({
    type: 'string',
    required: true,
  })
  especie: string;

  @property({
    type: 'string',
    required: true,
  })
  raza: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'string',
    required: true,
  })
  sexo: string;

  @property({
    type: 'string',
    required: true,
  })
  fechaNacimiento: string;

  @property({
    type: 'string',
  })
  senales?: string;

  @property({
    type: 'string',
  })
  alimento?: string;

  @property({
    type: 'number',
  })
  peso?: number;

  @property({
    type: 'string',
  })
  enfermedadesPre?: string;

  @property({
    type: 'string',
  })
  obsEnfPre?: string;

  @property({
    type: 'string',
  })
  foto?: string;

  @belongsTo(() => Cliente)
  clienteId: string;

  constructor(data?: Partial<Mascota>) {
    super(data);
  }
}

export interface MascotaRelations {
  // describe navigational properties here
}

export type MascotaWithRelations = Mascota & MascotaRelations;
