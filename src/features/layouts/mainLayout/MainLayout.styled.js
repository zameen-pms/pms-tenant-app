import styled from "styled-components";

export const StyledLayout = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const StyledHeader = styled.header`
	height: 75px;
	background: var(--dark-gray);
	padding: 1rem;

	a {
		img {
			height: 100%;
			width: auto;
		}
	}
`;

export const StyledBody = styled.section`
	flex: 1;
	display: flex;
`;

export const StyledNav = styled.nav`
	background: var(--dark-gray);
	width: 300px;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	a {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
		border-radius: 5px;
		font-size: 1rem;
		font-weight: 300;
		padding: 0.5rem 0;
		color: white;
		text-decoration: none;
		transition: all 0.25s ease-in-out;

		&:hover {
			background: var(--primary);
		}

		&.active {
			font-weight: 500;
			background: var(--primary);
		}

		svg {
			width: 25px;
			height: 25px;
			stroke-width: 0;
		}

		.notification {
			position: absolute;
			right: 0.5rem;
			background: var(--red);
			color: white;
			font-size: 12px;
			font-weight: 400;
			border-radius: 100px;
			padding: 5px 10px;
		}
	}

	.logout {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
		border-radius: 5px;
		font-size: 1rem;
		font-weight: 400;
		padding: 0.5rem 0;
		color: white;
		position: absolute;
		bottom: 1rem;
		left: 1rem;
		width: calc(300px - 2rem);
		transition: all 0.25s ease-in-out;

		&:hover {
			cursor: pointer;
			background: var(--primary);
		}

		svg {
			width: 25px;
			height: 25px;
			stroke-width: 0;
		}
	}
`;

export const StyledOutlet = styled.div`
	overflow-y: auto;
	padding: 1rem;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
