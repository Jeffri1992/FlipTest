class PilihJenisPinjamanPageIos {

  async pageHeader() {
    const elem = 'name == "Pilih Jenis Pinjaman"';
    return await $(`-ios predicate string:${elem}`);
  }

  async employeeLoanTitle(text) {
    const elem = `name == "EmployeeLoanCardView.lblTitle" AND label == "Dana Tunai ${text} "`;
    return await $(`-ios predicate string:${elem}`);
  }

  async employeeLoanIcon() {
    const elem = 'name == "icon-employee-loan-v2"';
    return await $(`-ios predicate string:${elem}`);
  }

  async employeeLoanTenureText() {
    const elem = 'name == "EmployeeLoanCardView.lblTenorTitle" AND label == "Tenor"';
    return await $(`-ios predicate string:${elem}`);
  }

  async employeeLoanLimitText() {
    const elem = 'name == "EmployeeLoanCardView.lblMaxLimitTitle" AND label == "Maksimum Limit"';
    return await $(`-ios predicate string:${elem}`);
  }

  async employeeLoanTenureValue() {
    const elem = 'name == "EmployeeLoanCardView.lblTenor" AND label == "1 - 12 Bulan"';
    return await $(`-ios predicate string:${elem}`);
  }

  async employeeLoanLimitValue() {
    const elem = 'name == "EmployeeLoanCardView.lblMaxLimit" AND label == "5x Gaji"';
    return await $(`-ios predicate string:${elem}`);
  }

  async employeeLoanPilihButton() {
    const elem = 'name == "btnChooseEmployeeLoan" AND label == "PILIH"';
    return await $(`-ios predicate string:${elem}`);
  }

  async cashLoanTitle() {
    const elem = 'name == "Dana Tunai Indodana Fintech"';
    return await $(`-ios predicate string:${elem}`);
  }

  async cashLoanIcon() {
    const elem = 'name == "tab-danatunai"';
    return await $(`-ios predicate string:${elem}`);
  }

  async cashLoanTenureText() {
    const elem = 'name == "Tenor"';
    return await $(`-ios predicate string:${elem}`);
  }

  async cashLoanLimitText() {
    const elem = 'name == "Maksimum Limit"';
    return await $(`-ios predicate string:${elem}`);
  }

  async cashLoanTenureValue() {
    const elem = 'name == "CashLoanCardView.lblCashTenor" AND label == "3 - 12 Bulan"';
    return await $(`-ios predicate string:${elem}`);
  }

  async cashLoanLimitValue() {
    const elem = 'name == "CashLoanCardView.lblCashMaxLimit" AND label == "Rp 20.000.000"';
    return await $(`-ios predicate string:${elem}`);
  }

  async cashLoanPilihButton() {
    const elem = 'name == "btnChooseCashLoan" AND label == "PILIH"';
    return await $(`-ios predicate string:${elem}`);
  }

  async tncTitle() {
    const elem = 'name == "Syarat dan Ketentuan"';
    return await $(`-ios predicate string:${elem}`);
  }

  async coverageTitle() {
    const elem = 'label == "Area Layanan"';
    return await $(`-ios predicate string:${elem}`);
  }

}
export default new PilihJenisPinjamanPageIos();
