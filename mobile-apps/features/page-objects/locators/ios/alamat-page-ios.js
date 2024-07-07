class AlamatPageIos {

  async currentHomeAddressTitle() {
    const elem = 'name == "Alamat Saat Ini"';
    return await $(`-ios predicate string:${elem}`);
  }

  async currentWorkAddressTitle() {
    const elem = 'name == "Alamat Perusahaan"';
    return await $(`-ios predicate string:${elem}`);
  }

  async currentAddressDetailField() {
    const elem = 'type == "XCUIElementTypeTextField"';
    return await $(`-ios predicate string:${elem}`);
  }

  async addressResultList() {
    const elem = '**/XCUIElementTypeCell[1]';
    return await $(`-ios class chain:${elem}`);
  }

  async openMapButton() {
    const elem = 'name == "PILIH DARI PETA" AND label == "PILIH DARI PETA" AND value == "PILIH DARI PETA"';
    return await $(`-ios predicate string:${elem}`);
  }

  async chooseLocationMapButton() {
    const elem = 'name == "TERAPKAN" AND label == "TERAPKAN" AND type == "XCUIElementTypeButton"';
    return await $(`-ios predicate string:${elem}`);
  }

  async simpanButton() {
    const elem = 'name == "AddressPickerView.btnSave" AND label == "SIMPAN" AND type == "XCUIElementTypeButton"';
    return await $(`-ios predicate string:${elem}`);
  }

}
export default new AlamatPageIos();
