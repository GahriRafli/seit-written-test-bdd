const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../../test/pageobjects/home.page');
const CategoryPage = require('../../test/pageobjects/category.page');
const { expect } = require('chai');

Given('I open the homepage', async () => { await HomePage.open(); });
When('I navigate to Cell Phones & Smartphones', async () => { await CategoryPage.navigateToSmartphones(); });
When('I apply filters for condition, price and location', async () => { await CategoryPage.applyFilters(); });
Then('I should see filter tags applied', async () => {
  const filters = await CategoryPage.appliedFilters;
  expect(filters.length).to.be.greaterThan(0);
});