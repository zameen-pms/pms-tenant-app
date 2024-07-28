import { Outlet } from "react-router-dom";
import { StyledToast, StyledToastLayout } from "./ToastLayout.styled";
import { useDispatch, useSelector } from "react-redux";
import { getToasts, removeToast } from "../../app/toastSlice";
import { useEffect, useState } from "react";
import {
	MdCancel,
	MdCheckCircle,
	MdClear,
	MdError,
	MdInfo,
} from "react-icons/md";

const ToastLayout = () => {
	const toasts = useSelector(getToasts);

	return (
		<>
			<Outlet />
			<StyledToastLayout>
				{toasts.map((toast) => (
					<Toast key={toast.id} toast={toast} />
				))}
			</StyledToastLayout>
		</>
	);
};

const Toast = ({ toast }) => {
	const dispatch = useDispatch();
	const [icon, setIcon] = useState(<MdInfo />);
	const [color, setColor] = useState("#0984e3");

	useEffect(() => {
		setTimeout(() => {
			dispatch(removeToast(toast.id));
		}, 5000);
	}, []);

	useEffect(() => {
		const type = toast?.type.toLowerCase() || "";
		if (type === "ok") {
			setColor("#00b894");
			setIcon(<MdCheckCircle />);
		} else if (type === "warn") {
			setColor("#f1c40f");
			setIcon(<MdError />);
		} else if (type === "error") {
			setColor("#d63031");
			setIcon(<MdCancel />);
		} else {
			setColor("#0984e3");
			setIcon(<MdInfo />);
		}
	}, [toast]);

	const handleClick = () => {
		dispatch(removeToast(toast.id));
	};

	return (
		<StyledToast $color={color}>
			<div className="row gap-1">
				{icon}
				<div className="column gap-05">
					<h4>{toast?.title || ""}</h4>
					<p>{toast?.message || ""}</p>
				</div>
			</div>
			<MdClear onClick={handleClick} className="toast-close" />
		</StyledToast>
	);
};

export default ToastLayout;
