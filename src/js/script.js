window.addEventListener("DOMContentLoaded", () => {
	const objectBlock = document.querySelector(".objects__block");
	const objects = document.querySelector(".objects");
	const advantagesBlock = document.querySelector(".advantages__block");
	const advantages = document.querySelector(".advantages");
	const objectsArrow = document.querySelector(".objects__icon");
	const advantagesArrow = document.querySelector(".advantages__icon");
	const ruLangButton = document.querySelector(".nav__form.ru");
	const roLangButton = document.querySelector(".nav__form.ro");
	const animItems = document.querySelectorAll("._anim-items");
	const infoItems = $(".information__item");

	infoItems.each(function() {
		$(this).click(function () {

			infoItems.each(function() {
				$(this).removeClass("information__triggered");
				$(this).addClass("information__untriggered");
			});

			$(this).removeClass("information__untriggered");
			$(this).addClass("information__triggered");
		});
	});



	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('_active');
			}
		});
	});

	animItems.forEach(animItem => {
		observer.observe(animItem);
	});

	ruLangButton.addEventListener("click", () => {
		localStorage.setItem("language", "RU");
		$(".ru-text").fadeIn();
		$(".ro-text").hide();
	});

	roLangButton.addEventListener("click", () => {
		localStorage.setItem("language", "RO");
		$(".ro-text").fadeIn();
		$(".ru-text").hide();
	});

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
	const ruLangButton = $("#ru");
	const roLangButton = $("#ro");

	if (
		localStorage.getItem("language") === "RU" ||
		localStorage.getItem("language") == null
	) {
		ruLangButton.prop("checked", true);
		roLangButton.prop("checked", false);
		$(".ru-text").fadeIn();
		$(".ro-text").hide();
	} else {
		roLangButton.prop("checked", true);
		ruLangButton.prop("checked", false);
		$(".ro-text").fadeIn();
		$(".ru-text").hide();
	}

	$(".carousel__inner").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow:
			'<button type="button" class="carousel__slick-prev"><svg class="carousel__prev"><svg><use xlink:href="../../img/sprite.svg#icon-chevron-small-left"></use></svg></button>',
		nextArrow:
			'<button type="button" class="carousel__slick-next"><svg class="carousel__prev"><svg><use xlink:href="../../img/sprite.svg#icon-chevron-small-right"></use></svg></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					autoplay: true,
					autoplaySpeed: 2000,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					autoplay: true,
					autoplaySpeed: 2000,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 2000,
				},
			},
			{
				breakpoint: 350,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 2000,
				},
			},
		],
	});
});
