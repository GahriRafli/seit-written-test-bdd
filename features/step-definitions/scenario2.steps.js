const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../../test/pageobjects/home.page');
const SearchPage = require('../../test/pageobjects/search.page');
const { expect } = require('chai');

Given('I open the homepage', async () => { await HomePage.open(); });
When('I search for {string} in category {string}', async (product, category) => {
  await HomePage.searchProduct(product, category);
  await browser.pause(3000);
});
Then('the first result should contain {string}', async (keyword) => {
  const firstResult = await SearchPage.getFirstResultText();
  expect(firstResult.toLowerCase()).to.include(keyword.toLowerCase());
});