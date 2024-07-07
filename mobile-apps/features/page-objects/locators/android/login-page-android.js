import { getSelector } from "../../../helpers/base-class.js";

class LoginPageAndroid {

  async inputEmail() {
    const elem = getSelector('className', { targetClass: 'android.widget.EditText' });
    return await $(`android=${elem}.text("Username")`);
  }

  async inputPassword() {
    const elem = getSelector('className', { targetClass: 'android.widget.EditText' });
    return await $(`android=${elem}.text("Password")`);
  }

  async loginButton() {
    const elem = '//android.view.ViewGroup[@content-desc="test-LOGIN"]';
    return await $(`xpath:${elem}`);
  }

  async filterButton() {
    const elem = '//android.view.ViewGroup[@content-desc="test-Modal Selector Button"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView';
    return await $(`xpath:${elem}`);
  }

  async lowToHighButton() {
    const elem = getSelector('className', { targetClass: 'android.widget.TextView' });
    return await $(`android=${elem}.text("Price (low to high)")`);
  }

  async highToLowButton() {
    const elem = getSelector('className', { targetClass: 'android.widget.TextView' });
    return await $(`android=${elem}.text("Price (high to low)")`);
  }

  async itemsInFirstRow() {
    const elem = '//android.widget.ScrollView[@content-desc="test-PRODUCTS"]/android.view.ViewGroup/android.view.ViewGroup[1]';
    return await $(`xpath:${elem}`);
  }

  async firstItems() {
    const elem = '(//android.widget.TextView[@content-desc="test-Price"])[1]';
    return await $(`xpath:${elem}`);
  }

  async secondItems() {
    const elem = '(//android.widget.TextView[@content-desc="test-Price"])[2]';
    return await $(`xpath:${elem}`);
  }

  async addToCartButton() {
    const elem = '(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]/android.widget.TextView';
    return await $(`xpath:${elem}`);
  }

  async cartButton() {
    const elem = '//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.view.ViewGroup';
    return await $(`xpath:${elem}`);
  }

  async checkOutButton() {
    const elem = getSelector('className', { targetClass: 'android.widget.TextView' });
    return await $(`android=${elem}.text("CHECKOUT")`);
  }

  async firstName() {
    const elem = getSelector('className', { targetClass: 'android.widget.EditText' });
    return await $(`android=${elem}.text("First Name")`);
  }
  
  async lastName() {
    const elem = getSelector('className', { targetClass: 'android.widget.EditText' });
    return await $(`android=${elem}.text("Last Name")`);
  }

  async zipCode() {
    const elem = getSelector('className', { targetClass: 'android.widget.EditText' });
    return await $(`android=${elem}.text("Zip/Postal Code")`);
  }

  async continueButton() {
    const elem = getSelector('className', { targetClass: 'android.widget.TextView' });
    return await $(`android=${elem}.text("CONTINUE")`);
  }

  async finishButton() {
    const elem = getSelector('className', { targetClass: 'android.widget.TextView' });
    return await $(`android=${elem}.text("FINISH")`);
  }

  async completeHeader() {
    const elem = getSelector('className', { targetClass: 'android.widget.TextView' });
    return await $(`android=${elem}.text("CHECKOUT: COMPLETE!")`);
  }

  async thankYouHeader() {
    const elem = getSelector('className', { targetClass: 'android.widget.TextView' });
    return await $(`android=${elem}.text("THANK YOU FOR YOU ORDER")`);
  }

}
export default new LoginPageAndroid();
