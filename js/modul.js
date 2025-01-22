$(document).ready(function () {
	$('[id^="link-"]').click(function () {
		let target = $(this).attr('id').replace('link-', 'bab-'); // Tentukan target berdasarkan ID link
		$('[id^="bab-"]').hide(); // Sembunyikan semua elemen bab
		$('#' + target).show(); // Tampilkan elemen bab yang sesuai
	});
	$('.h-button').click(function () {
		$('.navbar-side').toggleClass('active');
	});
});

$(document).click(function (event) {
	if (!$(event.target).closest('.navbar-side, .h-button').length) {
		$('.navbar-side').removeClass('active'); // Menutup navbar-side jika klik di luar
	}
});
