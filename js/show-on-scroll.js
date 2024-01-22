// Fades in elements when they enter viewport
const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show-on-scroll');
		}
	})
}, {threshold: 0.1})

const hiddenElements = document.querySelectorAll('.hidden-until-scroll');
hiddenElements.forEach((el) => observer.observe(el));
