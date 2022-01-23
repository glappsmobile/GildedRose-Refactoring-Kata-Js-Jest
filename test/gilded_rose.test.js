const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should decrease sellIn and quality by 1 for ordinary items with sellIn and quality greater than 0", function() {
    const gildedRose = new Shop([
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Mysterious Powder", 1, 1),
      new Item("Unknown Seed", 50, 50),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
        { name: "+5 Dexterity Vest", sellIn: 9, quality: 19},
        { name: "Elixir of the Mongoose", sellIn: 4, quality: 6},
        { name: "Mysterious Powder", sellIn: 0, quality: 0},
        { name: "Unknown Seed", sellIn: 49, quality: 49},
    ]);
  });

  it("should keep quality at 0 for ordinary items with quality equals to 0 ", function() {
    const gildedRose = new Shop([
      new Item("+5 Dexterity Vest", 10, 0),
      new Item("Elixir of the Mongoose", 5, 0),
      new Item("Mysterious Powder", 1, 0),
      new Item("Unknown Seed", 50, 0),
    ]);

    const items = gildedRose.updateQuality();
    
    expect(items).toEqual([
        { name: "+5 Dexterity Vest", sellIn: 9, quality: 0},
        { name: "Elixir of the Mongoose", sellIn: 4, quality: 0},
        { name: "Mysterious Powder", sellIn: 0, quality: 0},
        { name: "Unknown Seed", sellIn: 49, quality: 0},
    ]);
  });

  it("should decrease quality by 2 for ordinary items with sellIn less than or equals to 0", function() {
    const gildedRose = new Shop([
      new Item("+5 Dexterity Vest", 0, 20),
      new Item("Elixir of the Mongoose", -1, 7),
      new Item("Mysterious Powder", -3, 2),
      new Item("Unknown Seed", -5, 50),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Item("+5 Dexterity Vest", -1, 18),
      new Item("Elixir of the Mongoose", -2, 5),
      new Item("Mysterious Powder", -4, 0),
      new Item("Unknown Seed", -6, 48),
    ]);
  });
  
});