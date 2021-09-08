const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions');

test('Should return 2', () => {
    expect(returnTwo()).toEqual(2);
});

test('Should return `Hello, ${name}`', () => {
    expect(greeting(`Daniel`)).toEqual(`Hello, Daniel`);
});

describe(`Math functions`, () => {
    it(`Should return sum1 + sum2`, () => {
        expect(add(3, 5)).toEqual(8)
    });

    it(`Should return sum1 * sum2`, () => {
        expect(multiply(3, 5)).toEqual(15)
    });

    it(`Should return sum1 / sum2`, () => {
        expect(divide(15, 3)).toEqual(5)
    });

    it(`Should return sum1 - sum2`, () => {
        expect(subtract(15, 7)).toEqual(8)
    });
})