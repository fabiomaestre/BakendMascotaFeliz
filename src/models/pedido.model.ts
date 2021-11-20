import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Cliente} from './cliente.model';

@model()
export class Pedido extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  fechaPedido: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idPedido?: string;

  @property({
    type: 'string',
    required: true,
  })
  fechaEntrega: string;

  @property({
    type: 'string',
    required: true,
  })
  formaPago: string;

  @property({
    type: 'number',
    required: true,
  })
  pagado: number;

  @property({
    type: 'string',
  })
  observaciones?: string;

  @property({
    type: 'number',
    required: true,
  })
  precioNeto: number;

  @belongsTo(() => Cliente)
  clienteId: string;

  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // describe navigational properties here
}

export type PedidoWithRelations = Pedido & PedidoRelations;
