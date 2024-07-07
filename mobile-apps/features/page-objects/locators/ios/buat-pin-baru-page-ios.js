class BuatPinBaruPageIos {

  async pageHeader(entryPoint) {
    const elem = entryPoint === 'change' ? 'name == "Ubah PIN"' : 'label == "Buat PIN"';
    return await $(`-ios predicate string:${elem}`);
  }

  async newPinPageTitle() {
    const elem = 'label == "Masukkan 6 Digit PIN"';
    return await $(`-ios predicate string:${elem}`);
  }

  async changePinPageTitle() {
    const elem = 'name == "Masukkan PIN Baru"';
    return await $(`-ios predicate string:${elem}`);
  }

  async pageSubtitle() {
    const elem = 'label == "PIN digunakan untuk login dan otorisasi transaksi. Jangan berikan PIN kepada siapapun termasuk pihak Indodana Fintech"';
    return await $(`-ios predicate string:${elem}`);
  }

  async inputPinField() {
    const elem = 'name == "AuthFieldInput"';
    return await $(`-ios predicate string:${elem}`);
  }

  async errorMessage(message) {
    const elem = `label == "${message}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async pinGuideIcon() {
    const elem = 'name == "icon-pin-suggestion"';
    return await $(`-ios predicate string:${elem}`);
  }

  async pinGuideTitle() {
    const elem = 'label == "Contoh PIN yang Harus Dihindari"';
    return await $(`-ios predicate string:${elem}`);
  }

  async pinGuideExampleList() {
    const elem = '//XCUIElementTypeStaticText[@name="	•	Urutan angka yang mudah ditebak/berulang seperti 123456, 000000, 112233, atau 223344. 	•	Data pribadi seperti tanggal ulang tahun atau alamat dan nomor telepon. "]';
    return await $(`xpath:${elem}`);
  }

  //Confirmation PIN
  async pageTitleConfirmationPin() {
    const elem = 'label == "Ulangi PIN Baru"';
    return await $(`-ios predicate string:${elem}`);
  }

  async pageSubtitleConfirmationPin() {
    const elem = 'label == "Masukkan ulang PIN yang baru saja Kamu buat"';
    return await $(`-ios predicate string:${elem}`);
  }

  //bottom dialog when input old pin
  async bottomSheetDialogTitle() {
    const elem = 'name == "Maaf"';
    return await $(`-ios predicate string:${elem}`);
  }

  async bottomSheetDialogMessage() {
    const elem = 'name == "PIN ini sudah pernah digunakan. Silahkan buat ulang dengan PIN baru."';
    return await $(`-ios predicate string:${elem}`);
  }

  async okButton() {
    const elem = 'name == "OK" AND label == "OK" AND type == "XCUIElementTypeButton"';
    return await $(`-ios predicate string:${elem}`);
  }

}
export default new BuatPinBaruPageIos();
