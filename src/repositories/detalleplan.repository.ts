import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Detalleplan, DetalleplanRelations} from '../models';

export class DetalleplanRepository extends DefaultCrudRepository<
  Detalleplan,
  typeof Detalleplan.prototype.idDetallePlan,
  DetalleplanRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Detalleplan, dataSource);
  }
}
