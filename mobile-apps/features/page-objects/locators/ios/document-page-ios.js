class DocumentPageIos {

  async pageTitle() {
    const elem = 'name == "KTP & Verifikasi Wajah"';
    return $(`-ios predicate string:${elem}`);
  }

  async lanjutButton() {
    const elem = 'name == "LANJUT" AND label == "LANJUT" AND type == "XCUIElementTypeButton"';
    return $(`-ios predicate string:${elem}`);
  }

  async idCardFormTitle() {
    const elem = 'name == "DocumentUploadFormView.lblIdCardTitle" AND label == "KTP Asli (Bukan Fotokopi)"';
    return $(`-ios predicate string:${elem}`);
  }

  async selfieFormTitle() {
    const elem = 'name == "DocumentUploadFormView.lblSelfieTitle" AND label == "Verifikasi Wajah (Selfie)"';
    return $(`-ios predicate string:${elem}`);
  }

}
export default new DocumentPageIos();
