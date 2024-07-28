import { v4 } from "uuid";
import { StyledInput } from "./Input.styled";

const Input = ({ label, ...props }) => {
	const inputId = props?.id || v4();
	return (
		<StyledInput>
			{label && (
				<label htmlFor={inputId}>
					{label}
					{props.required && <span>*</span>}
				</label>
			)}
			<input id={inputId} {...props} />
		</StyledInput>
	);
};

export default Input;
