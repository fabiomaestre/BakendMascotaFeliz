import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {ConsultaVet, ConsultaVetRelations} from '../models';

export class ConsultaVetRepository extends DefaultCrudRepository<
  ConsultaVet,
  typeof ConsultaVet.prototype.idConsultaVet,
  ConsultaVetRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(ConsultaVet, dataSource);
  }
}
