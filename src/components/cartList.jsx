import { updateCartText } from "../pages/Cart";

export let CartList = [];
export let CartKey = () => (Math.floor(Math.random() * 10000000) + 1);

export function removeTimeoutItem(id) {
    CartList = CartList.filter(item => item.id !== id);
    updateCartText();
}