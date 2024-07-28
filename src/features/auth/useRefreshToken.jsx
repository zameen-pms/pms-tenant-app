import { useDispatch } from "react-redux";
import { setUser } from "../app/authSlice";
import axios from "../api/axios";

const useRefreshToken = () => {
	const dispatch = useDispatch();

	const refresh = async () => {
		try {
			const { data } = await axios.post("/auth/refresh");
			dispatch(setUser({ ...data }));
			return data.accessToken;
		} catch (err) {
			return err;
		}
	};

	return refresh;
};

export default useRefreshToken;
