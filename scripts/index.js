import renderPosts from "./loadMore.js";

document.addEventListener("DOMContentLoaded", () => {
	const switchElement = document.getElementById("switch");
	let isDarkMode = false;

	function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		if (isDarkMode) {
			document.body.classList.add("dark-mode");
		} else {
			document.body.classList.remove("dark-mode");
		}
	}

	switchElement.addEventListener("click", toggleDarkMode);

	// Initial rendering
	renderPosts();
});
