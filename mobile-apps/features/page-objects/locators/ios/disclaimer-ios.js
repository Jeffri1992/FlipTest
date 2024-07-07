class DisclaimerIos {

  async pageHeader() {
    const elem = 'name == "Disclaimer"';
    return await $(`-ios predicate string:${elem}`);
  }

  async setujuButton() {
    const elem = 'name == "DisclaimerView.btnAgree" AND label == "SETUJU" AND type == "XCUIElementTypeButton"';
    return await $(`-ios predicate string:${elem}`);
  }

}
export default new DisclaimerIos();
