class CategoryPage {
  get electronicsCategory() { return $('=Electronics'); }
  get cellPhonesLink() { return $('=Cell Phones & accessories'); }
  get smartphonesLink() { return $('=Cell Phones & Smartphones'); }
  get allFiltersBtn() { return $('button[aria-label="All Filters"]'); }

  get conditionFilter() { return $('input[aria-label="New"]'); }
  get locationFilter() { return $('input[aria-label="US Only"]'); }
  get priceMin() { return $('input[aria-label="Minimum Value, US Dollar"]'); }
  get priceMax() { return $('input[aria-label="Maximum Value, US Dollar"]'); }
  get applyBtn() { return $('button[aria-label="Apply"]'); }

  get appliedFilters() { return $$('#x-refine__group__0 ul li'); }

  async navigateToSmartphones() {
    await this.electronicsCategory.click();
    await this.cellPhonesLink.click();
    await this.smartphonesLink.click();
  }

  async applyFilters() {
    await this.allFiltersBtn.click();
    await this.conditionFilter.click();
    await this.locationFilter.click();
    await this.priceMin.setValue('100');
    await this.priceMax.setValue('500');
    await this.applyBtn.click();
  }
}
module.exports = new CategoryPage();