import { useDispatch } from "react-redux";
import { setUser } from "../app/authSlice";
import axios from "../api/axios";

const useLogout = () => {
	const dispatch = useDispatch();

	const logout = async () => {
		dispatch(setUser({}));

		try {
			await axios.post("/auth/logout");
		} catch (err) {
			console.log(err);
		}
	};

	return logout;
};

export default useLogout;
