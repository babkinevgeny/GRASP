export interface IOrder {
    getPrice(): number;
    addOrderItem(name: string, amount: number, price: number): void;
}