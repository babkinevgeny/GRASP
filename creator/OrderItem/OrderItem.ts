import { Good } from '../Good/Good';
import { IOrderItem } from './IOrderItem';

export class OrderItem implements IOrderItem {
    good: Good;

    constructor(public name: string, public amount: number, public price: number) {
        this.amount = amount;
        this.good = new Good(name, price);
    }

    getPrice(): number {
        return this.good.getPrice() * this.amount;
    }
}