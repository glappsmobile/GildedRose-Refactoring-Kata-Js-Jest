import { Item } from './Item';

export class Legendary extends Item {

  constructor(name: string, sellIn?: number) {
    super(name, sellIn, 80, 0, false);
  }

  updateQuality() {
    this.quality = 80;
  }
}
