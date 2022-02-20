import { UpdateCartText } from "../pages/Cart";

export let CartList = [];
export let CartKey = () => (Math.floor(Math.random() * 10000000) + 1);

export function removeTimeoutItem(id) {
    let itemWithId = CartList.filter(i => i.id === id);
    itemWithId.forEach(item => CartList.splice(CartList.indexOf(item.id), 1));
    UpdateCartText();
}