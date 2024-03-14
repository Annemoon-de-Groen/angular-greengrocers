export interface Item {
  id: string;
  name: string;
  price: number;
  type: string;
}

export type CartItem = {
  item: Item;
  quantity: number;
}
