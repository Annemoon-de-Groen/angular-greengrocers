export interface Item {
  id: string;
  name: string;
  price: number;
}

export type CartItem = {
  item: Item;
  quantity: number;
}
