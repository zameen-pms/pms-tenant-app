import { useState } from "react";
import { AuthModal } from "./Auth.styled";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ email });
	};

	return (
		<AuthModal onSubmit={handleSubmit}>
			<div className="column gap-05 text-center">
				<h1>Forgot Password?</h1>
				<p>Enter your email to recieve a reset email link</p>
			</div>
			<div className="column gap-1">
				<Input
					label="Email"
					type="email"
					placeholder="Email Address"
					value={email || ""}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>
			<div className="column gap-05">
				<Button type="submit">Send Reset Link</Button>
				<Link className="text-sm" to="/sign-in">
					Back to sign-in
				</Link>
			</div>
		</AuthModal>
	);
};

export default ForgotPasswordForm;
