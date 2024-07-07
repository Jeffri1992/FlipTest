import { Given } from '@cucumber/cucumber';
import { expect } from 'chai';

import genderize from '../../functions/genderize.js';

Given('Check gender by name {string}', async function (name) {
  const getGenderResponse = await genderize.getGender(await name);
  const gender = await getGenderResponse.body.gender
  console.log(` === Name : ${name} ====`);
  console.log(` === Gender : ${gender} ====`);
  console.log(` ${JSON.stringify(await getGenderResponse.body)}`);
  switch (await name) {
    case "Isabella":
      try {
        expect(gender).equals("female")
        console.dir("Expectation Match")
        console.log("\n")
      }
      catch (err) {
        console.dir("Expectation Not Match : ", err)
        console.log("\n")
      }
      break;
    case "Olivia":
      try {
        expect(gender).equals("female")
        console.dir("Expectation Match")
        console.log("\n")
      }
      catch (err) {
        console.dir("Expectation Not Match : ", err)
        console.log("\n")
      }
      break;
    case "Ethan":
      try {
        expect(gender).equals("male")
        console.dir("Expectation Match")
        console.log("\n")
      }
      catch (err) {
        console.dir("Expectation Not Match : ", err)
        console.log("\n")
      }
      break;
    case "Christopher":
      try {
        expect(gender).equals("male")
        console.dir("Expectation Match")
        console.log("\n")
      }
      catch (err) {
        console.dir("Expectation Not Match : ", err)
        console.log("\n")
      }
      break;
    case "Sophia":
      try {
        expect(gender).equals("female")
        console.dir("Expectation Match")
        console.log("\n")
      }
      catch (err) {
        console.dir("Expectation Not Match : ", err)
        console.log("\n")
      }
      break;
  }

});
