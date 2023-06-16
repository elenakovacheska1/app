import { openLightbox } from "./lightbox.js";

export default function createMessageContainerElement(post) {
	const messageContainerElement = document.createElement("div");
	messageContainerElement.classList.add("message-container");
	messageContainerElement.setAttribute("id", "message-container");

	const mainImageElement = document.createElement("img");
	mainImageElement.classList.add("main-image");
	mainImageElement.setAttribute("id", "main-image");
	mainImageElement.setAttribute("alt", "Post Image");
	mainImageElement.src = post.image;
	mainImageElement.addEventListener("click", () => openLightbox(post.image));

	const captionElement = document.createElement("p");
	captionElement.classList.add("caption");
	captionElement.setAttribute("id", "caption");
	captionElement.textContent = post.caption;

	messageContainerElement.appendChild(mainImageElement);
	messageContainerElement.appendChild(captionElement);

	return messageContainerElement;
}
