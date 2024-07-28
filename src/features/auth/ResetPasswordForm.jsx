import { useEffect, useState } from "react";
import { AuthModal } from "./Auth.styled";
import PasswordInput from "../ui/passwordInput/PasswordInput";
import Button from "../ui/button/Button";
import { validatePassword } from "../utils/validatePassword";

const ResetPasswordForm = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const [isValid, setIsValid] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isValid) return;
		try {
			setIsLoading(true);
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		setErrors([]);
		setIsValid(false);

		if (password.length === 0) return;

		const errors = validatePassword(password);

		if (errors.length > 0) {
			setErrors(errors);
		} else if (confirmPassword && confirmPassword !== password) {
			setErrors(["Error: Passwords do not match."]);
		} else {
			if (password === confirmPassword) {
				setIsValid(true);
			}
		}
	}, [password, confirmPassword]);

	return (
		<AuthModal onSubmit={handleSubmit}>
			<div className="column gap-05 text-center">
				<h1>Reset Password</h1>
				<p>Create a new password</p>
			</div>
			<div className="column gap-1">
				<PasswordInput
					label="Password"
					placeholder="Password"
					value={password || ""}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<PasswordInput
					label="New Password"
					placeholder="Create New Password"
					value={confirmPassword || ""}
					onChange={(e) => setConfirmPassword(e.target.value)}
					required
				/>
			</div>
			<div>
				{errors.map((error, index) => (
					<p key={index} className="text-sm text-red text-500">
						{error}
					</p>
				))}
				{isValid && (
					<p className="text-sm text-green text-500">
						Valid password
					</p>
				)}
			</div>
			<div className="column gap-05">
				<Button disabled={isLoading} type="submit">
					Reset Password
				</Button>
			</div>
		</AuthModal>
	);
};

export default ResetPasswordForm;
