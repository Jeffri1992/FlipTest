class SplashScreenIos {

	async firstOnboardingImage() {
		const elem = 'name == "onboarding-indocash-1"';
		return await $(`-ios predicate string:${elem}`);
	}

	async firstOnboardingText() {
		const elem = 'name == "OnboardingView.lblTitleOnboarding1" AND label == "Dana Tunai hingga 20 Juta dan Tenor 12 Bulan."';
		return await $(`-ios predicate string:${elem}`);
	}

	async secondOnboardingImage() {
		const elem = 'name == "onboarding-indocash-2"';
		return await $(`-ios predicate string:${elem}`);
	}

	async secondOnboardingText() {
		const elem = 'name == "OnboardingView.lblTitleOnboarding2" AND label == "Proses cepat, cukup siapkan KTP dan Selfie"';
		return await $(`-ios predicate string:${elem}`);
	}

	async thirdOnboardingImage() {
		const elem = 'name == "onboarding-indocash-3"';
		return await $(`-ios predicate string:${elem}`);
	}

	async thirdOnboardingText() {
		const elem = 'name == "OnboardingView.lblTitleOnboarding3" AND label == "Aman dan terpercaya karena berizin dan diawasi oleh OJK"';
		return await $(`-ios predicate string:${elem}`);
	}

	async lanjutButton() {
		const elem = 'name == "LANJUT" AND label == "LANJUT" AND type == "XCUIElementTypeButton"';
		return await $(`-ios predicate string:${elem}`);
	}

	async cobaLagiButton() {
		const elem = 'label == "COBA LAGI" AND name == "COBA LAGI" AND type == "XCUIElementTypeButton"';
		return await $(`-ios predicate string:${elem}`);
	}

}
export default new SplashScreenIos();
