import { expect } from 'chai';
import { When, Then } from '@cucumber/cucumber';
import assertions from '../helpers/reuseable/assertions.js';

When('response code is {int}', async function (responseCode) {
	expect(assertions.responseCode).to.equal(responseCode);
	console.log(`expected - (${responseCode}) = (${assertions.responseCode}) - result`);
});

When('response body is not null', async function () {
	expect(assertions.responseBody).to.not.equal(null);
	console.log(assertions.responseBody);
});

When('response body is {string}', async function (responseBody) {
	expect(assertions.responseBody).to.equal(body);
	console.log(`expected - (${responseBody}) = (${assertions.responseBody}) - result`);
});

Then('The response code should be {int} and error message is {string}', async function (responseCode, responseMessage) {
	expect(assertions.responseCode).to.equal(responseCode);
	console.log(`expected - (${responseCode}) = (${assertions.responseCode}) - result`);
	expect(assertions.responseBody).to.equal(responseMessage);
	console.log(`expected - (${responseMessage}) = (${assertions.responseBody}) - result`);

});
