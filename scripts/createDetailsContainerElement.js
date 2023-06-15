export default function createDetailsContainerElement(post) {
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
