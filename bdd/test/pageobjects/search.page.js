class SearchPage {
  get firstResultTitle() { return $('ul.srp-results li.s-item h3'); }
  async getFirstResultText() { return await this.firstResultTitle.getText(); }
}
module.exports = new SearchPage();