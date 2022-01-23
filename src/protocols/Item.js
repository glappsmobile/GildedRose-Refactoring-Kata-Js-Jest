class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  decreaseQuality(value) {
    this.quality -= value || 1;

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



  updateQuality() {
    if (this.name != 'Aged Brie' && this.name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (this.quality > 0) {
        if (this.name != 'Sulfuras, Hand of Ragnaros') {
          this.decreaseQuality()
        }
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
    if (this.name != 'Sulfuras, Hand of Ragnaros') {
      this.sellIn = this.sellIn - 1;
    }
    if (this.sellIn < 0) {
      if (this.name != 'Aged Brie') {
        if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.quality > 0) {
            if (this.name != 'Sulfuras, Hand of Ragnaros') {
              this.decreaseQuality()
            }
          }
        } else {
          this.quality = this.quality - this.quality;
        }
      } else {
        if (this.quality < 50) {
          this.increaseQuality()
        }
      }
    }
  }
}

module.exports = {
  Item
}