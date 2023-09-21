const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const footer = document.querySelector('.footer');
const allNavItems = document.querySelectorAll('.nav__link');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
	if (navMobile.classList.contains('nav-mobile--active')) {
		footer.style.display = 'none';
	} else {
		footer.style.display = 'block';
	}

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			navBtn.classList.remove('is-active');
			navMobile.classList.remove('nav-mobile--active');
		});
	});
};

navBtn.addEventListener('click', handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
