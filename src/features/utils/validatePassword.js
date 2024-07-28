export const validatePassword = (password) => {
	const errors = [];

	const minLength = 8;
	const upperCase = /[A-Z]/;
	const lowerCase = /[a-z]/;
	const digit = /[0-9]/;
	const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

	if (!upperCase.test(password)) {
		errors.push("Password must contain at least one uppercase letter.");
	}
	if (!lowerCase.test(password)) {
		errors.push("Password must contain at least one lowercase letter.");
	}
	if (!digit.test(password)) {
		errors.push("Password must contain at least one digit.");
	}
	if (!specialChar.test(password)) {
		errors.push("Password must contain at least one special character.");
	}
	if (password.length < minLength) {
		errors.push("Password must be at least 8 characters.");
	}

	return errors.length === 0 ? false : errors;
};
