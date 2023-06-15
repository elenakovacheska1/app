import createMessageContainerElement from "./createMessageContainerElement.js";
import createDetailsContainerElement from "./createDetailsContainerElement.js";
import createUserContainerElement from "./createUserContainerElement.js";

export default function createPostElement(post) {
	const postElement = document.createElement("div");
	postElement.classList.add("post");
	postElement.setAttribute("id", "post");

	const messageContainerElement = createMessageContainerElement(post);
	const detailsContainerElement = createDetailsContainerElement(post);
	const userContainerElement = createUserContainerElement(post);

	postElement.appendChild(detailsContainerElement);
	postElement.appendChild(messageContainerElement);
	postElement.appendChild(userContainerElement);

	return postElement;
}
