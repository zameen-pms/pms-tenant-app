import { useSelector } from "react-redux";
import { getUser } from "../../features/app/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
	const navigate = useNavigate();
	const { accessToken } = useSelector(getUser);

	useEffect(() => {
		if (accessToken) {
			navigate("/overview");
		} else {
			navigate("/sign-in");
		}
	}, []);

	return <></>;
};

export default HomePage;
