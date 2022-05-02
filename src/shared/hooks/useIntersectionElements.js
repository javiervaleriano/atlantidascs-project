import { useEffect, useRef, useState } from "react";

export const useIntersectionElements = options => {
	const containerRef = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		let element = containerRef.current,
			observer = new IntersectionObserver(entries => {
				const [intersection] = entries;
				setVisible(intersection.isIntersecting);
			}, options);

		if (element) observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	}, [containerRef, options]);

	return { containerRef, visible };
};
