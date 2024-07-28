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
	MdDocumentScanner,
	MdEditDocument,
	MdHomeRepairService,
	MdHouse,
	MdLogout,
} from "react-icons/md";
import useLogout from "../../auth/useLogout";
import { useDispatch } from "react-redux";
import { addToast } from "../../app/toastSlice";

const MainLayout = () => {
	return (
		<StyledLayout>
			<Header />
			<StyledBody>
				<Nav />
				<StyledOutlet>
					<Outlet />
				</StyledOutlet>
			</StyledBody>
		</StyledLayout>
	);
};

const Header = () => {
	return (
		<StyledHeader>
			<Link to="/">
				<img src="/images/light-logo.svg" alt="Zameen Management" />
			</Link>
		</StyledHeader>
	);
};

const Nav = () => {
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
		<StyledNav>
			<p className="text-sm">Menu</p>
			<div className="column gap-1">
				<NavLink to="/">
					<MdHouse />
					Home
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
};

export default MainLayout;
