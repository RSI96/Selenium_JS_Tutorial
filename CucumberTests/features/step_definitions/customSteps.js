const { When, Then } = require("@cucumber/cucumber");
const {expect} = require('chai')

let sum = 0;
When('I add {int} and {int}', function (int, int2) {
    sum = int + int2;
});

Then('The result should be {int}', function (result) {
    expect(sum).equal(result);
});