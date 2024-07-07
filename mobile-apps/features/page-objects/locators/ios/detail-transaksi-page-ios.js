import { dateTimeWithTimezone } from '../../../helpers/date-time.js';

class DetailTransaksiPageIos {

  async pageHeader() {
    const elem = `name == "TransactionDetailView.lblMerchantName"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async transactionNumberLabel() {
    const elem = `name == "No. Transaksi"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async transactionNumberValue(orderId) {
    const elem = `name == "${orderId}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async transactionDateLabel() {
    const elem = `name == "Tanggal Transaksi"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async transactionDateValue(date) {
    const elem = `name == "${date}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async tenureLabel() {
    const elem = `name == "Tenor"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async tenureValue(tenure) {
    const elem = `name == "${tenure} Bulan"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async loanAmountLabel() {
    const elem = `name == "Pokok Pinjaman"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async loanAmountValue(amount) {
    const elem = `name == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async totalTransactionLabel() {
    const elem = `name == "TransactionDetailView.lblTotalTransactionTitle"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async totalTransactionValue(amount) {
    const elem = `name == "TransactionDetailView.lblTotalTransactionValue" AND label == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async lihatDetailButton() {
    const elem = `name == "TransactionDetailView.lblToggleDetail"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async interestAmountLabel() {
    const elem = `name == "Biaya Cicilan"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async interestAmountValue(amount) {
    const elem = `name == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async provisionAmountLabel() {
    const elem = `name == "Biaya Cicilan"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async provisionAmountValue(amount) {
    const elem = `name == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async unpaidAmountLabel() {
    const elem = `name == "Biaya Cicilan"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async unpaidAmountValue(amount) {
    const elem = `name == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async dueDateReminderField() {
    const elem = `name == "TransactionDetailView.lblPaymentReminder" AND label == "Kirim pengingat jatuh tempo via kalender."`;
    return await $(`-ios predicate string:${elem}`);
  }

  async downloadKontrakButton() {
    const elem = `name == "TransactionDetailView.btnDownloadContract"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async paymentHistoryTitle() {
    const elem = 'name == "TransactionDetailView.lblPaymentTitle" AND label == "Riwayat Pembayaran"';
    return await $(`-ios predicate string:${elem}`);
  }

  async dueDateReminderTitle() {
    const elem = 'name == "Pengingat Jatuh Tempo"';
    return await $(`-ios predicate string:${elem}`);
  }

  async headerBackButton() {
    const elem = `name == "HeaderBack"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async productNameLabel(name) {
    const elem = `label == "${name}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async loanStatusLabel() {
    const elem = 'name == "TransactionDetailView.lblStatus" AND label == "Selesai"';
    return await $(`-ios predicate string:${elem}`);
  }

  async paymentHistoryDateValue(date) {
    const elem = `name == "${dateTimeWithTimezone('D MMM YYYY, HH:mm', date)}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async paymentHistoryAmountValue(amount) {
    const elem = `name == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

}
export default new DetailTransaksiPageIos();
