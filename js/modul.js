$(document).ready(function() {
	$('[id^="link-"]').click(function() {
		let target = $(this).attr('id').replace('link-', 'bab-'); // Tentukan target berdasarkan ID link
		$('[id^="bab-"]').hide(); // Sembunyikan semua elemen bab
		$('#' + target).show(); // Tampilkan elemen bab yang sesuai
	});
});