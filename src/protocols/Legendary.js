const { Item } = require("./Item");

class Legendary extends Item {

  constructor(name, sellIn) {
    super(name, sellIn, 80, 0, false);
  }

  updateQuality() {
    this.quality = 80;
  }
}

module.exports = {
  Legendary
}