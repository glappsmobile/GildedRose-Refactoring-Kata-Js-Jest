const { Item } = require("./Item");

class Cheese extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.quality < 50) {
      this.increaseQuality();

      if (this.sellIn <= 0) {
        this.increaseQuality()
      }
    }

    this.decreaseSellIn()
  }
}

module.exports = {
  Cheese
}