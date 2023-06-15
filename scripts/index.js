import postsData from "../data/data.json" assert { type: "json" };

console.log(postsData);

const layoutContainerElement = document.getElementById("layout-container");

postsData.forEach((post) => {
	const postElement = createPostElement(post);
	layoutContainerElement.appendChild(postElement);
});

function createPostElement(post) {
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

function createMessageContainerElement(post) {
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

function createDetailsContainerElement(post) {
	const detailsContainerElement = document.createElement("div");
	detailsContainerElement.classList.add("details-container");
	detailsContainerElement.setAttribute("id", "details-container");

	const sourceElement = document.createElement("a");
	sourceElement.classList.add("source");
	sourceElement.setAttribute("id", "source");
	sourceElement.href = post.source_link;
	sourceElement.textContent = post.source_type;

	const likesElement = document.createElement("div");
	likesElement.classList.add("likes");
	likesElement.setAttribute("id", "likes");
	likesElement.textContent = `${post.likes} likes`;

	const dateElement = document.createElement("div");
	dateElement.classList.add("date");
	dateElement.setAttribute("id", "date");
	const dateObject = new Date(post.date);
	dateElement.textContent = dateObject.toISOString().split("T")[0];

	detailsContainerElement.appendChild(sourceElement);
	detailsContainerElement.appendChild(likesElement);
	detailsContainerElement.appendChild(dateElement);

	return detailsContainerElement;
}

function createUserContainerElement(post) {
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
