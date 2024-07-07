class LoginPageIos {

	async pageHeader() {
		const elem = 'name == "Masuk / Buat Akun"';
		return $(`-ios predicate string:${elem}`);
	}

	async backButton() {
		const elem = 'name == "HeaderBack"';
		return $(`-ios predicate string:${elem}`);
	}

	async loginTitle() {
		const elem = 'name == "PhoneLoginView.lblTitle" AND label == "Masukkan Nomor Handphone"';
		return $(`-ios predicate string:${elem}`);
	}

	async inputPhoneText() {
		const elem = 'name == "PhoneLoginView.lblPhoneNumberTitle"';
		return $(`-ios predicate string:${elem}`);
	}

	async countryCodeText() {
		const elem = 'name == "+62"';
		return $(`-ios predicate string:${elem}`);
	}

	async phoneNumberField() {
		const elem = 'name == "PhoneLoginView.fieldPhone"';
		return $(`-ios predicate string:${elem}`);
	}

	async lanjutButton() {
		const elem = 'name == "PhoneLoginView.btnRequestOTP" AND label == "LANJUT"';
		return $(`-ios predicate string:${elem}`);
	}

	async agreementCheckbox() {
		const elem = '**/XCUIElementTypeOther[`name == "PhoneLoginView.vwCardContainer"`]/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeButton';
		return $(`-ios class chain:${elem}`);
	}

	async agreementClause() {
		const elem = 'name == "PhoneLoginView.lblAgreement" AND label == "Saya setuju dengan Syarat dan Ketentuan dan Kebijakan Privasi Indodana Fintech"';
		return $(`-ios predicate string:${elem}`);
	}

}
export default new LoginPageIos();
