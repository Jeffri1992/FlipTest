class LandingPageIos {

  async pageTitle() {
    const elem = 'name == "Selamat datang di Indodana"';
    return $(`-ios predicate string:${elem}`);
  }

  async landingPageContentText1() {
    const elem = 'name == "Cair hingga Rp20 Juta dengan tenor hingga 12 bulan."';
    return $(`-ios predicate string:${elem}`);
  }

  async landingPageContentText2() {
    const elem = 'name == "Proses cepat, cukup siapkan KTP dan Selfie."';
    return $(`-ios predicate string:${elem}`);
  }

  async landingPageContentText3() {
    const elem = 'name == "Aman dan terpercaya karena berizin dan diawasi oleh OJK."';
    return $(`-ios predicate string:${elem}`);
  }

  async daftarButton() {
    const elem = 'name == "DAFTAR" AND label == "DAFTAR" AND type == "XCUIElementTypeButton"';
    return $(`-ios predicate string:${elem}`);
  }

}
export default new LandingPageIos();
