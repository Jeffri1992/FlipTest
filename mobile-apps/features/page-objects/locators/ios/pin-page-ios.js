class PinPageIos {

  async pageHeader() {
    const elem = '**/XCUIElementTypeStaticText[`name CONTAINS "Masukkan PIN"`][1]';
    return await $(`-ios class chain:${elem}`);
  }

  async pageSubtitle() {
    const elem = '**/XCUIElementTypeStaticText[`name CONTAINS "Masukkan PIN"`][2]';
    return await $(`-ios class chain:${elem}`);
  }

  async inputPinField() {
    const elem = 'name == "AuthFieldInput"';
    return await $(`-ios predicate string:${elem}`);
  }

  async lupaPinButton() {
    const elem = 'name == "LUPA PIN" && label == "LUPA PIN" && value == "LUPA PIN"';
    return await $(`-ios predicate string:${elem}`);
  }

  async lanjutkanButton() {
    const elem = 'label == "LANJUTKAN" AND name == "LANJUTKAN" AND type == "XCUIElementTypeButton"';
    return await $(`-ios predicate string:${elem}`);
  }

  async confirmationPopupText() {
    const elem = 'name == "Indodana Fintech tidak akan pernah meminta kode rahasia (PIN & OTP) Anda melalui SMS, WhatsApp, telepon dan link apapun di luar App & Web Indodana Fintech."';
    return await $(`-ios predicate string:${elem}`);
  }

  async yaSayaMengertiButton() {
    const elem = 'label == "YA, SAYA MENGERTI" AND name == "YA, SAYA MENGERTI" AND type == "XCUIElementTypeButton"';
    return await $(`-ios predicate string:${elem}`);
  }

}
export default new PinPageIos();
