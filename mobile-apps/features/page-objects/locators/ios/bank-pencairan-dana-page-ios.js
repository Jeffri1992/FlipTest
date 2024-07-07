class BankPencairanDanaPageIos {

  async pageTitle() {
    const elem = 'name == "Bank Pencairan Dana"';
    return await $(`-ios predicate string:${elem}`);
  }

  async daftarkanAkunBankButton() {
    const elem = 'label == "DAFTARKAN AKUN BANK"';
    return await $(`-ios predicate string:${elem}`);
  }

  async bankNameField() {
    const elem = `name == "bankName"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async bankAccountNumberField() {
    const elem = `name == "bankAccountNumber"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async suggestionBankList(name) {
    const elem = `name == "${name}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async simpanButton() {
    const elem = `name == "SIMPAN" AND label == "SIMPAN" AND type == "XCUIElementTypeButton"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async bankRegisteredList(status) {
    const elem = `name == "${status}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async bankListCheckBox() {
    const elem = '**/XCUIElementTypeTable[`name == "BankAccountView.tblBankAccounts"`]/XCUIElementTypeCell/XCUIElementTypeOther[4]';
    return await $(`-ios class chain:${elem}`);
  }

  async pilihBankButton() {
    const elem = `name == "PILIH BANK" AND label == "PILIH BANK" AND type == "XCUIElementTypeButton"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async tambahAkunBankButton() {
    const elem = `name == "TAMBAH AKUN BANK"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async selesaiKeyboardButton() {
    const elem = `name == "Selesai"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async emptyIcon() {
    const elem = 'name == "bank_account_empty"';
    return await $(`-ios predicate string:${elem}`);
  }

  async emptyListTitle() {
    const elem = 'label == "Anda belum memiliki akun bank terdaftar"';
    return await $(`-ios predicate string:${elem}`);
  }

  async emptyListSubtitle() {
    const elem = 'label == "Daftarkan akun bank untuk dapat melakukan pencairan dana."';
    return await $(`-ios predicate string:${elem}`);
  }

}
export default new BankPencairanDanaPageIos();
