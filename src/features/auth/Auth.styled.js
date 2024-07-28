import styled from "styled-components";

export const AuthModal = styled.form`
	width: 500px;
	background: white;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 2rem;
	border-radius: 10px;
	border: 1px solid var(--light-gray);
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	@media (max-width: 600px) {
		width: 100%;
		border: none;
	}
`;
