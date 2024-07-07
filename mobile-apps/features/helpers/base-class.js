export const changeContexts = (value) => { //to use webview selector
  const contexts = driver.getContexts();
  if (driver.getContext() !== value) {
    for (const item of contexts) {
      return driver.switchContext(value);
    }
  }
};

export const clickElement = async (element) => {
  await element.click();
};

export const elementWaitForDisplayed = async (element, params = {}) => {
  await element.waitForDisplayed({ ...params });
};

export const elementWaitForEnabled = async (element, params = {}) => {
  await element.waitForEnabled({ ...params });
};

export const elementWaitForExist = async (element, params = {}) => {
  await element.waitForExist({ ...params });
};

export const elementSetValue = async (element, value) => {
  await element.setValue(value);
};

export const elementAddValue = async (element, value) => {
  await element.addValue(value);
};

export const elementGetText = async (element) => {
  return await element.getText();
};

export const waitUntilTextToChange = async (element, actualText) => {
  await element.waitUntil(async () => {
    return (await element.getText()) !== actualText
  }, {
    timeout: 20000,
    timeoutMsg: `Text is still: ${actualText}`
  });
}

export const isElementDisplayed = async (element) => {
  return await element.isDisplayed();
};

export const checkIsElementDisplayed = async (element) => {
  const isDisplayed = await element.isDisplayed();
  expect(isDisplayed).to.be.true;
};

export const checkIsElementExist = async (element) => {
  const isExist = await element.isExisting();
  expect(isExist).to.be.true;
};

export const checkElementText = async (element, expectedResult) => {
  const elementText = await element.getText();
  expect(elementText).to.eql(expectedResult);
};

export const checkIsElementEnabled = async (element) => {
  const isEnabled = await element.isEnabled();
  expect(isEnabled).to.be.true;
};

export const checkIsElementDisabled = async (element) => {
  const isEnabled = await element.isEnabled();
  expect(isEnabled).to.be.false;
};

export const checkValueEqualTo = async (actualValue, expectedValue) => {
  expect(actualValue).to.eql(expectedValue);
}

const appPackage = process.env.APP_PACKAGE;
export const getSelector = (targetType, { targetId, targetClass, text = '', description = '' } = {}) => {
  const elementText = text ? `.text("${text}")` : '';
  const elementDesc = description ? `.description("${description}")` : '';

  switch (targetType) {
    case 'className':
      return `new UiSelector().${targetType}("${targetClass}")${elementText}${elementDesc}`;
    case 'resourceId':
      return `new UiSelector().${targetType}("${appPackage}:id/${targetId}")${elementText}${elementDesc}`;
    default:
      return `new UiSelector().resourceId("android:id/${targetId}")${elementText}${elementDesc}`;
  }
};

export const scrollElementAndroid = (targetType, { targetId, targetClass } = {}, direction, targetElement) => {
  const scrollType = direction === 'vertical' ? 'setAsVerticalList()' : 'setAsHorizontalList()';

  switch (targetType) {
    case 'className':
      return `new UiScrollable(new UiSelector().${targetType}("${targetClass}")).${scrollType}.scrollIntoView(${targetElement})`;
    case 'resourceId':
      return `new UiScrollable(new UiSelector().${targetType}("${appPackage}:id/${targetId}")).${scrollType}.scrollIntoView(${targetElement})`;
  }
};
