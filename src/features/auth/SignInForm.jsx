import { useState } from "react";
import { AuthModal } from "./Auth.styled";
import Input from "../ui/input/Input";
import PasswordInput from "../ui/passwordInput/PasswordInput";
import Button from "../ui/button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToast } from "../app/toastSlice";
import axios from "../api/axios";

const SignInForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			await axios.post("/auth/login", { email, password });
			navigate("/");
		} catch (err) {
			console.log(err);
			dispatch(
				addToast({
					type: "error",
					title: "Unable to sign in.",
					message: err.response.data || err.message,
				})
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<AuthModal onSubmit={handleSubmit}>
			<div className="column gap-05 text-center">
				<h1>Welcome!</h1>
				<p>Sign in using your email and password</p>
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
				<PasswordInput
					label="Password"
					placeholder="Password"
					value={password || ""}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>
			<div className="column gap-05">
				<Button type="submit" disabled={isLoading}>
					Sign In
				</Button>
				<Link className="text-sm" to="/forgot-password">
					Forgot Password?
				</Link>
			</div>
		</AuthModal>
	);
};

export default SignInForm;
