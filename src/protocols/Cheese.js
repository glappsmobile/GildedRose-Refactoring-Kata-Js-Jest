const { Item } = require("./Item");

class Cheese extends Item {
  constructor(name, sellIn, quality) {
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

module.exports = {
  Cheese
}