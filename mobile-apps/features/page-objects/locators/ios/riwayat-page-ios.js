import { dateTimeFormat } from "../../../helpers/date-time.js";

class RiwayatPageIos {

  async pageHeader() {
    const elem = `name == "Riwayat"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async transactionHeader(orderId, transactionDate) {
    const elem = `name == "${orderId} • ${dateTimeFormat('D MMM YYYY', transactionDate)}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async paidOffDateLabel() {
    const elem = 'name == "Tanggal Pelunasan"';
    return await $$(`-ios predicate string:${elem}`)[0];
  }

  async tenureLabel() {
    const elem = 'name == "Tenor"';
    return await $$(`-ios predicate string:${elem}`)[0];
  }

  async totalPaidLabel() {
    const elem = 'name == "Total Pembayaran"';
    return await $$(`-ios predicate string:${elem}`)[0];
  }

  async paidOffDateValue(transactionDate) {
    const elem = `name == "${dateTimeFormat('D MMM YYYY', transactionDate)}"`;
    return await $$(`-ios predicate string:${elem}`)[0];
  }

  async tenureValue(tenure) {
    const elem = `name == "${tenure} Bulan"`;
    return await $$(`-ios predicate string:${elem}`)[0];
  }

  async totalPaidAmountValue(amount) {
    const elem = `name == "Rp ${amount}"`;
    return await $$(`-ios predicate string:${elem}`)[0];
  }

  async headerBackButton() {
    const elem = 'name == "HeaderBack"';
    return await $$(`-ios predicate string:${elem}`)[0];
  }

}
export default new RiwayatPageIos();
