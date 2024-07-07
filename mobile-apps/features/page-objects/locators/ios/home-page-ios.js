import { convertToThousands } from "../../../helpers/convert-number.js";
import { dateTimeFormat } from "../../../helpers/date-time.js";

class HomePageIos {

  async applicationPendingImage(loanType) {
    const elem = loanType === 'Cash Loan' ? 'name == "img-application-processed"' : 'name == "img-employee-loan-process"';
    return await $(`-ios predicate string:${elem}`);
  }

  async applicationPendingTitle(loanType) {
    const elem = loanType === 'Cash Loan' ? 'name == "ProductStateView.lblTitleState" AND label == "Kami Sedang Menghitung Limit Dana Tunai Untukmu"' : 'label = "Pengajuan Diproses"';
    return await $(`-ios predicate string:${elem}`);
  }

  async applicationPendingSubtitle() {
    const elem = 'name == "ProductStateView.lblSubtitleState" AND label == "Prosesnya cuma sebentar kok, maksimal 1x24 jam."';
    return await $(`-ios predicate string:${elem}`);
  }

  async orderIdLabel(orderId) {
    const elem = `name == "ProductStateView.lblOrderId" AND label == "ORDER ID: ${orderId}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  // Disbursement
  async disbursementPageBody() {
    const elem = 'name == "DanaTunaiView.scrollMain"';
    return await $(`-ios predicate string:${elem}`);
  }

  async bannerDisbursement() {
    const elem = 'name == "bg-pre-approved-limit"';
    return await $(`-ios predicate string:${elem}`);
  }

  async bannerDisbursementTitle() {
    const elem = `name == "💰 Dana tunai telah disetujui hingga:"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async bannerDisbursementSubtitle() {
    const elem = 'name == "Cairkan dengan mengisi form dibawah 👇"';
    return await $(`-ios predicate string:${elem}`);
  }

  async approvedLimitCashLoan(approveLimit) {
    const elem = `label == "${await convertToThousands(approveLimit)}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async disbursementExpiryText() {
    const elem = 'name == "Segera cairkan dalam waktu:"';
    return await $(`-ios predicate string:${elem}`);
  }

  async disbursementExpiryCountdownTime() {
    const elem = 'name == "PreApprovedLimitView.lblCountdown"';
    return await $(`-ios predicate string:${elem}`);
  }

  async loanAmountTitle() {
    const elem = `label == "Dana yang dicairkan"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async loanAmountDropDownField() {
    const elem = `name == "loanAmount"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async loanAmountList(approveLimit) {
    const elem = `label == "${await convertToThousands(approveLimit)}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async tenureTitle() {
    const elem = `label == "Lama Pinjaman"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async tenureDropDownField() {
    const elem = `name == "loanDuration"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async tenureList(tenure) {
    const elem = `name == "${tenure} Bulan"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async loanPurposeDropDownField() {
    const elem = `name == "loanReason"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async tableListOption() {
    const elem = `**/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeTable`;
    return await $(`-ios class chain:${elem}`);
  }

  async selectPopupList(data) {
    const elem = `label == "${data}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async selectBankAccount() {
    const elem = `value == "Bank Pencairan Dana" AND type == "XCUIElementTypeTextField"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async promoField() {
    const elem = `label == "Kode promo / voucher / referral"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async promoAlert() {
    const elem = `label == "Ada promo yang bisa kamu gunakan. 🎉"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async installmentDetailDropDownField() {
    const elem = `name == "Detail Cicilan" AND type == "XCUIElementTypeOther"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async principalAmountText() {
    const elem = `label == "Pokok Pinjaman"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async principalAmountValue(principalAmount) {
    const elem = `label == "Rp ${principalAmount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async provisionText() {
    const elem = `label == "Biaya Layanan"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async provisionAmountValue(provisionAmount) {
    const elem = `label == "Rp ${provisionAmount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async interestAmountText() {
    const elem = `label == "Biaya Cicilan"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async interestAmountValue(interestAmount) {
    const elem = `label == "Rp ${interestAmount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async totalLoanAmountText() {
    const elem = `label == "Total Pinjaman"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async totalLoanAmountValue(totalAmount) {
    const elem = `label == "Rp ${totalAmount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async installmentPerMonthText() {
    const elem = `label == "Cicilan per Bulan"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async installmentPerMonthValue(installmentAmount) {
    const elem = `label == "Rp ${installmentAmount}" AND name == "Rp ${installmentAmount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async totalPaymentContainerText() {
    const elem = `label == "Cicilan per bulan"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async totalPaymentContainerValue(installmentAmount) {
    const elem = `label == "Rp ${installmentAmount}" AND name == "DanaTunaiView.lblInstallmentPerMonth"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async cairkanDanaButton() {
    const elem = `label == "CAIRKAN DANA" AND name == "CAIRKAN DANA"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async pendingDisbursementBanner() {
    const elem = `name == "img-disbursement-processed"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async pendingDisbursementTitle() {
    const elem = `label CONTAINS "Pencairan Dana Diproses"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async pendingDisbursementSubtitle() {
    const elem = `label CONTAINS "Dana akan masuk ke rekening Kamu dalam waktu 1 x 24 jam"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async dapatkanPenawaranSekarangButton() {
    const elem = 'name == "ProductStateView.btnCTA" AND label == "DAPATKAN PENAWARAN SEKARANG"';
    return await $(`-ios predicate string:${elem}`);
  }

  async cashLoanOfferingTitle() {
    const elem = 'name == "ProductStateView.lblTitleState" AND label == "Dapatkan Penawaran Dana Tunai"';
    return await $(`-ios predicate string:${elem}`);
  }

  async cashLoanOfferingSubtitle() {
    const elem = 'name == "ProductStateView.lblSubtitleState" AND label == "Ketuk tombol dibawah untuk menghitung dana maksimal untukmu. Cairkan langsung setelah dapat penawaran."';
    return await $(`-ios predicate string:${elem}`);
  }

  async homeTab() {
    const elem = 'name == "Home"';
    return await $(`-ios predicate string:${elem}`);
  }

  async transaksiTab() {
    const elem = 'name == "Transaksi"';
    return await $(`-ios predicate string:${elem}`);
  }

  async akunTab() {
    const elem = 'name == "Akun"';
    return await $(`-ios predicate string:${elem}`);
  }

  // Cash Loan Active Contract
  async activeLoanBanner() {
    const elem = 'name == "img-active-loan"';
    return await $(`-ios predicate string:${elem}`);
  }

  async activeLoanTitle() {
    const elem = 'name == "ProductStateView.lblTitleState" AND label == "Kamu memiliki pinjaman aktif"';
    return await $(`-ios predicate string:${elem}`);
  }

  async activeLoanSubtitle() {
    const elem = 'name == "ProductStateView.lblSubtitleState" AND label == "Lunasi semua tagihan untuk ambil pinjaman lagi."';
    return await $(`-ios predicate string:${elem}`);
  }

  async nextPaymentOrderIdValue(orderId) {
    const elem = `name == "CashLoanNextPaymentView.lblOrderId" AND label == "${orderId}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async nextPaymentTenureValue(tenure) {
    const elem = `name == "CashLoanNextPaymentView.lblTenure" AND label == "${tenure} Bulan"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async nextPaymentDueDateValue(dueDate) {
    const elem = `name == "CashLoanNextPaymentView.lblDueDate" AND label == "${dateTimeFormat('D MMM YYYY', dueDate)}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async nextPaymentAmountValue(amount) {
    const elem = `name == "CashLoanNextPaymentView.lblLoanAmount" AND label == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async nextPaymentTenureLabel() {
    const elem = 'name == "Tenor"';
    return await $(`-ios predicate string:${elem}`);
  }

  async nextPaymentDueDateLabel() {
    const elem = 'name == "CashLoanNextPaymentView.lblTitleDueDate" AND label == "Jatuh Tempo"';
    return await $(`-ios predicate string:${elem}`);
  }

  async nextPaymentAmountLabel() {
    const elem = 'name == "Tagihan Periode Ini"';
    return await $(`-ios predicate string:${elem}`);
  }

  async bayarTagihanButton() {
    const elem = 'name == "CashLoanNextPaymentView.btnCta" AND label == "BAYAR TAGIHAN"';
    return await $(`-ios predicate string:${elem}`);
  }

}
export default new HomePageIos();
