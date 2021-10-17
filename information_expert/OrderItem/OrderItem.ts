import { Good } from '../Good/Good';
import { IOrderItem } from './IOrderItem';

export class OrderItem implements IOrderItem {
    constructor(public good: Good, public amount: number = 1) {}

    getPrice(): number {
        return this.good.getPrice() * this.amount;
    }
}