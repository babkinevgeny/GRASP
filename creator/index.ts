import { Order } from './Order/Order';

// Creator principle also allows us to reduce coupling,
// so we need only Order class instead 3 classes.
class Client {
    calcOrder() {
        const order1 = new Order();
        order1.addOrderItem('Vic Firth drum sticks 5B', 10, 1025);
        order1.addOrderItem('Cookiepad', 4, 2600);
        order1.addOrderItem('DW 5000 double bass pedal', 1 ,18000);

        const order2 = new Order([order1]);
        order2.addOrderItem('Vic Firth drum sticks 5B', 5, 1025);
        return [order1.getPrice(), order2.getPrice()];
    }
}

const client = new Client();
console.log(client.calcOrder());