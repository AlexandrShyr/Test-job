// tooltip
const buttonShow = document.querySelector('#button-show');
const buttonHide = document.querySelector('#button-hide');
const tooltip = document.querySelector('#tooltip');

buttonShow.addEventListener("click", show)
buttonHide.addEventListener("click", hide)

function position(){
	tooltip.style.left = `${buttonShow.offsetLeft - 57}px`;
	tooltip.style.top = `${buttonShow.offsetTop + 60}px`;
}

position()

function hide(){
  tooltip.style.opacity = 0;
	setTimeout(afterTransition, 300);
}

function afterTransition(){
  tooltip.style.display = 'none';
}

function show(){
	position()
  tooltip.style.display = 'block';
  setTimeout(timeoutShow, 100);
}

function timeoutShow(){
  tooltip.style.opacity = 1;
}

// swiper-slider
const swiper = new Swiper(".servise-swiper", {
	slidesPerView: 'auto',
  // slidesPerView: 4,
  spaceBetween: 10,
  scrollbar: {
    el: '.trainers__scroll',
    draggable: true,
  },
	navigation: {
		nextEl: ".swiper-next",
		prevEl: ".swiper-prev",
	}
});

// modal

const modal = new GraphModal();