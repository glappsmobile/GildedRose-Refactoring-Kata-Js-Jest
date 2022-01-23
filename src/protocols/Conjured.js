const { Item } = require("./Item");

class Conjured extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  decreaseQuality(value) {
    this.quality -= value || 2;

    if (this.quality < 0){
      this.quality = 0;
    }
  }
}

module.exports = {
  Conjured
}