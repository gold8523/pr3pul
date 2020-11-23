document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
	const slider = tns({
		container: '.slider__inner',
		items: 1,
		slideBy: 'page',
		controls: false,
		nav: false,
		autoplay: false
  	});

	document.querySelector('.prev').addEventListener('click', function () {
		slider.goTo('prev');  
  	});

	document.querySelector('.next').addEventListener('click', function () {
		slider.goTo('next');  
	});
	 
	let wrapItem = document.querySelectorAll('.catalog__wrapper');
	document.querySelectorAll('.catalog__tab-item').forEach((item, index, arr) => {
		item.addEventListener('click', function(){
			let tabItem = index;
			//удаляем активный класс со всех элементов
			arr.forEach((item, index) => {
				item.classList.remove('catalog__tab-item_active');
			});
			// добавляем активный класс при клике
			item.classList.add('catalog__tab-item_active')
			// удаляем активый класс со всех контейнеров
			wrapItem.forEach((item, index) => {
				item.classList.remove('catalog__wrapper_active');
			});
			// добавляем активный класс к нужному контейнеру
			wrapItem[tabItem].classList.add('catalog__wrapper_active');
		});
	});

	
});