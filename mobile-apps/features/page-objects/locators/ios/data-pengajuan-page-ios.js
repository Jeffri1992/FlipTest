class DataPengajuanPageIos {

  async pageTitle() {
    const elem = 'name == "Data Pengajuan"';
    return await $(`-ios predicate string:${elem}`);
  }

  async firstSection() {
    const elem = '**/XCUIElementTypeTable[`name == "ApplicationFormView.tblFormList"`]/XCUIElementTypeCell[1]/XCUIElementTypeStaticText';
    return await $(`-ios class chain:${elem}`);
  }

  async secondSection() {
    const elem = '**/XCUIElementTypeTable[`name == "ApplicationFormView.tblFormList"`]/XCUIElementTypeCell[2]/XCUIElementTypeStaticText';
    return await $(`-ios class chain:${elem}`);
  }

  async thirdSection() {
    const elem = '**/XCUIElementTypeTable[`name == "ApplicationFormView.tblFormList"`]/XCUIElementTypeCell[3]/XCUIElementTypeStaticText';
    return await $(`-ios class chain:${elem}`);
  }

  async referralCodeText() {
    const elem = 'label == "Punya kode referral?"';
    return await $(`-ios predicate string:${elem}`);
  }

  async termsAndConditionText() {
    const elem = 'label == "Saya setuju dengan Syarat dan Ketentuan dan Kebijakan Privasi Indodana Fintech, serta Setuju dengan Pembuatan Data Tanda Tangan Elektronik"';
    return await $(`-ios predicate string:${elem}`);
  }

  async kirimPengajuanButton() {
    const elem = 'name == "ApplicationFormView.btnApply" AND label == "KIRIM PENGAJUAN"';
    return await $(`-ios predicate string:${elem}`);
  }

  async loanDetailSectionTitle() {
    const elem = 'name == "Detail Pinjaman"';
    return await $(`-ios predicate string:${elem}`);
  }

  async ubahButton() {
    const elem = 'name == "UBAH"';
    return await $(`-ios predicate string:${elem}`);
  }

  async installmentDetailSectionTitle() {
    const elem = 'name == "Detail Cicilan"';
    return await $$(`-ios predicate string:${elem}`)[1];
  }

  async tenureText() {
    const elem = 'name == "Lama Pinjaman"';
    return await $(`-ios predicate string:${elem}`);
  }

  async tenureValue(tenure) {
    const elem = `name == "${tenure} Bulan"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async principalText() {
    const elem = 'name == "Pokok Pinjaman"';
    return await $(`-ios predicate string:${elem}`);
  }

  async principalAmountValue(amount) {
    const elem = `name == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async interestText() {
    const elem = 'name == "Biaya Cicilan"';
    return await $(`-ios predicate string:${elem}`);
  }

  async interestAmountValue(amount) {
    const elem = `name == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async provisionText() {
    const elem = 'name == "Biaya Layanan"';
    return await $(`-ios predicate string:${elem}`);
  }

  async provisionAmountValue(amount) {
    const elem = `name == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async totalLoanText() {
    const elem = 'name == "Total Pinjaman"';
    return await $(`-ios predicate string:${elem}`);
  }

  async totalLoanAmountValue(amount) {
    const elem = `name == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async installmentPerMonthText() {
    const elem = 'label == "Cicilan per Bulan"';
    return await $(`-ios predicate string:${elem}`);
  }

  async installmentPerMonthValue(amount) {
    const elem = `label == "Rp ${amount}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async dataConfirmationTitlePopup() {
    const elem = 'name == "Data sudah benar?"';
    return await $(`-ios predicate string:${elem}`);
  }

  async dataConfirmationSubtitlePopup() {
    const elem = 'name == "Data tidak dapat diganti lagi setelah ini."';
    return await $(`-ios predicate string:${elem}`);
  }

  async yaButton() {
    const elem = 'name == "YA, DATA BENAR" AND label == "YA, DATA BENAR" AND value == "YA, DATA BENAR"';
    return await $(`-ios predicate string:${elem}`);
  }

  async kembaliButton() {
    const elem = 'name == "KEMBALI" AND label == "KEMBALI" AND value == "KEMBALI"';
    return await $(`-ios predicate string:${elem}`);
  }

  async bannerSecurityTitle() {
    const elem = 'name == "Indodana Fintech melindungi data Kamu"';
    return await $(`-ios predicate string:${elem}`);
  }

  async tambahButton() {
    const elem = 'name == "TAMBAH"';
    return await $(`-ios predicate string:${elem}`);
  }

  async referralBottomSheetTitle() {
    const elem = 'name == "Masukkan Kode Promo/Referral"';
    return await $(`-ios predicate string:${elem}`);
  }

  async referralBottomSheetField() {
    const elem = 'type == "XCUIElementTypeTextField"';
    return await $(`-ios predicate string:${elem}`);
  }

  async gunakanButton() {
    const elem = 'name == "GUNAKAN" AND label == "GUNAKAN" AND type == "XCUIElementTypeButton"';
    return await $(`-ios predicate string:${elem}`);
  }

  async batalButton() {
    const elem = 'name == "BATAL" AND label == "BATAL" AND type == "XCUIElementTypeButton"';
    return await $(`-ios predicate string:${elem}`);
  }


}
export default new DataPengajuanPageIos();
