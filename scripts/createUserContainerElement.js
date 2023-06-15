export default function createUserContainerElement(post) {
	const userContainerElement = document.createElement("div");
	userContainerElement.classList.add("user-container");
	userContainerElement.setAttribute("id", "user-container");

	const userImageElement = document.createElement("img");
	userImageElement.classList.add("user-image");
	userImageElement.setAttribute("id", "user-image");
	userImageElement.src = post.profile_image;

	const userNameElement = document.createElement("h3");
	userNameElement.classList.add("user-name");
	userNameElement.setAttribute("id", "user-name");
	userNameElement.textContent = post.name;

	userContainerElement.appendChild(userImageElement);
	userContainerElement.appendChild(userNameElement);

	return userContainerElement;
}
