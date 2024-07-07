class AkunPageIos {

  async pageHeader() {
    const elem = 'name == "Akun" AND label == "Akun" AND value == "Akun"';
    return await $(`-ios predicate string:${elem}`);
  }

  async tableMenu() {
    const elem = 'name == "tblMenu"';
    return await $(`-ios predicate string:${elem}`);
  }

  async emailVerificationBanner() {
    const elem = 'name == "btnVerifEmail"';
    return await $(`-ios predicate string:${elem}`);
  }

  async emailVerificationTitle() {
    const elem = 'name == "Verifikasi Email kamu dulu, yuk!"';
    return await $(`-ios predicate string:${elem}`);
  }

  async emailVerificationMessage() {
    const elem = 'name == "Hanya selangkah untuk meningkatkan keamanan akun kamu"';
    return await $(`-ios predicate string:${elem}`);
  }

  async profileName(name) {
    const elem = `name == "${name}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async profilePhone(phone) {
    const elem = `name == "${phone}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async profileEmail(email) {
    const elem = `name == "${email}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async pengaturanAkunButton() {
    const elem = 'name == "PENGATURAN AKUN"';
    return await $(`-ios predicate string:${elem}`);
  }

  async howToPaySection() {
    const elem = 'name == "Cara Bayar"';
    return await $(`-ios predicate string:${elem}`);
  }

  async excessBalanceSection() {
    const elem = 'name == "vwExcess"';
    return await $(`-ios predicate string:${elem}`);
  }

  async informasiLainnyaTitle() {
    const elem = 'name == "Informasi Lainnya" AND label == "Informasi Lainnya"';
    return await $(`-ios predicate string:${elem}`);
  }

  async contactUsSection() {
    const elem = 'name == "AccountMenuCell.contactUs"';
    return await $(`-ios predicate string:${elem}`);
  }

  async contactUsIcon() {
    const elem = 'name == "icon-contact-us"';
    return await $(`-ios predicate string:${elem}`);
  }

  async contactUsText() {
    const elem = 'name == "Hubungi Kami"';
    return await $(`-ios predicate string:${elem}`);
  }

  async faqSection() {
    const elem = 'name == "AccountMenuCell.faq"';
    return await $(`-ios predicate string:${elem}`);
  }

  async faqIcon() {
    const elem = 'name == "icon-question-circle"';
    return await $(`-ios predicate string:${elem}`);
  }

  async faqText() {
    const elem = 'name == "FAQ"';
    return await $(`-ios predicate string:${elem}`);
  }

  async aboutUsSection() {
    const elem = 'name == "AccountMenuCell.about"';
    return await $(`-ios predicate string:${elem}`);
  }

  async aboutUsIcon() {
    const elem = 'name == "icon-about"';
    return await $(`-ios predicate string:${elem}`);
  }

  async aboutUsText() {
    const elem = 'name == "Tentang Kami"';
    return await $(`-ios predicate string:${elem}`);
  }

  async tncSection() {
    const elem = 'name == "AccountMenuCell.termsCondition"';
    return await $(`-ios predicate string:${elem}`);
  }

  async tncIcon() {
    const elem = 'name == "icon-tnc"';
    return await $(`-ios predicate string:${elem}`);
  }

  async tncText() {
    const elem = 'name == "Syarat & Ketentuan"';
    return await $(`-ios predicate string:${elem}`);
  }

  async privacyPolicySection() {
    const elem = 'name == "AccountMenuCell.privacyPolicy"';
    return await $(`-ios predicate string:${elem}`);
  }

  async privacyPolicyIcon() {
    const elem = 'name == "icon-security"';
    return await $(`-ios predicate string:${elem}`);
  }

  async privacyPolicyText() {
    const elem = 'name == "Kebijakan Privasi"';
    return await $(`-ios predicate string:${elem}`);
  }

  async socialMediaSection() {
    const elem = 'name == "AccountMenuCell.socialMedia"';
    return await $(`-ios predicate string:${elem}`);
  }

  async socialMediaIcon() {
    const elem = 'name == "icon-social-media"';
    return await $(`-ios predicate string:${elem}`);
  }

  async socialMediaText() {
    const elem = 'name == "Social Media Kami"';
    return await $(`-ios predicate string:${elem}`);
  }

  async logoutSection() {
    const elem = 'name == "AccountMenuCell.logout"';
    return await $(`-ios predicate string:${elem}`);
  }

  async logoutIcon() {
    const elem = 'name == "icon-log-out"';
    return await $(`-ios predicate string:${elem}`);
  }

  async logoutText() {
    const elem = 'name == "Log Out"';
    return await $(`-ios predicate string:${elem}`);
  }

}
export default new AkunPageIos();
