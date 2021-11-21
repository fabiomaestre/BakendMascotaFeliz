import {Entity, model, property} from '@loopback/repository';

@model()
export class Detalleplan extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idDetallePlan?: string;

  @property({
    type: 'string',
    required: true,
  })
  idMascota: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'date',
    required: true,
  })
  fechaPago: string;

  @property({
    type: 'string',
    required: true,
  })
  formaPago: string;

  @property({
    type: 'string',
    required: true,
  })
  observaciones: string;


  constructor(data?: Partial<Detalleplan>) {
    super(data);
  }
}

export interface DetalleplanRelations {
  // describe navigational properties here
}

export type DetalleplanWithRelations = Detalleplan & DetalleplanRelations;
