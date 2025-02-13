// Bismillahirrahmanirrahim
$(document).ready(function () {
	let nTirkah = 0;
	let nHutang = 0;
	let nWasiat = 0;
	let nTajhiz = 0;
	let nIrst = 0;
	let muwarrits = '';
	let totalashobah = 0;
	let masalah = [];
	let nilai_ayah = false;
	let nilai_ibu = false;
	let nilai_suami = false;
	let nilai_istri = 0;
	let nilai_anaklaki = 0;
	let nilai_anakperempuan = 0;
	let nilai_cuculaki = 0;
	let nilai_cucuperempuan = 0;
	let nilai_kakek = 0;
	let nilai_nenekayah = 0;
	let nilai_nenekibu = 0;
	let nilai_saudaralakikandung = 0;
	let nilai_saudaraperempuankandung;
	let nilai_saudaralakiseayah = 0;
	let nilai_saudaraperempuanseayah = 0;
	let nilai_saudaralakiseibu = 0;
	let nilai_saudaraperempuanseIbu = 0;
	let nilai_anaklakisaudarakandung = 0;
	let nilai_anaklakisaudaraseayah = 0;
	let nilai_pamankandungayah = 0;
	let nilai_pamansekakekayah = 0;
	let nilai_anaklakipamankandung = 0;
	let nilai_anaklakipamansekakek = 0;

	function CalculateIrts() {
		let tirkah = parseFloat($('#nTirkah').val()) || 0;
		let hutang = parseFloat($('#nHutang').val()) || 0;
		let wasiat = parseFloat($('#nWasiat').val()) || 0;
		let tajhiz = parseFloat($('#nTajhiz').val()) || 0;

		let maxWasiat = (tirkah - hutang - tajhiz) / 3;
		if (wasiat > maxWasiat) {
			wasiat = maxWasiat;
			$('#nWasiat').val(maxWasiat.toFixed(2));
			Notiflix.Notify.failure(
				'Wasiat tidak boleh lebih dari 1/3 warisan bersih setelah kepengurusan Jenazah (' +
					toRp(maxWasiat) +
					')'
			);
		}

		let irst = tirkah - hutang - wasiat - tajhiz;

		$('#nIrst').val(toRp(irst)); // Menggunakan toRp untuk format Rupiah
	}

	// Fungsi untuk menyimpan nilai input
	function saveFormData() {
		nTirkah = toRp($('#nTirkah').val()); // Format Rupiah
		nHutang = toRp($('#nHutang').val()); // Format Rupiah
		nWasiat = toRp($('#nWasiat').val()); // Format Rupiah
		nTajhiz = toRp($('#nTajhiz').val()); // Format Rupiah
		nIrst = $('#nIrst').val(); // Sudah diformat sebelumnya
		muwarrits = $("input[name='muwarrits']:checked").val() || 'p';
		console.log('Data tersimpan:', nIrst);
	}

	// Fungsi validasi input
	function validateInputs() {
		if (!$('#nTirkah').val()) {
			Notiflix.Notify.failure('Harap masukkan jumlah harta yang diwariskan.');
			return false;
		}
		if (!$("input[name='muwarrits']:checked").val()) {
			Notiflix.Notify.failure('Harap pilih jenis kelamin Muwarrits.');
			return false;
		}
		return true;
	}

	function adjustValue(change, id, min, max) {
		const $input = $('#' + id);
		let newValue = parseInt($input.val() || 0) + change;
		newValue = Math.min(Math.max(newValue, min), max);
		$input.val(newValue).trigger('input'); // Set value dan trigger event input
	}

	$(document).on('click', 'button.minus, button.plus', function () {
		const change = parseInt($(this).data('change'), 10);
		const target = $(this).data('target');
		adjustValue(change, target, 0, 50); // min=0, max=50 bisa diubah sesuai kebutuhan
	});

	$(document).on('input', '.numeric', function () {
		// Hanya izinkan input angka
		this.value = this.value.replace(/[^0-9]/g, '');
	});

	// Fungsi untuk menyimpan data checkbox
	function updateAyahData() {
		nilai_ayah = $('#cb_ayah').is(':checked');
		$('#saham_ayah').text(nilai_ayah ? 1 : 0);
	}

	function updateIbuData() {
		nilai_ibu = $('#cb_ibu').is(':checked');
		$('#saham_ibu').text(nilai_ibu ? 1 : 0);
	}

	$('#cb_ayah').on('change', function () {
		updateAyahData();
		checkBlockingConditions2();
	});

	$('#cb_ibu').on('change', function () {
		updateIbuData();
		checkBlockingConditions2();
	});

	// function updateCheckboxAyah() {
	// 	nilai_ayah = $('#cb_ayah').is(':checked');
	// 	checkBlockingConditions2();
	// 	$('#saham_ayah').text(nilai_ayah ? 1 : 0);
	// }

	// function updateCheckboxIbu() {
	// 	nilai_ibu = $('#cb_ibu').is(':checked');
	// 	checkBlockingConditions2();
	// 	$('#saham_ibu').text(nilai_ibu ? 1 : 0);
	// }

	function updateHusbandData() {
		nilai_suami = $('#cb_suami').is(':checked');
		$('#saham_suami').text(nilai_suami ? 1 : 0);
	}

	function updateWifeData() {
		nilai_istri = parseInt($('#nilai_istri').val(), 10) || 0;
		$('#saham_istri').text(nilai_istri);
	}

	function updateSonData() {
		nilai_anaklaki = parseInt($('#nilai_anaklaki').val(), 10) || 0;
		$('#saham_anaklaki').text(nilai_anaklaki);
	}

	function updateDaughterData() {
		nilai_anakperempuan = parseInt($('#nilai_anakperempuan').val(), 10) || 0;
		$('#saham_anakperempuan').text(nilai_anakperempuan);
	}

	$(document).on('input change', '#nilai_istri', updateWifeData);
	$(document).on('input change', '#nilai_anaklaki', updateSonData);
	$(document).on('input change', '#nilai_anakperempuan', updateDaughterData);

	// Fungsi untuk mengontrol tampilan suami/istri berdasarkan muwarrits
	function toggleSpouseFields1(muwarrits) {
		if (muwarrits === 'wanita') {
			$('#field_suami').show();
			$('#field_istri').hide();
		} else if (muwarrits === 'laki-laki') {
			$('#field_istri').show();
			$('#field_suami').hide();
		}
	}

	// Inisialisasi awal
	$('#legacy1').show();
	$('#legacy2').hide();
	CalculateIrts();
	updateAyahData();
	updateIbuData();
	updateHusbandData();
	updateWifeData();
	updateSonData();
	updateDaughterData();

	// Event listeners
	$('#nTirkah, #nHutang, #nWasiat, #nTajhiz').on('input', CalculateIrts);

	$(document).on('change', "input[name='muwarrits']", function () {
		saveFormData();
		toggleSpouseFields1(muwarrits);
	});

	$('#cb_suami').on('change', updateHusbandData);
	checkBlockingConditions2();
	$('#nilai_istri').on('input', updateWifeData);
	$('#nilai_anaklaki').on('input', function () {
		updateSonData();
		checkBlockingConditions2();
	});
	$('#nilai_anakperempuan').on('input', function () {
		updateDaughterData();
		checkBlockingConditions2();
	});

	$('#img-next-button0').click(function (e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy1').hide();
			$('#legacy2').show();
		}
	});

	$('#img-next-button1').click(function (e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy2').hide();
			$('#legacy3').show();
		}
	});

	$('#img-return-button1').click(function (e) {
		e.preventDefault();
		$('#legacy2').hide();
		$('#legacy1').show();

		// Restore data ke form
		$('#nTirkah').val(nTirkah);
		$('#nHutang').val(nHutang);
		$('#nWasiat').val(nWasiat);
		$('#nTajhiz').val(nTajhiz);
		$('#nIrst').val(nIrst);
		$("input[name='muwarrits'][value='" + muwarrits + "']").prop(
			'checked',
			true
		);
	});

	// Fungsi untuk memperbarui nilai cucu laki-laki
	function updatenilai_cuculakiData() {
		nilai_cuculaki = parseInt($('#nilai_cuculaki').val(), 10) || 0;
		$('#saham_cuculaki').text(nilai_cuculaki);
	}

	// Fungsi untuk memperbarui nilai cucu perempuan
	function updatenilai_cucuperempuanData() {
		nilai_cucuperempuan = parseInt($('#nilai_cucuperempuan').val(), 10) || 0;
		$('#saham_cucuperempuan').text(nilai_cucuperempuan);
	}

	// Event handler untuk perubahan nilai pada range cucu laki-laki
	$('#nilai_cuculaki').on('input', function () {
		updatenilai_cuculakiData();
		checkBlockingConditions2();
	});

	// Event handler untuk perubahan nilai pada range cucu perempuan
	$('#nilai_cucuperempuan').on('input', function () {
		updatenilai_cucuperempuanData();
		checkBlockingConditions2();
	});

	$('#img-next-button2').click(function (e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy3').hide();
			$('#legacy4').show();
		}
	});

	$('#img-return-button2').click(function (e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy3').hide();
			$('#legacy2').show();
		}
	});

	updatenilai_cuculakiData();
	updatenilai_cucuperempuanData();

	function toggleSpouseFieldskakeknenek() {}

	$(document).on('change', '#cb_ayah', function () {
		toggleSpouseFieldskakeknenek();
	});

	$(document).on('change', '#cb_ibu', function () {
		toggleSpouseFieldskakeknenek();
	});

	function updateKakekData() {
		nilai_kakek = $('#cb_kakek').is(':checked');
		$('#saham_kakek').text(nilai_kakek ? 1 : 0);
	}

	function updateNenekAyahData() {
		nilai_nenekayah = $('#cb_nenekayah').is(':checked');
		$('#saham_nenekayah').text(nilai_nenekayah ? 1 : 0);
	}

	function updateNenekIbuData() {
		nilai_nenekibu = $('#cb_nenekibu').is(':checked');
		$('#saham_nenekibu').text(nilai_nenekibu ? 1 : 0);
	}

	$('#cb_kakek').on('change', function () {
		updateKakekData();
		checkBlockingConditions2();
	});

	$('#cb_nenekayah').on('change', function () {
		updateNenekAyahData();
		checkBlockingConditions2();
	});

	$('#cb_nenekibu').on('change', function () {
		updateNenekIbuData();
		checkBlockingConditions2();
	});

	$('#img-next-button3').click(function (e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy4').hide();
			$('#legacy5').show();
		}
	});

	$('#img-return-button3').click(function (e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy4').hide();
			$('#legacy3').show();
		}
	});

	updateKakekData();
	updateNenekAyahData();
	updateNenekIbuData();

	// Fungsi untuk memperbarui nilai Saudara Laki Kandung
	function updateSaudaraLakiKandungData() {
		nilai_saudaralakikandung =
			parseInt($('#nilai_saudaralakikandung').val(), 10) || 0;
		$('#saham_saudaralakikandung').text(nilai_saudaralakikandung);
	}

	// Fungsi untuk memperbarui nilai Saudara Perempuan Kandung
	function updateSaudaraPerempuanKandungData() {
		nilai_saudaraperempuankandung =
			parseInt($('#nilai_saudaraperempuankandung').val(), 10) || 0;
		$('#saham_saudaraperempuankandung').text(nilai_saudaraperempuankandung);
	}

	// Event Listener untuk input Saudara Laki Kandung
	$('#nilai_saudaralakikandung').on('input', function () {
		updateSaudaraLakiKandungData();
		checkBlockingConditions2();
	});

	// Event Listener untuk input Saudara Perempuan Kandung
	$('#nilai_saudaraperempuankandung').on('input', function () {
		updateSaudaraPerempuanKandungData();
		checkBlockingConditions2();
	});

	$('#img-next-button4').click(function (e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy5').hide();
			$('#legacy6').show();
		}
	});

	$('#img-return-button4').click(function (e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy5').hide();
			$('#legacy4').show();
		}
	});

	updateSaudaraLakiKandungData();
	updateSaudaraPerempuanKandungData();

	// Fungsi untuk memperbarui nilai Saudara Laki Kandung
	function updateSaudaraLakiSeayahData() {
		nilai_saudaralakiseayah =
			parseInt($('#nilai_saudaralakiseayah').val(), 10) || 0;
		$('#saham_saudaralakiseayah').text(nilai_saudaralakiseayah);
	}

	// Fungsi untuk memperbarui nilai Saudara Perempuan Kandung
	function updateSaudaraPerempuanSeayahData() {
		nilai_saudaraperempuanseayah =
			parseInt($('#nilai_saudaraperempuanseayah').val(), 10) || 0;
		$('#saham_saudaraperempuanseayah').text(nilai_saudaraperempuanseayah);
	}

	// Fungsi untuk memperbarui nilai Saudara Laki Kandung
	function updateSaudaraLakiSeibuData() {
		nilai_saudaralakiseibu =
			parseInt($('#nilai_saudaralakiseibu').val(), 10) || 0;
		$('#saham_saudaralakiseibu').text(nilai_saudaralakiseibu);
	}

	// Fungsi untuk memperbarui nilai Saudara Perempuan Kandung
	function updateSaudaraPerempuanSeibuData() {
		nilai_saudaraperempuanseIbu =
			parseInt($('#nilai_saudaraperempuanseIbu').val(), 10) || 0;
		$('#saham_saudaraperempuanseIbu').text(nilai_saudaraperempuanseIbu);
	}

	// Event Listener untuk input Saudara Laki Kandung
	$('#nilai_saudaralakiseayah').on('input', function () {
		updateSaudaraLakiSeayahData();
		checkBlockingConditions2();
	});

	// Event Listener untuk input Saudara Perempuan Kandung
	$('#nilai_saudaraperempuanseayah').on('input', function () {
		updateSaudaraPerempuanSeayahData();
		checkBlockingConditions2();
	});

	// Event Listener untuk input Saudara Laki Kandung
	$('#nilai_saudaralakiseibu').on('input', function () {
		updateSaudaraLakiSeibuData();
		checkBlockingConditions2();
	});

	// Event Listener untuk input Saudara Perempuan Kandung
	$('#nilai_saudaraperempuanseIbu').on('input', function () {
		updateSaudaraPerempuanSeibuData();
		checkBlockingConditions2();
	});

	$('#img-next-button5').click(function (e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy6').hide();
			$('#legacy7').show();
		}
	});

	$('#img-return-button5').click(function (e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy6').hide();
			$('#legacy5').show();
		}
	});

	updateSaudaraLakiSeayahData();
	updateSaudaraPerempuanSeayahData();
	updateSaudaraLakiSeibuData();
	updateSaudaraPerempuanSeibuData();

	function updateAnakLakiSaudaraKandungData() {
		nilai_anaklakisaudarakandung =
			parseInt($('#nilai_anaklakisaudarakandung').val(), 10) || 0;
		$('#saham_anaklakisaudarakandung').text(nilai_anaklakisaudarakandung);
	}

	function updateAnakLakiSaudaraSeayahData() {
		nilai_anaklakisaudaraseayah =
			parseInt($('#nilai_anaklakisaudaraseayah').val(), 10) || 0;
		$('#saham_anaklakisaudaraseayah').text(nilai_anaklakisaudaraseayah);
	}

	$('#nilai_anaklakisaudarakandung').on('input', function () {
		updateAnakLakiSaudaraKandungData();
		checkBlockingConditions2();
	});

	$('#nilai_anaklakisaudaraseayah').on('input', function () {
		updateAnakLakiSaudaraSeayahData();
		checkBlockingConditions2();
	});

	$('#img-next-button6').click(function (e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy7').hide();
			$('#legacy8').show();
		}
	});

	$('#img-return-button6').click(function (e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy7').hide();
			$('#legacy6').show();
		}
	});

	updateAnakLakiSaudaraKandungData();
	updateAnakLakiSaudaraSeayahData();

	function updatePamanKandungData() {
		nilai_pamankandungayah =
			parseInt($('#nilai_pamankandungayah').val(), 10) || 0;
		$('#saham_pamankandungayah').text(nilai_pamankandungayah);
	}

	function updatePamanSekakekAyahData() {
		nilai_pamansekakekayah =
			parseInt($('#nilai_pamansekakekayah').val(), 10) || 0;
		$('#saham_pamansekakekayah').text(nilai_pamansekakekayah);
	}

	$('#nilai_pamankandungayah').on('input', function () {
		updatePamanKandungData();
		checkBlockingConditions2();
	});

	$('#nilai_pamansekakekayah').on('input', function () {
		updatePamanSekakekAyahData();
		checkBlockingConditions2();
	});

	$('#img-next-button7').click(function (e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy8').hide();
			$('#legacy9').show();
		}
	});

	$('#img-return-button7').click(function (e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy8').hide();
			$('#legacy7').show();
		}
	});

	updatePamanKandungData();
	updatePamanSekakekAyahData();

	function updateAnakPamanKandungData() {
		nilai_anaklakipamankandung =
			parseInt($('#nilai_anaklakipamankandung').val(), 10) || 0;
		$('#saham_anaklakipamankandung').text(nilai_anaklakipamankandung);
	}

	function updateAnakPamanSekakekData() {
		nilai_anaklakipamansekakek =
			parseInt($('#nilai_anaklakipamansekakek').val(), 10) || 0;
		$('#saham_anaklakipamansekakek').text(nilai_anaklakipamansekakek);
	}

	$('#nilai_anaklakipamankandung').on('input', function () {
		updateAnakPamanKandungData();
		checkBlockingConditions2();
	});

	$('#nilai_anaklakipamansekakek').on('input', function () {
		updateAnakPamanSekakekData();
		checkBlockingConditions2();
	});

	$('#img-next-button8').click(function (e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy9').hide();
			$('#legacy_total').show();
		}
	});

	$('#img-return-button8').click(function (e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy9').hide();
			$('#legacy8').show();
		}
	});

	$('#img-next-button9').click(function (e) {
		e.preventDefault();
		location.reload();
	});

	$('#img-return-button9').click(function (e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy_total').hide();
			$('#legacy9').show();
		}
	});

	updateAnakPamanKandungData();
	updateAnakPamanSekakekData();

	function checkBlockingConditions2() {
		const nilai_anaklaki = parseInt($('#nilai_anaklaki').val(), 10) || 0;
		const nilai_anakperempuan =
			parseInt($('#nilai_anakperempuan').val(), 10) || 0;
		const nilai_kakek = $('#cb_kakek').prop('checked') ? 1 : 0;
		const nilai_ayah = $('#cb_ayah').prop('checked') ? 1 : 0;
		const nilai_ibu = $('#cb_ibu').prop('checked') ? 1 : 0;
		const nilai_cuculaki = parseInt($('#nilai_cuculaki').val(), 10) || 0;
		const nilai_saudaralakikandung =
			parseInt($('#nilai_saudaralakikandung').val(), 10) || 0;
		const nilai_saudaralakiseayah =
			parseInt($('#nilai_saudaralakiseayah').val(), 10) || 0;
		const nilai_saudaraperempuanseayah =
			parseInt($('#nilai_saudaraperempuanseayah').val(), 10) || 0;
		const nilai_anaklakisaudarakandung =
			parseInt($('#nilai_anaklakisaudarakandung').val(), 10) || 0;
		const nilai_anaklakisaudaraseayah =
			parseInt($('#nilai_anaklakisaudaraseayah').val(), 10) || 0;
		const nilai_pamankandungayah =
			parseInt($('#nilai_pamankandungayah').val(), 10) || 0;
		const nilai_pamansekakekayah =
			parseInt($('#nilai_pamansekakekayah').val(), 10) || 0;
		const nilai_anaklakipamankandung =
			parseInt($('#nilai_anaklakipamankandung').val(), 10) || 0;
		const nilai_saudaraperempuankandung =
			parseInt($('#nilai_saudaraperempuankandung').val(), 10) || 0;
		const nilai_cucuperempuan =
			parseInt($('#nilai_cucuperempuan').val(), 10) || 0;

		// kakek
		if (nilai_ayah > 0) {
			$('#info_penghalang_2b').show();
			$('#si_penghalang').text('Ayah');
			$('#field_kakek').hide();
			updateKakekData(nilai_kakek);
		} else {
			$('#info_penghalang_2b').hide();
			$('#field_kakek').show();
		}
		// Nenek
		if (nilai_ibu > 0) {
			console.log('na/nb');
			$('#field_nenekayah').hide();
			$('#field_nenekibu').hide();
			$('#info_penghalang_2c').show();
		} else {
			$('#field_nenekayah').show();
			$('#field_nenekibu').show();
			$('#info_penghalang_2c').hide();
		}

		// Cucu Laki
		if (nilai_anaklaki > 0) {
			$('#field_cuculaki').hide();
			$('#info_penghalang_1a').show();
		} else {
			$('#field_cuculaki').show();
			$('#info_penghalang_1a').hide();
		}

		// Cucu Perempuan
		if (nilai_anaklaki > 0) {
			$('#field_cucuperempuan').hide();
			$('#info_penghalang_1b').show();
			$('#si_penghalang_1b').text('Anak Laki-Laki');
		} else if (nilai_anakperempuan > 1) {
			$('#field_cucuperempuan').hide();
			$('#info_penghalang_1b').show();
			$('#si_penghalang_1b').text('2 Anak Perempuan atau lebih');
		} else {
			$('#field_cucuperempuan').show();
			$('#info_penghalang_1b').hide();
		}

		// Saudara kandung
		if (nilai_ayah > 0) {
			$('#field_saudaralakikandung').hide();
			$('#info_penghalang_3a').show();
			$('#si_penghalang3a').text('Ayah');
		} else if (nilai_anaklaki > 0) {
			$('#field_saudaralakikandung').hide();
			$('#info_penghalang_3a').show();
			$('#si_penghalang3a').text('Anak Laki-Laki');
		} else if (nilai_cuculaki > 0) {
			$('#field_saudaralakikandung').hide();
			$('#info_penghalang_3a').show();
			$('#si_penghalang3a').text('Cucu Laki-Laki');
		} else if (nilai_kakek > 0) {
			$('#field_saudaralakikandung').hide();
			$('#info_penghalang_3a').show();
			$('#si_penghalang3a').text('Kakek');
		} else {
			$('#field_saudaralakikandung').show();
			$('#info_penghalang_3a').hide();
		}

		// Saudari kandung
		if (nilai_ayah > 0) {
			$('#field_saudaraperempuankandung').hide();
			$('#info_penghalang_3b').show();
			$('#si_penghalang3b').text('Ayah');
		} else if (nilai_anaklaki > 0) {
			$('#field_saudaraperempuankandung').hide();
			$('#info_penghalang_3b').show();
			$('#si_penghalang3b').text('Anak Laki-Laki');
		} else if (nilai_cuculaki > 0) {
			$('#field_saudaraperempuankandung').hide();
			$('#info_penghalang_3b').show();
			$('#si_penghalang3b').text('Cucu Laki-Laki');
		} else if (nilai_kakek > 0) {
			$('#field_saudaraperempuankandung').hide();
			$('#info_penghalang_3b').show();
			$('#si_penghalang3b').text('Kakek');
		} else if (nilai_anakperempuan > 1) {
			$('#field_saudaraperempuankandung').hide();
			$('#info_penghalang_3b').show();
			$('#si_penghalang3b').text('2 atau lebih Anak Perempuan');
		} else if (nilai_cucuperempuan > 1) {
			$('#field_saudaraperempuankandung').hide();
			$('#info_penghalang_3b').show();
			$('#si_penghalang3b').text('2 atau lebih Cucu Perempuan');
		} else {
			$('#field_saudaraperempuankandung').show();
			$('#info_penghalang_3b').hide();
		}

		// Saudara Seayah
		if (nilai_ayah > 0) {
			$('#info_penghalang_4a').show();
			$('#si_penghalang_4a').text('Ayah');
			$('#field_saudaralakiseayah').hide();
		} else if (nilai_anaklaki > 0) {
			$('#info_penghalang_4a').show();
			$('#si_penghalang_4a').text('Anak Laki-Laki');
			$('#field_saudaralakiseayah').hide();
		} else if (nilai_kakek > 0) {
			$('#info_penghalang_4a').show();
			$('#si_penghalang_4a').text('Kakek');
			$('#field_saudaralakiseayah').hide();
		} else if (nilai_cuculaki) {
			$('#info_penghalang_4a').show();
			$('#si_penghalang_4a').text('Cucu Laki-Laki');
			$('#field_saudaralakiseayah').hide();
		} else if (nilai_saudaralakikandung > 0) {
			$('#info_penghalang_4a').show();
			$('#si_penghalang_4a').text('Saudara Laki Kandung');
			$('#field_saudaralakiseayah').hide();
		} else if (
			nilai_saudaraperempuankandung > 0 &&
			(nilai_anakperempuan > 0 || nilai_cucuperempuan > 0)
		) {
			$('#info_penghalang_4a').show();
			$('#si_penghalang_4a').text('Saudara Perempuan Kandung Ashabah');
			$('#field_saudaralakiseayah').hide();
		} else {
			$('#info_penghalang_4a').hide();
			$('#field_saudaralakiseayah').show();
		}

		// Saudari Seayah
		if (nilai_ayah > 0) {
			$('#info_penghalang_4b').show();
			$('#si_penghalang_4b').text('Ayah');
			$('#field_saudaraperempuanseayah').hide();
		} else if (nilai_anaklaki > 0) {
			$('#info_penghalang_4b').show();
			$('#si_penghalang_4b').text('Anak Laki-Laki');
			$('#field_saudaraperempuanseayah').hide();
		} else if (nilai_kakek > 0) {
			$('#info_penghalang_4b').show();
			$('#si_penghalang_4b').text('Kakek');
			$('#field_saudaraperempuanseayah').hide();
		} else if (nilai_anakperempuan > 1) {
			$('#info_penghalang_4a').show();
			$('#si_penghalang_4a').text('2 atau lebih Anak Perempuan');
			$('#field_saudaralakiseayah').hide();
		} else if (nilai_cuculaki) {
			$('#info_penghalang_4b').show();
			$('#si_penghalang_4b').text('Cucu Laki-Laki');
			$('#field_saudaraperempuanseayah').hide();
		} else if (nilai_cucuperempuan > 1) {
			$('#info_penghalang_4a').show();
			$('#si_penghalang_4a').text('2 atau lebih Cucu Perempuan');
			$('#field_saudaralakiseayah').hide();
		} else if (nilai_saudaralakikandung > 0) {
			$('#info_penghalang_4b').show();
			$('#si_penghalang_4b').text('Saudara Laki Kandung');
			$('#field_saudaraperempuanseayah').hide();
		} else if (
			nilai_saudaraperempuankandung > 0 &&
			(nilai_anakperempuan > 0 || nilai_cucuperempuan > 0)
		) {
			$('#info_penghalang_4b').show();
			$('#si_penghalang_4b').text('Saudara Perempuan Kandung Ashabah');
			$('#field_saudaraperempuanseayah').hide();
		} else if (nilai_saudaraperempuankandung > 1) {
			$('#info_penghalang_4b').show();
			$('#si_penghalang_4b').text('2 atau lebih Saudara Perempuan Kandung');
			$('#field_saudaraperempuanseayah').hide();
		} else {
			$('#info_penghalang_4b').hide();
			$('#field_saudaraperempuanseayah').show();
		}

		// Saudara Seibu
		if (nilai_ayah > 0) {
			$('#info_penghalang_4c').show();
			$('#si_penghalang_4c').text('Ayah');
			$('#field_saudaralakiseibu').hide();
			$('#field_saudaraperempuanseibu').hide();
		} else if (nilai_anaklaki > 0) {
			$('#info_penghalang_4c').show();
			$('#si_penghalang_4c').text('Anak Laki-Laki');
			$('#field_saudaralakiseibu').hide();
			$('#field_saudaraperempuanseibu').hide();
		} else if (nilai_anakperempuan > 0) {
			$('#info_penghalang_4c').show();
			$('#si_penghalang_4c').text('Anak Perempuan');
			$('#field_saudaralakiseibu').hide();
			$('#field_saudaraperempuanseibu').hide();
		} else if (nilai_kakek > 0) {
			$('#info_penghalang_4c').show();
			$('#si_penghalang_4c').text('Kakek');
			$('#field_saudaralakiseibu').hide();
			$('#field_saudaraperempuanseibu').hide();
		} else if (nilai_cuculaki > 0) {
			$('#info_penghalang_4c').show();
			$('#si_penghalang_4c').text('Cucu Laki-Laki');
			$('#field_saudaralakiseibu').hide();
			$('#field_saudaraperempuanseibu').hide();
		} else if (nilai_cucuperempuan > 0) {
			$('#info_penghalang_4c').show();
			$('#si_penghalang_4c').text('Cucu Perempuan');
			$('#field_saudaralakiseibu').hide();
			$('#field_saudaraperempuanseibu').hide();
		} else {
			$('#field_saudaralakiseibu').show();
			$('#field_saudaraperempuanseibu').show();
			$('#info_penghalang_4c').hide();
		}

		// Putra Saudara Kandung
		if (nilai_ayah > 0) {
			$('#info_penghalang_5a').show();
			$('#si_penghalang_5a').text('Ayah');
			$('#field_anaklakisaudarakandung').hide();
		} else if (nilai_anaklaki > 0) {
			$('#info_penghalang_5a').show();
			$('#si_penghalang_5a').text('Anak Laki-Laki');
			$('#field_anaklakisaudarakandung').hide();
		} else if (nilai_kakek > 0) {
			$('#info_penghalang_5a').show();
			$('#si_penghalang_5a').text('Kakek');
			$('#field_anaklakisaudarakandung').hide();
		} else if (nilai_cuculaki) {
			$('#info_penghalang_5a').show();
			$('#si_penghalang_5a').text('Cucu Laki-Laki');
			$('#field_anaklakisaudarakandung').hide();
		} else if (nilai_saudaralakikandung > 0) {
			$('#info_penghalang_5a').show();
			$('#si_penghalang_5a').text('Saudara Laki Kandung');
			$('#field_anaklakisaudarakandung').hide();
		} else if (
			nilai_saudaraperempuankandung > 0 &&
			(nilai_anakperempuan > 0 || nilai_cucuperempuan > 0)
		) {
			$('#info_penghalang_5a').show();
			$('#si_penghalang_5a').text('Saudara Perempuan Kandung Ashabah');
			$('#field_anaklakisaudarakandung').hide();
		} else if (nilai_saudaraperempuankandung > 0) {
			$('#info_penghalang_5a').show();
			$('#si_penghalang_5a').text('Saudara Perempuan Kandung Ashabah');
			$('#field_anaklakisaudarakandung').hide();
		} else if (nilai_saudaralakiseayah > 0) {
			$('#info_penghalang_5a').show();
			$('#si_penghalang_5a').text('Saudara Perempuan Seayah');
			$('#field_anaklakisaudarakandung').hide();
		} else if (nilai_saudaraperempuanseayah > 0) {
			$('#info_penghalang_5a').show();
			$('#si_penghalang_5a').text('Saudara Perempuan Seayah');
			$('#field_anaklakisaudarakandung').hide();
		} else {
			$('#info_penghalang_5a').hide();
			$('#field_anaklakisaudarakandung').show();
		}

		// Putra Saudara Seayah
		if (nilai_ayah > 0) {
			$('#info_penghalang_5b').show();
			$('#si_penghalang_5b').text('Ayah');
			$('#field_anaklakisaudaraseayah').hide();
		} else if (nilai_anaklaki > 0) {
			$('#info_penghalang_5b').show();
			$('#si_penghalang_5b').text('Anak Laki-Laki');
			$('#field_anaklakisaudaraseayah').hide();
		} else if (nilai_kakek > 0) {
			$('#info_penghalang_5b').show();
			$('#si_penghalang_5b').text('Kakek');
			$('#field_anaklakisaudaraseayah').hide();
		} else if (nilai_cuculaki) {
			$('#info_penghalang_5b').show();
			$('#si_penghalang_5b').text('Cucu Laki-Laki');
			$('#field_anaklakisaudaraseayah').hide();
		} else if (nilai_saudaralakikandung > 0) {
			$('#info_penghalang_5b').show();
			$('#si_penghalang_5b').text('Saudara Laki Kandung');
			$('#field_anaklakisaudaraseayah').hide();
		} else if (
			nilai_saudaraperempuankandung > 0 &&
			(nilai_anakperempuan > 0 || nilai_cucuperempuan > 0)
		) {
			$('#info_penghalang_5b').show();
			$('#si_penghalang_5b').text('Saudara Perempuan Kandung Ashabah');
			$('#field_anaklakisaudaraseayah').hide();
		} else if (nilai_saudaraperempuankandung > 0) {
			$('#info_penghalang_5b').show();
			$('#si_penghalang_5b').text('Saudara Perempuan Kandung Ashabah');
			$('#field_anaklakisaudaraseayah').hide();
		} else if (nilai_saudaralakiseayah > 0) {
			$('#info_penghalang_5b').show();
			$('#si_penghalang_5b').text('Saudara Perempuan Seayah');
			$('#field_anaklakisaudaraseayah').hide();
		} else if (nilai_saudaraperempuanseayah > 0) {
			$('#info_penghalang_5b').show();
			$('#si_penghalang_5b').text('Saudara Perempuan Seayah');
			$('#field_anaklakisaudaraseayah').hide();
		} else if (nilai_anaklakisaudarakandung > 0) {
			$('#info_penghalang_5b').show();
			$('#si_penghalang_5b').text('Anak Laki Saudara Kandung');
			$('#field_anaklakisaudaraseayah').hide();
		} else {
			$('#info_penghalang_5b').hide();
			$('#field_anaklakisaudaraseayah').show();
		}

		// Paman Kandung
		if (nilai_ayah > 0) {
			$('#info_penghalang_6a').show();
			$('#si_penghalang_6a').text('Ayah');
			$('#field_pamankandung').hide();
		} else if (nilai_anaklaki > 0) {
			$('#info_penghalang_6a').show();
			$('#si_penghalang_6a').text('Anak Laki-Laki');
			$('#field_pamankandung').hide();
		} else if (nilai_kakek > 0) {
			$('#info_penghalang_6a').show();
			$('#si_penghalang_6a').text('Kakek');
			$('#field_pamankandung').hide();
		} else if (nilai_cuculaki) {
			$('#info_penghalang_6a').show();
			$('#si_penghalang_6a').text('Cucu Laki-Laki');
			$('#field_pamankandung').hide();
		} else if (nilai_saudaralakikandung > 0) {
			$('#info_penghalang_6a').show();
			$('#si_penghalang_6a').text('Saudara Laki Kandung');
			$('#field_pamankandung').hide();
		} else if (
			nilai_saudaraperempuankandung > 0 &&
			(nilai_anakperempuan > 0 || nilai_cucuperempuan > 0)
		) {
			$('#info_penghalang_6a').show();
			$('#si_penghalang_6a').text('Saudara Perempuan Kandung Ashabah');
			$('#field_pamankandung').hide();
		} else if (nilai_saudaraperempuankandung > 0) {
			$('#info_penghalang_6a').show();
			$('#si_penghalang_6a').text('Saudara Perempuan Kandung Ashabah');
			$('#field_pamankandung').hide();
		} else if (nilai_saudaralakiseayah > 0) {
			$('#info_penghalang_6a').show();
			$('#si_penghalang_6a').text('Saudara Perempuan Seayah');
			$('#field_pamankandung').hide();
		} else if (nilai_saudaraperempuanseayah > 0) {
			$('#info_penghalang_6a').show();
			$('#si_penghalang_6a').text('Saudara Perempuan Seayah');
			$('#field_pamankandung').hide();
		} else if (nilai_anaklakisaudarakandung > 0) {
			$('#info_penghalang_6a').show();
			$('#si_penghalang_6a').text('Anak Laki Saudara Kandung');
			$('#field_pamankandung').hide();
		} else if (nilai_anaklakisaudaraseayah > 0) {
			$('#info_penghalang_6a').show();
			$('#si_penghalang_6a').text('Anak Laki Saudara Seayah');
			$('#field_pamankandung').hide();
		} else {
			$('#info_penghalang_6a').hide();
			$('#field_pamankandung').show();
		}
		// Paman Seayah
		if (nilai_ayah > 0) {
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Ayah');
			$('#field_pamansekakekayah').hide();
		} else if (nilai_anaklaki > 0) {
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Anak Laki-Laki');
			$('#field_pamansekakekayah').hide();
		} else if (nilai_kakek > 0) {
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Kakek');
			$('#field_pamansekakekayah').hide();
		} else if (nilai_cuculaki) {
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Cucu Laki-Laki');
			$('#field_pamansekakekayah').hide();
		} else if (nilai_saudaralakikandung > 0) {
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Saudara Laki Kandung');
			$('#field_pamansekakekayah').hide();
		} else if (
			nilai_saudaraperempuankandung > 0 &&
			(nilai_anakperempuan > 0 || nilai_cucuperempuan > 0)
		) {
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Saudara Perempuan Kandung Ashabah');
			$('#field_pamansekakekayah').hide();
		} else if (nilai_saudaraperempuankandung > 0) {
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Saudara Perempuan Kandung Ashabah');
			$('#field_pamansekakekayah').hide();
		} else if (nilai_saudaralakiseayah > 0) {
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Saudara Perempuan Seayah');
			$('#field_pamansekakekayah').hide();
		} else if (nilai_saudaraperempuanseayah > 0) {
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Saudara Perempuan Seayah');
			$('#field_pamansekakekayah').hide();
		} else if (nilai_anaklakisaudarakandung > 0) {
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Anak Laki Saudara Kandung');
			$('#field_pamansekakekayah').hide();
		} else if (nilai_anaklakisaudaraseayah > 0) {
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Anak Laki Saudara Seayah');
			$('#field_pamansekakekayah').hide();
		} else if (nilai_pamankandungayah > 0) {
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Paman Kandung');
			$('#field_pamansekakekayah').hide();
		} else {
			$('#info_penghalang_6b').hide();
			$('#field_pamansekakekayah').show();
		}
		// Anak Paman Kandung
		if (nilai_ayah > 0) {
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Ayah');
			$('#field_anaklakipamansekandung').hide();
		} else if (nilai_anaklaki > 0) {
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Anak Laki-Laki');
			$('#field_anaklakipamansekandung').hide();
		} else if (nilai_kakek > 0) {
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Kakek');
			$('#field_anaklakipamansekandung').hide();
		} else if (nilai_cuculaki) {
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Cucu Laki-Laki');
			$('#field_anaklakipamansekandung').hide();
		} else if (nilai_saudaralakikandung > 0) {
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Saudara Laki Kandung');
			$('#field_anaklakipamansekandung').hide();
		} else if (
			nilai_saudaraperempuankandung > 0 &&
			(nilai_anakperempuan > 0 || nilai_cucuperempuan > 0)
		) {
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Saudara Perempuan Kandung Ashabah');
			$('#field_anaklakipamansekandung').hide();
		} else if (nilai_saudaraperempuankandung > 0) {
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Saudara Perempuan Kandung Ashabah');
			$('#field_anaklakipamansekandung').hide();
		} else if (nilai_saudaralakiseayah > 0) {
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Saudara Perempuan Seayah');
			$('#field_anaklakipamansekandung').hide();
		} else if (nilai_saudaraperempuanseayah > 0) {
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Saudara Perempuan Seayah');
			$('#field_anaklakipamansekandung').hide();
		} else if (nilai_anaklakisaudarakandung > 0) {
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Anak Laki Saudara Kandung');
			$('#field_anaklakipamansekandung').hide();
		} else if (nilai_anaklakisaudaraseayah > 0) {
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Anak Laki Saudara Seayah');
			$('#field_anaklakipamansekandung').hide();
		} else if (nilai_pamankandungayah > 0) {
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Paman Kandung');
			$('#field_anaklakipamansekandung').hide();
		} else if (nilai_pamansekakekayah > 0) {
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Paman Sekakek');
			$('#field_anaklakipamansekandung').hide();
		} else {
			$('#info_penghalang_7a').hide();
			$('#field_anaklakipamansekandung').show();
		}
		// Anak Paman sekakek
		if (nilai_ayah > 0) {
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Ayah');
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_anaklaki > 0) {
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Anak Laki-Laki');
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_kakek > 0) {
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Kakek');
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_cuculaki) {
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Cucu Laki-Laki');
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_saudaralakikandung > 0) {
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Saudara Laki Kandung');
			$('#field_anaklakipamansekakek').hide();
		} else if (
			nilai_saudaraperempuankandung > 0 &&
			(nilai_anakperempuan > 0 || nilai_cucuperempuan > 0)
		) {
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Saudara Perempuan Kandung Ashabah');
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_saudaraperempuankandung > 0) {
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Saudara Perempuan Kandung Ashabah');
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_saudaralakiseayah > 0) {
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Saudara Perempuan Seayah');
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_saudaraperempuanseayah > 0) {
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Saudara Perempuan Seayah');
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_anaklakisaudarakandung > 0) {
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Anak Laki Saudara Kandung');
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_anaklakisaudaraseayah > 0) {
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Anak Laki Saudara Seayah');
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_pamankandungayah > 0) {
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Paman Kandung');
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_pamansekakekayah > 0) {
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Paman Sekakek');
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_anaklakipamankandung > 0) {
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Anak Laki Paman Kandung');
			$('#field_anaklakipamansekakek').hide();
		} else {
			$('#info_penghalang_7b').hide();
			$('#field_anaklakipamansekakek').show();
		}
	}

	function toRp(amount) {
		if (isNaN(amount) || amount === '' || amount === null) {
			return 'Rp.0'; // Mengembalikan 'Rp.0' jika nilai tidak valid atau kosong
		}
		let formattedString = parseInt(Math.round(amount), 10)
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
		return 'Rp.' + formattedString; // Mengembalikan format Rupiah dengan angka yang benar
	}

	$(document).on('click', '#img-next-button8', function () {
		let totalwarisan = fromRp(nIrst);
		let sisawarisan = totalwarisan;
		let totalratio = 0;
		let hasilKPK = 0;
		let keturunan =
			nilai_anaklaki +
			nilai_anakperempuan +
			nilai_cuculaki +
			nilai_cucuperempuan;
		let keturunanPerempuan = nilai_anakperempuan + nilai_cucuperempuan;
		let keturunanLaki = nilai_anaklaki + nilai_cuculaki;
		let nilai_nenek2 = nilai_nenekayah + nilai_nenekibu;
		let saudara =
			nilai_saudaralakikandung +
			nilai_saudaraperempuankandung +
			nilai_saudaralakiseayah +
			nilai_saudaraperempuanseayah +
			nilai_saudaralakiseibu +
			nilai_saudaraperempuanseIbu;
		let paman = nilai_pamankandungayah + nilai_pamansekakekayah;
		let anakpaman = nilai_anaklakipamankandung + nilai_anaklakipamansekakek;
		let keponakan = nilai_anaklakisaudarakandung + nilai_anaklakisaudaraseayah;
		let pojok = anakpaman + paman + keponakan;
		let saudaraseayah = nilai_saudaralakiseayah + nilai_saudaraperempuanseayah;
		let saudaraseibu = nilai_saudaralakiseibu + nilai_saudaraperempuanseIbu;
		let Rayah = 0;
		let Ribu = 0;
		let Rsuami = 0;
		let Ristri = 0;
		let Ranaklaki = 0;
		let Rcuculaki = 0;
		let Ranakperempuan = 0;
		let Rcucuperempuan = 0;
		let Rkakek = 0;
		let Rnenek2 = 0;
		let Rnenekayah = 0;
		let Rnenekibu = 0;
		let Rsaudaraperempuankandung;
		let Rsaudaraperempuanseayah = 0;
		let Rsaudaraseibu = 0;
		let Rsaudaralakikandung = 0;
		let Rsaudaralakiseayah = 0;
		let Ranaklakisaudarakandung = 0;
		let Ranaklakisaudaraseayah = 0;
		let Rpamankandungayah = 0;
		let Rpamansekakekayah = 0;
		let Ranaklakipamankandung = 0;
		let Ranaklakipamansekakek = 0;

		console.log(sisawarisan);

		function fromRp(rupiahString) {
			// Hapus "Rp." di awal string dan semua tanda titik
			let cleanString = rupiahString.replace(/Rp\.?/g, '').replace(/\./g, '');
			return parseInt(cleanString, 10); // Konversi kembali ke angka
		}

		function CalculateSpecial() {
			if (
				nilai_kakek > 0 &&
				nilai_ibu > 0 &&
				nilai_suami > 0 &&
				nilai_saudaraperempuankandung > 1 &&
				//
				nilai_saudaralakikandung == 0 &&
				keturunan == 0 &&
				saudaraseayah == 0 &&
				saudaraseibu == 0 &&
				pojok == 0
			) {
				hasilKPK = 27;
				const bagianIbu = (3 / hasilKPK) * totalwarisan;
				const bagianSuami = (9 / hasilKPK) * totalwarisan;
				const bagianKakek = (10 / hasilKPK) * totalwarisan;
				const bagianSaudaraPerempuanKandung =
					((5 / hasilKPK) * totalwarisan) / nilai_saudaraperempuankandung;
				$('#hasil_ibu').text(toRp(bagianIbu) + ' / Orang');
				$('#hasil_suami').text(toRp(bagianSuami) + ' / Orang');
				$('#hasil_kakek').text(toRp(bagianKakek) + ' / Orang');
				$('#hasil_saudaraperempuankandung').text(
					toRp(bagianSaudaraPerempuanKandung) + ' / Orang'
				);
				$('#bagian_ibu').text('3/27');
				$('#bagian_suami').text('9/27');
				$('#bagian_kakek').text('10/27');
				$('#bagian_saudaraperempuankandung').text('5/27');
			} else if (
				nilai_kakek > 0 &&
				nilai_ibu > 0 &&
				nilai_suami > 0 &&
				nilai_saudaraperempuankandung == 1 &&
				//
				nilai_saudaralakikandung == 0 &&
				keturunan == 0 &&
				saudaraseayah == 0 &&
				saudaraseibu == 0 &&
				pojok == 0
			) {
				hasilKPK = 27;
				const bagianIbu = (6 / hasilKPK) * totalwarisan;
				const bagianSuami = (9 / hasilKPK) * totalwarisan;
				const bagianKakek = (8 / hasilKPK) * totalwarisan;
				const bagianSaudaraPerempuanKandung =
					((4 / hasilKPK) * totalwarisan) / nilai_saudaraperempuankandung;
				$('#hasil_ibu').text(toRp(bagianIbu) + ' / Orang');
				$('#hasil_suami').text(toRp(bagianSuami) + ' / Orang');
				$('#hasil_kakek').text(toRp(bagianKakek) + ' / Orang');
				$('#hasil_saudaraperempuankandung').text(
					toRp(bagianSaudaraPerempuanKandung) + ' / Orang'
				);
				$('#bagian_ibu').text('6/27');
				$('#bagian_suami').text('9/27');
				$('#bagian_kakek').text('8/27');
				$('#bagian_saudaraperempuankandung').text('4/27');
			} else if (
				nilai_kakek > 0 &&
				nilai_ibu > 0 &&
				nilai_istri > 0 &&
				nilai_saudaraperempuankandung == 1 &&
				//
				nilai_saudaralakikandung == 0 &&
				keturunan == 0 &&
				saudaraseayah == 0 &&
				saudaraseibu == 0 &&
				pojok == 0
			) {
				hasilKPK = 45;
				const bagianIbu = (12 / hasilKPK) * totalwarisan;
				const bagianIstri = (9 / hasilKPK) * totalwarisan;
				const bagianKakek = (16 / hasilKPK) * totalwarisan;
				const bagianSaudaraPerempuanKandung = (8 / hasilKPK) * totalwarisan;
				$('#hasil_ibu').text(toRp(bagianIbu) + ' / Orang');
				$('#hasil_istri').text(toRp(bagianIstri) + ' / Orang');
				$('#hasil_kakek').text(toRp(bagianKakek) + ' / Orang');
				$('#hasil_saudaraperempuankandung').text(
					toRp(bagianSaudaraPerempuanKandung) + ' / Orang'
				);
				$('#bagian_ibu').text('12/45');
				$('#bagian_istri').text('9/45');
				$('#bagian_kakek').text('16/45');
				$('#bagian_saudaraperempuankandung').text('8/45');
			} else if (
				nilai_ibu > 0 &&
				nilai_istri > 0 &&
				nilai_kakek > 0 &&
				nilai_saudaraperempuankandung > 1 &&
				//
				nilai_saudaralakikandung == 0 &&
				keturunan == 0 &&
				saudaraseayah == 0 &&
				saudaraseibu == 0 &&
				pojok == 0
			) {
				hasilKPK = 45;
				const bagianIbu = (3 / hasilKPK) * totalwarisan;
				const bagianIstri = (9 / hasilKPK) * totalwarisan;
				const bagianKakek = (20 / hasilKPK) * totalwarisan;
				const bagianSaudaraPerempuanKandung = (10 / hasilKPK) * totalwarisan;
				$('#hasil_ibu').text(toRp(bagianIbu) + ' / Orang');
				$('#hasil_istri').text(toRp(bagianIstri) + ' / Orang');
				$('#hasil_kakek').text(toRp(bagianKakek) + ' / Orang');
				$('#hasil_saudaraperempuankandung').text(
					toRp(bagianSaudaraPerempuanKandung) + ' / Orang'
				);
				$('#bagian_ibu').text('3/45');
				$('#bagian_istri').text('9/45');
				$('#bagian_kakek').text('20/45');
				$('#bagian_saudaraperempuankandung').text('10/45');
			} else if (
				nilai_ayah > 0 &&
				nilai_ibu > 0 &&
				nilai_istri > 0 &&
				//
				keturunan == 0 &&
				saudara == 0 &&
				pojok == 0
			) {
				hasilKPK = 12;
				const bagianAyah = (6 / hasilKPK) * totalwarisan;
				const bagianIbu = (3 / hasilKPK) * totalwarisan;
				const bagianIstri = ((3 / hasilKPK) * totalwarisan) / nilai_istri;
				$('#hasil_ayah').text(toRp(bagianAyah) + ' / Orang');
				$('#hasil_ibu').text(toRp(bagianIbu) + ' / Orang');
				$('#hasil_istri').text(toRp(bagianIstri) + ' / Orang');
				$('#bagian_ayah').text('6/12');
				$('#bagian_ibu').text('3/12');
				$('#bagian_istri').text('3/12');
			} else if (
				nilai_ayah > 0 &&
				nilai_ibu > 0 &&
				nilai_suami > 0 &&
				keturunan == 0 &&
				saudara == 0 &&
				pojok == 0
			) {
				hasilKPK = 6;
				const bagianAyah = (2 / hasilKPK) * totalwarisan;
				const bagianIbu = (1 / hasilKPK) * totalwarisan;
				const bagianSuami = (3 / hasilKPK) * totalwarisan;
				$('#hasil_ayah').text(toRp(bagianAyah) + ' / Orang');
				$('#hasil_ibu').text(toRp(bagianIbu) + ' / Orang');
				$('#hasil_suami').text(toRp(bagianSuami) + ' / Orang');
				$('#bagian_ayah').text('2/6');
				$('#bagian_ibu').text('1/6');
				$('#bagian_suami').text('3/6');
			} else if (
				nilai_ibu > 0 &&
				nilai_suami > 0 &&
				nilai_saudaralakikandung > 0 &&
				nilai_saudaraperempuankandung > 0 &&
				saudaraseibu > 1 &&
				//
				keturunan == 0 &&
				pojok == 0
			) {
				hasilKPK = 24;
				const bagianIbu = (4 / hasilKPK) * totalwarisan;
				const bagianSuami = (12 / hasilKPK) * totalwarisan;
				const bagianSaudaraLakiSeibu =
					((4 / hasilKPK) * totalwarisan) / saudaraseibu;
				const bagianSaudaraPerempuanSeIbu =
					((4 / hasilKPK) * totalwarisan) / saudaraseibu;
				const bagianSaudaraLakiKandung = (2 / hasilKPK) * totalwarisan;
				const bagianSaudaraPerempuanKandung = (2 / hasilKPK) * totalwarisan;
				$('#hasil_ibu').text(toRp(bagianIbu) + ' / Orang');
				$('#hasil_suami').text(toRp(bagianSuami) + ' / Orang');

				$('#hasil_saudaralakikandung').text(
					toRp(bagianSaudaraLakiKandung) + ' / Orang'
				);
				$('#hasil_saudaraperempuankandung').text(
					toRp(bagianSaudaraPerempuanKandung) + ' / Orang'
				);
				$('#bagian_ibu').text('4/24');
				$('#bagian_suami').text('12/24');
				$('#bagian_saudaralakikandung').text('2/24');
				$('#bagian_saudaraperempuankandung').text('2/24');
				if (nilai_saudaralakiseibu > 0 && nilai_saudaraperempuanseIbu > 0) {
					$('#hasil_saudaralakiseibu').text(
						toRp(bagianSaudaraLakiSeibu) + ' / Orang'
					);
					$('#bagian_saudaralakiseibu').text('2/24');
					$('#hasil_saudaraperempuanseibu').text(
						toRp(bagianSaudaraPerempuanSeIbu) + ' / Orang'
					);
					$('#bagian_saudaraperempuanseibu').text('2/24');
				} else if (nilai_saudaralakiseibu > 0) {
					$('#hasil_saudaralakiseibu').text(
						toRp(bagianSaudaraLakiSeibu) + ' / Orang'
					);
					$('#bagian_saudaralakiseibu').text('4/24');
				} else if (nilai_saudaraperempuanseIbu > 0) {
					$('#hasil_saudaraperempuanseibu').text(
						toRp(bagianSaudaraPerempuanSeIbu) + ' / Orang'
					);
					$('#bagian_saudaraperempuanseibu').text('4/24');
				}
			} else if (
				nilai_nenek2 > 0 &&
				nilai_suami > 0 &&
				nilai_saudaralakikandung > 0 &&
				nilai_saudaraperempuankandung > 0 &&
				saudaraseibu > 1 &&
				//
				keturunan == 0 &&
				pojok == 0
			) {
				hasilKPK = 24;
				const bagianSuami = (12 / hasilKPK) * totalwarisan;
				const bagianSaudaraLakiSeibu =
					((4 / hasilKPK) * totalwarisan) / saudaraseibu;
				const bagianSaudaraPerempuanSeIbu =
					((4 / hasilKPK) * totalwarisan) / saudaraseibu;
				const bagianSaudaraLakiKandung = (2 / hasilKPK) * totalwarisan;
				const bagianSaudaraPerempuanKandung = (2 / hasilKPK) * totalwarisan;
				$('#hasil_suami').text(toRp(bagianSuami) + ' / Orang');
				$('#hasil_saudaralakikandung').text(
					toRp(bagianSaudaraLakiKandung) + ' / Orang'
				);
				$('#hasil_saudaraperempuankandung').text(
					toRp(bagianSaudaraPerempuanKandung) + ' / Orang'
				);
				$('#bagian_suami').text('12/24');
				$('#bagian_saudaralakikandung').text('2/24');
				$('#bagian_saudaraperempuankandung').text('2/24');
				if (nilai_nenekayah > 0 && nilai_nenekibu > 0) {
					const bagianNenek2 = ((1 / 6) * totalwarisan) / nilai_nenek2;
					const ratioNenek2 = (1 / 6) * hasilKPK;
					$('#hasil_nenekayah').text(toRp(bagianNenek2) + ' / Orang');
					$('#hasil_nenekibu').text(toRp(bagianNenek2) + ' / Orang');
					$('#bagian_nenekayah').text(
						ratioNenek2 + '/' + hasilKPK + ' Bersama'
					);
					$('#bagian_nenekibu').text(ratioNenek2 + '/' + hasilKPK + ' Bersama');
				} else {
					if (nilai_nenekayah > 0 && nilai_nenekibu == 0) {
						const bagianNenekAyah = ((1 / 6) * totalwarisan) / nilai_nenekayah;
						const ratioNenekAyah = (1 / 6) * hasilKPK;
						$('#hasil_nenekayah').text(toRp(bagianNenekAyah) + ' / Orang');
						$('#bagian_nenekayah').text(ratioNenekAyah + '/' + hasilKPK);
					}
					if (nilai_nenekibu > 0 && nilai_nenekayah == 0) {
						const bagianNenekIbu = ((1 / 6) * totalwarisan) / nilai_nenekibu;
						const ratioNenekIbu = (1 / 6) * hasilKPK;
						$('#hasil_nenekibu').text(toRp(bagianNenekIbu) + ' / Orang');
						$('#bagian_nenekibu').text(ratioNenekIbu + '/' + hasilKPK);
					}
				}
				if (nilai_saudaralakiseibu > 0 && nilai_saudaraperempuanseIbu > 0) {
					$('#hasil_saudaralakiseibu').text(
						toRp(bagianSaudaraLakiSeibu) + ' / Orang'
					);
					$('#bagian_saudaralakiseibu').text('4/24 B');
					$('#hasil_saudaraperempuanseibu').text(
						toRp(bagianSaudaraPerempuanSeIbu) + ' / Orang'
					);
					$('#bagian_saudaraperempuanseibu').text('4/24 B');
				} else if (nilai_saudaralakiseibu > 0) {
					$('#hasil_saudaralakiseibu').text(
						toRp(bagianSaudaraLakiSeibu) + ' / Orang'
					);
					$('#bagian_saudaralakiseibu').text('4/24');
				} else if (nilai_saudaraperempuanseIbu > 0) {
					$('#hasil_saudaraperempuanseibu').text(
						toRp(bagianSaudaraPerempuanSeIbu) + ' / Orang'
					);
					$('#bagian_saudaraperempuanseibu').text('4/24');
				}
			} else {
				CalculateMasalah();
			}
		}

		function CalculateMasalah() {
			console.log('Cmasalah');
			if (nilai_suami > 0) {
				if (keturunan > 0) {
					masalah.push(4);
					console.log('suami');
				} else {
					masalah.push(2);
					console.log('dapet 2');
				}
			}

			if (nilai_istri > 0) {
				if (keturunan > 0) {
					masalah.push(8);
				} else {
					masalah.push(4);
				}
			}

			if (nilai_ayah > 0) {
				if (nilai_anaklaki > 0 || nilai_cuculaki > 0) {
					masalah.push(6);
				} else if (keturunanPerempuan > 0) {
					totalashobah = totalashobah + 2;
					masalah.push(6);
				} else {
					totalashobah = totalashobah + 2;
				}
			}
			if (nilai_ibu > 0) {
				if (keturunan > 0 || saudara > 1) {
					masalah.push(6);
				} else {
					masalah.push(3);
				}
			}

			if (nilai_kakek > 0) {
				if (keturunanLaki > 0) {
					masalah.push(6);
				} else if (keturunanPerempuan > 0) {
					totalashobah = totalashobah + 2;
					masalah.push(6);
				} else {
					totalashobah = totalashobah + 2;
				}
			}
			if (nilai_nenekayah > 0 && nilai_nenekibu > 0) {
				masalah.push(12);
			} else {
				if (nilai_nenekayah > 0 && nilai_nenekibu == 0) {
					masalah.push(6);
				}
				if (nilai_nenekibu > 0 && nilai_nenekayah == 0) {
					masalah.push(6);
				}
			}

			if (nilai_anaklaki > 0) {
				totalashobah = totalashobah + 2 * nilai_anaklaki;
			}

			if (nilai_anakperempuan > 0) {
				if (nilai_anaklaki > 0) {
					totalashobah = totalashobah + nilai_anakperempuan;
				} else if (nilai_anakperempuan > 1 && nilai_anaklaki == 0) {
					masalah.push(3);
				} else if (nilai_anakperempuan == 1 && nilai_anaklaki == 0) {
					masalah.push(2);
				}
			}

			if (nilai_cuculaki > 0) {
				totalashobah = totalashobah + 2 * nilai_cuculaki;
			}
			if (nilai_cucuperempuan > 0) {
				if (nilai_anakperempuan > 0) {
					masalah.push(6);
				} else if (nilai_cuculaki > 0) {
					totalashobah = totalashobah + nilai_cucuperempuan;
				} else if (nilai_cucuperempuan == 1) {
					masalah.push(2);
				} else if (nilai_cucuperempuan > 1) {
					masalah.push(3);
				}
			}
			if (nilai_saudaralakikandung > 0) {
				totalashobah = totalashobah + 2 * nilai_saudaralakikandung;
			}
			if (nilai_saudaraperempuankandung > 0) {
				if (
					nilai_saudaralakikandung > 0 ||
					nilai_anakperempuan > 0 ||
					nilai_cucuperempuan > 0
				) {
					totalashobah = totalashobah + nilai_saudaraperempuankandung;
				} else if (nilai_saudaraperempuankandung == 1) {
					masalah.push(2);
					console.log('2');
				} else if (nilai_saudaraperempuankandung > 1) {
					masalah.push(3);
					console.log('3');
				}
			}
			if (nilai_saudaralakiseayah > 0) {
				totalashobah = totalashobah + 2 * nilai_saudaralakiseayah;
			}
			if (nilai_saudaraperempuanseayah > 0) {
				if (
					nilai_anakperempuan > 0 ||
					nilai_cucuperempuan > 0 ||
					nilai_saudaralakiseayah > 0
				) {
					totalashobah = totalashobah + nilai_saudaraperempuanseayah;
				} else if (nilai_saudaraperempuanseayah == 0) {
					masalah.push(2);
				} else if (nilai_saudaraperempuanseayah > 1) {
					masalah.push(3);
				}
			}
			if (nilai_saudaralakiseibu > 0) {
				if (nilai_saudaralakiseibu == 1) {
					masalah.push(6);
				} else if (nilai_saudaralakiseibu > 1) {
					masalah.push(3);
				}
			}
			if (nilai_saudaraperempuanseIbu > 0) {
				if (nilai_saudaraperempuanseIbu == 1) {
					masalah.push(3);
					console.log('push');
				} else if (nilai_saudaraperempuanseIbu > 1) {
					masalah.push(3);
					console.log('push');
				}
			}

			if (nilai_anaklakisaudarakandung > 0) {
				totalashobah = totalashobah + 2 * nilai_anaklakisaudarakandung;
			}

			if (nilai_anaklakisaudaraseayah > 0) {
				if (nilai_anaklakisaudarakandung > 0) {
					nilai_anaklakisaudaraseayah = 0;
				} else {
					totalashobah = totalashobah + 2 * nilai_anaklakisaudaraseayah;
				}
			}

			if (nilai_pamankandungayah > 0) {
				totalashobah = totalashobah + 2 * nilai_pamankandungayah;
			}

			if (nilai_pamansekakekayah > 0) {
				if (nilai_pamankandungayah > 0) {
					nilai_pamansekakekayah = 0;
				} else {
					totalashobah = totalashobah + 2 * nilai_pamansekakekayah;
				}
			}

			if (nilai_anaklakipamankandung > 0) {
				totalashobah = totalashobah + 2 * nilai_anaklakipamankandung;
			}

			if (nilai_anaklakipamansekakek > 0) {
				if (nilai_anaklakipamankandung > 0) {
					nilai_anaklakipamansekakek = 0;
				} else {
					totalashobah = totalashobah + 2 * nilai_anaklakipamansekakek;
				}
			}

			if (masalah.length > 0) {
				hasilKPK = CalculateKPK(masalah);
				console.log('Array masalah:', masalah);
				console.log('KPK dari array masalah:', hasilKPK);
				CalculateRatio();
				console.log('kpk');
				console.log(totalashobah);
			} else if (masalah.length === 0) {
				CalculateAshabah();
				console.log('ashabah');
			}
		}

		function CalculateKPK(arr) {
			// Fungsi untuk menghitung KPK dua angka
			const kpkDuaAngka = (a, b) => {
				const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y)); // FPB
				return (a * b) / gcd(a, b); // Rumus KPK
			};

			// Menggunakan reduce untuk menghitung KPK dari seluruh elemen array
			return arr.reduce((kpk, num) => kpkDuaAngka(kpk, num), 1);
		}

		function CalculateRatio() {
			console.log('Cratio');
			console.log(hasilKPK);
			console.log(totalashobah);
			if (nilai_suami > 0) {
				if (keturunan > 0) {
					Rsuami = (1 / 4) * hasilKPK;
					totalratio += Rsuami;
				} else {
					Rsuami = (1 / 2) * hasilKPK;
					totalratio += Rsuami;
				}
			}
			if (nilai_istri > 0) {
				if (keturunan > 0) {
					Ristri = (1 / 8) * hasilKPK;
					totalratio += Ristri;
				} else {
					Ristri = (1 / 4) * hasilKPK;
					totalratio += Ristri;
				}
			}
			if (nilai_ayah > 0) {
				if (
					nilai_anaklaki > 0 ||
					nilai_cuculaki > 0 ||
					nilai_anakperempuan > 0 ||
					nilai_cucuperempuan > 0
				) {
					Rayah = (1 / 6) * hasilKPK;
					totalratio += Rayah;
				}
			}
			if (nilai_ibu > 0) {
				if (keturunan > 0 || saudara > 1) {
					Ribu = (1 / 6) * hasilKPK;
					totalratio += Ribu;
				} else {
					Ribu = (1 / 3) * hasilKPK;
					totalratio += Ribu;
				}
			}

			if (nilai_kakek > 0) {
				if (keturunanLaki > 0) {
					Rkakek = (1 / 6) * hasilKPK;
					totalratio += Rkakek;
				}
			}
			if (nilai_nenekayah > 0 && nilai_nenekibu > 0) {
				Rnenek2 = (1 / 6) * hasilKPK;
				totalratio += Rnenek2;
			} else {
				if (nilai_nenekayah > 0 && nilai_nenekibu == 0) {
					Rnenekayah = (1 / 6) * hasilKPK;
					totalratio += Rnenekayah;
				}
				if (nilai_nenekibu > 0 && nilai_nenekayah == 0) {
					Rnenekibu = (1 / 6) * hasilKPK;
					totalratio += Rnenekibu;
				}
			}

			if (nilai_anakperempuan > 0) {
				if (nilai_anaklaki > 0) {
					Ranakperempuan = 0;
					totalratio += Ranakperempuan;
				} else if (nilai_anakperempuan > 1 && nilai_anaklaki == 0) {
					Ranakperempuan = (2 / 3) * hasilKPK;
					totalratio += Ranakperempuan;
				} else if (nilai_anakperempuan == 1 && nilai_anaklaki == 0) {
					Ranakperempuan = (1 / 2) * hasilKPK;
					totalratio += Ranakperempuan;
				}
			}

			if (nilai_cucuperempuan > 0) {
				if (nilai_anakperempuan > 0) {
					Rcucuperempuan = 0;
					totalratio += Rcucuperempuan;
				} else if (nilai_cucuperempuan == 1) {
					Rcucuperempuan = (1 / 2) * hasilKPK;
					totalratio += Rcucuperempuan;
				} else if (nilai_cucuperempuan > 1) {
					Rcucuperempuan = (2 / 3) * hasilKPK;
					totalratio += Rcucuperempuan;
				}
			}

			if (nilai_saudaraperempuankandung > 0) {
				if (nilai_saudaralakikandung > 0) {
					Rsaudaraperempuankandung = 0;
					totalratio += Rsaudaraperempuankandung;
				} else if (
					nilai_saudaraperempuankandung == 1 &&
					nilai_anakperempuan == 0 &&
					nilai_cucuperempuan == 0
				) {
					Rsaudaraperempuankandung = (1 / 2) * hasilKPK;
					totalratio += Rsaudaraperempuankandung;
				} else if (
					nilai_saudaraperempuankandung > 1 &&
					nilai_anakperempuan == 0 &&
					nilai_cucuperempuan == 0
				) {
					Rsaudaraperempuankandung = (2 / 3) * hasilKPK;
					totalratio += Rsaudaraperempuankandung;
				}
			}

			if (nilai_saudaraperempuanseayah > 0) {
				if (nilai_saudaralakiseayah > 0) {
					Rsaudaraperempuanseayah = 0;
					totalratio += Rsaudaraperempuanseayah;
				} else if (
					nilai_saudaraperempuanseayah == 1 &&
					nilai_anakperempuan == 0 &&
					nilai_cucuperempuan == 0
				) {
					Rsaudaraperempuanseayah = (1 / 2) * hasilKPK;
					totalratio += Rsaudaraperempuanseayah;
				} else if (
					nilai_saudaraperempuanseayah > 1 &&
					nilai_anakperempuan == 0 &&
					nilai_cucuperempuan == 0
				) {
					Rsaudaraperempuanseayah = (2 / 3) * hasilKPK;
					totalratio += Rsaudaraperempuanseayah;
				}
			}
			if (saudaraseibu > 0) {
				if (saudaraseibu == 1) {
					Rsaudaraseibu = (1 / 6) * hasilKPK;
					totalratio += Rsaudaraseibu;
				} else if (saudaraseibu > 1) {
					Rsaudaraseibu = (1 / 3) * hasilKPK;
					totalratio += Rsaudaraseibu;
				}
			}
			if (totalratio > hasilKPK) {
				CalculateAulRadd();
				console.log(totalratio);
				console.log('satu aul ');
			} else if (totalratio != hasilKPK && totalashobah == 0) {
				CalculateAulRadd();
				console.log(totalratio);
				console.log('dua radd');
			} else if (totalashobah > 0) {
				CalculateShare();
				console.log(totalratio);
				console.log('tiga share');
			}
		}

		function CalculateRatio2() {
			console.log('Cratio2');
			console.log(hasilKPK);
			totalratio = 0;
			if (nilai_ayah > 0) {
				if (nilai_anaklaki > 0 || nilai_cuculaki > 0) {
					Rayah = (1 / 6) * hasilKPK;
					totalratio += Rayah;
				}
			}
			if (nilai_ibu > 0) {
				if (keturunan > 0 || saudara > 1) {
					Ribu = (1 / 6) * hasilKPK;
					totalratio += Ribu;
				} else {
					Ribu = (1 / 3) * hasilKPK;
					totalratio += Ribu;
				}
			}

			if (nilai_kakek > 0) {
				if (keturunanLaki > 0) {
					Rkakek = (1 / 6) * hasilKPK;
					totalratio += Rkakek;
				}
			}
			if (nilai_nenekayah > 0 && nilai_nenekibu > 0) {
				Rnenek2 = (1 / 6) * hasilKPK;
				totalratio += Rnenek2;
			} else {
				if (nilai_nenekayah > 0 && nilai_nenekibu == 0) {
					Rnenekayah = (1 / 6) * hasilKPK;
					totalratio += Rnenekayah;
				}
				if (nilai_nenekibu > 0 && nilai_nenekayah == 0) {
					Rnenekibu = (1 / 6) * hasilKPK;
					totalratio += Rnenekibu;
				}
			}

			if (nilai_anakperempuan > 0) {
				if (nilai_anaklaki > 0) {
					Ranakperempuan = 0;
					totalratio += Ranakperempuan;
				} else if (nilai_anakperempuan > 1 && nilai_anaklaki == 0) {
					Ranakperempuan = (2 / 3) * hasilKPK;
					totalratio += Ranakperempuan;
				} else if (nilai_anakperempuan == 1 && nilai_anaklaki == 0) {
					Ranakperempuan = (1 / 2) * hasilKPK;
					totalratio += Ranakperempuan;
				}
			}

			if (nilai_cucuperempuan > 0) {
				if (nilai_cuculaki > 0) {
					Rcucuperempuan = 0;
					totalratio += Rcucuperempuan;
				} else if (nilai_anakperempuan > 0) {
					Rcucuperempuan = (1 / 6) * hasilKPK;
					totalratio += Rcucuperempuan;
				} else if (nilai_cucuperempuan == 1) {
					Rcucuperempuan = (1 / 2) * hasilKPK;
					totalratio += Rcucuperempuan;
				} else if (nilai_cucuperempuan > 1) {
					Rcucuperempuan = (2 / 3) * hasilKPK;
					totalratio += Rcucuperempuan;
				}
			}

			if (nilai_saudaraperempuankandung > 0) {
				if (nilai_saudaralakikandung > 0) {
					Rsaudaraperempuankandung = 0;
					totalratio += Rsaudaraperempuankandung;
				} else if (
					nilai_saudaraperempuankandung == 1 &&
					nilai_anakperempuan == 0 &&
					nilai_cucuperempuan == 0
				) {
					Rsaudaraperempuankandung = (1 / 2) * hasilKPK;
					totalratio += Rsaudaraperempuankandung;
				} else if (
					nilai_saudaraperempuankandung > 1 &&
					nilai_anakperempuan == 0 &&
					nilai_cucuperempuan == 0
				) {
					Rsaudaraperempuankandung = (2 / 3) * hasilKPK;
					totalratio += Rsaudaraperempuankandung;
				}
			}

			if (nilai_saudaraperempuanseayah > 0) {
				if (nilai_saudaralakiseayah > 0) {
					Rsaudaraperempuanseayah = 0;
					totalratio += Rsaudaraperempuanseayah;
				} else if (
					nilai_saudaraperempuanseayah == 1 &&
					nilai_anakperempuan == 0 &&
					nilai_cucuperempuan == 0
				) {
					Rsaudaraperempuanseayah = (1 / 2) * hasilKPK;
					totalratio += Rsaudaraperempuanseayah;
				} else if (
					nilai_saudaraperempuanseayah > 1 &&
					nilai_anakperempuan == 0 &&
					nilai_cucuperempuan == 0
				) {
					Rsaudaraperempuanseayah = (2 / 3) * hasilKPK;
					totalratio += Rsaudaraperempuanseayah;
				}
			}
			if (saudaraseibu > 0) {
				if (saudaraseibu == 1) {
					Rsaudaraseibu = (1 / 6) * hasilKPK;
					totalratio += Rsaudaraseibu;
				} else if (saudaraseibu > 1) {
					Rsaudaraseibu = (1 / 3) * hasilKPK;
					totalratio += Rsaudaraseibu;
				}
			}
			if (totalratio > 0) {
				console.log(totalratio);
				CalculateRaddSuamiIstri();
			}
		}

		function CalculateAulRadd() {
			if (totalashobah > 0 && totalratio <= hasilKPK) {
				CalculateAshabah();
				console.log('ashabah');
			} else if (totalratio > hasilKPK) {
				hasilKPK = totalratio;
				let nilai_ashabah = sisawarisan / totalashobah;
				console.log('aul');
				if (nilai_suami > 0) {
					if (keturunan > 0) {
						const bagianSuami = (Rsuami / hasilKPK) * totalwarisan;
						sisawarisan -= bagianSuami;
						$('#hasil_suami').text(toRp(bagianSuami) + ' / Orang');
						$('#bagian_suami').text(Rsuami + '/' + hasilKPK);
					} else {
						const bagianSuami = (Rsuami / hasilKPK) * totalwarisan;
						sisawarisan -= bagianSuami;
						$('#hasil_suami').text(toRp(bagianSuami) + ' / Orang');
						$('#bagian_suami').text(Rsuami + '/' + hasilKPK);
					}
				}

				if (nilai_istri > 0) {
					if (keturunan > 0) {
						const bagianIstri =
							((Ristri / hasilKPK) * totalwarisan) / nilai_istri;
						sisawarisan -= bagianIstri * nilai_istri;
						$('#hasil_istri').text(toRp(bagianIstri) + ' / Orang');
						$('#bagian_istri').text(Ristri + '/' + hasilKPK);
					} else {
						const bagianIstri =
							((Ristri / hasilKPK) * totalwarisan) / nilai_istri;
						sisawarisan -= bagianIstri * nilai_istri;
						masalah.pop(4);
						hasilKPK = CalculateKPK(masalah);
						$('#hasil_istri').text(toRp(bagianIstri) + ' / Orang');
						$('#bagian_istri').text(Ristri + '/' + hasilKPK);
					}
				}

				if (nilai_ayah > 0) {
					if (nilai_anaklaki > 0 || nilai_cuculaki > 0) {
						const bagianAyah = (Rayah / hasilKPK) * totalwarisan;
						sisawarisan -= bagianAyah;
						$('#hasil_ayah').text(toRp(bagianAyah) + ' / Orang');
						$('#bagian_ayah').text(Rayah + '/' + hasilKPK);
					} else if (nilai_anakperempuan > 0 || nilai_cucuperempuan > 0) {
						const bagianAyah = (Rayah / hasilKPK) * totalwarisan;
						sisawarisan -= bagianAyah;
						$('#hasil_ayah').text(toRp(bagianAyah) + ' / Orang');
						$('#bagian_ayah').text(Rayah + '/' + hasilKPK + ' + Ashabah');
					} else {
						const bagianAyah = nilai_ashabah * 2;
						$('#hasil_ayah').text(toRp(bagianAyah) + ' / Orang');
						$('#bagian_ayah').text('Ashabah');
					}
				}
				if (nilai_ibu > 0) {
					if (keturunan > 0 || saudara > 1) {
						const bagianIbu = (Ribu / hasilKPK) * totalwarisan;
						sisawarisan -= bagianIbu;
						$('#hasil_ibu').text(toRp(bagianIbu) + ' / Orang');
						$('#bagian_ibu').text(Ribu + '/' + hasilKPK);
					} else {
						const bagianIbu = (Ribu / hasilKPK) * totalwarisan;
						sisawarisan -= bagianIbu;
						$('#hasil_ibu').text(toRp(bagianIbu) + ' / Orang');
						$('#bagian_ibu').text(Ribu + '/' + hasilKPK);
					}
				}

				if (nilai_kakek > 0) {
					if (keturunanLaki > 0) {
						const bagianKakek = (Rkakek / hasilKPK) * totalwarisan;
						sisawarisan -= bagianKakek;
						$('#hasil_kakek').text(toRp(bagianKakek) + ' / Orang');
						$('#bagian_kakek').text(Rkakek + '/' + hasilKPK);
					} else if (keturunanPerempuan > 0) {
						const bagianKakek = (Rkakek / hasilKPK) * totalwarisan;
						sisawarisan -= bagianKakek;
						$('#hasil_kakek').text(toRp(bagianKakek) + ' / Orang');
						$('#bagian_kakek').text(Rkakek + '/' + hasilKPK + ' + Ashabah');
					} else {
						const bagianKakek = (Rkakek / hasilKPK) * totalwarisan;
						$('#hasil_kakek').text(toRp(bagianKakek) + ' / Orang');
						$('#bagian_kakek').text('Ashabah');
					}
				}
				if (nilai_nenekayah > 0 && nilai_nenekibu > 0) {
					const bagianNenek2 =
						((Rnenek2 / hasilKPK) * totalwarisan) / nilai_nenek2;
					sisawarisan -= bagianNenek2 * nilai_nenek2;
					$('#hasil_nenekayah').text(toRp(bagianNenek2) + ' / Orang');
					$('#hasil_nenekibu').text(toRp(bagianNenek2) + ' / Orang');
					$('#bagian_nenekayah').text(Rnenek2 + '/' + hasilKPK + ' Bersama');
					$('#bagian_nenekibu').text(Rnenek2 + '/' + hasilKPK + ' Bersama');
				} else {
					if (nilai_nenekayah > 0 && nilai_nenekibu == 0) {
						const bagianNenekAyah = (Rnenekayah / hasilKPK) * totalwarisan;
						sisawarisan -= bagianNenekAyah;
						$('#hasil_nenekayah').text(toRp(bagianNenekAyah) + ' / Orang');
						$('#bagian_nenekayah').text(Rnenekayah + '/' + hasilKPK);
					}
					if (nilai_nenekibu > 0 && nilai_nenekayah == 0) {
						const bagianNenekIbu = (Rnenekibu / hasilKPK) * totalwarisan;
						sisawarisan -= bagianNenekIbu;
						$('#hasil_nenekibu').text(toRp(bagianNenekIbu) + ' / Orang');
						$('#bagian_nenekibu').text(Rnenekibu + '/' + hasilKPK);
					}
				}

				if (nilai_anaklaki > 0) {
					const bagianAnakLaki = (Ranaklaki / hasilKPK) * totalwarisan;
					$('#hasil_anaklaki').text(toRp(bagianAnakLaki) + ' / Orang');
					$('#bagian_anaklaki').text('Ashabah');
				}

				if (nilai_anakperempuan > 0) {
					if (nilai_anakperempuan > 1 && nilai_anaklaki == 0) {
						const bagianAnakPerempuan =
							((Ranakperempuan / hasilKPK) * totalwarisan) /
							nilai_anakperempuan;
						sisawarisan -= bagianAnakPerempuan * nilai_anakperempuan;
						$('#hasil_anakperempuan').text(
							toRp(bagianAnakPerempuan) + ' / Orang'
						);
						$('#bagian_anakperempuan').text(Ranakperempuan + '/' + hasilKPK);
					} else if (nilai_anakperempuan == 1 && nilai_anaklaki == 0) {
						const bagianAnakPerempuan =
							(Ranakperempuan / hasilKPK) * totalwarisan;
						sisawarisan -= bagianAnakPerempuan * nilai_anakperempuan;
						$('#hasil_anakperempuan').text(
							toRp(bagianAnakPerempuan) + ' / Orang'
						);
						$('#bagian_anakperempuan').text(Ranakperempuan + '/' + hasilKPK);
					} else if (nilai_anaklaki > 0) {
						const bagianAnakPerempuan =
							(Ranakperempuan / hasilKPK) * totalwarisan;
						sisawarisan -= bagianAnakPerempuan * nilai_anakperempuan;
						$('#hasil_anakperempuan').text(
							toRp(bagianAnakPerempuan) + ' / Orang'
						);
						$('#bagian_anakperempuan').text(Ranakperempuan + '/' + hasilKPK);
					}
				}

				if (nilai_cucuperempuan > 0) {
					if (nilai_anakperempuan > 0) {
						const bagianCucuPerempuan =
							((Rcucuperempuan / hasilKPK) * totalwarisan) /
							nilai_cucuperempuan;
						sisawarisan -= bagianCucuPerempuan * nilai_cucuperempuan;
						$('#hasil_cucuperempuan').text(
							toRp(bagianCucuPerempuan) + ' / Orang'
						);
						$('#bagian_cucuperempuan').text(Rcucuperempuan + '/' + hasilKPK);
					} else if (nilai_cucuperempuan == 1) {
						const bagianCucuPerempuan =
							(Rcucuperempuan / hasilKPK) * totalwarisan;
						sisawarisan -= bagianCucuPerempuan;
						$('#hasil_cucuperempuan').text(
							toRp(bagianCucuPerempuan) + ' / Orang'
						);
						$('#bagian_cucuperempuan').text(Rcucuperempuan + '/' + hasilKPK);
					} else if (nilai_cucuperempuan > 1) {
						const bagianCucuPerempuan =
							((Rcucuperempuan / hasilKPK) * totalwarisan) /
							nilai_cucuperempuan;
						sisawarisan -= bagianCucuPerempuan * nilai_cucuperempuan;
						$('#hasil_cucuperempuan').text(
							toRp(bagianCucuPerempuan) + ' / Orang'
						);
						$('#bagian_cucuperempuan').text(Rcucuperempuan + '/' + hasilKPK);
					}
				}

				if (nilai_cuculaki > 0) {
					const bagianCucuLaki = (Rcuculaki / hasilKPK) * totalwarisan;
					$('#hasil_cuculaki').text(toRp(bagianCucuLaki) + ' / Orang');
					$('#bagian_cuculaki').text('Ashabah');
				}

				if (nilai_saudaraperempuankandung > 0) {
					if (nilai_saudaraperempuankandung == 1) {
						const bagianSaudaraPerempuanKandung =
							(Rsaudaraperempuankandung / hasilKPK) * totalwarisan;
						sisawarisan -= bagianSaudaraPerempuanKandung;
						$('#hasil_saudaraperempuankandung').text(
							toRp(bagianSaudaraPerempuanKandung) + ' / Orang'
						);
						$('#bagian_saudaraperempuankandung').text(
							Rsaudaraperempuankandung + '/' + hasilKPK
						);
					} else if (nilai_saudaraperempuankandung > 1) {
						const bagianSaudaraPerempuanKandung =
							((Rsaudaraperempuankandung / hasilKPK) * totalwarisan) /
							nilai_saudaraperempuankandung;
						sisawarisan -=
							bagianSaudaraPerempuanKandung * nilai_saudaraperempuankandung;
						$('#hasil_saudaraperempuankandung').text(
							toRp(bagianSaudaraPerempuanKandung) + ' / Orang'
						);
						$('#bagian_saudaraperempuankandung').text(
							Rsaudaraperempuankandung + '/' + hasilKPK
						);
					}
				}

				if (nilai_saudaralakikandung > 0) {
					const bagianSaudaraLakiKandung =
						(Rsaudaralakikandung / hasilKPK) * totalwarisan;
					$('#hasil_saudaralakikandung').text(
						toRp(bagianSaudaraLakiKandung) + ' / Orang'
					);
					$('#bagian_saudaralakikandung').text('Ashabah');
				}

				if (nilai_saudaraperempuanseayah > 0) {
					if (nilai_saudaraperempuanseayah == 1) {
						const bagianSaudaraPerempuanSeAyah =
							(Rsaudaraperempuanseayah / hasilKPK) * totalwarisan;
						sisawarisan -= bagianSaudaraPerempuanSeAyah;
						$('#hasil_saudaraperempuanseayah').text(
							toRp(bagianSaudaraPerempuanSeAyah) + ' / Orang'
						);
						$('#bagian_saudaraperempuanseayah').text(
							Rsaudaraperempuanseayah + '/' + hasilKPK
						);
					} else if (nilai_saudaraperempuanseayah > 1) {
						const bagianSaudaraPerempuanSeAyah =
							((Rsaudaraperempuanseayah / hasilKPK) * totalwarisan) /
							nilai_saudaraperempuanseayah;
						sisawarisan -=
							bagianSaudaraPerempuanSeAyah * nilai_saudaraperempuanseayah;
						$('#hasil_saudaraperempuanseayah').text(
							toRp(bagianSaudaraPerempuanSeAyah) + ' / Orang'
						);
						$('#bagian_saudaraperempuanseayah').text(
							Rsaudaraperempuanseayah + '/' + hasilKPK
						);
					}
				}

				if (nilai_saudaralakiseayah > 0) {
					const bagianSaudaraLakiSeAyah =
						(Rsaudaralakiseayah / hasilKPK) * totalwarisan;
					$('#hasil_saudaralakiseayah').text(
						toRp(bagianSaudaraLakiSeAyah) + ' / Orang'
					);
					$('#bagian_saudaralakiseayah').text('Ashabah');
				}

				if (saudaraseibu > 0) {
					if (nilai_saudaralakiseibu > 0 && nilai_saudaraperempuanseIbu > 0) {
						const bagianSaudaraSeIbu =
							((Rsaudaraseibu / hasilKPK) * totalwarisan) / saudaraseibu;
						sisawarisan -= bagianSaudaraSeIbu * saudaraseibu;
						$('#hasil_saudaralakiseibu').text(
							toRp(bagianSaudaraSeIbu) + ' / Orang'
						);
						$('#bagian_saudaralakiseibu').text(
							Rsaudaraseibu + '/' + hasilKPK + ' Bersama'
						);
						$('#hasil_saudaraperempuanseibu').text(
							toRp(bagianSaudaraSeIbu) + ' / Orang'
						);
						$('#bagian_saudaraperempuanseibu').text(
							Rsaudaraseibu + '/' + hasilKPK + ' Bersama'
						);
					} else if (nilai_saudaralakiseibu == 1) {
						const bagianSaudaraLakiSeIbu =
							(Rsaudaraseibu / hasilKPK) * totalwarisan;
						sisawarisan -= bagianSaudaraLakiSeIbu;
						$('#hasil_saudaralakiseibu').text(
							toRp(bagianSaudaraLakiSeIbu) + ' / Orang'
						);
						$('#bagian_saudaralakiseibu').text(Rsaudaraseibu + '/' + hasilKPK);
						console.log('aulradd');
					} else if (nilai_saudaralakiseibu > 1) {
						const bagianSaudaraLakiSeIbu =
							((Rsaudaraseibu / hasilKPK) * totalwarisan) /
							nilai_saudaralakiseibu;
						sisawarisan -= bagianSaudaraLakiSeIbu * nilai_saudaralakiseibu;
						$('#hasil_saudaralakiseibu').text(
							toRp(bagianSaudaraLakiSeIbu) + ' / Orang'
						);
						$('#bagian_saudaralakiseibu').text(Rsaudaraseibu + '/' + hasilKPK);
						console.log('aulradd');
					} else if (nilai_saudaraperempuanseIbu == 1) {
						const bagianSaudaraPerempuanSeIbu =
							(Rsaudaraseibu / hasilKPK) * totalwarisan;
						sisawarisan -= bagianSaudaraPerempuanSeIbu;
						$('#hasil_saudaraperempuanseibu').text(
							toRp(bagianSaudaraPerempuanSeIbu) + ' / Orang'
						);
						$('#bagian_saudaraperempuanseibu').text(
							Rsaudaraseibu + '/' + hasilKPK
						);
						console.log('itu');
					} else if (nilai_saudaraperempuanseIbu > 1) {
						const bagianSaudaraPerempuanSeIbu =
							((Rsaudaraseibu / hasilKPK) * totalwarisan) /
							nilai_saudaraperempuanseIbu;
						sisawarisan -=
							bagianSaudaraPerempuanSeIbu * nilai_saudaraperempuanseIbu;
						$('#hasil_saudaraperempuanseibu').text(
							toRp(bagianSaudaraPerempuanSeIbu) + ' / Orang'
						);
						$('#bagian_saudaraperempuanseibu').text(
							Rsaudaraseibu + '/' + hasilKPK
						);
						console.log('ini');
					}
				}

				if (nilai_anaklakisaudarakandung > 0) {
					const bagianAnakLakiSaudaraKandung =
						(Ranaklakisaudarakandung / hasilKPK) * totalwarisan;
					$('#hasil_anaklakisaudarakandung').text(
						toRp(bagianAnakLakiSaudaraKandung) + ' / Orang'
					);
					$('#bagian_anaklakisaudarakandung').text('Ashabah');
				}
				if (nilai_anaklakisaudaraseayah > 0) {
					const bagianAnakLakiSaudaraSeAyah =
						(Ranaklakisaudaraseayah / hasilKPK) * totalwarisan;
					$('#hasil_anaklakisaudaraseayah').text(
						toRp(bagianAnakLakiSaudaraSeAyah) + ' / Orang'
					);
					$('#bagian_anaklakisaudaraseayah').text('Ashabah');
				}
				if (nilai_pamankandungayah > 0) {
					const bagianPamanKandungAyah =
						(Rpamankandungayah / hasilKPK) * totalwarisan;
					$('#hasil_pamankandungayah').text(
						toRp(bagianPamanKandungAyah) + ' / Orang'
					);
					$('#bagian_pamankandungayah').text('Ashabah');
					console.log('paman');
				}
				if (nilai_pamansekakekayah > 0) {
					const bagianPamanSeKakekAyah =
						(Rpamansekakekayah / hasilKPK) * totalwarisan;
					$('#hasil_pamansekakekayah').text(
						toRp(bagianPamanSeKakekAyah) + ' / Orang'
					);
					$('#bagian_pamansekakekayah').text('Ashabah');
				}
				if (nilai_anaklakipamankandung > 0) {
					const bagianAnakLakiPamanKandung =
						(Ranaklakipamankandung / hasilKPK) * totalwarisan;
					$('#hasil_anaklakipamankandung').text(
						toRp(bagianAnakLakiPamanKandung) + ' / Orang'
					);
					$('#bagian_anaklakipamankandung').text('Ashabah');
				}
				if (nilai_anaklakipamansekakek > 0) {
					const bagianAnakLakiPamanSeKakek =
						(Ranaklakipamansekakek / hasilKPK) * totalwarisan;
					$('#hasil_anaklakipamansekakek').text(
						toRp(bagianAnakLakiPamanSeKakek) + ' / Orang'
					);
					$('#bagian_anaklakipamansekakek').text('Ashabah');
				}
			} else if (
				totalratio < hasilKPK &&
				(nilai_suami > 0 || nilai_istri > 0)
			) {
				console.log('Radd Suami/Istri');
				Rayah = 0;
				Ribu = 0;
				Rsuami = 0;
				Ristri = 0;
				Ranakperempuan = 0;
				Rcucuperempuan = 0;
				Rkakek = 0;
				Rnenek2 = 0;
				Rnenekayah = 0;
				Rnenekibu = 0;
				Rsaudaraperempuankandung;
				Rsaudaraperempuanseayah = 0;
				Rsaudaraseibu = 0;

				if (
					nilai_suami > 0 &&
					(nilai_ayah > 0 ||
						nilai_ibu > 0 ||
						nilai_anakperempuan > 0 ||
						nilai_cucuperempuan > 0 ||
						nilai_nenek2 > 0 ||
						nilai_saudaraperempuankandung > 0 ||
						nilai_saudaraperempuanseayah > 0 ||
						nilai_saudaralakiseibu > 0 ||
						nilai_saudaraperempuanseIbu > 0)
				) {
					if (keturunan > 0) {
						masalah = masalah.filter(item => item !== 4);
						hasilKPK = CalculateKPK(masalah);
						console.log(hasilKPK);
						const bagianSuami = (1 / 4) * totalwarisan;
						sisawarisan -= bagianSuami;
						$('#hasil_suami').text(toRp(bagianSuami) + ' / Orang');
						$('#bagian_suami').text('1/4 total');
						CalculateRatio2();
					} else {
						masalah = masalah.filter(item => item !== 2);
						hasilKPK = CalculateKPK(masalah);
						console.log(hasilKPK);
						const bagianSuami = (1 / 2) * totalwarisan;
						sisawarisan -= bagianSuami;
						$('#hasil_suami').text(toRp(bagianSuami) + ' / Orang');
						$('#bagian_suami').text('1/2 total');
						CalculateRatio2();
					}
				} else {
					const bagianSuami = 1 * totalwarisan;
					$('#hasil_suami').text(toRp(bagianSuami) + ' / Orang');
					$('#bagian_suami').text('1/1 total');
				}
				if (
					nilai_istri > 0 &&
					(nilai_ayah > 0 ||
						nilai_ibu > 0 ||
						nilai_anakperempuan > 0 ||
						nilai_cucuperempuan > 0 ||
						nilai_nenek2 > 0 ||
						nilai_saudaraperempuankandung > 0 ||
						nilai_saudaraperempuanseayah > 0 ||
						nilai_saudaralakiseibu > 0 ||
						nilai_saudaraperempuanseIbu > 0)
				) {
					if (keturunan > 0) {
						masalah = masalah.filter(item => item !== 8);
						hasilKPK = CalculateKPK(masalah);
						console.log(hasilKPK);
						const bagianIstri = ((1 / 8) * totalwarisan) / nilai_istri;
						sisawarisan -= bagianIstri * nilai_istri;
						$('#hasil_istri').text(toRp(bagianIstri) + ' / Orang');
						$('#bagian_istri').text('1/8 total');
						CalculateRatio2();
					} else {
						masalah = masalah.filter(item => item !== 4);
						hasilKPK = CalculateKPK(masalah);
						console.log(hasilKPK);
						const bagianIstri = ((1 / 4) * totalwarisan) / nilai_istri;
						sisawarisan -= bagianIstri * nilai_istri;
						$('#hasil_istri').text(toRp(bagianIstri) + ' / Orang');
						$('#bagian_istri').text('1/4 total');
						CalculateRatio2();
					}
				} else {
					const bagianIstri = (1 * totalwarisan) / nilai_istri;
					$('#hasil_istri').text(toRp(bagianIstri) + ' / Orang');
					$('#bagian_istri').text('1/1 total');
				}
			} else {
				hasilKPK = totalratio;
				console.log('Radd biasa');

				if (nilai_ayah > 0) {
					if (nilai_anaklaki > 0 || nilai_cuculaki > 0) {
						const bagianAyah = (Rayah / hasilKPK) * totalwarisan;
						sisawarisan -= bagianAyah;
						$('#hasil_ayah').text(toRp(bagianAyah) + ' / Orang');
						$('#bagian_ayah').text(Rayah + '/' + hasilKPK);
					}
				}
				if (nilai_ibu > 0) {
					if (keturunan > 0 || saudara > 1) {
						const bagianIbu = (Ribu / hasilKPK) * totalwarisan;
						sisawarisan -= bagianIbu;
						$('#hasil_ibu').text(toRp(bagianIbu) + ' / Orang');
						$('#bagian_ibu').text(Ribu + '/' + hasilKPK);
					} else {
						const bagianIbu = (Ribu / hasilKPK) * totalwarisan;
						sisawarisan -= bagianIbu;
						$('#hasil_ibu').text(toRp(bagianIbu) + ' / Orang');
						$('#bagian_ibu').text(Ribu + '/' + hasilKPK);
					}
				}

				if (nilai_kakek > 0) {
					if (keturunanLaki > 0) {
						const bagianKakek = (Rkakek / hasilKPK) * totalwarisan;
						sisawarisan -= bagianKakek;
						$('#hasil_kakek').text(toRp(bagianKakek) + ' / Orang');
						$('#bagian_kakek').text(Rkakek + '/' + hasilKPK);
					}
				}
				if (nilai_nenekayah > 0 && nilai_nenekibu > 0) {
					const bagianNenek2 =
						((Rnenek2 / hasilKPK) * totalwarisan) / nilai_nenek2;
					sisawarisan -= bagianNenek2 * nilai_nenek2;
					$('#hasil_nenekayah').text(toRp(bagianNenek2) + ' / Orang');
					$('#hasil_nenekibu').text(toRp(bagianNenek2) + ' / Orang');
					$('#bagian_nenekayah').text(Rnenek2 + '/' + hasilKPK + ' Bersama');
					$('#bagian_nenekibu').text(Rnenek2 + '/' + hasilKPK + ' Bersama');
				} else {
					if (nilai_nenekayah > 0 && nilai_nenekibu == 0) {
						const bagianNenekAyah = (Rnenekayah / hasilKPK) * totalwarisan;
						sisawarisan -= bagianNenekAyah;
						$('#hasil_nenekayah').text(toRp(bagianNenekAyah) + ' / Orang');
						$('#bagian_nenekayah').text(Rnenekayah + '/' + hasilKPK);
					}
					if (nilai_nenekibu > 0 && nilai_nenekayah == 0) {
						const bagianNenekIbu = (Rnenekibu / hasilKPK) * totalwarisan;
						sisawarisan -= bagianNenekIbu;
						$('#hasil_nenekibu').text(toRp(bagianNenekIbu) + ' / Orang');
						$('#bagian_nenekibu').text(Rnenekibu + '/' + hasilKPK);
					}
				}

				if (nilai_anakperempuan > 0) {
					if (nilai_anakperempuan > 1 && nilai_anaklaki == 0) {
						const bagianAnakPerempuan =
							((Ranakperempuan / hasilKPK) * totalwarisan) /
							nilai_anakperempuan;
						sisawarisan -= bagianAnakPerempuan * nilai_anakperempuan;
						$('#hasil_anakperempuan').text(
							toRp(bagianAnakPerempuan) + ' / Orang'
						);
						$('#bagian_anakperempuan').text(Ranakperempuan + '/' + hasilKPK);
					} else if (nilai_anakperempuan == 1 && nilai_anaklaki == 0) {
						const bagianAnakPerempuan =
							(Ranakperempuan / hasilKPK) * totalwarisan;
						sisawarisan -= bagianAnakPerempuan * nilai_anakperempuan;
						$('#hasil_anakperempuan').text(
							toRp(bagianAnakPerempuan) + ' / Orang'
						);
						$('#bagian_anakperempuan').text(Ranakperempuan + '/' + hasilKPK);
					}
				}

				if (nilai_cucuperempuan > 0) {
					if (nilai_anakperempuan > 0) {
						const bagianCucuPerempuan =
							((Rcucuperempuan / hasilKPK) * totalwarisan) /
							nilai_cucuperempuan;
						sisawarisan -= bagianCucuPerempuan * nilai_cucuperempuan;
						$('#hasil_cucuperempuan').text(
							toRp(bagianCucuPerempuan) + ' / Orang'
						);
						$('#bagian_cucuperempuan').text(Rcucuperempuan + '/' + hasilKPK);
					} else if (nilai_cucuperempuan == 1) {
						const bagianCucuPerempuan =
							(Rcucuperempuan / hasilKPK) * totalwarisan;
						sisawarisan -= bagianCucuPerempuan;
						$('#hasil_cucuperempuan').text(
							toRp(bagianCucuPerempuan) + ' / Orang'
						);
						$('#bagian_cucuperempuan').text(Rcucuperempuan + '/' + hasilKPK);
					} else if (nilai_cucuperempuan > 1) {
						const bagianCucuPerempuan =
							((Rcucuperempuan / hasilKPK) * totalwarisan) /
							nilai_cucuperempuan;
						sisawarisan -= bagianCucuPerempuan * nilai_cucuperempuan;
						$('#hasil_cucuperempuan').text(
							toRp(bagianCucuPerempuan) + ' / Orang'
						);
						$('#bagian_cucuperempuan').text(Rcucuperempuan + '/' + hasilKPK);
					}
				}

				if (nilai_saudaraperempuankandung > 0) {
					if (nilai_saudaraperempuankandung == 1) {
						const bagianSaudaraPerempuanKandung =
							(Rsaudaraperempuankandung / hasilKPK) * totalwarisan;
						sisawarisan -= bagianSaudaraPerempuanKandung;
						$('#hasil_saudaraperempuankandung').text(
							toRp(bagianSaudaraPerempuanKandung) + ' / Orang'
						);
						$('#bagian_saudaraperempuankandung').text(
							Rsaudaraperempuankandung + '/' + hasilKPK
						);
					} else if (nilai_saudaraperempuankandung > 1) {
						const bagianSaudaraPerempuanKandung =
							((Rsaudaraperempuankandung / hasilKPK) * totalwarisan) /
							nilai_saudaraperempuankandung;
						sisawarisan -=
							bagianSaudaraPerempuanKandung * nilai_saudaraperempuankandung;
						$('#hasil_saudaraperempuankandung').text(
							toRp(bagianSaudaraPerempuanKandung) + ' / Orang'
						);
						$('#bagian_saudaraperempuankandung').text(
							Rsaudaraperempuankandung + '/' + hasilKPK
						);
					}
				}

				if (nilai_saudaraperempuanseayah > 0) {
					if (nilai_saudaraperempuanseayah == 1) {
						const bagianSaudaraPerempuanSeAyah =
							(Rsaudaraperempuanseayah / hasilKPK) * totalwarisan;
						sisawarisan -= bagianSaudaraPerempuanSeAyah;
						$('#hasil_saudaraperempuanseayah').text(
							toRp(bagianSaudaraPerempuanSeAyah) + ' / Orang'
						);
						$('#bagian_saudaraperempuanseayah').text(
							Rsaudaraperempuanseayah + '/' + hasilKPK
						);
					} else if (nilai_saudaraperempuanseayah > 1) {
						const bagianSaudaraPerempuanSeAyah =
							((Rsaudaraperempuanseayah / hasilKPK) * totalwarisan) /
							nilai_saudaraperempuanseayah;
						sisawarisan -=
							bagianSaudaraPerempuanSeAyah * nilai_saudaraperempuanseayah;
						$('#hasil_saudaraperempuanseayah').text(
							toRp(bagianSaudaraPerempuanSeAyah) + ' / Orang'
						);
						$('#bagian_saudaraperempuanseayah').text(
							Rsaudaraperempuanseayah + '/' + hasilKPK
						);
					}
				}
				if (saudaraseibu > 0) {
					if (nilai_saudaralakiseibu > 0 && nilai_saudaraperempuanseIbu > 0) {
						const bagianSaudaraSeIbu =
							((Rsaudaraseibu / hasilKPK) * totalwarisan) / saudaraseibu;
						sisawarisan -= bagianSaudaraSeIbu * saudaraseibu;
						$('#hasil_saudaralakiseibu').text(
							toRp(bagianSaudaraSeIbu) + ' / Orang'
						);
						$('#bagian_saudaralakiseibu').text(
							Rsaudaraseibu + '/' + hasilKPK + ' Bersama'
						);
						$('#hasil_saudaraperempuanseibu').text(
							toRp(bagianSaudaraSeIbu) + ' / Orang'
						);
						$('#bagian_saudaraperempuanseibu').text(
							Rsaudaraseibu + '/' + hasilKPK + ' Bersama'
						);
					} else if (nilai_saudaralakiseibu == 1) {
						const bagianSaudaraLakiSeIbu =
							(Rsaudaraseibu / hasilKPK) * totalwarisan;
						sisawarisan -= bagianSaudaraLakiSeIbu;
						$('#hasil_saudaralakiseibu').text(
							toRp(bagianSaudaraLakiSeIbu) + ' / Orang'
						);
						$('#bagian_saudaralakiseibu').text(Rsaudaraseibu + '/' + hasilKPK);
						console.log('aulradd');
					} else if (nilai_saudaralakiseibu > 1) {
						const bagianSaudaraLakiSeIbu =
							((Rsaudaraseibu / hasilKPK) * totalwarisan) /
							nilai_saudaralakiseibu;
						sisawarisan -= bagianSaudaraLakiSeIbu * nilai_saudaralakiseibu;
						$('#hasil_saudaralakiseibu').text(
							toRp(bagianSaudaraLakiSeIbu) + ' / Orang'
						);
						$('#bagian_saudaralakiseibu').text(Rsaudaraseibu + '/' + hasilKPK);
						console.log('aulradd');
					} else if (nilai_saudaraperempuanseIbu == 1) {
						const bagianSaudaraPerempuanSeIbu =
							(Rsaudaraseibu / hasilKPK) * totalwarisan;
						sisawarisan -= bagianSaudaraPerempuanSeIbu;
						$('#hasil_saudaraperempuanseibu').text(
							toRp(bagianSaudaraPerempuanSeIbu) + ' / Orang'
						);
						$('#bagian_saudaraperempuanseibu').text(
							Rsaudaraseibu + '/' + hasilKPK
						);
						console.log('itu');
					} else if (nilai_saudaraperempuanseIbu > 1) {
						const bagianSaudaraPerempuanSeIbu =
							((Rsaudaraseibu / hasilKPK) * totalwarisan) /
							nilai_saudaraperempuanseIbu;
						sisawarisan -=
							bagianSaudaraPerempuanSeIbu * nilai_saudaraperempuanseIbu;
						$('#hasil_saudaraperempuanseibu').text(
							toRp(bagianSaudaraPerempuanSeIbu) + ' / Orang'
						);
						$('#bagian_saudaraperempuanseibu').text(
							Rsaudaraseibu + '/' + hasilKPK
						);
						console.log('ini');
					}
				}
			}
		}

		function CalculateRaddSuamiIstri() {
			hasilKPK = totalratio;
			console.log(hasilKPK);
			console.log(sisawarisan);
			if (nilai_ayah > 0) {
				if (nilai_anaklaki > 0 || nilai_cuculaki > 0) {
					const bagianAyah = (Rayah / hasilKPK) * sisawarisan;
					$('#hasil_ayah').text(toRp(bagianAyah) + ' / Orang');
					$('#bagian_ayah').text(Rayah + '/' + hasilKPK + ' sisa');
				}
			}
			if (nilai_ibu > 0) {
				if (keturunan > 0 || saudara > 1) {
					const bagianIbu = (Ribu / hasilKPK) * sisawarisan;
					$('#hasil_ibu').text(toRp(bagianIbu) + ' / Orang');
					$('#bagian_ibu').text(Ribu + '/' + hasilKPK + ' sisa');
				} else {
					const bagianIbu = (Ribu / hasilKPK) * sisawarisan;
					$('#hasil_ibu').text(toRp(bagianIbu) + ' / Orang');
					$('#bagian_ibu').text(Ribu + '/' + hasilKPK + ' sisa');
				}
			}

			if (nilai_kakek > 0) {
				if (keturunanLaki > 0) {
					const bagianKakek = (Rkakek / hasilKPK) * sisawarisan;
					$('#hasil_kakek').text(toRp(bagianKakek) + ' / Orang');
					$('#bagian_kakek').text(Rkakek + '/' + hasilKPK + ' sisa');
				}
			}
			if (nilai_nenekayah > 0 && nilai_nenekibu > 0) {
				const bagianNenek2 =
					((Rnenek2 / hasilKPK) * sisawarisan) / nilai_nenek2;
				$('#hasil_nenekayah').text(toRp(bagianNenek2) + ' / Orang');
				$('#hasil_nenekibu').text(toRp(bagianNenek2) + ' / Orang');
				$('#bagian_nenekayah').text(Rnenek2 + '/' + hasilKPK + ' N sisa');
				$('#bagian_nenekibu').text(Rnenek2 + '/' + hasilKPK + ' N sisa');
			} else {
				if (nilai_nenekayah > 0 && nilai_nenekibu == 0) {
					const bagianNenekAyah = (Rnenekayah / hasilKPK) * sisawarisan;
					$('#hasil_nenekayah').text(toRp(bagianNenekAyah) + ' / Orang');
					$('#bagian_nenekayah').text(Rnenekayah + '/' + hasilKPK + ' sisa');
				}
				if (nilai_nenekibu > 0 && nilai_nenekayah == 0) {
					const bagianNenekIbu = (Rnenekibu / hasilKPK) * sisawarisan;
					$('#hasil_nenekibu').text(toRp(bagianNenekIbu) + ' / Orang');
					$('#bagian_nenekibu').text(Rnenekibu + '/' + hasilKPK + ' sisa');
				}
			}

			if (nilai_anakperempuan > 0) {
				if (nilai_anakperempuan > 1 && nilai_anaklaki == 0) {
					console.log(Ranakperempuan);
					const bagianAnakPerempuan =
						((Ranakperempuan / hasilKPK) * sisawarisan) / nilai_anakperempuan;
					$('#hasil_anakperempuan').text(
						toRp(bagianAnakPerempuan) + ' / Orang'
					);
					$('#bagian_anakperempuan').text(
						Ranakperempuan + '/' + hasilKPK + ' sisa'
					);
				} else if (nilai_anakperempuan == 1 && nilai_anaklaki == 0) {
					const bagianAnakPerempuan = (Ranakperempuan / hasilKPK) * sisawarisan;
					$('#hasil_anakperempuan').text(
						toRp(bagianAnakPerempuan) + ' / Orang'
					);
					$('#bagian_anakperempuan').text(
						Ranakperempuan + '/' + hasilKPK + ' sisa'
					);
				}
			}

			if (nilai_cucuperempuan > 0) {
				if (nilai_anakperempuan > 0) {
					const bagianCucuPerempuan =
						((Rcucuperempuan / hasilKPK) * sisawarisan) / nilai_cucuperempuan;
					$('#hasil_cucuperempuan').text(
						toRp(bagianCucuPerempuan) + ' / Orang'
					);
					$('#bagian_cucuperempuan').text(
						Rcucuperempuan + '/' + hasilKPK + ' sisa'
					);
				} else if (nilai_cucuperempuan == 1) {
					const bagianCucuPerempuan = (Rcucuperempuan / hasilKPK) * sisawarisan;
					$('#hasil_cucuperempuan').text(
						toRp(bagianCucuPerempuan) + ' / Orang'
					);
					$('#bagian_cucuperempuan').text(
						Rcucuperempuan + '/' + hasilKPK + ' sisa'
					);
				} else if (nilai_cucuperempuan > 1) {
					const bagianCucuPerempuan =
						((Rcucuperempuan / hasilKPK) * sisawarisan) / nilai_cucuperempuan;
					$('#hasil_cucuperempuan').text(
						toRp(bagianCucuPerempuan) + ' / Orang'
					);
					$('#bagian_cucuperempuan').text(
						Rcucuperempuan + '/' + hasilKPK + ' sisa'
					);
				}
			}

			if (nilai_saudaraperempuankandung > 0) {
				if (nilai_saudaraperempuankandung == 1) {
					const bagianSaudaraPerempuanKandung =
						(Rsaudaraperempuankandung / hasilKPK) * sisawarisan;
					$('#hasil_saudaraperempuankandung').text(
						toRp(bagianSaudaraPerempuanKandung) + ' / Orang'
					);
					$('#bagian_saudaraperempuankandung').text(
						Rsaudaraperempuankandung + '/' + hasilKPK + ' sisa'
					);
				} else if (nilai_saudaraperempuankandung > 1) {
					const bagianSaudaraPerempuanKandung =
						((Rsaudaraperempuankandung / hasilKPK) * sisawarisan) /
						nilai_saudaraperempuankandung;
					$('#hasil_saudaraperempuankandung').text(
						toRp(bagianSaudaraPerempuanKandung) + ' / Orang'
					);
					$('#bagian_saudaraperempuankandung').text(
						Rsaudaraperempuankandung + '/' + hasilKPK + ' sisa'
					);
				}
			}

			if (nilai_saudaraperempuanseayah > 0) {
				if (nilai_saudaraperempuanseayah == 1) {
					const bagianSaudaraPerempuanSeAyah =
						(Rsaudaraperempuanseayah / hasilKPK) * sisawarisan;
					$('#hasil_saudaraperempuanseayah').text(
						toRp(bagianSaudaraPerempuanSeAyah) + ' / Orang'
					);
					$('#bagian_saudaraperempuanseayah').text(
						Rsaudaraperempuanseayah + '/' + hasilKPK + ' sisa'
					);
				} else if (nilai_saudaraperempuanseayah > 1) {
					const bagianSaudaraPerempuanSeAyah =
						((Rsaudaraperempuanseayah / hasilKPK) * sisawarisan) /
						nilai_saudaraperempuanseayah;
					$('#hasil_saudaraperempuanseayah').text(
						toRp(bagianSaudaraPerempuanSeAyah) + ' / Orang'
					);
					$('#bagian_saudaraperempuanseayah').text(
						Rsaudaraperempuanseayah + '/' + hasilKPK + ' sisa'
					);
				}
			}

			if (saudaraseibu > 0) {
				if (nilai_saudaralakiseibu > 0 && nilai_saudaraperempuanseIbu > 0) {
					const bagianSaudaraSeIbu =
						((Rsaudaraseibu / hasilKPK) * sisawarisan) / saudaraseibu;
					$('#hasil_saudaralakiseibu').text(
						toRp(bagianSaudaraSeIbu) + ' / Orang'
					);
					$('#bagian_saudaralakiseibu').text(
						Rsaudaraseibu + '/' + hasilKPK + ' B ' + ' sisa'
					);
					$('#hasil_saudaraperempuanseibu').text(
						toRp(bagianSaudaraSeIbu) + ' / Orang'
					);
					$('#bagian_saudaraperempuanseibu').text(
						Rsaudaraseibu + '/' + hasilKPK + ' B ' + ' sisa'
					);
				} else if (nilai_saudaralakiseibu == 1) {
					const bagianSaudaraLakiSeIbu =
						(Rsaudaraseibu / hasilKPK) * sisawarisan;
					$('#hasil_saudaralakiseibu').text(
						toRp(bagianSaudaraLakiSeIbu) + ' / Orang'
					);
					$('#bagian_saudaralakiseibu').text(
						Rsaudaraseibu + '/' + hasilKPK + ' sisa'
					);
					console.log('aulradd');
				} else if (nilai_saudaralakiseibu > 1) {
					const bagianSaudaraLakiSeIbu =
						((Rsaudaraseibu / hasilKPK) * sisawarisan) / nilai_saudaralakiseibu;
					$('#hasil_saudaralakiseibu').text(
						toRp(bagianSaudaraLakiSeIbu) + ' / Orang'
					);
					$('#bagian_saudaralakiseibu').text(
						Rsaudaraseibu + '/' + hasilKPK + ' sisa'
					);
					console.log('aulradd');
				} else if (nilai_saudaraperempuanseIbu == 1) {
					const bagianSaudaraPerempuanSeIbu =
						(Rsaudaraseibu / hasilKPK) * sisawarisan;
					$('#hasil_saudaraperempuanseibu').text(
						toRp(bagianSaudaraPerempuanSeIbu) + ' / Orang'
					);
					$('#bagian_saudaraperempuanseibu').text(
						Rsaudaraseibu + '/' + hasilKPK + ' sisa'
					);
					console.log('itu');
				} else if (nilai_saudaraperempuanseIbu > 1) {
					const bagianSaudaraPerempuanSeIbu =
						((Rsaudaraseibu / hasilKPK) * sisawarisan) /
						nilai_saudaraperempuanseIbu;
					$('#hasil_saudaraperempuanseibu').text(
						toRp(bagianSaudaraPerempuanSeIbu) + ' / Orang'
					);
					$('#bagian_saudaraperempuanseibu').text(
						Rsaudaraseibu + '/' + hasilKPK + ' sisa'
					);
					console.log('ini');
				}
			}
		}

		function CalculateShare() {
			console.log('Cshare');
			console.log(hasilKPK);
			if (nilai_suami > 0) {
				if (keturunan > 0) {
					const bagianSuami = (1 / 4) * totalwarisan;
					const ratioSuami = (1 / 4) * hasilKPK;
					sisawarisan -= bagianSuami;
					$('#hasil_suami').text(toRp(bagianSuami) + ' / Orang');
					$('#bagian_suami').text(ratioSuami + '/' + hasilKPK);
				} else {
					const bagianSuami = (1 / 2) * totalwarisan;
					const ratioSuami = (1 / 2) * hasilKPK;
					sisawarisan -= bagianSuami;
					$('#hasil_suami').text(toRp(bagianSuami) + ' / Orang');
					$('#bagian_suami').text(ratioSuami + '/' + hasilKPK);
				}
			}

			if (nilai_istri > 0) {
				if (keturunan > 0) {
					const bagianIstri = ((1 / 8) * totalwarisan) / nilai_istri;
					const ratioIstri = (1 / 8) * hasilKPK;
					sisawarisan -= bagianIstri * nilai_istri;
					$('#hasil_istri').text(toRp(bagianIstri) + ' / Orang');
					$('#bagian_istri').text(ratioIstri + '/' + hasilKPK);
				} else {
					const bagianIstri = ((1 / 4) * totalwarisan) / nilai_istri;
					const ratioIstri = (1 / 4) * hasilKPK;
					sisawarisan -= bagianIstri * nilai_istri;
					$('#hasil_istri').text(toRp(bagianIstri) + ' / Orang');
					$('#bagian_istri').text(ratioIstri + '/' + hasilKPK);
				}
			}

			if (nilai_ayah > 0) {
				if (nilai_anaklaki > 0 || nilai_cuculaki > 0) {
					const bagianAyah = (1 / 6) * totalwarisan;
					const ratioAyah = (1 / 6) * hasilKPK;
					sisawarisan -= bagianAyah;
					$('#hasil_ayah').text(toRp(bagianAyah) + ' / Orang');
					$('#bagian_ayah').text(ratioAyah + '/' + hasilKPK);
				}
			}
			if (nilai_ibu > 0) {
				if (keturunan > 0 || saudara > 1) {
					const bagianIbu = (1 / 6) * totalwarisan;
					const ratioIbu = (1 / 6) * hasilKPK;
					sisawarisan -= bagianIbu;
					$('#hasil_ibu').text(toRp(bagianIbu) + ' / Orang');
					$('#bagian_ibu').text(ratioIbu + '/' + hasilKPK);
				} else {
					const bagianIbu = (1 / 3) * totalwarisan;
					const ratioIbu = (1 / 3) * hasilKPK;
					sisawarisan -= bagianIbu;
					$('#hasil_ibu').text(toRp(bagianIbu) + ' / Orang');
					$('#bagian_ibu').text(ratioIbu + '/' + hasilKPK);
				}
			}

			if (nilai_kakek > 0) {
				if (keturunanLaki > 0) {
					const bagianKakek = (1 / 6) * totalwarisan;
					const ratioKakek = (1 / 6) * hasilKPK;
					sisawarisan -= bagianKakek;
					$('#hasil_kakek').text(toRp(bagianKakek) + ' / Orang');
					$('#bagian_kakek').text(ratioKakek + '/' + hasilKPK);
				}
			}
			if (nilai_nenekayah > 0 && nilai_nenekibu > 0) {
				const bagianNenek2 = ((1 / 6) * totalwarisan) / nilai_nenek2;
				const ratioNenek2 = (1 / 6) * hasilKPK;
				// const ratioNenekAyah = ratioNenek2 / nilai_nenekayah;
				// const ratioNenekIbu = ratioNenek2 / nilai_nenekibu;
				sisawarisan -= bagianNenek2 * nilai_nenek2;
				$('#hasil_nenekayah').text(toRp(bagianNenek2) + ' / Orang');
				$('#hasil_nenekibu').text(toRp(bagianNenek2) + ' / Orang');
				$('#bagian_nenekayah').text(ratioNenek2 + '/' + hasilKPK + ' Bersama');
				$('#bagian_nenekibu').text(ratioNenek2 + '/' + hasilKPK + ' Bersama');
			} else {
				if (nilai_nenekayah > 0 && nilai_nenekibu == 0) {
					const bagianNenekAyah = ((1 / 6) * totalwarisan) / nilai_nenekayah;
					const ratioNenekAyah = (1 / 6) * hasilKPK;
					sisawarisan -= bagianNenekAyah * nilai_nenekayah;
					$('#hasil_nenekayah').text(toRp(bagianNenekAyah) + ' / Orang');
					$('#bagian_nenekayah').text(ratioNenekAyah + '/' + hasilKPK);
				}
				if (nilai_nenekibu > 0 && nilai_nenekayah == 0) {
					const bagianNenekIbu = ((1 / 6) * totalwarisan) / nilai_nenekibu;
					const ratioNenekIbu = (1 / 6) * hasilKPK;
					sisawarisan -= bagianNenekIbu * nilai_nenekibu;
					$('#hasil_nenekibu').text(toRp(bagianNenekIbu) + ' / Orang');
					$('#bagian_nenekibu').text(ratioNenekIbu + '/' + hasilKPK);
				}
			}

			if (nilai_anakperempuan > 0 && nilai_anaklaki == 0) {
				if (nilai_anakperempuan > 1 && nilai_anaklaki == 0) {
					const bagianAnakPerempuan =
						((2 / 3) * totalwarisan) / nilai_anakperempuan;
					const ratioAnakPerempuan = (2 / 3) * hasilKPK;
					sisawarisan -= bagianAnakPerempuan * nilai_anakperempuan;
					$('#hasil_anakperempuan').text(
						toRp(bagianAnakPerempuan) + ' / Orang'
					);
					$('#bagian_anakperempuan').text(ratioAnakPerempuan + '/' + hasilKPK);
				} else if (nilai_anakperempuan == 1 && nilai_anaklaki == 0) {
					const bagianAnakPerempuan = (1 / 2) * totalwarisan;
					const ratioAnakPerempuan = (1 / 2) * hasilKPK;
					sisawarisan -= bagianAnakPerempuan;
					$('#hasil_anakperempuan').text(
						toRp(bagianAnakPerempuan) + ' / Orang'
					);
					$('#bagian_anakperempuan').text(ratioAnakPerempuan + '/' + hasilKPK);
					console.log(bagianAnakPerempuan);
				}
			}

			if (nilai_cucuperempuan > 0 && nilai_cuculaki == 0) {
				console.log('share');
				if (nilai_anakperempuan > 0) {
					const bagianCucuPerempuan =
						((1 / 6) * totalwarisan) / nilai_cucuperempuan;
					const ratioCucuPerempuan = (1 / 6) * hasilKPK;
					sisawarisan -= bagianCucuPerempuan * nilai_cucuperempuan;
					$('#hasil_cucuperempuan').text(
						toRp(bagianCucuPerempuan) + ' / Orang'
					);
					$('#bagian_cucuperempuan').text(ratioCucuPerempuan + '/' + hasilKPK);
				} else if (nilai_cucuperempuan == 1) {
					const bagianCucuPerempuan = (1 / 2) * totalwarisan;
					const ratioCucuPerempuan = (1 / 2) * hasilKPK;
					sisawarisan -= bagianCucuPerempuan;
					$('#hasil_cucuperempuan').text(
						toRp(bagianCucuPerempuan) + ' / Orang'
					);
					$('#bagian_cucuperempuan').text(ratioCucuPerempuan + '/' + hasilKPK);
				} else if (nilai_cucuperempuan > 1) {
					const bagianCucuPerempuan =
						((2 / 3) * totalwarisan) / nilai_cucuperempuan;
					const ratioCucuPerempuan = (2 / 3) * hasilKPK;
					sisawarisan -= bagianCucuPerempuan * nilai_cucuperempuan;
					$('#hasil_cucuperempuan').text(
						toRp(bagianCucuPerempuan) + ' / Orang'
					);
					$('#bagian_cucuperempuan').text(ratioCucuPerempuan + '/' + hasilKPK);
					console.log('ini');
					console.log(bagianCucuPerempuan);
				}
			}

			if (
				nilai_saudaraperempuankandung > 0 &&
				nilai_anakperempuan == 0 &&
				nilai_cucuperempuan == 0 &&
				nilai_saudaralakikandung == 0
			) {
				if (nilai_saudaraperempuankandung == 1) {
					const bagianSaudaraPerempuanKandung = (1 / 2) * totalwarisan;
					const ratioSaudaraPerempuanKandung = (1 / 2) * hasilKPK;
					sisawarisan -= bagianSaudaraPerempuanKandung;
					$('#hasil_saudaraperempuankandung').text(
						toRp(bagianSaudaraPerempuanKandung) + ' / Orang'
					);
					$('#bagian_saudaraperempuankandung').text(
						ratioSaudaraPerempuanKandung + '/' + hasilKPK
					);
				} else if (nilai_saudaraperempuankandung > 1) {
					const bagianSaudaraPerempuanKandung =
						((2 / 3) * totalwarisan) / nilai_saudaraperempuankandung;
					const ratioSaudaraPerempuanKandung = (2 / 3) * hasilKPK;
					sisawarisan -=
						bagianSaudaraPerempuanKandung * nilai_saudaraperempuankandung;
					$('#hasil_saudaraperempuankandung').text(
						toRp(bagianSaudaraPerempuanKandung) + ' / Orang'
					);
					$('#bagian_saudaraperempuankandung').text(
						ratioSaudaraPerempuanKandung + '/' + hasilKPK
					);
				}
			}

			if (
				nilai_saudaraperempuanseayah > 0 &&
				nilai_anakperempuan == 0 &&
				nilai_cucuperempuan == 0 &&
				nilai_saudaralakiseayah == 0
			) {
				if (nilai_saudaraperempuanseayah == 1) {
					const bagianSaudaraPerempuanSeAyah = (1 / 2) * totalwarisan;
					const ratioSaudaraPerempuanSeAyah = (1 / 2) * hasilKPK;
					sisawarisan -= bagianSaudaraPerempuanSeAyah;
					$('#hasil_saudaraperempuanseayah').text(
						toRp(bagianSaudaraPerempuanSeAyah) + ' / Orang'
					);
					$('#bagian_saudaraperempuanseayah').text(
						ratioSaudaraPerempuanSeAyah + '/' + hasilKPK
					);
				} else if (nilai_saudaraperempuanseayah > 1) {
					const bagianSaudaraPerempuanSeAyah =
						((2 / 3) * totalwarisan) / nilai_saudaraperempuanseayah;
					const ratioSaudaraPerempuanSeAyah = (2 / 3) * hasilKPK;
					sisawarisan -=
						bagianSaudaraPerempuanSeAyah * nilai_saudaraperempuanseayah;
					$('#hasil_saudaraperempuanseayah').text(
						toRp(bagianSaudaraPerempuanSeAyah) + ' / Orang'
					);
					$('#bagian_saudaraperempuanseayah').text(
						ratioSaudaraPerempuanSeAyah + '/' + hasilKPK
					);
				}
			}
			if (saudaraseibu > 0) {
				if (nilai_saudaralakiseibu > 0 && nilai_saudaraperempuanseIbu > 0) {
					const bagianSaudaraSeIbu = ((1 / 3) * totalwarisan) / saudaraseibu;
					const ratioSaudaraSeIbu = (1 / 3) * hasilKPK;
					sisawarisan -= bagianSaudaraSeIbu * saudaraseibu;
					$('#hasil_saudaralakiseibu').text(
						toRp(bagianSaudaraSeIbu) + ' / Orang'
					);
					$('#bagian_saudaralakiseibu').text(
						ratioSaudaraSeIbu + '/' + hasilKPK + ' Bersama'
					);
					$('#hasil_saudaraperempuanseibu').text(
						toRp(bagianSaudaraSeIbu) + ' / Orang'
					);
					$('#bagian_saudaraperempuanseibu').text(
						ratioSaudaraSeIbu + '/' + hasilKPK + ' Bersama'
					);
				} else if (nilai_saudaralakiseibu == 1) {
					const bagianSaudaraLakiSeIbu = (1 / 6) * totalwarisan;
					const ratioSaudaraLakiSeIbu = (1 / 6) * hasilKPK;
					sisawarisan -= bagianSaudaraLakiSeIbu;
					$('#hasil_saudaralakiseibu').text(
						toRp(bagianSaudaraLakiSeIbu) + ' / Orang'
					);
					$('#bagian_saudaralakiseibu').text(
						ratioSaudaraLakiSeIbu + '/' + hasilKPK
					);
				} else if (nilai_saudaralakiseibu > 1) {
					const bagianSaudaraLakiSeIbu =
						((1 / 3) * totalwarisan) / nilai_saudaralakiseibu;
					const ratioSaudaraLakiSeIbu = (1 / 3) * hasilKPK;
					sisawarisan -= bagianSaudaraLakiSeIbu * nilai_saudaralakiseibu;
					$('#hasil_saudaralakiseibu').text(
						toRp(bagianSaudaraLakiSeIbu) + ' / Orang'
					);
					$('#bagian_saudaralakiseibu').text(
						ratioSaudaraLakiSeIbu + '/' + hasilKPK
					);
				} else if (nilai_saudaraperempuanseIbu == 1) {
					const bagianSaudaraPerempuanSeIbu = (1 / 6) * totalwarisan;
					const ratioSaudaraPerempuanSeIbu = (1 / 3) * hasilKPK;
					sisawarisan -= bagianSaudaraPerempuanSeIbu;
					$('#hasil_saudaraperempuanseibu').text(
						toRp(bagianSaudaraPerempuanSeIbu) + ' / Orang'
					);
					$('#bagian_saudaraperempuanseibu').text(
						ratioSaudaraPerempuanSeIbu + '/' + hasilKPK
					);
				} else if (nilai_saudaraperempuanseIbu > 1) {
					const bagianSaudaraPerempuanSeIbu =
						((1 / 3) * totalwarisan) / nilai_saudaraperempuanseIbu;
					const ratioSaudaraSeIbu = (1 / 3) * hasilKPK;
					sisawarisan -=
						bagianSaudaraPerempuanSeIbu * nilai_saudaraperempuanseIbu;
					$('#hasil_saudaraperempuanseibu').text(
						toRp(bagianSaudaraPerempuanSeIbu) + ' / Orang'
					);
					$('#bagian_saudaraperempuanseibu').text(
						ratioSaudaraSeIbu + '/' + hasilKPK
					);
				}
			}
			console.log(sisawarisan);
			if (sisawarisan > 0) {
				console.log(sisawarisan);
				CalculateAshabah();
			}
		}

		function CalculateAshabah() {
			console.log('Cashabah');
			console.log(hasilKPK);
			console.log(totalashobah);
			let nilai_ashabah = sisawarisan / totalashobah;

			if (nilai_ayah > 0 && keturunanLaki == 0) {
				if (nilai_anakperempuan > 0 && keturunanLaki == 0) {
					const bagianAyah = (1 / 6) * totalwarisan + nilai_ashabah * 2;
					const ratioAyah = (1 / 6) * hasilKPK;
					$('#hasil_ayah').text(toRp(bagianAyah) + ' / Orang');
					$('#bagian_ayah').text(ratioAyah + '/' + hasilKPK + ' + Ashabah');
				} else {
					const bagianAyah = nilai_ashabah * 2;
					$('#hasil_ayah').text(toRp(bagianAyah) + ' / Orang');
					$('#bagian_ayah').text('Ashabah');
				}
			}
			if (nilai_kakek > 0 && keturunanLaki == 0) {
				if (keturunanPerempuan > 0) {
					const bagianKakek = (1 / 6) * totalwarisan + nilai_ashabah * 2;
					const ratioKakek = (1 / 6) * hasilKPK;
					sisawarisan -= bagianKakek;
					$('#hasil_kakek').text(toRp(bagianKakek) + ' / Orang');
					$('#bagian_kakek').text(ratioKakek + '/' + hasilKPK + ' + Ashabah');
				} else {
					const bagianKakek = nilai_ashabah * 2;
					$('#hasil_kakek').text(toRp(bagianKakek) + ' / Orang');
					$('#bagian_kakek').text('Ashabah');
				}
			}
			if (nilai_anaklaki > 0) {
				const bagianAnakLaki = nilai_ashabah * 2;
				$('#hasil_anaklaki').text(toRp(bagianAnakLaki) + ' / Orang');
				$('#bagian_anaklaki').text('Ashabah');
			}
			if (nilai_anakperempuan > 0) {
				if (nilai_anaklaki > 0) {
					const bagianAnakPerempuan = nilai_ashabah;
					$('#hasil_anakperempuan').text(
						toRp(bagianAnakPerempuan) + ' / Orang'
					);
					$('#bagian_anakperempuan').text('Ashabah');
				}
			}
			if (nilai_cuculaki > 0) {
				const bagianCucuLaki = nilai_ashabah * 2;
				$('#hasil_cuculaki').text(toRp(bagianCucuLaki) + ' / Orang');
				$('#bagian_cuculaki').text('Ashabah');
			}
			if (nilai_cucuperempuan > 0) {
				if (nilai_cuculaki > 0) {
					const bagianCucuPerempuan = nilai_ashabah;
					$('#hasil_cucuperempuan').text(
						toRp(bagianCucuPerempuan) + ' / Orang'
					);
					$('#bagian_cucuperempuan').text('Ashabah');
				}
			}
			if (nilai_saudaralakikandung > 0) {
				const bagianSaudaraLakiKandung = nilai_ashabah * 2;
				$('#hasil_saudaralakikandung').text(
					toRp(bagianSaudaraLakiKandung) + ' / Orang'
				);
				$('#bagian_saudaralakikandung').text('Ashabah');
			}
			if (nilai_saudaraperempuankandung > 0) {
				if (
					nilai_saudaralakikandung > 0 ||
					nilai_anakperempuan > 0 ||
					nilai_cucuperempuan > 0
				) {
					const bagianSaudaraPerempuanKandung = nilai_ashabah;
					$('#hasil_saudaraperempuankandung').text(
						toRp(bagianSaudaraPerempuanKandung) + ' / Orang'
					);
					$('#bagian_saudaraperempuankandung').text('Ashabah');
				}
			}
			if (nilai_saudaralakiseayah > 0) {
				const bagianSaudaraLakiSeAyah = nilai_ashabah * 2;
				$('#hasil_saudaralakiseayah').text(
					toRp(bagianSaudaraLakiSeAyah) + ' / Orang'
				);
				$('#bagian_saudaralakiseayah').text('Ashabah');
			}
			if (nilai_saudaraperempuanseayah > 0) {
				if (
					nilai_saudaralakiseayah > 0 ||
					nilai_anakperempuan > 0 ||
					nilai_cucuperempuan > 0
				) {
					const bagianSaudaraPerempuanSeAyah = nilai_ashabah;
					$('#hasil_saudaraperempuanseayah').text(
						toRp(bagianSaudaraPerempuanSeAyah) + ' / Orang'
					);
					$('#bagian_saudaraperempuanseayah').text('Ashabah');
				}
			}
			if (nilai_anaklakisaudarakandung > 0) {
				const bagianAnakLakiSaudaraKandung = nilai_ashabah * 2;
				$('#hasil_anaklakisaudarakandung').text(
					toRp(bagianAnakLakiSaudaraKandung) + ' / Orang'
				);
				$('#bagian_anaklakisaudarakandung').text('Ashabah');
			}
			if (nilai_anaklakisaudaraseayah > 0) {
				const bagianAnakLakiSaudaraSeAyah = nilai_ashabah * 2;
				$('#hasil_anaklakisaudaraseayah').text(
					toRp(bagianAnakLakiSaudaraSeAyah) + ' / Orang'
				);
				$('#bagian_anaklakisaudaraseayah').text('Ashabah');
			}
			if (nilai_pamankandungayah > 0) {
				const bagianPamanKandungAyah = nilai_ashabah * 2;
				$('#hasil_pamankandungayah').text(
					toRp(bagianPamanKandungAyah) + ' / Orang'
				);
				$('#bagian_pamankandungayah').text('Ashabah');
				console.log('paman');
			}
			if (nilai_pamansekakekayah > 0) {
				const bagianPamanSeKakekAyah = nilai_ashabah * 2;
				$('#hasil_pamansekakekayah').text(
					toRp(bagianPamanSeKakekAyah) + ' / Orang'
				);
				$('#bagian_pamansekakekayah').text('Ashabah');
			}
			if (nilai_anaklakipamankandung > 0) {
				const bagianAnakLakiPamanKandung = nilai_ashabah * 2;
				$('#hasil_anaklakipamankandung').text(
					toRp(bagianAnakLakiPamanKandung) + ' / Orang'
				);
				$('#bagian_anaklakipamankandung').text('Ashabah');
			}
			if (nilai_anaklakipamansekakek > 0) {
				const bagianAnakLakiPamanSeKakek = nilai_ashabah * 2;
				$('#hasil_anaklakipamansekakek').text(
					toRp(bagianAnakLakiPamanSeKakek) + ' / Orang'
				);
				$('#bagian_anaklakipamansekakek').text('Ashabah');
			}
		}

		CalculateSpecial();

		function updateTable(idPrefix, nilai_) {
			const rowId = `#kolom_${idPrefix}`;
			if (nilai_ > 0) {
				$(rowId).show(); // Menampilkan baris jika memiliki hasil
				$(`#jumlah_${idPrefix}`).text(nilai_); // Menampilkan jumlah pewaris
				console.log('1');
			}
		}

		// Update elemen total warisan
		$('#total_tirkah').text(nTirkah); // Jumlah total warisan
		$('#total_hutang').text(nHutang); // Total hutang
		$('#total_wasiat').text(nWasiat); // Total wasiat
		$('#total_tajhiz').text(nTajhiz); // Total biaya tajhiz
		$('#total_irts').text(nIrst); // Total sisa warisan

		// Proses nilai-nilai untuk tiap pewaris
		updateTable('ayah', nilai_ayah);
		updateTable('ibu', nilai_ibu);
		updateTable('kakek', nilai_kakek);
		updateTable('nenekayah', nilai_nenekayah);
		updateTable('nenekibu', nilai_nenekibu);
		updateTable('suami', nilai_suami);
		updateTable('istri', nilai_istri);
		updateTable('anaklaki', nilai_anaklaki);
		updateTable('anakperempuan', nilai_anakperempuan);
		updateTable('cuculaki', nilai_cuculaki);
		updateTable('cucuperempuan', nilai_cucuperempuan);
		updateTable('saudaralakikandung', nilai_saudaralakikandung);
		updateTable('saudaraperempuankandung', nilai_saudaraperempuankandung);
		updateTable('saudaralakiseayah', nilai_saudaralakiseayah);
		updateTable('saudaraperempuanseayah', nilai_saudaraperempuanseayah);
		updateTable('saudaralakiseibu', nilai_saudaralakiseibu);
		updateTable('saudaraperempuanseibu', nilai_saudaraperempuanseIbu);
		updateTable('anaklakisaudarakandung', nilai_anaklakisaudarakandung);
		updateTable('anaklakisaudaraseayah', nilai_anaklakisaudaraseayah);
		updateTable('pamankandungayah', nilai_pamankandungayah);
		updateTable('pamansekakekayah', nilai_pamansekakekayah);
		updateTable('anaklakipamankandung', nilai_anaklakipamankandung);
		updateTable('anaklakipamansekakek', nilai_anaklakipamansekakek);
		console.log('p');
	});
});
