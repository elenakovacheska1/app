export function openLightbox(imageUrl) {
	const lightboxOverlay = document.createElement("div");
	lightboxOverlay.classList.add("lightbox-overlay");

	const lightboxImage = document.createElement("img");
	lightboxImage.src = imageUrl;
	lightboxImage.classList.add("lightbox-image");

	lightboxOverlay.style.display = "flex";
	lightboxOverlay.addEventListener("click", closeLightbox);

	lightboxOverlay.appendChild(lightboxImage);
	document.body.appendChild(lightboxOverlay);
}

function closeLightbox() {
	const lightboxOverlay = document.querySelector(".lightbox-overlay");
	lightboxOverlay.style.display = "none";
	lightboxOverlay.remove();
}
