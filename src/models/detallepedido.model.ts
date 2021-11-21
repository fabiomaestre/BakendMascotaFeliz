import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Pedido} from './pedido.model';

@model()
export class Detallepedido extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idDetallePedido?: string;

  @property({
    type: 'string',
    required: true,
  })
  idProducto: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  precioVenta: number;

  @property({
    type: 'number',
    required: true,
  })
  precioCompra: number;

  @belongsTo(() => Pedido)
  pedidoId: string;

  constructor(data?: Partial<Detallepedido>) {
    super(data);
  }
}

export interface DetallepedidoRelations {
  // describe navigational properties here
}

export type DetallepedidoWithRelations = Detallepedido & DetallepedidoRelations;
