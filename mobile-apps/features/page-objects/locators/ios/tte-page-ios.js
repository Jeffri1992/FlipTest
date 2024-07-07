class TtePageIos {

  async tteTitle() {
    const elem = 'label == "PERJANJIAN PEMBERIAN PINJAMAN" AND name == "PERJANJIAN PEMBERIAN PINJAMAN" AND value == "PERJANJIAN PEMBERIAN PINJAMAN"';
    return await $(`-ios predicate string:${elem}`);
  }

  async scrollToBottomButton() {
    const elem = 'name == "GeneralContractView.vwButtonScroll"';
    return await $(`-ios predicate string:${elem}`);
  }

  async sayaSetujuButton() {
    const elem = 'label == "SAYA SETUJU" AND name == "GeneralContractView.btnAgree"';
    return await $(`-ios predicate string:${elem}`);
  }

}
export default new TtePageIos();
