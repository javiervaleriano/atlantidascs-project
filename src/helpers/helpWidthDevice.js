export const helpWidthDevice = () => {
	let viewportW = window.innerWidth;

	if (viewportW < 768) {
		return "mobile";
	} else if (viewportW < 1024) {
		return "tablet";
	} else if (viewportW < 1280) {
		return "sdesktop";
	} else if (viewportW < 1536) {
		return "desktop";
	} else if (viewportW < 1800) {
		return "ldesktop";
	} else {
		return "xldesktop";
	}
};
