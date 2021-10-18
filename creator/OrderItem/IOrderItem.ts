import { Good } from '../Good/Good';

export interface IOrderItem {
    amount: number;
    getPrice(): number;
}