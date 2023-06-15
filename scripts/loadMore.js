import postsData from "../data/data.json" assert { type: "json" };
import createPostElement from "./createPostElement.js";
import postsConfig from "../config/postsConfig.js";

let { visiblePosts, postsPerPage } = postsConfig;

const layoutContainerElement = document.getElementById("layout-container");
const loadMoreButton = createLoadMoreButton();

function createLoadMoreButton() {
	const loadMoreButtonElement = document.createElement("div");
	loadMoreButtonElement.classList.add("load-more-btn");
	loadMoreButtonElement.setAttribute("id", "load-more-btn");
	loadMoreButtonElement.textContent = "Load More";
	return loadMoreButtonElement;
}

export default function renderPosts() {
	layoutContainerElement.innerHTML = "";
	const postsToRender = postsData.slice(0, visiblePosts);
	postsToRender.forEach((post) => {
		const postElement = createPostElement(post);
		layoutContainerElement.appendChild(postElement);
	});
	layoutContainerElement.appendChild(loadMoreButton);

	if (visiblePosts >= postsData.length) {
		loadMoreButton.style.display = "none";
	} else {
		loadMoreButton.style.display = "block";
	}
}

function handleLoadMoreClick() {
	visiblePosts += postsPerPage;
	renderPosts();
}

loadMoreButton.addEventListener("click", handleLoadMoreClick);
