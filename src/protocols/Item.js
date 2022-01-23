class Item {
  constructor(name, sellIn, quality, decreaseRate){
    this.name = name || "Unknown";
    this.sellIn = sellIn || 0;
    this.quality = quality || 0;
    this.decreaseRate = decreaseRate || 1;
  }

  decreaseQuality(value) {
    this.quality -= value || this.decreaseRate;

    if (this.quality < 0){
      this.quality = 0;
    }
  }

  increaseQuality(value) {
    this.quality += value || 1;

    if (this.quality > 50){
      this.quality = 50;
    }  
  }

  decreaseSellIn(value) {
    this.sellIn -= value || 1;
  }

  updateQuality() {

    if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (this.quality > 0) {
          this.decreaseQuality()
      }
    } else {
      if (this.quality < 50) {
        this.increaseQuality()
        if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.sellIn < 11) {
            if (this.quality < 50) {
              this.increaseQuality()
            }
          }
          if (this.sellIn < 6) {
            if (this.quality < 50) {
              this.increaseQuality()
            }
          }
        }
      }
    }

    this.decreaseSellIn();

    if (this.sellIn < 0) {
        if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.quality > 0) {
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