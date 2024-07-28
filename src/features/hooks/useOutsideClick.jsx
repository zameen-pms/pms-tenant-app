import { useEffect } from "react";

/**
 * useOutsideClick hook
 * @param {React.RefObject} ref - The ref of the element to detect outside clicks for
 * @param {Function} callback - The callback function to execute on outside click
 */
const useOutsideClick = (ref, callback) => {
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				callback();
			}
		};
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, callback]);
};

export default useOutsideClick;
