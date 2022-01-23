const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should decrease sellIn and quality by 1 for ordinary items with sellIn and quality above 0", function() {
    const gildedRose = new Shop([
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Mysterious Powder", 1, 1),
      new Item("Unknown Seed", 50, 50),
    ]);

    const items = gildedRose.updateQuality();
    console.log(items)
    expect(items).toEqual([
        { name: "+5 Dexterity Vest", sellIn: 9, quality: 19},
        { name: "Elixir of the Mongoose", sellIn: 4, quality: 6},
        { name: "Mysterious Powder", sellIn: 0, quality: 0},
        { name: "Unknown Seed", sellIn: 49, quality: 49},
    ]);
  });
  
});
