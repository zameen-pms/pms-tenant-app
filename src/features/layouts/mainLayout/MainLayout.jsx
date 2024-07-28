import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import {
	StyledBody,
	StyledHeader,
	StyledLayout,
	StyledNav,
	StyledOutlet,
} from "./MainLayout.styled";
import {
	MdAttachMoney,
	MdClose,
	MdDocumentScanner,
	MdEditDocument,
	MdHomeRepairService,
	MdHouse,
	MdLogout,
	MdMenu,
} from "react-icons/md";
import useLogout from "../../auth/useLogout";
import { useDispatch } from "react-redux";
import { addToast } from "../../app/toastSlice";
import { forwardRef, useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

const MainLayout = () => {
	const [navOpen, setNavOpen] = useState(false);
	const navRef = useRef();

	useOutsideClick(navRef, () => setNavOpen(false));

	return (
		<StyledLayout>
			<Header navOpen={navOpen} setNavOpen={setNavOpen} />
			<StyledBody>
				<Nav ref={navRef} navOpen={navOpen} />
				<StyledOutlet>
					<Outlet />
				</StyledOutlet>
			</StyledBody>
		</StyledLayout>
	);
};

const Header = ({ navOpen, setNavOpen }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		setNavOpen(!navOpen);
	};

	return (
		<StyledHeader>
			<img
				onClick={() => navigate("/")}
				src="/images/light-logo.svg"
				alt="Zameen Management"
			/>
			{navOpen ? (
				<MdClose onClick={handleClick} />
			) : (
				<MdMenu onClick={handleClick} />
			)}
		</StyledHeader>
	);
};

const Nav = forwardRef(({ navOpen }, ref) => {
	const dispatch = useDispatch();
	const logout = useLogout();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logout();
			dispatch(
				addToast({
					type: "info",
					title: "Signed Out",
					message: "You have been successfully signed out.",
				})
			);
		} catch (err) {
			console.log(err);
		} finally {
			navigate("/sign-in");
		}
	};
	return (
		<StyledNav ref={ref} $navOpen={navOpen}>
			<p className="text-sm">Menu</p>
			<div className="column gap-1">
				<NavLink to="/overview">
					<MdHouse />
					Overview
				</NavLink>
				<NavLink to="/payments">
					<MdAttachMoney />
					Payments
				</NavLink>
				<NavLink to="/leases">
					<MdEditDocument />
					Leases
				</NavLink>
				<NavLink to="/documents">
					<MdDocumentScanner />
					Documents
				</NavLink>
				<NavLink to="/maintenance">
					<MdHomeRepairService />
					Maintenance Requests
					<div className="notification">9+</div>
				</NavLink>
			</div>
			<div onClick={handleLogout} className="logout">
				<MdLogout />
				Sign Out
			</div>
		</StyledNav>
	);
});

export default MainLayout;
