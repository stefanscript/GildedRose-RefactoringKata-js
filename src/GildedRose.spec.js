import GildedRose, {Item} from './GildedRose';

describe("Gilded Rose", function () {

    describe("Normal item, ", function () {
        it("does not change the name", () => {
            const item = new Item('foo', 0, 0);
            const gildedRose = new GildedRose([item]);
            gildedRose.tick();
            expect(item.name).toEqual("foo");
        });
        it("lowers quality value by 1 at the end of the day", () => {
            const item = new Item("foo", 1, 1);
            const gildedRose = new GildedRose([item]);
            gildedRose.tick();
            expect(item.quality).toEqual(0);
        });
    });

    describe("Aged Brie item, ", function () {

    });

    describe("Sulfuras item, ", function () {

    });

    describe("Backstage item, ", function () {

    });

    describe("Shared examples", function () {
        xit("lowers sell in value by 1 at the end of the day", () => {
            const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
            gildedRose.tick();
            expect(items[0].name).toEqual("fixme");
        });
    });

    describe("Conjured item, ", function () {

    });


});
