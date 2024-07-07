class PekerjaanPageIos {

  async pageTitle() {
    const elem = 'name == "Pekerjaan"';
    return await $(`-ios predicate string:${elem}`);
  }

  async workTypeDropDownField() {
    const elem = 'name == "typeOfJobs"';
    return await $(`-ios predicate string:${elem}`);
  }

  async workTypeText() {
    const elem = 'name == "typeOfJobs"';
    return await $(`-ios predicate string:${elem}`);
  }

  async workTypeForm() {
    const elem = 'name == "typeOfJobs"';
    return await $(`-ios predicate string:${elem}`);
  }

  async selectPopupList(data) {
    const elem = `name == "${data}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async companyNameField() {
    const elem = 'name == "currentCompanyName"';
    return await $(`-ios predicate string:${elem}`);
  }

  async workMonthPeriodDropDownField() {
    const elem = 'name == "workingTimeStartFieldLeft" AND value == "Bulan"';
    return await $(`-ios predicate string:${elem}`);
  }

  async workYearPeriodDropDownField() {
    const elem = 'name == "workingTimeStartFieldRight" AND value == "Tahun"';
    return await $(`-ios predicate string:${elem}`);
  }

  async companyIndustryDropDownField() {
    const elem = 'name == "currentCompanyIndustry"';
    return await $(`-ios predicate string:${elem}`);
  }

  async jobTitleField() {
    const elem = 'name == "currentCompanyJobTitle"';
    return await $(`-ios predicate string:${elem}`);
  }

  async businessTypeDropDownField() {
    const elem = 'name == "currentBusinessType"';
    return await $(`-ios predicate string:${elem}`);
  }

  async businessIncomeField() {
    const elem = 'name == "currentBusinessType"';
    return await $(`-ios predicate string:${elem}`);
  }

  async businessDurationField() {
    const elem = 'name == "currentBusinessDuration"';
    return await $(`-ios predicate string:${elem}`);
  }

  async companyPhoneField() {
    const elem = 'name == "currentCompanyPhoneNumber"';
    return await $(`-ios predicate string:${elem}`);
  }

  async monthlyIncomeField() {
    const elem = 'name == "currentCompanyIncomePerMonth"';
    return await $(`-ios predicate string:${elem}`);
  }

  async otherIncomeForm() {
    const elem = 'name == "otherIncomePerMonth"';
    return await $(`-ios predicate string:${elem}`);
  }

  async otherIncomeField() {
    const elem = 'name == "otherIncomePerMonth"';
    return await $(`-ios predicate string:${elem}`);
  }

  async otherLoanDropDownField() {
    const elem = 'name == "questionOtherLoan"';
    return await $(`-ios predicate string:${elem}`);
  }

  async addressField() {
    const elem = 'value == "Alamat Perusahaan" AND type == "XCUIElementTypeTextField"';
    return await $(`-ios predicate string:${elem}`);
  }

  async lanjutButton() {
    const elem = 'name == "LANJUT" AND label == "LANJUT" AND type == "XCUIElementTypeButton"';
    return await $(`-ios predicate string:${elem}`);
  }

  async slider() {
    const elem = 'type == "XCUIElementTypeScrollView"';
    return await $(`-ios predicate string:${elem}`);
  }

  async selectionTable() {
    const elem = 'type == "XCUIElementTypeTable" AND index == 0';
    return await $(`-ios predicate string:${elem}`);
  }

  async selesaiKeyboardButton() {
    const elem = 'name == "Selesai"';
    return await $(`-ios predicate string:${elem}`);
  }

}
export default new PekerjaanPageIos();
