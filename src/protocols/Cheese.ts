import { Item } from './Item';

export class Cheese extends Item {
  constructor(name: string, sellIn: number , quality: number) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    this.increaseQuality();

    this.decreaseSellIn();

    if (this.isExpired()) {
      this.increaseQuality();
    }

  }
}