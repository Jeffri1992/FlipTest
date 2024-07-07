import { getSelector } from "../../../helpers/base-class.js";

class InformasiPribadiPageIos {

  async pageTitle() {
    const elem = 'name == "Informasi Pribadi"';
    return $(`-ios predicate string:${elem}`);
  }

  async applicantNameField() {
    const elem = 'name == "applicantName"';
    return $(`-ios predicate string:${elem}`);
  }

  async motherNameField() {
    const elem = 'name == "applicantMothersMaidenName"';
    return $(`-ios predicate string:${elem}`);
  }

  async lastEducationDropDownField() {
    const elem = 'name == "applicantLastEducationLevel"';
    return $(`-ios predicate string:${elem}`);
  }

  async selectPopupList(data) {
    const elem = `name == "${data}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async emailField() {
    const elem = 'name == "applicantPersonalEmail"';
    return $(`-ios predicate string:${elem}`);
  }

  async addressField() {
    const elem = 'name == "applicantCurrentAddress"';
    return $(`-ios predicate string:${elem}`);
  }

  async residenceOwnershipDropDownField() {
    const elem = 'name == "applicantResidenceOwnershipStatus"';
    return $(`-ios predicate string:${elem}`);
  }

  async referenceRelationshipDropDownField() {
    const elem = 'name == "referenceRelationship"';
    return $(`-ios predicate string:${elem}`);
  }

  async referenceRelationshipDropDownForm() {
    const elem = getSelector('resourceId', { targetId: 'formReferenceFamilyRelation' });
    return await $(`android=${elem}`);
  }

  async referenceNameField() {
    const elem = 'name == "referenceFullName"';
    return $(`-ios predicate string:${elem}`);
  }

  async referencePhoneField() {
    const elem = 'name == "referenceMobilePhoneNumber"';
    return $(`-ios predicate string:${elem}`);
  }

  async lanjutButton() {
    const elem = 'name == "LANJUT" AND label == "LANJUT" AND type == "XCUIElementTypeButton"';
    return $(`-ios predicate string:${elem}`);
  }

  async slider() {
    const elem = 'type == "XCUIElementTypeScrollView"';
    return await $(`-ios predicate string:${elem}`);
  }

  async selectionTable() {
    const elem = 'type == "XCUIElementTypeTable" AND index == 0';
    return await $(`-ios predicate string:${elem}`);
  }

  async selesaiKeyboardButton() {
    const elem = 'name == "Selesai"';
    return await $(`-ios predicate string:${elem}`);
  }

  //Employee Loan
  async bankAccountField() {
    const elem = 'name == "applicantBankName"';
    return await $(`-ios predicate string:${elem}`);
  }

  async loanPurposeField() {
    const elem = 'name == "loanPurpose"';
    return await $(`-ios predicate string:${elem}`);
  }

}
export default new InformasiPribadiPageIos();
