import { dateTimeFormat } from "../../../helpers/date-time.js";

class CaraPembayaranPageIos {

  async pageHeader() {
    const elem = `name == "Cara Pembayaran"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async paymentAlert(date) {
    const elem = `name == "Segera selesaikan pembayaran sebelum ${dateTimeFormat('DD MMM YYYY', date)}, 23:59 WIB."`;
    return await $(`-ios predicate string:${elem}`);
  }

  async totalBillAmountValue(amount) {
    const elem = `name == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async totalTenureBillValue(tenure) {
    const elem = `name == "TOTAL (${tenure} Tagihan)"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async ubahButton() {
    const elem = `name == "UBAH" AND label == "UBAH" AND value == "UBAH"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async konfirmasiPembayaranButton() {
    const elem = `name == "KONFIRMASI PEMBAYARAN" AND label == "KONFIRMASI PEMBAYARAN" AND type == "XCUIElementTypeButton"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async virtualAccountValue(virtualAccount) {
    const elem = `name == "${virtualAccount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

}
export default new CaraPembayaranPageIos();
