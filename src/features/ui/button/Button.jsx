import { StyledButton } from "./Button.styled";

const Button = ({ ...props }) => {
	return (
		<StyledButton {...props}>
			{props?.disabled ? "Loading..." : props.children}
		</StyledButton>
	);
};

export default Button;
