import { Entity, model, property, hasMany, belongsTo } from '@loopback/repository';
import { Category } from './category.model';

@model()
export class Product extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string'
  })
  imageUrl: string;

  @property({
    type: 'string'
  })
  imageName: string;

  @property({
    type: 'string'
  })
  manufacturer: string;

  @property({
    type: 'boolean'
  })
  isAvailable: boolean;

  @property({
    type: 'string'
  })
  shortDescription: string;

  @property({
    type: 'string'
  })
  fullDescription: string;

  @property({
    type: 'number'
  })
  price: number;

  @belongsTo(() => Category)
  categoryId: number;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}
