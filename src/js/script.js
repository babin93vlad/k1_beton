window.addEventListener("DOMContentLoaded", () => {
	const objectBlock = document.querySelector(".objects__block");
	const objects = document.querySelector(".objects");
	const advantagesBlock = document.querySelector(".advantages__block");
	const advantages = document.querySelector(".advantages");
	const objectsArrow = document.querySelector(".objects__icon");
	const advantagesArrow = document.querySelector(".advantages__icon");

	objects.addEventListener("click", () => {
		if (objectBlock.style.display === "block") {
			objectBlock.style.display = "none";
			objectsArrow.setAttribute(
				"xlink:href",
				"img/sprite.svg#icon-arrow-thin-down"
			);
		} else {
			objectBlock.style.display = "block";
			objectsArrow.setAttribute(
				"xlink:href",
				"img/sprite.svg#icon-arrow-thin-up"
			);
		}
	});

	advantages.addEventListener("click", () => {
		if (advantagesBlock.style.display === "block") {
			advantagesBlock.style.display = "none";
			advantagesArrow.setAttribute(
				"xlink:href",
				"img/sprite.svg#icon-arrow-thin-down"
			);
		} else {
			advantagesBlock.style.display = "block";
			advantagesArrow.setAttribute(
				"xlink:href",
				"img/sprite.svg#icon-arrow-thin-up"
			);
		}
	});
});

$(document).ready(function () {
	$(".carousel__inner").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow:
			'<button type="button" class="carousel__slick-prev"><svg class="carousel__prev"><svg><use xlink:href="../../img/sprite.svg#icon-chevron-small-left"></use></svg></button>',
		nextArrow:
			'<button type="button" class="carousel__slick-next"><svg class="carousel__prev"><svg><use xlink:href="../../img/sprite.svg#icon-chevron-small-right"></use></svg></button>',
	});
});
