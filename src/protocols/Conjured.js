const { Item } = require("./Item");

class Conjured extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality, 2);
  }
}

module.exports = {
  Conjured
}