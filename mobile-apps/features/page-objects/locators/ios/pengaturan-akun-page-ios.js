class PengaturanAkunPageIos {

  async pageHeader() {
    const elem = 'name == "Pengaturan Akun"';
    return await $(`-ios predicate string:${elem}`);
  }

  async backButton() {
    const elem = 'name == "HeaderBack"';
    return await $(`-ios predicate string:${elem}`);
  }

  async accountInfoSection() {
    const elem = 'name == "AccountSettingsView.tblSettings"';
    return await $(`-ios predicate string:${elem}`);
  }

  async fullNameText() {
    const elem = '**/XCUIElementTypeStaticText[`name == "Nama Lengkap"`][2]';
    return await $(`-ios class chain:${elem}`);
  }

  async fullNameValue(name) {
    const elem = `**/XCUIElementTypeStaticText[name == "${name}"][2]`;
    return await $(`-ios class chain:${elem}`);
  }

  async phoneNumberText() {
    const elem = '**/XCUIElementTypeStaticText[`name == "Nomor Handphone"`][2]';
    return await $(`-ios class chain:${elem}`);
  }

  async phoneNumberValue(phone) {
    const elem = `**/XCUIElementTypeStaticText[name == "${phone}"][2]`;
    return await $(`-ios class chain:${elem}`);
  }

  async emailText() {
    const elem = '**/XCUIElementTypeStaticText[`name == "Email"`][2]';
    return await $(`-ios class chain:${elem}`);
  }

  async emailValue(email) {
    const elem = `**/XCUIElementTypeStaticText[name == "${email}"][2]`;
    return await $(`-ios class chain:${elem}`);
  }

  async verifikasiEmailButton() {
    const elem = '**/XCUIElementTypeButton[`name == "btnVerifEmailAccountSettings"`][2]';
    return await $(`-ios class chain:${elem}`);
  }

  async addressText() {
    const elem = '**/XCUIElementTypeStaticText[`name == "Alamat"`][2]';
    return await $(`-ios class chain:${elem}`);
  }

  async addressValue(address) {
    const elem = `**/XCUIElementTypeStaticText[name == "${address}"][3]`;
    return await $(`-ios class chain:${elem}`);
  }

  async changePhoneNumberButton() {
    const elem = '**/XCUIElementTypeTable[`name == "AccountSettingsView.tblSettings"`]/XCUIElementTypeCell[1]';
    return await $(`-ios class chain:${elem}`);
  }

  async changePhoneNumberText() {
    const elem = 'name == "Ubah Nomor Handphone"';
    return await $(`-ios predicate string:${elem}`);
  }

  async changePhoneNumberArrowButton() {
    const elem = '**/XCUIElementTypeImage[`name == "icon-chevron-right"`][1]';
    return await $(`-ios class chain:${elem}`);
  }

  async changeEmailButton() {
    const elem = '**/XCUIElementTypeTable[`name == "AccountSettingsView.tblSettings"`]/XCUIElementTypeCell[2]';
    return await $(`-ios class chain:${elem}`);
  }

  async changeEmailText() {
    const elem = 'name == "Ubah Email"';
    return await $(`-ios predicate string:${elem}`);
  }

  async changeEmailArrowButton() {
    const elem = '**/XCUIElementTypeImage[`name == "icon-chevron-right"`][2]';
    return await $(`-ios class chain:${elem}`);
  }

  async changeAddressButton() {
    const elem = '**/XCUIElementTypeTable[`name == "AccountSettingsView.tblSettings"`]/XCUIElementTypeCell[3]';
    return await $(`-ios class chain:${elem}`);
  }

  async changeAddressText() {
    const elem = 'name == "Ubah Alamat"';
    return await $(`-ios predicate string:${elem}`);
  }

  async changeAddressArrowButton() {
    const elem = '**/XCUIElementTypeImage[`name == "icon-chevron-right"`][3]';
    return await $(`-ios class chain:${elem}`);
  }

  async changePinButton() {
    const elem = '**/XCUIElementTypeTable[`name == "AccountSettingsView.tblSettings"`]/XCUIElementTypeCell[4]';
    return await $(`-ios class chain:${elem}`);
  }

  async changePinText() {
    const elem = 'name == "Ubah PIN"';
    return await $(`-ios predicate string:${elem}`);
  }

  async changePinArrowButton() {
    const elem = '**/XCUIElementTypeImage[`name == "icon-chevron-right"`][4]';
    return await $(`-ios class chain:${elem}`);
  }

  async deviceManagementButton() {
    const elem = '**/XCUIElementTypeTable[`name == "AccountSettingsView.tblSettings"`]/XCUIElementTypeCell[5]';
    return await $(`-ios class chain:${elem}`);
  }

  async deviceManagementText() {
    const elem = 'name == "Perangkat Terhubung"';
    return await $(`-ios predicate string:${elem}`);
  }

  async deviceManagementArrowButton() {
    const elem = '**/XCUIElementTypeImage[`name == "icon-chevron-right"`][5]';
    return await $(`-ios class chain:${elem}`);
  }

  async deleteAccountButton() {
    const elem = '**/XCUIElementTypeTable[`name == "AccountSettingsView.tblSettings"`]/XCUIElementTypeCell[6]';
    return await $(`-ios class chain:${elem}`);
  }

  async deleteAccountText() {
    const elem = 'name == "Blokir Akun"';
    return await $(`-ios predicate string:${elem}`);
  }

  async deleteAccountArrowButton() {
    const elem = '**/XCUIElementTypeImage[`name == "icon-chevron-right"`][6]';
    return await $(`-ios class chain:${elem}`);
  }

}
export default new PengaturanAkunPageIos();
