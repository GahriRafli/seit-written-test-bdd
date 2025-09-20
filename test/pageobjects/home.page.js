class HomePage {
  get searchInput() { return $('#gh-ac'); }
  get searchCategory() { return $('#gh-cat'); }
  get searchButton() { return $('#gh-btn'); }

  async open() { await browser.url('/'); }

  async searchProduct(product, category) {
    await this.searchInput.setValue(product);
    await this.searchCategory.selectByVisibleText(category);
    await this.searchButton.click();
  }
}
module.exports = new HomePage();