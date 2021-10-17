import { Good } from '../Good/Good';

export interface IOrderItem {
    good: Good;
    amount: number;
    getPrice(): number;
}