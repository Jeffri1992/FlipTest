import { Given , Then} from "@cucumber/cucumber";
import LoginPage from "../page-objects/functionality/login-page.js";


Given('User login into swag labs', async () => {
  await LoginPage.inputEmail();
});

Then('Verify price in swag labs', async () => {
  await LoginPage.verifyPrice();
});

Then('Fill form and checkout', async () => {
  await LoginPage.fillFormAndCheckOut();
});