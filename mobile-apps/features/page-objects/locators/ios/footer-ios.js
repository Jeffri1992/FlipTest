class FooterIos {

  async authorizedByOjkText() {
    const elem = 'name == "CertifiedView.lblCertified" AND label == "PT Artha Dana Teknologi berizin dan diawasi oleh Otoritas Jasa Keuangan"';
    return $(`-ios predicate string:${elem}`);
  }

  async afpiLogo() {
    const elem = 'name == "logo-afpi"';
    return $(`-ios predicate string:${elem}`);
  }

  async digicertLogo() {
    const elem = 'name == "logo-digicert"';
    return $(`-ios predicate string:${elem}`);
  }

  async cbqaLogo() {
    const elem = 'name == "logo-cbqa"';
    return $(`-ios predicate string:${elem}`);
  }

}
export default new FooterIos();
