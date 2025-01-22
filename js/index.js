$(document).ready(function () {
	const menuIcon = $('#menu-icon');
	const navbarNav = $('.navbar-nav');

	// Toggle hamburger menu
	menuIcon.click(function () {
		navbarNav.toggleClass('show');
	});
});
