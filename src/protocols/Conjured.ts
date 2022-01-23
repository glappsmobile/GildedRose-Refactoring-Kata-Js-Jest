import { Item } from './Item';

export class Conjured extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality, 2);
  }
}
