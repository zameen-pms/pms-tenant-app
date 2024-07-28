import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import SignInPage from "./pages/auth/SignInPage";
import ToastLayout from "./features/layouts/toastLayout/ToastLayout";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import MainLayout from "./features/layouts/mainLayout/MainLayout";
import OverviewPage from "./pages/overview";

const App = () => {
	return (
		<Routes>
			<Route element={<ToastLayout />}>
				{/* public routes */}
				<Route path="sign-in" element={<SignInPage />} />
				<Route
					path="forgot-password"
					element={<ForgotPasswordPage />}
				/>
				<Route path="reset-password" element={<ResetPasswordPage />} />

				{/* private routes */}
				<Route element={<MainLayout />}>
					<Route element={<PersistLogin />}>
						<Route element={<RequireAuth />}>
							<Route index element={<HomePage />} />
							<Route path="overview" element={<OverviewPage />} />
						</Route>
					</Route>
				</Route>

				{/* catch-all */}
				<Route path="*" element={<Navigate to="/" />} />
			</Route>
		</Routes>
	);
};

export default App;
