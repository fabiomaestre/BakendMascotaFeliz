import {Entity, model, property} from '@loopback/repository';

@model()
export class ConsultaVet extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idConsultaVet?: string;

  @property({
    type: 'string',
    required: true,
  })
  Observaciones: string;

  @property({
    type: 'string',
    required: true,
  })
  recomendaciones: string;

  @property({
    type: 'string',
    required: true,
  })
  fechaVisita: string;


  constructor(data?: Partial<ConsultaVet>) {
    super(data);
  }
}

export interface ConsultaVetRelations {
  // describe navigational properties here
}

export type ConsultaVetWithRelations = ConsultaVet & ConsultaVetRelations;
