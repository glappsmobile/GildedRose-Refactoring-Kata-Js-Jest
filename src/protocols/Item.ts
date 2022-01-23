export class Item {
  maxQuality: number;

  minQuality: number;

  name: string;

  sellIn: number;

  quality: number;

  decreaseRate: number;

  constructor(
    name: string,
    sellIn: number,
    quality: number,
    decreaseRate?: number,
    hasQualityLimit: boolean = true,
  ) {
    this.maxQuality = 50;
    this.minQuality = 0;

    this.name = name || 'Unknown';
    this.sellIn = sellIn || 0;
    this.quality = quality || this.minQuality;
    this.decreaseRate = decreaseRate || 1;

    if (this.quality < this.minQuality) {
      this.quality = this.minQuality;
    }

    if (hasQualityLimit && this.quality > this.maxQuality) {
      this.quality = this.maxQuality;
    }
  }

  decreaseQuality(value?: number) {
    this.quality -= value || this.decreaseRate;

    if (this.quality < this.minQuality) {
      this.quality = this.minQuality;
    }
  }

  increaseQuality(value?: number) {
    this.quality += value || 1;

    if (this.quality > this.maxQuality) {
      this.quality = this.maxQuality;
    }
  }

  isExpired() {
    return this.sellIn < 0;
  }

  decreaseSellIn(value?: number) {
    this.sellIn -= value || 1;
  }

  updateQuality() {
    this.decreaseQuality();
    this.decreaseSellIn();

    if (this.isExpired()) {
      this.decreaseQuality();
    }
  }
}
