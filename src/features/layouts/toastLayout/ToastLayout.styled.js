import styled from "styled-components";

export const StyledToastLayout = styled.section`
	width: 400px;
	position: fixed;
	top: 0;
	right: 0;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	z-index: 100;
`;

export const StyledToast = styled.div`
	width: 100%;
	background: white;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem;
	border-radius: 5px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	svg {
		width: 40px;
		height: 40px;
		color: ${(props) => props.$color || "black"};

		&.toast-close {
			color: var(--gray);
			cursor: pointer;
			width: 25px;
			height: 25px;
		}
	}

	h4 {
		text-transform: capitalize;
	}

	p {
		line-height: 1rem;
		width: 270px;
	}
`;
