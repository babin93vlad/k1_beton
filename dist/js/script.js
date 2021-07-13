window.addEventListener("DOMContentLoaded", () => {
	const objectBlock = $(".objects__block");
	const objectItems = $(".objects__item");
	const objects = $(".objects");
	const advantagesBlock = $(".advantages__block");
	const advantagesItems = $(".advantages__item");
	const advantages = $(".advantages");
	const objectsArrow = $(".objects__icon");
	const advantagesArrow = $(".advantages__icon");
	const ruLangButton = document.querySelector(".nav__form.ru");
	const roLangButton = document.querySelector(".nav__form.ro");
	const animItems = document.querySelectorAll("._anim-items");
	const infoItems = $(".information__item");

	infoItems.each(function () {
		$(this).click(function () {
			infoItems.each(function () {
				$(this).removeClass("information__triggered");
				$(this).addClass("information__untriggered");
			});

			$(this).removeClass("information__untriggered");
			$(this).addClass("information__triggered");
		});
	});

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("_active");
			}
		});
	});

	animItems.forEach((animItem) => {
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

	const showHide = function (anchor, block, arrow, items) {
		anchor.on("click", () => {
			if (block.css("display") === "block") {
				block.hide(350);
				arrow.attr("xlink:href", "img/sprite.svg#icon-arrow-thin-down");
				items.fadeOut(40);
			} else {
				items.show(0);
				block.show(350);
				arrow.attr("xlink:href", "img/sprite.svg#icon-arrow-thin-up");
			}
		});
	};

	showHide(advantages, advantagesBlock, advantagesArrow, advantagesItems);
	showHide(objects, objectBlock, objectsArrow, objectItems);
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
