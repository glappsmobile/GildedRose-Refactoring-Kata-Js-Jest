
const { Shop } = require("../src/gilded_rose");
const { Item } = require("../src/protocols/Item");
const { Conjured } = require("../src/protocols/Conjured");
const { Cheese } = require("../src/protocols/Cheese");
const { Legendary } = require("../src/protocols/Legendary");
const { Pass } = require("../src/protocols/Pass");

const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Cheese("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Legendary("Sulfuras, Hand of Ragnaros"),
  new Legendary("Sulfuras, Hand of Ragnaros", -1),
  new Pass("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Pass("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Pass("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  new Conjured("Conjured Mana Cake", 3, 6),
];

const days = Number(process.argv[2]) || 10;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}
