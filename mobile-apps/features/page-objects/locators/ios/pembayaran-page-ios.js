class PembayaranPageIos {

  async pageHeader() {
    const elem = `name == "Pembayaran"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async successRepaymentIcon() {
    const elem = `name == "icon-positive"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async successRepaymentTitle() {
    const elem = `name == "Pembayaran Tagihan Berhasil!"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async successRepaymentSubtitle() {
    const elem = `name == "Terima kasih sudah melakukan pembayaran tagihan."`;
    return await $(`-ios predicate string:${elem}`);
  }

  async kembaliKeHomeButton() {
    const elem = `name == "KEMBALI KE HOME" AND label == "KEMBALI KE HOME" AND type == "XCUIElementTypeButton"`;
    return await $(`-ios predicate string:${elem}`);
  }

}
export default new PembayaranPageIos();
