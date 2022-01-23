import { Item } from './Item';

export class Shop {
  items: Item[];

  constructor(items: Item[] =[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      item.updateQuality();
    })

    return this.items;
  }
}
