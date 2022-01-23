const { Item } = require("./Item");

class Pass extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {

    if (this.sellIn < 6) {
      this.increaseQuality(3);

    } else if (this.sellIn < 11) {
      this.increaseQuality(2);

    } else {
      this.increaseQuality(1);
    }
  
    this.decreaseSellIn();

    if (this.isExpired()) {
      this.quality = 0;
    }
  }
}

module.exports = {
  Pass
}