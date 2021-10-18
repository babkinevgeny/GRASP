import { IGood } from './IGood';

export class Good implements IGood {
    constructor(public name: string, private readonly price: number) {}

    getPrice(): number {
        return this.price;
    }
}