import { Entity } from '@loopback/repository';
export declare class Product extends Entity {
    id?: number;
    name: string;
    imageUrl: string;
    imageName: string;
    manufacturer: string;
    isAvailable: boolean;
    shortDescription: string;
    fullDescription: string;
    price: number;
    categoryId: number;
    constructor(data?: Partial<Product>);
}
