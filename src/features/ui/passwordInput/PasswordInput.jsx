import { v4 } from "uuid";
import { StyledInput } from "./PasswordInput.styled";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const PasswordInput = ({ label, ...props }) => {
	const inputId = props?.id || v4();
	const [showPassword, setShowPassword] = useState(false);

	const toggle = () => setShowPassword(!showPassword);

	return (
		<StyledInput>
			{label && (
				<label htmlFor={inputId}>
					{label}
					{props.required && <span>*</span>}
				</label>
			)}
			<input
				id={inputId}
				{...props}
				type={showPassword ? "text" : "password"}
			/>
			{showPassword ? (
				<MdVisibilityOff onClick={toggle} />
			) : (
				<MdVisibility onClick={toggle} />
			)}
		</StyledInput>
	);
};

export default PasswordInput;
