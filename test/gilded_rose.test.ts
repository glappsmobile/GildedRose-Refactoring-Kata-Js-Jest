import{ Shop } from "../src/protocols/Shop";
import{ Item } from "../src/protocols/Item";
import{ Conjured } from "../src/protocols/Conjured";
import{ Cheese } from "../src/protocols/Cheese";
import{ Legendary } from "../src/protocols/Legendary";
import{ Pass } from "../src/protocols/Pass";

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

  it("should increase quality by 1 for Cheese Items with sellIn greater than 0", function() {
    const gildedRose = new Shop([
      new Cheese("Aged Brie", 10, 20),
      new Cheese("Cheddar", 1, 0),
      new Cheese("Gouda", 4, 49),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Cheese("Aged Brie", 9, 21),
      new Cheese("Cheddar", 0, 1),
      new Cheese("Gouda", 3, 50),
    ]);
  });

  it("should increase quality by 2 for 'Aged Brie' with sellIn less than or equals to 0", function() {
    const gildedRose = new Shop([
      new Cheese("Aged Brie", 0, 20),
      new Cheese("Cheddar", -1, 0),
      new Cheese("Gouda", -50, 48),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Cheese("Aged Brie", -1, 22),
      new Cheese("Cheddar", -2, 2),
      new Cheese("Gouda", -51, 50),
    ]);
  });

  it("should keep quality at 80 and leave sellIn untouched for Legendary Items", function() {
    const gildedRose = new Shop([
      new Legendary("Sulfuras, Hand of Ragnaros"),
      new Legendary("Infinity Gauntlet"),
      new Legendary("Javascript", 1),
      new Legendary("Golden Banana", -2),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Legendary("Sulfuras, Hand of Ragnaros", 0),
      new Legendary("Infinity Gauntlet", 0),
      new Legendary("Javascript", 1),
      new Legendary("Golden Banana", -2),
    ]);

    expect(items[0].quality).toBe(80);
    expect(items[1].quality).toBe(80);
    expect(items[2].quality).toBe(80);
    expect(items[3].quality).toBe(80);
  });

  it("should increase quality by 1 for Pass Items with sellIn greater than 10", function() {
    const gildedRose = new Shop([
      new Pass("Backstage passes to a TAFKAL80ETC concert", 11, 20),
      new Pass("The Avett Brothers Pass", 20, 0),
      new Pass("Moddest Mouse Ticket", 50, 49),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Pass("Backstage passes to a TAFKAL80ETC concert", 10, 21),
      new Pass("The Avett Brothers Pass", 19, 1),
      new Pass("Moddest Mouse Ticket", 49, 50),
    ]);
  });

  it("should increase quality by 2 for Pass Items with sellIn greater than 5 and less than or equals to 10", function() {
    const gildedRose = new Shop([
      new Pass("Backstage passes to a TAFKAL80ETC concert", 6, 20),
      new Pass("The Avett Brothers Pass", 8, 0),
      new Pass("Moddest Mouse Ticket", 10, 48),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Pass("Backstage passes to a TAFKAL80ETC concert", 5, 22),
      new Pass("The Avett Brothers Pass", 7, 2),
      new Pass("Moddest Mouse Ticket", 9, 50),
    ]);
  });

  it("should increase quality by 3 for Pass Items with sellIn greater than 0 and less than or equals to 5", function() {
    const gildedRose = new Shop([
      new Pass("Backstage passes to a TAFKAL80ETC concert", 5, 20),
      new Pass("The Avett Brothers Pass", 3, 0),
      new Pass("Moddest Mouse Ticket", 1, 47),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Pass("Backstage passes to a TAFKAL80ETC concert", 4, 23),
      new Pass("The Avett Brothers Pass", 2, 3),
      new Pass("Moddest Mouse Ticket", 0, 50),
    ]);
  });

  it("should decrease quality to 0 for 'Backstage passes' with sellIn less than or equals to 0", function() {
    const gildedRose = new Shop([
      new Pass("Backstage passes to a TAFKAL80ETC concert", 0, 50),
      new Pass("The Avett Brothers Pass", -1, 5),
      new Pass("Moddest Mouse Ticket", -5, 0),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Pass("Backstage passes to a TAFKAL80ETC concert", -1, 0),
      new Pass("The Avett Brothers Pass", -2, 0),
      new Pass("Moddest Mouse Ticket", -6, 0),
    ]);
  });

  it("should increase up to 50 non-legendary items that increase quality over time", function() {
    const gildedRose = new Shop([
      new Pass("Backstage passes to a TAFKAL80ETC concert", 1, 48),
      new Pass("The Avett Brothers Pass", 10, 49),
      new Pass("Moddest Mouse Ticket", 20, 50),
      new Cheese("Aged Brie", -1, 50),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Pass("Backstage passes to a TAFKAL80ETC concert", 0, 50),
      new Pass("The Avett Brothers Pass", 9, 50),
      new Pass("Moddest Mouse Ticket", 19, 50),
      new Cheese("Aged Brie", -2, 50),
    ]);
  });

  it("should decrease quality by 2 for Conjured Items with sellIn and quality greater than 0", function() {
    const gildedRose = new Shop([
      new Conjured("Conjured Mana Cake", 10, 20),
      new Conjured("Conjured Pie", 5, 5),
      new Conjured("Conjured Cookie", 1, 2),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Conjured("Conjured Mana Cake", 9, 18),
      new Conjured("Conjured Pie", 4, 3),
      new Conjured("Conjured Cookie", 0, 0),
    ]);
  });

  it("should decrease quality by 4 for Conjured Items with sellIn less than or equals to 0", function() {
    const gildedRose = new Shop([
      new Conjured("Conjured Mana Cake", 0, 20),
      new Conjured("Conjured Pie", -1, 5),
      new Conjured("Conjured Cookie", -2, 4),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Conjured("Conjured Mana Cake", -1, 16),
      new Conjured("Conjured Pie", -2, 1),
      new Conjured("Conjured Cookie", -3, 0),
    ]);
  });

  it("should not decrease any quality below 0", function() {
    const gildedRose = new Shop([
      new Conjured("Conjured Mana Cake", 2, 1),
      new Conjured("Conjured Cookie", -1, 3),
      new Item("+5 Dexterity Vest", 5, 0),
      new Item("Elixir of the Mongoose", -1, 1),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Conjured("Conjured Mana Cake", 1, 0),
      new Conjured("Conjured Cookie", -2, 0),
      new Item("+5 Dexterity Vest", 4, 0),
      new Item("Elixir of the Mongoose", -2, 0),
    ]);
  });

  it("should set quality to 50 when creating a non-legendary item with quality greater than 50", function() {
    const gildedRose = new Shop([
      new Conjured("Conjured Mana Cake", 2, 51),
      new Pass("Moddest Mouse Ticket", 20, 200),
      new Item("+5 Dexterity Vest", 5, 90),
    ]);

    expect(gildedRose).toEqual(new Shop([
      new Conjured("Conjured Mana Cake", 2, 50),
      new Pass("Moddest Mouse Ticket", 20, 50),
      new Item("+5 Dexterity Vest", 5, 50),
    ]));
  });

  it("should set quality to 0 when creating an item with quality less than 50", function() {
    const gildedRose = new Shop([
      new Conjured("Conjured Mana Cake", 2, -1),
      new Pass("Moddest Mouse Ticket", 20, -200),
      new Item("+5 Dexterity Vest", 5, -90),
    ]);

    expect(gildedRose).toEqual(new Shop([
      new Conjured("Conjured Mana Cake", 2, 0),
      new Pass("Moddest Mouse Ticket", 20, 0),
      new Item("+5 Dexterity Vest", 5, 0),
    ]));
  });
});