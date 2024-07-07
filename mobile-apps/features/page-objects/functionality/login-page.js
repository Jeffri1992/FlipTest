import LoginPageAndroid from "../locators/android/login-page-android.js";
import * as BaseClass from "../../helpers/base-class.js";
import { expect } from 'chai';

class LoginPage {

  async inputEmail() {
    await BaseClass.elementWaitForDisplayed(await LoginPageAndroid.inputEmail());
    await BaseClass.elementSetValue(await LoginPageAndroid.inputEmail(), "standard_user");
    await BaseClass.elementSetValue(await LoginPageAndroid.inputPassword(), "secret_sauce");
    await BaseClass.clickElement(await LoginPageAndroid.loginButton());
  }
  async verifyPrice() {
    let firstItems, secondItems
    await BaseClass.elementWaitForDisplayed(await LoginPageAndroid.itemsInFirstRow());
    await BaseClass.clickElement(await LoginPageAndroid.filterButton());
    await BaseClass.elementWaitForDisplayed(await LoginPageAndroid.highToLowButton());
    await BaseClass.clickElement(await LoginPageAndroid.highToLowButton());
    await BaseClass.elementWaitForDisplayed(await LoginPageAndroid.itemsInFirstRow());
    firstItems = await BaseClass.elementGetText(await LoginPageAndroid.firstItems())
    secondItems = await BaseClass.elementGetText(await LoginPageAndroid.secondItems())
    try {
      console.dir("High To Low Filter")
      console.log(`Second Items : ${secondItems}`)
      console.log(`First Items : ${firstItems}`)
      await expect(secondItems < firstItems)
      console.dir("Expectation Match")
      console.log("\n")
    }
    catch (err) {
      console.dir("Expectation Not Match : ", err)
      console.log("\n")
    }
    await BaseClass.clickElement(await LoginPageAndroid.filterButton());
    await BaseClass.elementWaitForDisplayed(await LoginPageAndroid.lowToHighButton());
    await BaseClass.clickElement(await LoginPageAndroid.lowToHighButton());
    await BaseClass.elementWaitForDisplayed(await LoginPageAndroid.itemsInFirstRow());
    firstItems = await BaseClass.elementGetText(await LoginPageAndroid.firstItems())
    secondItems = await BaseClass.elementGetText(await LoginPageAndroid.secondItems())
    try {
      console.dir("Low To High Filter")
      console.log(`First Items : ${firstItems}`)
      console.log(`Second Items : ${secondItems}`)
      await expect(firstItems < secondItems)
      console.dir("Expectation Match")
      console.log("\n")
    }
    catch (err) {
      console.dir("Expectation Not Match : ", err)
      console.log("\n")
    }
  }

  async fillFormAndCheckOut() {
    await BaseClass.elementWaitForDisplayed(await LoginPageAndroid.addToCartButton());
    await BaseClass.clickElement(await LoginPageAndroid.addToCartButton());
    await BaseClass.clickElement(await LoginPageAndroid.cartButton());
    await BaseClass.elementWaitForDisplayed(await LoginPageAndroid.checkOutButton());
    await BaseClass.clickElement(await LoginPageAndroid.checkOutButton());
    await BaseClass.elementWaitForDisplayed(await LoginPageAndroid.zipCode());
    await BaseClass.elementSetValue(await LoginPageAndroid.firstName(), "standard");
    await BaseClass.elementSetValue(await LoginPageAndroid.lastName(), "user");
    await BaseClass.elementSetValue(await LoginPageAndroid.zipCode(), "432");
    await BaseClass.clickElement(await LoginPageAndroid.continueButton());
    await BaseClass.elementWaitForDisplayed(await LoginPageAndroid.finishButton())
    await BaseClass.scrollElementAndroid(await LoginPageAndroid.finishButton())
    await BaseClass.clickElement(await LoginPageAndroid.finishButton());
    await BaseClass.checkIsElementDisplayed(await LoginPageAndroid.completeHeader())
    await BaseClass.checkIsElementDisplayed(await LoginPageAndroid.thankYouHeader())
    
  }

}
export default new LoginPage();
