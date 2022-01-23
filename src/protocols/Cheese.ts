import { Item } from './Item';

export class Cheese extends Item {
  updateQuality() {
    this.increaseQuality();

    this.decreaseSellIn();

    if (this.isExpired()) {
      this.increaseQuality();
    }
  }
}
