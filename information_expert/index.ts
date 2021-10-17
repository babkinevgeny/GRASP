import { Good } from './Good/Good';
import { OrderItem } from './OrderItem/OrderItem';
import { Order } from './Order/Order';

// define our goods
const drumSticks = new Good('Vic Firth drum sticks 5B', 1025);
const practicePad = new Good('Cookiepad', 2600);
const doublePedal = new Good('DW 5000 double bass pedal', 18000);

// define order items
const orderItem1 = new OrderItem(drumSticks, 10);
const orderItem2 = new OrderItem(practicePad, 4);
const orderItem3 = new OrderItem(doublePedal);
const orderItem4 = new OrderItem(drumSticks, 5);


// create out orders
const order1  = new Order([
    orderItem1,
    orderItem2,
    orderItem3
]);

const order2  = new Order([
    orderItem4,
    // order can include not only order items, nut another orders too
    order1
]);

console.log(order1.getPrice());
console.log(order2.getPrice());

