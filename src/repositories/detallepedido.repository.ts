import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Detallepedido, DetallepedidoRelations, Pedido} from '../models';
import {PedidoRepository} from './pedido.repository';

export class DetallepedidoRepository extends DefaultCrudRepository<
  Detallepedido,
  typeof Detallepedido.prototype.idDetallePedido,
  DetallepedidoRelations
> {

  public readonly pedido: BelongsToAccessor<Pedido, typeof Detallepedido.prototype.idDetallePedido>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('PedidoRepository') protected pedidoRepositoryGetter: Getter<PedidoRepository>,
  ) {
    super(Detallepedido, dataSource);
    this.pedido = this.createBelongsToAccessorFor('pedido', pedidoRepositoryGetter,);
    this.registerInclusionResolver('pedido', this.pedido.inclusionResolver);
  }
}
