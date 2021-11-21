import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param
} from '@loopback/rest';
import {
  Detallepedido,
  Pedido
} from '../models';
import {DetallepedidoRepository} from '../repositories';

export class DetallepedidoPedidoController {
  constructor(
    @repository(DetallepedidoRepository)
    public detallepedidoRepository: DetallepedidoRepository,
  ) { }

  @get('/detallepedidos/{id}/pedido', {
    responses: {
      '200': {
        description: 'Pedido belonging to Detallepedido',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Pedido)},
          },
        },
      },
    },
  })
  async getPedido(
    @param.path.string('id') id: typeof Detallepedido.prototype.idDetallePedido,
  ): Promise<Pedido> {
    return this.detallepedidoRepository.pedido(id);
  }
}
