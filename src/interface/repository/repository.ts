import { FilterQuery } from 'mongoose';
import { Observable } from 'rxjs';

export type Stream<T> = Observable<T>;
export type Filter<T> = FilterQuery<T>;
export type Projection = Record<string, unknown>;

export interface IRepository<T> {
  find(filter?: Filter<T>): Stream<T[]>;
  findOne(filter?: Filter<T>, proj?: Projection): Stream<T>;
  findById(id: string): Stream<T>;
  create(dto: object): Stream<T>;
  deleteMany(filter?: Filter<T>): Observable<any>;
}
