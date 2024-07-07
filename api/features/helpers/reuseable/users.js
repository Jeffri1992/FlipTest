import _ from 'underscore';

const users = {

	randomFirstName() {
		var firstName = _.sample(['Fakhreza', 'Akbar', 'Susilo']);
		return firstName;
	},

	randomLastName() {
		var lastName = _.sample(['Check', 'Sample', 'Name']);
		return lastName;
	},

	randomEmail() {
		var digits = Math.floor(Math.random() * 99) + 10;
		var email = 'meongcuka+' + digits + '@gmail.com';
		return email;
	},

	randomPhone() {
		var phoneNumber = Math.floor(1000000 + Math.random() * 9000000);

		return '0812' + phoneNumber;
	}
};
export default users;
