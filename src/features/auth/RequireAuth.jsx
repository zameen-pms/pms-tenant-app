import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser } from "../app/authSlice";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { addToast } from "../app/toastSlice";
import { useEffect } from "react";

const RequireAuth = () => {
	const user = useSelector(getUser);
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!(user?.role === "Tenant" && user?.status === "Active")) {
			dispatch(
				addToast({
					type: "Error",
					title: "Unauthorized",
					message: "You don't have permission to access this site.",
				})
			);
			dispatch(setUser({}));
		}
	}, [dispatch]);

	if (user?.role === "Tenant" && user?.status === "Active") {
		return <Outlet />;
	} else {
		return <Navigate to="/sign-in" state={{ from: location }} replace />;
	}
};

export default RequireAuth;
