export default function createMessageContainerElement(post) {
	const messageContainerElement = document.createElement("div");
	messageContainerElement.classList.add("message-container");
	messageContainerElement.setAttribute("id", "message-container");

	const mainImageElement = document.createElement("img");
	mainImageElement.classList.add("main-image");
	mainImageElement.setAttribute("id", "main-image");
	mainImageElement.src = post.image;

	const captionElement = document.createElement("p");
	captionElement.classList.add("caption");
	captionElement.setAttribute("id", "caption");
	captionElement.textContent = post.caption;

	messageContainerElement.appendChild(mainImageElement);
	messageContainerElement.appendChild(captionElement);

	return messageContainerElement;
}
