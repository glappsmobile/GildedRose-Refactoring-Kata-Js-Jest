class Item {

  constructor(name, sellIn, quality, decreaseRate, hasQualityLimit){
    this.maxQuality = 50;
    this.minQuality = 0;

    this.name = name || "Unknown";
    this.sellIn = sellIn || 0;
    this.quality = quality || this.minQuality;
    this.decreaseRate = decreaseRate || 1;

    if (this.quality < this.minQuality) {
      this.quality = this.minQuality;
    }

    if (hasQualityLimit && this.quality > this.maxQuality){
      this.quality = this.maxQuality;
    }
  }

  decreaseQuality(value) {
    this.quality -= value || this.decreaseRate;

    if (this.quality < this.minQuality){
      this.quality = this.minQuality;
    }
  }

  increaseQuality(value) {
    this.quality += value || 1;

    if (this.quality > this.maxQuality){
      this.quality = this.maxQuality;
    }  
  }

  decreaseSellIn(value) {
    this.sellIn -= value || 1;
  }

  updateQuality() {
    if (this.quality > this.minQuality) {
        this.decreaseQuality()
    }

    this.decreaseSellIn();

    if (this.sellIn < this.minQuality) {
        if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.quality > this.minQuality) {
              this.decreaseQuality()
          }
        } else {
          this.quality = this.quality - this.quality;
        }
    }
  }
}

module.exports = {
  Item
}