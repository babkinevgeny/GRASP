import { IOrder } from './IOrder';
import { IOrderItem } from '../OrderItem/IOrderItem';
import { OrderItem } from '../OrderItem/OrderItem';

export class Order implements IOrder {
    constructor(public orderItems: (IOrderItem | IOrder)[] = []) {}

    getPrice(): number {
        if (!this.orderItems) {
            return 0;
        }

        let result = 0;
        this.orderItems.forEach((orderItem) => {
            result += orderItem.getPrice();
        });

        return result;
    }

    addOrderItem(name: string, amount: number, price: number): void {
        const newOrderItem = new OrderItem(name, amount, price);
        this.orderItems.push(newOrderItem);
    }
}