class DanaTunaiKaryawanPageAndroid {

  async pageHeader(name) {
    const elem = `name == "Dana Tunai Karyawan ${name}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async loanTypeSectionTitle() {
    const elem = 'name == "EmployeeLoanView.lblLoanTypeTitle" AND label == "Pilih Jenis Pinjaman"';
    return await $(`-ios predicate string:${elem}`);
  }

  async danaTunaiKaryawanButton() {
    const elem = 'name == "EmployeeLoanView.lblEmployeeCashTitle" AND label == "Dana Tunai Karyawan"';
    return await $(`-ios predicate string:${elem}`);
  }

  async danaTunaiKaryawanDetail() {
    const elem = 'label == "Pinjaman dengan bunga rendah khusus karyawan perusahaan. Pelajari Selengkapnya"';
    return await $(`-ios predicate string:${elem}`);
  }

  async salaryAdvanceButton() {
    const elem = 'name == "EmployeeLoanView.lblSalaryAdvanceTitle" AND label == "Salary Advance (Kasbon)"';
    return await $(`-ios predicate string:${elem}`);
  }

  async salaryAdvanceDetail() {
    const elem = 'label == "Pinjaman tanpa bunga dengan limit hingga 95% gaji 1 bulan. Pelajari Selengkapnya"';
    return await $(`-ios predicate string:${elem}`);
  }

  async loanDetailSectionTitle() {
    const elem = 'name == "EmployeeLoanView.lblLoanDetailTitle" AND label == "Detail Pinjaman"';
    return await $(`-ios predicate string:${elem}`);
  }

  async loanAmountField() {
    const elem = 'name == "EmployeeLoanView.txtAmount"';
    return await $(`-ios predicate string:${elem}`);
  }

  async minimumLoanAmountText(loanType) {
    const elem = `name == "EmployeeLoanView.lblMinAmount" AND label == "Rp ${loanType === 'Employee Loan' ? '5.000.000' : '10.000'}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async maximumLoanAmountText(amount) {
    const elem = `name == "EmployeeLoanView.lblMaxAmount" AND label == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async loanTenureText() {
    const elem = 'name == "Lama Pinjaman"';
    return await $(`-ios predicate string:${elem}`);
  }

  async loanTenureField() {
    const elem = 'type == "XCUIElementTypeTextField"';
    return await $$(`-ios predicate string:${elem}`)[1];
  }

  async loanTenureList(tenure) {
    const elem = `value == "${tenure} Bulan"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async installmentDetailSectionTitle() {
    const elem = '**/XCUIElementTypeOther[`name == "EmployeeLoanView.vwInstallmentDetailToggle"`]/XCUIElementTypeButton';
    return await $(`-ios class chain:${elem}`);
  }

  async principalText() {
    const elem = 'name == "Pokok Pinjaman"';
    return await $(`-ios predicate string:${elem}`);
  }

  async principalAmountValue(amount) {
    const elem = `name == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async interestFeeText() {
    const elem = 'name == "Biaya Cicilan"';
    return await $(`-ios predicate string:${elem}`);
  }

  async interestFeeAmountValue(amount) {
    const elem = `name == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async provisionFeeText() {
    const elem = 'name == "Biaya Layanan"';
    return await $(`-ios predicate string:${elem}`);
  }

  async provisionFeeAmountValue(amount) {
    const elem = `name == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async totalLoanText() {
    const elem = 'name == "Total Pinjaman"';
    return await $(`-ios predicate string:${elem}`);
  }

  async totalLoanAmountValue(amount) {
    const elem = `name == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async installmentPerMonthText(loanType) {
    const elem = `name == "EmployeeLoanView.lblSummaryTitle" AND label == "${loanType === 'Employee Loan' ? 'Cicilan per Bulan' : 'Total Pinjaman'}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async installmentPerMonthValue(amount) {
    const elem = `name == "EmployeeLoanView.lblSummary" AND label == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async loanDetailInfoMessage() {
    const elem = 'name == "Cicilan akan dibayarkan secara otomatis oleh perusahaan."';
    return await $(`-ios predicate string:${elem}`);
  }

  async ajukanButton() {
    const elem = 'name == "AJUKAN PINJAMAN"';
    return await $(`-ios predicate string:${elem}`);
  }

}
export default new DanaTunaiKaryawanPageAndroid();
