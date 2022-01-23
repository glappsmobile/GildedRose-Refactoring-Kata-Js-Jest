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
      new Item("+5 Dexterity Vest", 9, 19),
      new Item("Elixir of the Mongoose", 4, 6),
      new Item("Mysterious Powder", 0, 0),
      new Item("Unknown Seed", 49, 49),
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
        new Item("+5 Dexterity Vest", 9, 0),
        new Item("Elixir of the Mongoose", 4, 0),
        new Item("Mysterious Powder", 0, 0),
        new Item("Unknown Seed", 49, 0),
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

  it("should increase quality by 1 for 'Aged Brie' with sellIn greater than 0 and quality less than 50", function() {
    const gildedRose = new Shop([
      new Item("Aged Brie", 10, 20),
      new Item("Aged Brie", 1, 0),
      new Item("Aged Brie", 4, 49),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Item("Aged Brie", 9, 21),
      new Item("Aged Brie", 0, 1),
      new Item("Aged Brie", 3, 50),
    ]);
  });

  it("should increase quality by 2 for 'Aged Brie' with sellIn less than or equals to 0 and quality less than 50", function() {
    const gildedRose = new Shop([
      new Item("Aged Brie", 0, 20),
      new Item("Aged Brie", -1, 0),
      new Item("Aged Brie", -50, 49),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Item("Aged Brie", -1, 22),
      new Item("Aged Brie", -2, 2),
      new Item("Aged Brie", -51, 50),
    ]);
  });

  it("should keep quality at 80 and leave sellIn untouched for 'Sulfuras, Hand of Ragnaros'", function() {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 10, 80),
      new Item("Sulfuras, Hand of Ragnaros", 4, 80),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Item("Sulfuras, Hand of Ragnaros", 10, 80),
      new Item("Sulfuras, Hand of Ragnaros", 4, 80),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    ]);
  });

  it("should increase quality by 1 for 'Backstage passes' with sellIn greater than 10 and quality less than 50", function() {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 20, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", 50, 49),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 21),
      new Item("Backstage passes to a TAFKAL80ETC concert", 19, 1),
      new Item("Backstage passes to a TAFKAL80ETC concert", 49, 50),
    ]);
  });

  it("should increase quality by 2 for 'Backstage passes' with sellIn greater than 5 and less than or equals to 10", function() {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 8, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 48),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 22),
      new Item("Backstage passes to a TAFKAL80ETC concert", 7, 2),
      new Item("Backstage passes to a TAFKAL80ETC concert", 9, 50),
    ]);
  });

  it("should increase quality by 3 for 'Backstage passes' with sellIn greater than 0 and less than or equals to 5", function() {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 3, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", 1, 47),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 23),
      new Item("Backstage passes to a TAFKAL80ETC concert", 2, 3),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 50),
    ]);
  });


  it("should decrease quality to 0 for 'Backstage passes' with sellIn less than or equals to 0", function() {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 5),
      new Item("Backstage passes to a TAFKAL80ETC concert", -5, 0),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", -2, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", -6, 0),
    ]);
  });
});