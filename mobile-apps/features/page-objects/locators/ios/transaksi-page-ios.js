import { dateTimeFormat } from "../../../helpers/date-time.js";

class TransaksiPageIos {

  async pageHeader() {
    const elem = `name == "Transaksi" AND label == "Transaksi" AND value == "Transaksi"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async transactionHeader(orderId, transactionDate) {
    const elem = `name == "${orderId} • ${dateTimeFormat('D MMM YYYY', transactionDate)}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async loanAmountValue(amount) {
    const elem = `name == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async loanAmountLabel() {
    const elem = `name == "Pokok Pinjaman"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async lihatCicilanLainnyaButton() {
    const elem = `name == "LIHAT CICILAN LAINNYA"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async installmentFromToLabel(index) {
    const elem = `**/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[${index}]/XCUIElementTypeStaticText[1]`;
    return await $(`-ios class chain:${elem}`);
  }

  async installmentAmountValue(index) {
    const elem = `**/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[${index}]/XCUIElementTypeStaticText[2]`;
    return await $(`-ios class chain:${elem}`);
  }

  async installmentDueDateLabel(index) {
    const elem = `**/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[${index}]/XCUIElementTypeStaticText[3]`;
    return await $(`-ios class chain:${elem}`);
  }

  async installmentDueDateValue(index) {
    const elem = `**/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[${index}]/XCUIElementTypeStaticText[4]`;
    return await $(`-ios class chain:${elem}`);
  }

  async tenureCheckbox(index) {
    const elem = `**/XCUIElementTypeTable/XCUIElementTypeCell[${index}]/XCUIElementTypeButton`;
    return await $(`-ios class chain:${elem}`);
  }

  async totalBillAmountValue(amount) {
    const elem = `name == "ActiveTransactionView.lblTotalPayment" AND label == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async totalTenureBillValue(tenure) {
    const elem = `label == "${tenure} Tagihan"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async bayarTagihanButton() {
    const elem = `name == "ActiveTransactionView.btnPayBill" AND label == "BAYAR TAGIHAN"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async paymentHistoryButton() {
    const elem = '**/XCUIElementTypeOther[`name == "TransactionView.viewActiveTransaction"`]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton';
    return await $(`-ios class chain:${elem}`);
  }

}
export default new TransaksiPageIos();
