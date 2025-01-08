$(document).ready(function() {
	let nTirkah = 0;
	let nHutang = 0;
	let nWasiat = 0;
	let nTajhiz = 0;
	let nIrst = 0;
	let muwarrits = '';
	let sisasaham = 0;
	let totalashobah = 0;
	let hartaashobah = 0;
	let jenis = '';
	let naul = 0;
	let nradd = 0;
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
	let nilai_nenek2 = 0;
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
	let nilai_anak = 0;
	let nilai_cucu = 0;
	let nilai_saudara = 0;
	let nilai_saudaraibu = 0;
	let rIstri = '1/4';
	let rSuami = '1/2';
	let rAnakLaki = '2=1A';
	let rAnakPerempuan = '1/2';
	let rAyah = '1/6';
	let rIbu = '1/3';
	let rCucuLaki = '2=1A';
	let rCucuPerempuan = '1/2';
	let rKakek = '1/6';
	let rNenekAyah = '1/6';
	let rNenekIbu = '1/6';
	let rSaudaraLakiKandung = '2:1A';
	let rSaudaraPerempuanKandung = '1/2';
	let rSaudaraLakiSeAyah = '2:1A';
	let rSaudaraPerempuanSeAyah = '1/2';
	let rSaudaraLakiSeIbu = '1/6';
	let rSaudaraPerempuanSeIbu = '1/6';
	let rAnakLakiSaudaraKandung = '2:1';
	let rAnakLakiSaudaraSeAyah = '2:1A';
	let rPamanKandungAyah = '2:1A';
	let rPamanSeKakekAyah = '2:1A';
	let rAnakLakiPamanKandung = '2:1A';
	let rAnakLakiPamanSeKakek = '2:1A';
	let adjustedShares = 0;
	let shareRatio = 0;
	let results = [];
	let resultIndex = 0;

	let a = [],
		a1 = [],
		a2 = [];
	// kunci ashabah
	let _a = [],
		_a1 = [];
	let ash = [],
		ash1 = [];

	// Fungsi untuk menghitung Al-Irts
	// Fungsi untuk menghitung Irtis
	function calculateIrts() {
		let tirkah = parseFloat($('#nTirkah').val()) || 0;
		let hutang = parseFloat($('#nHutang').val()) || 0;
		let wasiat = parseFloat($('#nWasiat').val()) || 0;
		let tajhiz = parseFloat($('#nTajhiz').val()) || 0;

		let maxWasiat = tirkah / 3;
		if (wasiat > maxWasiat) {
			wasiat = maxWasiat;
			$('#nWasiat').val(maxWasiat.toFixed(2));
			Notiflix.Notify.failure(
				'Wasiat tidak boleh lebih dari 1/3 harta (' + toRp(maxWasiat) + ')'
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

	// Fungsi untuk menyimpan data checkbox
	function updateCheckboxData() {
		nilai_ayah = $('#cb_ayah').is(':checked');
		nilai_ibu = $('#cb_ibu').is(':checked');
		$('#saham_ayah').text(nilai_ayah ? 1 : 0);
		$('#saham_ibu').text(nilai_ibu ? 1 : 0);
	}

	function updateHusbandData() {
		nilai_suami = $('#cb_suami').is(':checked');
		$('#saham_suami').text(nilai_suami ? 1 : 0);
		isSaham();
	}

	function updateWifeData() {
		nilai_istri = parseInt($('#nilai_istri').val(), 10) || 0;
		$('#saham_istri').text(nilai_istri);
		isSaham();
	}

	function updateSonData() {
		nilai_anaklaki = parseInt($('#nilai_anaklaki').val(), 10) || 0;
		$('#saham_anaklaki').text(nilai_anaklaki);
		isSaham();
	}

	function updateDaughterData() {
		nilai_anakperempuan = parseInt($('#nilai_anakperempuan').val(), 10) || 0;
		$('#saham_anakperempuan').text(nilai_anakperempuan);
		isSaham();
	}

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
	calculateIrts();
	updateCheckboxData();
	updateHusbandData();
	updateWifeData();
	updateSonData();
	updateDaughterData();

	// Event listeners
	$('#nTirkah, #nHutang, #nWasiat, #nTajhiz').on('input', calculateIrts);

	$(document).on('change', "input[name='muwarrits']", function() {
		saveFormData();
		toggleSpouseFields1(muwarrits);
	});

	$('#cb_ayah, #cb_ibu').on('change', updateCheckboxData);
	$('#cb_suami').on('change', updateHusbandData);
	$('#nilai_istri').on('input', updateWifeData);
	$('#nilai_anaklaki').on('input', function() {
		updateSonData();
		isSaham();
		checkBlockingConditions(); // Tambahkan fungsi pengecekan di sini
	});
	$('#nilai_anakperempuan').on('input', function() {
		updateDaughterData();
		isSaham();
		checkBlockingConditions(); // Tambahkan fungsi pengecekan di sini
	});

	$('#img-next-button0').click(function(e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy1').hide();
			$('#legacy2').show();
		}
	});

	$('#img-next-button1').click(function(e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy2').hide();
			$('#legacy3').show();
		}
	});

	$('#img-return-button1').click(function(e) {
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
	$('#nilai_cuculaki').on('input', function() {
		updatenilai_cuculakiData();
		checkBlockingConditions();
		isSaham();
	});

	// Event handler untuk perubahan nilai pada range cucu perempuan
	$('#nilai_cucuperempuan').on('input', function() {
		updatenilai_cucuperempuanData();
		checkBlockingConditions();
		isSaham();
	});

	$('#img-next-button2').click(function(e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy3').hide();
			$('#legacy4').show();
		}
	});

	$('#img-return-button2').click(function(e) {
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

	// Event listener untuk checkbox Ayah
	$(document).on('change', '#cb_ayah', function() {
		toggleSpouseFieldskakeknenek();
		checkBlockingConditions();
		isSaham();
	});

	// Event listener untuk checkbox Ibu
	$(document).on('change', '#cb_ibu', function() {
		toggleSpouseFieldskakeknenek();
		checkBlockingConditions();
		isSaham();
	});

	// Fungsi untuk memperbarui nilai Kakek
	function updateKakekData() {
		nilai_kakek = $('#cb_kakek').is(':checked');
		$('#saham_kakek').text(nilai_kakek ? 1 : 0);
	}

	// Fungsi untuk memperbarui nilai Nenek dari Ayah
	function updateNenekAyahData() {
		nilai_nenekayah = parseInt($('#nilai_nenekayah').val(), 10) || 0;
		$('#saham_nenekayah').text(nilai_nenekayah);
	}

	// Fungsi untuk memperbarui nilai Nenek dari Ibu
	function updateNenekIbuData() {
		nilai_nenekibu = parseInt($('#nilai_nenekibu').val(), 10) || 0;
		$('#saham_nenekibu').text(nilai_nenekibu);
	}

	// Event Listener untuk input Kakek
	$('#cb_kakek').on('change', function() {
		isSaham();
		updateKakekData();
		checkBlockingConditions();
	});

	// Event Listener untuk input Nenek dari Ayah
	$('#nilai_nenekayah').on('input', function() {
		isSaham();
		updateNenekAyahData();
		checkBlockingConditions();
	});

	// Event Listener untuk input Nenek dari Ibu
	$('#nilai_nenekibu').on('input', function() {
		isSaham();
		updateNenekIbuData();
		checkBlockingConditions();
	});

	$('#img-next-button3').click(function(e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy4').hide();
			$('#legacy5').show();
		}
	});

	$('#img-return-button3').click(function(e) {
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
	$('#nilai_saudaralakikandung').on('input', function() {
		isSaham();
		updateSaudaraLakiKandungData();
		checkBlockingConditions();
	});

	// Event Listener untuk input Saudara Perempuan Kandung
	$('#nilai_saudaraperempuankandung').on('input', function() {
		isSaham();
		updateSaudaraPerempuanKandungData();
		checkBlockingConditions();
	});

	$('#img-next-button4').click(function(e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy5').hide();
			$('#legacy6').show();
		}
	});

	$('#img-return-button4').click(function(e) {
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
	$('#nilai_saudaralakiseayah').on('input', function() {
		isSaham();
		updateSaudaraLakiSeayahData();
		checkBlockingConditions();
	});

	// Event Listener untuk input Saudara Perempuan Kandung
	$('#nilai_saudaraperempuanseayah').on('input', function() {
		isSaham();
		updateSaudaraPerempuanSeayahData();
		checkBlockingConditions();
	});

	// Event Listener untuk input Saudara Laki Kandung
	$('#nilai_saudaralakiseibu').on('input', function() {
		isSaham();
		updateSaudaraLakiSeibuData();
		checkBlockingConditions();
	});

	// Event Listener untuk input Saudara Perempuan Kandung
	$('#nilai_saudaraperempuanseIbu').on('input', function() {
		isSaham();
		updateSaudaraPerempuanSeibuData();
		checkBlockingConditions();
	});

	$('#img-next-button5').click(function(e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy6').hide();
			$('#legacy7').show();
		}
	});

	$('#img-return-button5').click(function(e) {
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

	$('#nilai_anaklakisaudarakandung').on('input', function() {
		isSaham();
		updateAnakLakiSaudaraKandungData();
		checkBlockingConditions();
	});

	$('#nilai_anaklakisaudaraseayah').on('input', function() {
		isSaham();
		updateAnakLakiSaudaraSeayahData();
		checkBlockingConditions();
	});

	$('#img-next-button6').click(function(e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy7').hide();
			$('#legacy8').show();
		}
	});

	$('#img-return-button6').click(function(e) {
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

	$('#nilai_pamankandungayah').on('input', function() {
		isSaham();
		updatePamanKandungData();
		checkBlockingConditions();
	});

	$('#nilai_pamansekakekayah').on('input', function() {
		isSaham();
		updatePamanSekakekAyahData();
		checkBlockingConditions();
	});

	$('#img-next-button7').click(function(e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy8').hide();
			$('#legacy9').show();
		}
	});

	$('#img-return-button7').click(function(e) {
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

	function updatePamanSekakekData() {
		nilai_anaklakipamansekakek =
			parseInt($('#nilai_anaklakipamansekakek').val(), 10) || 0;
		$('#saham_anaklakipamansekakek').text(nilai_anaklakipamansekakek);
	}

	$('#nilai_anaklakipamankandung').on('input', function() {
		isSaham();
		updateAnakPamanKandungData();
		checkBlockingConditions();
	});

	$('#nilai_anaklakipamansekakek').on('input', function() {
		isSaham();
		updatePamanSekakekData();
		checkBlockingConditions();
	});

	$('#img-next-button8').click(function(e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy9').hide();
			$('#legacy_total').show();
		}
	});

	$('#img-return-button8').click(function(e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy9').hide();
			$('#legacy8').show();
		}
	});

	$('#img-next-button9').click(function(e) {
		e.preventDefault();
		location.reload();
	});

	$('#img-return-button9').click(function(e) {
		e.preventDefault();
		if (validateInputs()) {
			saveFormData();
			$('#legacy_total').hide();
			$('#legacy9').show();
		}
	});

	updateAnakPamanKandungData();
	updatePamanSekakekData();

	function checkBlockingConditions() {
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

		if (nilai_anaklaki > 0) {
			$('#info_penghalang_1').show();
			$('#field_cucu').hide();
			if (nilai_anakperempuan > 1) {
				$('#info_penghalang_1a').hide();
			}
		} else {
			$('#info_penghalang_1').hide();
		}

		if (nilai_anaklaki === 0 && nilai_anakperempuan > 1) {
			$('#info_penghalang_1a').show();
			$('#field_cucu').hide();
		} else if (nilai_anaklaki === 0 && nilai_anakperempuan <= 1) {
			$('#info_penghalang_1a').hide();
			$('#field_cucu').show();
		}

		if (nilai_ayah && nilai_ibu) {
			// Jika Ayah dan Ibu dicentang
			$('#field_kakek').hide();
			$('#field_nenekayah').hide();
			$('#field_nenekibu').hide();
			$('#info_penghalang_2').show();
		} else {
			$('#field_kakek').toggle(!nilai_ayah);
			$('#field_nenekayah').toggle(!nilai_ibu);
			$('#field_nenekibu').toggle(!nilai_ibu);
			$('#info_penghalang_2').hide();
		}

		if (nilai_anaklaki > 0) {
			$('#info_penghalang_1').show();
			$('#field_cucu').hide();
			if (nilai_anakperempuan > 1) {
				$('#info_penghalang_1a').hide();
			}
		} else {
			$('#info_penghalang_1').hide();
		}

		if (nilai_anaklaki > 0 && nilai_ayah > 0) {
			$('#info_penghalang_3').show();
			$('#si_penghalang').text('Ayah & Anak Laki-Laki');
			$('#field_saudaraperempuankandung').hide();
			$('#field_saudaralakikandung').hide();
		} else if (nilai_ayah > 0) {
			$('#info_penghalang_3').show();
			$('#si_penghalang').text('Ayah');
			$('#field_saudaraperempuankandung').hide();
			$('#field_saudaralakikandung').hide();
		} else if (nilai_anaklaki > 0) {
			$('#info_penghalang_3').show();
			$('#si_penghalang').text('Anak Laki-laki');
			$('#field_saudaraperempuankandung').hide();
			$('#field_saudaralakikandung').hide();
		} else {
			$('#field_saudaraperempuankandung').show();
			$('#field_saudaralakikandung').show();
		}

		if (nilai_ayah > 0) {
			$('#info_penghalang_4a').show();
			$('#si_penghalang_4a').text('Ayah');
			$('#field_saudaralakiseayah').hide();
			$('#field_saudaraperempuanseayah').hide();
			$('#info_penghalang_4b').show();
			$('#si_penghalang_4b').text('Ayah');
			$('#field_saudaralakiseibu').hide();
			$('#field_saudaraperempuanseibu').hide();
			$('#info_penghalang_5a').show();
			$('#si_penghalang_5a').text('Ayah');
			$('#info_penghalang_5b').show();
			$('#si_penghalang_5b').text('Ayah');
			$('#field_anaklakisaudarakandung').hide();
			$('#field_anaklakisaudaraseayah').hide();
			$('#info_penghalang_6a').show();
			$('#si_penghalang_6a').text('Ayah');
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Ayah');
			$('#field_pamankandung').hide();
			$('#field_pamansekakekayah').hide();
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Ayah');
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Ayah');
			$('#field_anaklakipamansekandung').hide();
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_anaklaki > 0) {
			$('#info_penghalang_4a').show();
			$('#si_penghalang_4a').text('Anak Laki-Laki');
			$('#field_saudaralakiseayah').hide();
			$('#field_saudaraperempuanseayah').hide();
			$('#info_penghalang_4b').show();
			$('#si_penghalang_4b').text('Anak Laki-Laki');
			$('#field_saudaralakiseibu').hide();
			$('#field_saudaraperempuanseibu').hide();
			$('#info_penghalang_5a').show();
			$('#si_penghalang_5a').text('Anak Laki-Laki');
			$('#info_penghalang_5b').show();
			$('#si_penghalang_5b').text('Anak Laki-Laki');
			$('#field_anaklakisaudarakandung').hide();
			$('#field_anaklakisaudaraseayah').hide();
			$('#info_penghalang_6a').show();
			$('#si_penghalang_6a').text('Anak Laki-Laki');
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Anak Laki-Laki');
			$('#field_pamankandung').hide();
			$('#field_pamansekakekayah').hide();
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Anak Laki-Laki');
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Anak Laki-Laki');
			$('#field_anaklakipamansekandung').hide();
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_kakek > 0) {
			$('#info_penghalang_4b').show();
			$('#si_penghalang_4a').text('Kakek');
			$('#field_saudaraperempuanseibu').hide();
			$('#field_saudaralakiseibu').hide();
			$('#info_penghalang_5a').show();
			$('#si_penghalang_5a').text('Kakek');
			$('#info_penghalang_5b').show();
			$('#si_penghalang_5b').text('Kakek');
			$('#field_anaklakisaudarakandung').hide();
			$('#field_anaklakisaudaraseayah').hide();
			$('#info_penghalang_6a').show();
			$('#si_penghalang_6a').text('Kakek');
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Kakek');
			$('#field_pamankandung').hide();
			$('#field_pamansekakekayah').hide();
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Kakek');
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Kakek');
			$('#field_anaklakipamansekandung').hide();
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_cuculaki > 0) {
			$('#info_penghalang_3').show();
			$('#si_penghalang').text('Cucu Laki-laki');
			$('#field_saudaraperempuankandung').hide();
			$('#field_saudaralakikandung').hide();
			$('#info_penghalang_4a').show();
			$('#si_penghalang_4a').text('Cucu Laki-Laki');
			$('#info_penghalang_4b').show();
			$('#si_penghalang_4b').text('Cucu Laki-Laki');
			$('#field_saudaralakiseayah').hide();
			$('#field_saudaraperempuanseayah').hide();
			$('#field_saudaraperempuanseibu').hide();
			$('#field_saudaralakiseibu').hide();
			$('#info_penghalang_5a').show();
			$('#si_penghalang_5a').text('Cucu Laki-Laki');
			$('#info_penghalang_5b').show();
			$('#si_penghalang_5b').text('Cucu Laki-Laki');
			$('#field_anaklakisaudarakandung').hide();
			$('#field_anaklakisaudaraseayah').hide();
			$('#info_penghalang_6a').show();
			$('#si_penghalang_6a').text('Cucu Laki-Laki');
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Cucu Laki-Laki');
			$('#field_pamankandung').hide();
			$('#field_pamansekakekayah').hide();
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Cucu Laki-Laki');
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Cucu Laki-Laki');
			$('#field_anaklakipamansekandung').hide();
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_saudaralakikandung > 0) {
			$('#info_penghalang_4a').show();
			$('#si_penghalang_4a').text('Saudara Laki-Laki Kandung');
			$('#field_saudaraperempuanseayah').hide();
			$('#field_saudaralakiseayah').hide();
			$('#info_penghalang_5a').show();
			$('#si_penghalang_5a').text('Saudara Laki-Laki Kandung');
			$('#info_penghalang_5b').show();
			$('#si_penghalang_5b').text('Saudara Laki-Laki Kandung');
			$('#field_anaklakisaudarakandung').hide();
			$('#field_anaklakisaudaraseayah').hide();
			$('#info_penghalang_6a').show();
			$('#si_penghalang_6a').text('Saudara Laki-Laki Kandung');
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Saudara Laki-Laki Kandung');
			$('#field_pamankandung').hide();
			$('#field_pamansekakekayah').hide();
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Saudara Laki-Laki Kandung');
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Saudara Laki-Laki Kandung');
			$('#field_anaklakipamansekandung').hide();
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_saudaralakiseayah > 0) {
			$('#info_penghalang_5a').show();
			$('#si_penghalang_5a').text('Saudara Laki-Laki Seayah');
			$('#info_penghalang_5b').show();
			$('#si_penghalang_5b').text('Saudara Laki-Laki Seayah');
			$('#field_anaklakisaudarakandung').hide();
			$('#field_anaklakisaudaraseayah').hide();
			$('#info_penghalang_6a').show();
			$('#si_penghalang_6a').text('Saudara Laki-Laki Seayah');
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Saudara Laki-Laki Seayah');
			$('#field_pamankandung').hide();
			$('#field_pamansekakekayah').hide();
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Saudara Laki-Laki Seayah');
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Saudara Laki-Laki Seayah');
			$('#field_anaklakipamansekandung').hide();
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_anaklakisaudarakandung > 0) {
			$('#info_penghalang_6a').show();
			$('#si_penghalang_6a').text('Anak Laki-Laki Saudara Kandung');
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Anak Laki-Laki Saudara Kandung');
			$('#field_pamankandung').hide();
			$('#field_pamansekakekayah').hide();
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Anak Laki-Laki Saudara Kandung');
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Anak Laki-Laki Saudara Kandung');
			$('#field_anaklakipamansekandung').hide();
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_anaklakisaudaraseayah > 0) {
			$('#info_penghalang_5b').show();
			$('#si_penghalang_5b').text('Anak Laki-Laki Saudara Kandung');
			$('#field_anaklakisaudaraseayah').hide();
			$('#info_penghalang_6a').show();
			$('#si_penghalang_6a').text('Anak Laki-Laki Saudara Seayah');
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Anak Laki-Laki Saudara Seayah');
			$('#field_pamankandung').hide();
			$('#field_pamansekakekayah').hide();
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Anak Laki-Laki Saudara Seayah');
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Anak Laki-Laki Saudara Seayah');
			$('#field_anaklakipamansekandung').hide();
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_pamankandungayah > 0) {
			$('#info_penghalang_6b').show();
			$('#si_penghalang_6b').text('Paman Kandung (dari Ayah)');
			$('#field_pamansekakekayah').hide();
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Paman Kandung (dari Ayah)');
			$('#field_anaklakipamansekandung').hide();
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_pamansekakekayah > 0) {
			$('#info_penghalang_7a').show();
			$('#si_penghalang_7a').text('Paman Sekakek (dari Ayah)');
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Paman Sekakek (dari Ayah)');
			$('#field_anaklakipamansekandung').hide();
			$('#field_anaklakipamansekakek').hide();
		} else if (nilai_anaklakipamankandung > 0) {
			$('#info_penghalang_7b').show();
			$('#si_penghalang_7b').text('Paman Sekakek (dari Ayah)');
			$('#field_anaklakipamansekakek').hide();
		} else {
			$('#info_penghalang_4a').hide();
			$('#field_saudaralakiseayah').show();
			$('#field_saudaraperempuanseayah').show();
			$('#info_penghalang_4b').hide();
			$('#field_saudaralakiseibu').show();
			$('#field_saudaraperempuanseibu').show();
			$('#info_penghalang_5a').hide();
			$('#info_penghalang_5b').hide();
			$('#field_anaklakisaudarakandung').show();
			$('#field_anaklakisaudaraseayah').show();
			$('#info_penghalang_6a').hide();
			$('#info_penghalang_6b').hide();
			$('#field_pamankandung').show();
			$('#field_pamansekakekayah').show();
			$('#info_penghalang_7a').hide();
			$('#info_penghalang_7b').hide();
			$('#field_anaklakipamansekandung').show();
			$('#field_anaklakipamansekakek').show();
		}
	}

	function toRp(amount) {
		// Konversi angka ke format Rupiah
		let formattedString = parseInt(Math.round(amount), 10)
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
		return 'Rp.' + formattedString;
	}

	// function calculateShare(adjustmentFactor, ratioString, indexmusytarakah) {
	// 	var ratioParts = ratioString.split('/');
	// 	if (ratioParts.length < 2) {
	// 		ratioParts = ratioString.split(':');
	// 		denominator = ratioParts[1].substring(0, 1);
	// 	} else {
	// 		var denominator = ratioParts[1];
	// 	}
	// 	var numerator = ratioParts[0];
	// 	var totalsharedx = ratioString.substring(3, 1);
	// 	var secondCharacter = ratioString.substring(1, 1);
	// 	var a = 0;
	// 	var shareType = 0;
	// 	var totalCalculatedShare = 0;
	// 	if (
	// 		totalsharedx == 'A' ||
	// 		totalsharedx == 'M' ||
	// 		totalsharedx == 'R' ||
	// 		totalsharedx == '+'
	// 	) {
	// 		if (secondCharacter == ':') {
	// 			totalCalculatedShare = conditionalSum();
	// 			a = _TotalHartaAshobah;
	// 			shareType =
	// 				a /
	// 				totalCalculatedShare *
	// 				(numerator / denominator) *
	// 				adjustmentFactor;
	// 			if (shareType > hartaashobah) {
	// 				shareType = hartaashobah;
	// 			}
	// 			hartaashobah = hartaashobah - shareType;
	// 			if (shareType < 0) {
	// 				shareType = 0;
	// 			}
	// 			return shareType;
	// 		} else {
	// 			return numerator / denominator * indexmusytarakah;
	// 		}
	// 	} else {
	// 		return numerator / denominator * indexmusytarakah;
	// 	}
	// 	return ratioParts;
	// }

	function calculateShare(adjustmentFactor, ratioString, indexmusytarakah) {
		// Pisahkan numerator dan denominator dari ratioString
		let ratioParts = ratioString.split('/');
		if (ratioParts.length !== 2) {
			ratioParts = ratioString.split(':');
			if (ratioParts.length !== 2) {
				console.error('Invalid ratioString format:', ratioString);
				return 0; // Return default jika format tidak valid
			}
		}

		let numerator = parseInt(ratioParts[0], 10);
		let denominator = parseInt(ratioParts[1], 10);

		// Validasi parsing angka
		if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
			console.error(
				'Invalid numerator or denominator in ratioString:',
				ratioString
			);
			return 0; // Return default jika parsing gagal
		}

		let secondCharacter = ratioString.substring(1, 2);
		let totalsharedx = ratioString.substring(3, 4); // Perbaiki panjang substring
		let shareType = 0;
		let totalCalculatedShare = 0;

		if (['A', 'M', 'R', '+'].includes(totalsharedx)) {
			// Validasi karakter khusus
			if (secondCharacter === ':') {
				totalCalculatedShare = conditionalSum(); // Asumsi conditionalSum() adalah fungsi valid
				let a =
					typeof _TotalHartaAshobah !== 'undefined' ? _TotalHartaAshobah : 0;

				shareType =
					a /
					totalCalculatedShare *
					(numerator / denominator) *
					adjustmentFactor;

				if (typeof hartaashobah !== 'undefined') {
					shareType = Math.min(shareType, hartaashobah);
					hartaashobah -= shareType;
				}

				return Math.max(shareType, 0); // Hindari nilai negatif
			} else {
				return numerator / denominator * indexmusytarakah;
			}
		} else {
			return numerator / denominator * indexmusytarakah;
		}
	}

	function conditionalSum() {
		var secondCharacter = 0;
		for (var ratioParts in ash) {
			if (
				(ash[ratioParts] == 'A' ||
					ash[ratioParts] == 'M' ||
					ash[ratioParts] == 'R' ||
					ash[ratioParts] == '+') &&
				a[ratioParts] == '1'
			) {
				secondCharacter =
					secondCharacter + parseInt(_a[ratioParts] * a2[ratioParts]);
			}
		}
		return secondCharacter;
	}

	function determineShareType(shareString) {
		var shareType = shareString;
		var a = shareType.indexOf('A');
		var indexmusytarakah = shareType.indexOf('M');
		var indexbersama = shareType.indexOf('B');
		var indexplusashobah = shareType.indexOf('+A');
		if (a > 0) {
			shareType = 'Ashobah';
		}
		if (indexmusytarakah > 0) {
			shareType = 'Musytarakah';
		}
		if (indexbersama > 0) {
			shareType = 'Bersama';
		}
		if (indexplusashobah > 0) {
			shareType = shareString + 'sobah';
		}
		return shareType;
	}

	function calculateAshobahShare(
		targetShare,
		multiplier,
		maxIterations,
		defaultShare
	) {
		var ratioParts = 0,
			secondCharacter = 0,
			calculatedValue = 0,
			a = '',
			indexbersama = '';
		for (ratioParts = 0; ratioParts <= 1e3; ratioParts++) {
			for (secondCharacter = 0; secondCharacter <= 1e3; secondCharacter++) {
				calculatedValue = ratioParts / secondCharacter * multiplier;
				indexbersama =
					indexbersama +
					' ' +
					ratioParts +
					'/' +
					secondCharacter +
					' = ' +
					a +
					' ';
				if (
					targetShare > calculatedValue - 0.1 &&
					targetShare < calculatedValue + 0.1
				) {
					break;
				}
			}
			if (
				targetShare > calculatedValue - 0.1 &&
				targetShare < calculatedValue + 0.1
			) {
				break;
			}
		}
		if (ratioParts == 0 || secondCharacter == 0) {
			return 'Habis';
		}
		if (ratioParts < 1e3 || secondCharacter < 1e3) {
			return ratioParts + '/' + secondCharacter;
		} else {
			return defaultShare;
		}
	}

	function isSaham() {
		nilai_anak = parseInt(nilai_anaklaki) + parseInt(nilai_anakperempuan);
		nilai_cucu = parseInt(nilai_cuculaki) + parseInt(nilai_cucuperempuan);
		nilai_nenek2 = parseInt(nilai_nenekayah) + parseInt(nilai_nenekibu);
		nilai_saudaraibu =
			parseInt(nilai_saudaralakiseibu) + parseInt(nilai_saudaraperempuanseIbu);
		nilai_saudaraayah =
			parseInt(nilai_saudaralakiseayah) +
			parseInt(nilai_saudaraperempuanseayah);
		nilai_saudarakandung =
			parseInt(nilai_saudaralakikandung) +
			parseInt(nilai_saudaraperempuankandung);
		nilai_saudara =
			parseInt(nilai_saudarakandung) +
			parseInt(nilai_saudaraayah) +
			parseInt(nilai_saudaraibu);
		if (nilai_ayah == 0) {
			rAyah = 0;
		}
		if (nilai_ibu == 0) {
			rIbu = 0;
		}
		if (nilai_suami == 0) {
			rSuami = 0;
		}
		if (nilai_istri == 0) {
			rIstri = 0;
		}
		if (nilai_anaklaki == 0) {
			rAnakLaki = 0;
		}
		if (nilai_anakperempuan == 0) {
			rAnakPerempuan = 0;
		}
		if (nilai_cuculaki == 0) {
			rCucuLaki = 0;
		}
		if (nilai_cucuperempuan == 0) {
			rCucuPerempuan = 0;
		}
		if (nilai_kakek == 0) {
			rKakek = 0;
		}
		if (nilai_nenekayah == 0) {
			rNenekAyah = 0;
		}
		if (nilai_nenekibu == 0) {
			rNenekIbu = 0;
		}
		if (nilai_saudaralakikandung == 0) {
			rSaudaraLakiKandung = 0;
		}
		if (nilai_saudaraperempuankandung == 0) {
			rSaudaraPerempuanKandung = 0;
		}
		if (nilai_saudaralakiseayah == 0) {
			rSaudaraLakiSeAyah = 0;
		}
		if (nilai_saudaraperempuanseayah == 0) {
			rSaudaraPerempuanSeAyah = 0;
		}
		if (nilai_saudaralakiseibu == 0) {
			rSaudaraLakiSeIbu = 0;
		}
		if (nilai_saudaraperempuanseIbu == 0) {
			rSaudaraPerempuanSeIbu = 0;
		}
		if (nilai_anaklakisaudarakandung == 0) {
			rAnakLakiSaudaraKandung = 0;
		}
		if (nilai_anaklakisaudaraseayah == 0) {
			rAnakLakiSaudaraSeAyah = 0;
		}
		if (nilai_pamankandungayah == 0) {
			rPamanKandungAyah = 0;
		}
		if (nilai_pamansekakekayah == 0) {
			rPamanSeKakekAyah = 0;
		}
		if (nilai_anaklakipamankandung == 0) {
			rAnakLakiPamanKandung = 0;
		}
		if (nilai_anaklakipamansekakek == 0) {
			rAnakLakiPamanSeKakek = 0;
		}
		if (nilai_anakperempuan > 1 && nilai_anaklaki == 0) {
			rAnakPerempuan = '2/3';
		}
		if (nilai_cucuperempuan > 1 && nilai_cuculaki == 0) {
			rCucuPerempuan = '2/3';
		}
		if (nilai_saudaraperempuankandung > 1 && nilai_saudaralakikandung == 0) {
			rSaudaraPerempuanKandung = '2/3';
		}
		if (nilai_saudaraperempuankandung > 1) {
			rSaudaraPerempuanKandung = '2/3';
		}
		if (nilai_saudaraperempuanseayah > 1 && nilai_saudaralakiseayah == 0) {
			rSaudaraPerempuanSeAyah = '2/3';
		}
		if (nilai_anak == 0 || nilai_cucu == 0 || nilai_saudara > 1) {
			if (nilai_ibu > 0) {
				rIbu = '1/3';
			} else {
				rIbu = '0';
				rumusIbu = '';
			}
			if (nilai_ayah > 0) {
				rAyah = '1:1A';
				rumusAyah = 'Ashobah';
			} else {
				rAyah = '0';
				rumusAyah = '';
			}
		}
		if ((nilai_suami > 0 || nilai_istri > 0) && nilai_ayah > 0) {
			if (nilai_ibu > 0) {
				rIbu = '1:3A';
				rumusIbu = '1/3 Sisa (Gharawain)';
			} else {
				rIbu = '0';
				rumusIbu = '';
			}
		}
		if (
			(nilai_anak > 0 || nilai_cucu > 0 || nilai_saudara > 1) &&
			nilai_ibu > 0 &&
			nilai_ayah > 0
		) {
			if (nilai_ibu > 0) {
				rIbu = '1/6';
			} else {
				rIbu = '0';
				rumusIbu = '';
			}
			if (nilai_ayah > 0) {
				rAyah = '1/6+';
				rumusAyah = '1/6 + Sisa';
			} else {
				rAyah = '0';
				rumusAyah = '';
			}
		}
		if (nilai_anak > 0 || nilai_cucu > 0 || nilai_saudara > 1) {
			if (nilai_ibu > 0) {
				rIbu = '1/6';
			} else {
				rIbu = '0';
			}
		}
		if (nilai_anakperempuan == 1) {
			if (nilai_cucuperempuan > 0) {
				rCucuPerempuan = '1/6';
			} else {
				rCucuPerempuan = '0';
			}
		}
		if (nilai_anaklaki > 0 || nilai_cuculaki > 0) {
			if (nilai_ayah > 0) {
				rAyah = '1/6';
			} else {
				rAyah = '0';
			}
			if (nilai_kakek > 0) {
				rKakek = '1/6';
			} else {
				rKakek = '0';
			}
		}
		if (
			nilai_anaklaki == 0 &&
			nilai_anakperempuan == 0 &&
			nilai_cuculaki == 0 &&
			nilai_cucuperempuan == 0 &&
			nilai_kakek > 0
		) {
			rKakek = '1/6';
		}
		if ((nilai_istri > 0 || nilai_ibu > 0) && nilai_kakek > 0) {
			if (
				nilai_anaklaki == 0 &&
				nilai_anakperempuan == 0 &&
				nilai_cuculaki == 0 &&
				nilai_cucuperempuan == 0
			) {
				rKakek = '1:1A';
			}
		}
		if (
			nilai_saudaralakiseibu > 0 &&
			(nilai_saudaralakikandung == 0 || nilai_suami == 0 || nilai_ibu == 0)
		) {
			if (nilai_saudaraperempuanseIbu > 0) {
				rSaudaraLakiSeIbu = '1/3B';
			} else {
				if (nilai_saudaraibu == 1) {
					rSaudaraLakiSeIbu = '1/6';
				}
				if (nilai_saudaraibu > 1) {
					rSaudaraLakiSeIbu = '1/3';
				}
			}
		} else {
			if (
				nilai_saudaralakiseibu == 1 &&
				nilai_saudaraperempuanseIbu == 0 &&
				nilai_saudaralakikandung > 0
			) {
				rSaudaraLakiSeIbu = '1/6';
			}
		}
		if (
			nilai_saudaraperempuanseIbu > 0 &&
			(nilai_saudaralakikandung == 0 || nilai_suami == 0 || nilai_ibu == 0)
		) {
			if (nilai_saudaralakiseibu > 0) {
				rSaudaraPerempuanSeIbu = '1/3B';
			} else {
				if (nilai_saudaraibu == 1) {
					rSaudaraPerempuanSeIbu = '1/6';
				}
				if (nilai_saudaraibu > 1) {
					rSaudaraPerempuanSeIbu = '1/3';
				}
			}
		} else {
			if (
				nilai_saudaraperempuanseIbu == 1 &&
				nilai_saudaralakiseibu == 0 &&
				nilai_saudaralakikandung > 0
			) {
				rSaudaraPerempuanSeIbu = '1/6';
			}
		}
		if (nilai_saudaraperempuankandung == 1) {
			if (nilai_saudaraperempuanseayah > 0) {
				rSaudaraPerempuanSeAyah = '1/6';
			}
		}
		if (nilai_ibu == 0) {
			if (nilai_nenekayah > 0) {
				rNenekAyah = '1/6';
			} else {
				rNenekAyah = '0';
			}
			if (nilai_nenekibu > 0) {
				rNenekIbu = '1/6';
			} else {
				rNenekIbu = '0';
			}
			if (nilai_nenekayah > 0 && nilai_nenekibu > 0) {
				rNenekAyah = '1/6B';
				rNenekIbu = '1/6B';
			}
		}
		if (
			(nilai_anakperempuan > 0 || nilai_cucuperempuan > 0) &&
			nilai_ibu == 0
		) {
			if (nilai_ayah > 0) {
				if (nilai_anaklaki > 0 || nilai_cuculaki > 0) {
					rAyah = '1/6';
					rumusAyah = '1/6';
				} else {
					rAyah = '1/6+';
					rumusAyah = '1/6 Sisa';
				}
			} else {
				rAyah = '0';
				rumusAyah = '';
			}
		}
		if (
			(nilai_anakperempuan > 0 || nilai_cucuperempuan > 0) &&
			nilai_anaklaki == 0 &&
			nilai_cuculaki == 0
		) {
			if (nilai_kakek > 0) {
				rKakek = '1/6+';
				rumusKakek = '1/6 + Sisa';
			} else {
				rKakek = '0';
				rumusKakek = '';
			}
		}
		if (nilai_suami > 0) {
			rSuami = '1/2';
		} else {
			rSuami = '0';
		}
		if (nilai_anak == 0 || nilai_cucu == 0) {
			if (nilai_suami > 0) {
				rSuami = '1/2';
			} else {
				rSuami = '0';
			}
		}
		if (nilai_anakperempuan == 1 && nilai_anaklaki == 0) {
			rAnakPerempuan = '1/2';
		}
		if (
			nilai_cucuperempuan == 1 &&
			nilai_cuculaki == 0 &&
			nilai_anakperempuan == 0
		) {
			rCucuPerempuan = '1/2';
		}
		if (
			nilai_saudaraperempuanseayah == 1 &&
			nilai_saudaralakiseayah == 0 &&
			nilai_saudaraperempuankandung == 0
		) {
			rSaudaraPerempuanSeAyah = '1/2';
		}
		if (nilai_saudaraperempuankandung == 1 && nilai_saudaralakikandung == 0) {
			rSaudaraPerempuanKandung = '1/2';
		}
		if (nilai_anak == 0 || nilai_cucu == 0) {
			if (nilai_istri > 0) {
				rIstri = '1/4';
			} else {
				rIstri = '0';
			}
		}
		if (nilai_anak > 0 || nilai_cucu > 0) {
			if (nilai_suami > 0) {
				rSuami = '1/4';
			} else {
				rSuami = '0';
			}
		}
		if (nilai_anak > 0 || nilai_cucu > 0) {
			if (nilai_istri > 0) {
				rIstri = '1/8';
			} else {
				rIstri = '0';
			}
		}
		if (
			nilai_ayah > 0 &&
			nilai_ibu > 0 &&
			(nilai_anak == 0 || nilai_cucu == 0 || nilai_saudara < 2)
		) {
		}
		if (nilai_cuculaki > 0) {
			if (nilai_cucuperempuan > 0) {
				rCucuLaki = '2:1A';
				rCucuPerempuan = '1:1A';
			} else {
				rCucuLaki = '1:1A';
			}
		}
		if (
			nilai_istri == 0 &&
			nilai_suami == 0 &&
			nilai_ibu == 0 &&
			nilai_anaklaki == 0 &&
			nilai_anakperempuan == 0 &&
			nilai_cuculaki == 0 &&
			nilai_cucuperempuan == 0 &&
			nilai_kakek > 0
		) {
			rKakek = '1:1A';
		}
		if (nilai_anaklaki > 0) {
			if (nilai_anakperempuan > 0) {
				rAnakLaki = '2:1A';
				rumusAnakLaki = 'Ashobah';
				rAnakPerempuan = '1:1A';
				rumusAnakPerempuan = 'Ashobah';
			} else {
				rAnakLaki = '1:1A';
				rumusAnakLaki = 'Ashobah';
			}
		}
		if (nilai_saudaralakikandung > 0) {
			if (nilai_suami > 0 && nilai_ibu > 0 && nilai_saudaraperempuanseIbu > 1) {
			} else {
				rSaudaraLakiKandung = '1:1A';
				rumusSaudaraLakiKandung = 'Ashobah';
			}
		}
		if (nilai_saudaralakiseayah > 0) {
			if (nilai_saudaraperempuanseayah > 0) {
				rSaudaraLakiSeAyah = '2:1A';
				rumusSaudaraLakiSeAyah = 'Ashobah';
				rSaudaraPerempuanSeAyah = '1:1A';
				rumusSaudaraPerempuanSeAyah = 'Ashobah';
			} else {
				rSaudaraLakiSeAyah = '1:1A';
				rumusSaudaraLakiSeAyah = 'Ashobah';
			}
		}
		if (
			nilai_saudaraperempuankandung > 0 &&
			(nilai_anakperempuan > 0 || nilai_cucuperempuan > 0)
		) {
			if (nilai_saudaralakiseayah == 0 && nilai_saudaraperempuanseayah == 0) {
				rSaudaraPerempuanKandung = '1:1A';
				rumusSaudaraPerempuanKandung = 'Ashobah';
			}
			if (nilai_saudaralakikandung > 0) {
				rSaudaraLakiKandung = '2:1A';
				rumusSaudaraLakiKandung = 'Ashobah';
			} else {
				rSaudaraLakiKandung = '0';
				rumusSaudaraLakiKandung = '';
			}
		}
		if (nilai_saudaraperempuankandung > 0 && nilai_saudaralakikandung > 0) {
			rSaudaraLakiKandung = '2:1A';
			rumusSaudaraLakiKandung = 'Ashobah';
			rSaudaraPerempuanKandung = '1:1A';
			rumusSaudaraPerempuanKandung = 'Ashobah';
		}
		if (nilai_saudaraperempuanseayah > 0 && nilai_saudaralakiseayah > 0) {
			rSaudaraPerempuanSeAyah = '1:1A';
			rumusSaudaraPerempuanSeAyah = 'Ashobah';
		}
		if (
			nilai_saudaraperempuanseayah > 0 &&
			(nilai_anakperempuan > 0 || nilai_cucuperempuan > 0)
		) {
			rSaudaraPerempuanSeAyah = '1:1A';
			rumusSaudaraPerempuanSeAyah = 'Ashobah';
		}
		if (nilai_anaklakisaudarakandung > 0) {
			rAnakLakiSaudaraKandung = '1:1A';
			rumusAnakLakiSaudaraKandung = 'Ashobah';
		}
		if (nilai_anaklakisaudaraseayah > 0) {
			rAnakLakiSaudaraSeAyah = '1:1A';
			rumusAnakLakiSaudaraSeAyah = 'Ashobah';
		}
		if (nilai_pamankandungayah > 0) {
			rPamanKandungAyah = '1:1A';
			rumusPamanKandungAyah = 'Ashobah';
		}
		if (nilai_pamansekakekayah > 0) {
			rPamanSeKakekAyah = '1:1A';
			rumusPamanSeKakekAyah = 'Ashobah';
		}
		if (nilai_anaklakipamankandung > 0) {
			rAnakLakiPamanKandung = '1:1A';
			rumusAnakLakiPamanKandung = 'Ashobah';
		}
		if (nilai_anaklakipamansekakek > 0) {
			rAnakLakiPamanSeKakek = '1:1A';
			rumusAnakLakiPamanSeKakek = 'Ashobah';
		}
		if (
			nilai_saudaraperempuankandung > 0 &&
			nilai_saudaralakiseayah > 0 &&
			nilai_saudaralakiseibu > 0 &&
			nilai_saudaraperempuanseIbu > 0
		) {
			rSaudaraPerempuanKandung = '1:1A';
			rSaudaraLakiSeAyah = '2:1A';
			rumusSaudaraPerempuanKandung = 'Kalalah';
			rumusSaudaraLakiSeAyah = 'Kalalah';
		}
		if (
			nilai_suami > 0 &&
			nilai_ibu > 0 &&
			nilai_saudaraibu > 1 &&
			nilai_saudaralakikandung > 0
		) {
			if (nilai_saudaraperempuankandung == 0) {
				rSaudaraLakiKandung =
					parseInt(nilai_saudaralakikandung) +
					parseInt(nilai_saudaralakiseibu) +
					parseInt(nilai_saudaraperempuanseIbu) +
					':1M';
				if (nilai_saudaraperempuanseIbu > 0) {
					rSaudaraPerempuanSeIbu =
						parseInt(nilai_saudaralakikandung) +
						parseInt(nilai_saudaralakiseibu) +
						parseInt(nilai_saudaraperempuanseIbu) +
						':1M';
				}
				if (nilai_saudaralakiseibu > 0) {
					rSaudaraLakiSeIbu =
						parseInt(nilai_saudaralakikandung) +
						parseInt(nilai_saudaralakiseibu) +
						parseInt(nilai_saudaraperempuanseIbu) +
						':1M';
				}
				rumusSaudaraLakiKandung = 'Musytarakah';
				rumusPerempuanSeIbu = 'Musytarakah';
			} else {
				if (nilai_saudaraperempuanseIbu > 0) {
					if (nilai_saudaralakiseibu > 0) {
						rSaudaraLakiSeIbu = '1/3B';
					}
				} else {
					if (nilai_saudaraibu == 1) {
						rSaudaraLakiSeIbu = '1/6';
					}
					if (nilai_saudaraibu > 1) {
						rSaudaraLakiSeIbu = '1/3';
					}
				}
				if (nilai_saudaralakiseibu > 0) {
					if (nilai_saudaraperempuanseIbu > 0) {
						rSaudaraPerempuanSeIbu = '1/3B';
					}
				} else {
					if (nilai_saudaraibu == 1) {
						rSaudaraPerempuanSeIbu = '1/6';
					}
					if (nilai_saudaraibu > 1) {
						rSaudaraPerempuanSeIbu = '1/3';
					}
				}
			}
		}
	}

	// function processRatio(ratioString, totalsharedx, a) {
	// 	var numerator = ratioString.substring(0, 1).match(/[0-9]+/g);
	// 	var denominator = ratioString.substring(2, 2).match(/[0-9]+/g);
	// 	var totalsharedx = ratioString.substring(3, 1);
	// 	var secondCharacter = ratioString.substring(1, 1);
	// 	var shareType = 0;
	// 	if (totalsharedx == 'A' || totalsharedx == 'M' || totalsharedx == 'R') {
	// 		if (secondCharacter == ':') {
	// 			return ratioString;
	// 		} else {
	// 			return a;
	// 		}
	// 	} else {
	// 		var ratioParts = totalsharedx / denominator * numerator;
	// 		if (jenis == 'AR-RADD') {
	// 			shareType = ratioParts + '/' + totalsharedx;
	// 		} else {
	// 			shareType = ratioParts + '/' + naul;
	// 		}
	// 		if (ash.length > 1) {
	// 			if (ash.length == 2 && nilai_saudaraibu > 1) {
	// 				hartaashobah = 0;
	// 			}
	// 			if (hartaashobah > 0 && totalashobah == 0) {
	// 				nradd = hartaashobah;
	// 				shareType = ratioParts + '/' + sisasaham;
	// 			}
	// 		}
	// 		return shareType;
	// 	}
	// }
	function processRatio(ratioString, totalsharedx, a) {
		// Ambil numerator dan denominator dari ratioString
		// var numerator = ratioString.substring(0, 1).match(/[0-9]+/g);
		// var denominator = ratioString.substring(2, 3).match(/[0-9]+/g); // Fix pada panjang substring
		// var extractedShared = ratioString.substring(3, 4); // Ubah panjang substring sesuai logika
		// var secondCharacter = ratioString.substring(1, 2); // Fix untuk mengambil karakter kedua
		let [numerator, denominator] = ratioString.split('/').map(Number);
		if (isNaN(numerator) || isNaN(denominator)) {
			console.error('Format ratioString salah:', ratioString);
			return 0; // Return jika format salah
		}

		if (ratioString.length >= 4) {
			var extractedShared = ratioString[3];
			var secondCharacter = ratioString[1];
		} else {
			console.error('Format ratioString terlalu pendek:', ratioString);
			return a;
		}

		var shareType = 0;

		// Validasi hasil parsing numerator dan denominator
		numerator = numerator ? parseInt(numerator[0], 10) : 0;
		denominator = denominator ? parseInt(denominator[0], 10) : 0;

		// Logika untuk karakter spesial
		if (['A', 'M', 'R'].includes(extractedShared)) {
			if (secondCharacter === ':') {
				return ratioString; // Jika format valid, kembalikan ratioString
			} else {
				return a; // Kembalikan nilai a jika format tidak valid
			}
		} else {
			// Hitung ratioParts jika tidak mengandung karakter spesial
			if (denominator !== 0) {
				var ratioParts = totalsharedx / denominator * numerator;
			} else {
				console.error('Denominator tidak boleh 0:', ratioString);
				ratioParts = 0; // Default jika denominator 0
			}

			// Tambahkan logika berdasarkan jenis
			if (typeof jenis !== 'undefined' && jenis === 'AR-RADD') {
				shareType = `${ratioParts}/${totalsharedx}`;
			} else {
				shareType = `${ratioParts}/${typeof naul !== 'undefined' ? naul : 1}`;
			}

			// Logika tambahan jika ada array `ash`
			if (Array.isArray(ash) && ash.length > 1) {
				if (
					ash.length === 2 &&
					typeof nilai_saudaraibu !== 'undefined' &&
					nilai_saudaraibu > 1
				) {
					hartaashobah = 0;
				}
				if (
					typeof hartaashobah !== 'undefined' &&
					hartaashobah > 0 &&
					typeof totalashobah !== 'undefined' &&
					totalashobah === 0
				) {
					nradd = hartaashobah;
					shareType = `${ratioParts}/${typeof sisasaham !== 'undefined'
						? sisasaham
						: 1}`;
				}
			}
			return shareType; // Kembalikan hasil shareType
		}
	}

	function calculateRemainingShare(ratioString, totalsharedy, totalsharedy) {
		var numerator = ratioString.substring(0, 1).match(/[0-9]+/g);
		var denominator = ratioString.substringing(2, 2).match(/[0-9]+/g);
		return totalsharedy - totalsharedy / denominator;
	}

	if (nilai_suami > 0) {
		var firstsuami = rSuami.substringing(0, 1),
			secondsuami = rSuami.substringing(2, 1),
			thirdsuami = rSuami.substringing(3, 1);
		ash.push(thirdsuami);
		_a.push(firstsuami);
		a.push(secondsuami);
		a2.push(nilai_suami);
	}
	if (nilai_istri > 0) {
		var firstistri = rIstri.substringing(0, 1),
			secondistri = rIstri.substringing(2, 1),
			thirdistri = rIstri.substringing(3, 1);
		ash.push(thirdistri);
		_a.push(firstistri);
		a.push(secondistri);
		a2.push(nilai_istri);
	}
	if (nilai_anaklaki > 0) {
		var firstanaklaki = rAnakLaki.substringing(0, 1),
			secondanaklaki = rAnakLaki.substringing(2, 1),
			thirdanaklaki = rAnakLaki.substringing(3, 1);
		ash.push(thirdanaklaki);
		_a.push(firstanaklaki);
		a.push(secondanaklaki);
		a2.push(nilai_anaklaki);
	}
	if (nilai_anakperempuan > 0) {
		var firstanakperempuan = rAnakPerempuan.substringing(0, 1),
			secondanakperempuan = rAnakPerempuan.substringing(2, 1),
			thirdanakperempuan = rAnakPerempuan.substringing(3, 1);
		ash.push(thirdanakperempuan);
		_a.push(firstanakperempuan);
		a.push(secondanakperempuan);
		a2.push(nilai_anakperempuan);
	}
	if (nilai_ayah > 0) {
		var firstayah = rAyah.substringing(0, 1),
			secondayah = rAyah.substringing(2, 1),
			thirdayah = rAyah.substringing(3, 1);
		ash.push(thirdayah);
		_a.push(firstayah);
		a.push(secondayah);
		a2.push(nilai_ayah);
	}
	if (nilai_ibu > 0) {
		var firstibu = rIbu.substringing(0, 1),
			secondibu = rIbu.substringing(2, 1),
			thirdibu = rIbu.substringing(3, 1);
		ash.push(thirdibu);
		_a.push(firstibu);
		a.push(secondibu);
		a2.push(nilai_ibu);
	}
	if (nilai_cuculaki > 0) {
		var firstcuculaki = rCucuLaki.substringing(0, 1),
			secondcuculaki = rCucuLaki.substringing(2, 1),
			thirdcuculaki = rCucuLaki.substringing(3, 1);
		ash.push(thirdcuculaki);
		_a.push(firstcuculaki);
		a.push(secondcuculaki);
		a2.push(nilai_cuculaki);
	}
	if (nilai_cucuperempuan > 0) {
		var firstcucuperempuan = rCucuPerempuan.substringing(0, 1),
			secondcucuperempuan = rCucuPerempuan.substringing(2, 1),
			thirdcucuperempuan = rCucuPerempuan.substringing(3, 1);
		ash.push(thirdcucuperempuan);
		_a.push(firstcucuperempuan);
		a.push(secondcucuperempuan);
		a2.push(nilai_cucuperempuan);
	}
	if (nilai_kakek > 0) {
		var firstkakek = rKakek.substringing(0, 1),
			secondkakek = rKakek.substringing(2, 1),
			thirdkakek = rKakek.substringing(3, 1);
		ash.push(thirdkakek);
		_a.push(firstkakek);
		a.push(secondkakek);
		a2.push(nilai_kakek);
	}
	if (nilai_nenekayah > 0) {
		var firstnenekayah = rNenekAyah.substring(0, 1),
			secondnenekayah = rNenekAyah.substring(2, 1),
			thirdnenekayah = rNenekAyah.substring(3, 1);
		ash.push(thirdnenekayah);
		_a.push(firstnenekayah);
		a.push(secondnenekayah);
		a2.push(nilai_nenekayah);
	}
	if (nilai_nenekibu > 0) {
		var firstnenekibu = rNenekIbu.substring(0, 1),
			secondnenekibu = rNenekIbu.substring(2, 1),
			thirdnenekibu = rNenekIbu.substring(3, 1);
		ash.push(thirdnenekibu);
		_a.push(firstnenekibu);
		a.push(secondnenekibu);
		a2.push(nilai_nenekibu);
	}
	if (nilai_saudaralakikandung > 0) {
		var firstsaudaralakikandung = rSaudaraLakiKandung.substring(0, 1),
			secondsaudaralakikandung = rSaudaraLakiKandung.substring(2, 1),
			thirdsaudaralakikandung = rSaudaraLakiKandung.substring(3, 1);
		ash.push(thirdsaudaralakikandung);
		_a.push(firstsaudaralakikandung);
		a.push(secondsaudaralakikandung);
		a2.push(nilai_saudaralakikandung);
	}
	if (nilai_saudaralakiseayah > 0) {
		var firstsaudaralakiseayah = rSaudaraLakiSeAyah.substring(0, 1),
			secondsaudaralakiseayah = rSaudaraLakiSeAyah.substring(2, 1),
			thirdsaudaralakiseayah = rSaudaraLakiSeAyah.substring(3, 1);
		ash.push(thirdsaudaralakiseayah);
		_a.push(firstsaudaralakiseayah);
		a.push(secondsaudaralakiseayah);
		a2.push(nilai_saudaralakiseayah);
	}
	if (nilai_saudaraperempuanseayah > 0) {
		var firstsaudaraperempuanseayah = rSaudaraPerempuanSeAyah.substring(0, 1),
			secondsaudaraperempuanseayah = rSaudaraPerempuanSeAyah.substring(2, 1),
			thirdsaudaraperempuanseayah = rSaudaraPerempuanSeAyah.substring(3, 1);
		ash.push(thirdsaudaraperempuanseayah);
		_a.push(firstsaudaraperempuanseayah);
		a.push(secondsaudaraperempuanseayah);
		a2.push(nilai_saudaraperempuanseayah);
	}
	if (nilai_saudaralakiseibu > 0) {
		var firstsaudaralakiseibu = rSaudaraLakiSeIbu.substring(0, 1),
			secondsaudaralakiseibu = rSaudaraLakiSeIbu.substring(2, 1),
			thirdsaudaralakiseibu = rSaudaraLakiSeIbu.substring(3, 1);
		ash.push(thirdsaudaralakiseibu);
		_a.push(firstsaudaralakiseibu);
		a.push(secondsaudaralakiseibu);
		a2.push(nilai_saudaralakiseibu);
	}
	if (nilai_saudaraperempuanseIbu > 0) {
		var firstsaudaraperempuanseibu = rSaudaraPerempuanSeIbu.substring(0, 1),
			secondsaudaraperempuanseibu = rSaudaraPerempuanSeIbu.substring(2, 1),
			thirdsaudaraperempuanseibu = rSaudaraPerempuanSeIbu.substring(3, 1);
		ash.push(thirdsaudaraperempuanseibu);
		_a.push(firstsaudaraperempuanseibu);
		a.push(secondsaudaraperempuanseibu);
		a2.push(nilai_saudaraperempuanseIbu);
	}
	if (nilai_saudaraperempuankandung > 0) {
		var firstsaudaraperempuankandung = rSaudaraPerempuanKandung.substring(0, 1),
			secondsaudaraperempuankandung = rSaudaraPerempuanKandung.substring(2, 1),
			thirdsaudaraperempuankandung = rSaudaraPerempuanKandung.substring(3, 1);
		ash.push(thirdsaudaraperempuankandung);
		_a.push(firstsaudaraperempuankandung);
		a.push(secondsaudaraperempuankandung);
		a2.push(nilai_saudaraperempuankandung);
	}
	if (nilai_anaklakisaudarakandung > 0) {
		var firstanaklakisaudarakandung = rAnakLakiSaudaraKandung.substring(0, 1),
			secondanaklakisaudarakandung = rAnakLakiSaudaraKandung.substring(2, 1),
			thirdanaklakisaudarakandung = rAnakLakiSaudaraKandung.substring(3, 1);
		ash.push(thirdanaklakisaudarakandung);
		_a.push(firstanaklakisaudarakandung);
		a.push(secondanaklakisaudarakandung);
		a2.push(nilai_anaklakisaudarakandung);
	}
	if (nilai_anaklakisaudaraseayah > 0) {
		var firstanaklakisaudaraseayah = rAnakLakiSaudaraSeAyah.substring(0, 1),
			secondanaklakisaudaraseayah = rAnakLakiSaudaraSeAyah.substring(2, 1),
			thirdanaklakisaudaraseayah = rAnakLakiSaudaraSeAyah.substring(3, 1);
		ash.push(thirdanaklakisaudaraseayah);
		_a.push(firstanaklakisaudaraseayah);
		a.push(secondanaklakisaudaraseayah);
		a2.push(nilai_anaklakisaudaraseayah);
	}
	if (nilai_pamankandungayah > 0) {
		var firstpamankandungayah = rPamanKandungAyah.substring(0, 1),
			secondpamankandung = rPamanKandungAyah.substring(2, 1),
			thirdpamankandung = rPamanKandungAyah.substring(3, 1);
		ash.push(thirdpamankandung);
		_a.push(firstpamankandungayah);
		a.push(secondpamankandung);
		a2.push(nilai_pamankandungayah);
	}
	if (nilai_pamansekakekayah > 0) {
		var firstpamansekakekayah = rPamanSeKakekAyah.substring(0, 1),
			secondpamansekakek = rPamanSeKakekAyah.substring(2, 1),
			thirdpamansekakek = rPamanSeKakekAyah.substring(3, 1);
		ash.push(thirdpamansekakek);
		_a.push(firstpamansekakekayah);
		a.push(secondpamansekakek);
		a2.push(nilai_pamansekakekayah);
	}
	if (nilai_anaklakipamankandung > 0) {
		var firstanaklakipamankandung = rAnakLakiPamanKandung.substring(0, 1),
			secondanaklakipamankandung = rAnakLakiPamanKandung.substring(2, 1),
			thirdanaklakipamankandung = rAnakLakiPamanKandung.substring(3, 1);
		ash.push(thirdanaklakipamankandung);
		_a.push(firstanaklakipamankandung);
		a.push(secondanaklakipamankandung);
		a2.push(nilai_anaklakipamankandung);
	}
	if (nilai_anaklakipamansekakek > 0) {
		var firstanaklakipamansekakek = rAnakLakiPamanSeKakek.substring(0, 1),
			secondanaklakipamansekakek = rAnakLakiPamanSeKakek.substring(2, 1),
			thirdanaklakipamansekakek = rAnakLakiPamanSeKakek.substring(3, 1);
		ash.push(thirdanaklakipamansekakek);
		_a.push(firstanaklakipamansekakek);
		a.push(secondanaklakipamansekakek);
		a2.push(nilai_anaklakipamansekakek);
	}
	var alpha = '';
	var indexbersama = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		19,
		20,
		21,
		22,
		23,
		24,
		25,
		26,
		27,
		28,
		29,
		30,
		31,
		32,
		33,
		34,
		35,
		36,
		37,
		38,
		39,
		40,
		41,
		42,
		43,
		44,
		45,
		46,
		47,
		48,
		49,
		50,
		51,
		52,
		53,
		54,
		55,
		56,
		57,
		58,
		59,
		60,
		61,
		62,
		63,
		64,
		65,
		66,
		67,
		68,
		69,
		70,
		71,
		72,
		73,
		74,
		75,
		76,
		77,
		78,
		79,
		80,
		81,
		82,
		83,
		84,
		85,
		86,
		87,
		88,
		89,
		90,
		91,
		92,
		93,
		94,
		95,
		96,
		97,
		98,
		99,
		100,
	];
	for (var secondCharacter in indexbersama) {
		var divisibleCount = 0;
		for (var ratioParts in a) {
			h = indexbersama[secondCharacter] % a[ratioParts];
			if (h == 0) {
				divisibleCount = divisibleCount + 1;
			}
			if (divisibleCount >= a.length) {
				resultIndex = indexbersama[secondCharacter];
				break;
			}
		}
		if (resultIndex > 0) {
			break;
		}
	}
	var ratioParts = 0;
	var numerator = 0;
	var denominator = 0;
	if (nilai_suami > 0) {
		ratioParts = resultIndex / secondsuami * firstsuami;
		if (thirdsuami != 'A' && thirdsuami != 'M' && thirdsuami != 'R') {
			numerator = numerator + parseInt(ratioParts);
		}
		denominator = denominator + parseInt(ratioParts);
	}
	if (nilai_istri > 0) {
		ratioParts = resultIndex / secondistri * firstistri;
		if (thirdistri != 'A' && thirdistri != 'M' && thirdistri != 'R') {
			numerator = numerator + parseInt(ratioParts);
		}
		denominator = denominator + parseInt(ratioParts);
	}
	if (nilai_anaklaki > 0) {
		ratioParts = resultIndex / secondanaklaki * firstanaklaki;
		if (thirdanaklaki != 'A' && thirdanaklaki != 'M' && thirdanaklaki != 'R') {
			numerator = numerator + parseInt(ratioParts);
		}
		denominator = denominator + parseInt(ratioParts);
	}
	if (nilai_anakperempuan > 0) {
		ratioParts = resultIndex / secondanakperempuan * firstanakperempuan;
		if (
			thirdanakperempuan != 'A' &&
			thirdanakperempuan != 'M' &&
			thirdanakperempuan != 'R'
		) {
			numerator = numerator + parseInt(ratioParts);
		}
		denominator = denominator + parseInt(ratioParts);
	}
	if (nilai_ibu > 0) {
		ratioParts = resultIndex / secondibu * firstibu;
		if (thirdibu != 'A' && thirdibu != 'M' && thirdibu != 'R') {
			numerator = numerator + parseInt(ratioParts);
		}
		denominator = denominator + parseInt(ratioParts);
	}
	if (nilai_ayah > 0) {
		ratioParts = resultIndex / secondayah * firstayah;
		if (thirdayah != 'A' && thirdayah != 'M' && thirdayah != 'R') {
			numerator = numerator + parseInt(ratioParts);
		}
		denominator = denominator + parseInt(ratioParts);
	}
	if (nilai_cuculaki > 0) {
		ratioParts = resultIndex / secondcuculaki * firstcuculaki;
		if (thirdcuculaki != 'A' && thirdayah != 'M' && thirdcuculaki != 'R') {
			numerator = numerator + parseInt(ratioParts);
		}
		denominator = denominator + parseInt(ratioParts);
	}
	if (nilai_cucuperempuan > 0) {
		ratioParts = resultIndex / secondcucuperempuan * firstcucuperempuan;
		if (
			thirdcucuperempuan != 'A' &&
			thirdcucuperempuan != 'M' &&
			thirdcucuperempuan != 'R'
		) {
			numerator = numerator + parseInt(ratioParts);
		}
		denominator = denominator + parseInt(ratioParts);
	}
	if (nilai_kakek > 0) {
		ratioParts = resultIndex / secondkakek * firstkakek;
		if (thirdkakek != 'A' && thirdkakek != 'M' && thirdkakek != 'R') {
			numerator = numerator + parseInt(ratioParts);
		}
		denominator = denominator + parseInt(ratioParts);
	}
	if (nilai_nenekayah > 0 && nilai_nenekibu > 0) {
		ratioParts = resultIndex / secondnenekayah * firstnenekayah;
		numerator = numerator + parseInt(ratioParts);
		denominator = denominator + parseInt(ratioParts);
	} else {
		if (nilai_nenekayah > 0) {
			ratioParts = resultIndex / secondnenekayah * firstnenekayah;
			if (
				thirdnenekayah != 'A' &&
				thirdnenekayah != 'M' &&
				thirdnenekayah != 'R'
			) {
				numerator = numerator + parseInt(ratioParts);
			}
			denominator = denominator + parseInt(ratioParts);
		}
		if (nilai_nenekibu > 0) {
			ratioParts = resultIndex / secondnenekibu * firstnenekibu;
			if (
				thirdnenekibu != 'A' &&
				thirdnenekibu != 'M' &&
				thirdnenekibu != 'R'
			) {
				numerator = numerator + parseInt(ratioParts);
			}
			denominator = denominator + parseInt(ratioParts);
		}
	}
	if (nilai_saudaralakikandung > 0) {
		ratioParts =
			resultIndex / secondsaudaralakikandung * firstsaudaralakikandung;
		if (
			thirdsaudaralakikandung != 'A' &&
			thirdsaudaralakikandung != 'M' &&
			thirdsaudaralakikandung != 'R'
		) {
			numerator = numerator + parseInt(ratioParts);
		}
		denominator = denominator + parseInt(ratioParts);
	}
	if (nilai_saudaraperempuankandung > 0) {
		ratioParts =
			resultIndex /
			secondsaudaraperempuankandung *
			firstsaudaraperempuankandung;
		if (
			thirdsaudaraperempuankandung != 'A' &&
			thirdsaudaraperempuankandung != 'M' &&
			thirdsaudaraperempuankandung != 'R'
		) {
			numerator = numerator + parseInt(ratioParts);
		}
		denominator = denominator + parseInt(ratioParts);
	}
	if (nilai_saudaralakiseayah > 0) {
		ratioParts = resultIndex / secondsaudaralakiseayah * firstsaudaralakiseayah;
		if (
			thirdsaudaralakiseayah != 'A' &&
			thirdsaudaralakiseayah != 'M' &&
			thirdsaudaralakiseayah != 'R'
		) {
			numerator = numerator + parseInt(ratioParts);
		}
		denominator = denominator + parseInt(ratioParts);
	}
	if (nilai_saudaraperempuanseayah > 0) {
		ratioParts =
			resultIndex / secondsaudaraperempuanseayah * firstsaudaraperempuanseayah;
		if (
			thirdsaudaraperempuanseayah != 'A' &&
			thirdsaudaraperempuanseayah != 'M' &&
			thirdsaudaraperempuanseayah != 'R'
		) {
			numerator = numerator + parseInt(ratioParts);
		}
		denominator = denominator + parseInt(ratioParts);
	}
	if (
		nilai_saudaraperempuanseIbu > 0 &&
		nilai_saudaralakiseibu > 0 &&
		(nilai_saudaralakikandung == 0 || nilai_suami == 0 || nilai_ibu == 0)
	) {
		ratioParts = resultIndex / secondsaudaralakiseibu * firstsaudaralakiseibu;
		numerator = numerator + parseInt(ratioParts);
		denominator = denominator + parseInt(ratioParts);
	} else {
		if (nilai_saudaralakiseibu > 0) {
			ratioParts = resultIndex / secondsaudaralakiseibu * firstsaudaralakiseibu;
			if (
				thirdsaudaralakiseibu != 'A' &&
				thirdsaudaralakiseibu != 'M' &&
				thirdsaudaralakiseibu != 'R'
			) {
				numerator = numerator + parseInt(ratioParts);
			}
			denominator = denominator + parseInt(ratioParts);
		}
		if (nilai_saudaraperempuanseIbu > 0) {
			ratioParts =
				resultIndex / secondsaudaraperempuanseibu * firstsaudaraperempuanseibu;
			if (
				thirdsaudaraperempuanseibu != 'A' &&
				thirdsaudaraperempuanseibu != 'M' &&
				thirdsaudaraperempuanseibu != 'R'
			) {
				numerator = numerator + parseInt(ratioParts);
			}
			denominator = denominator + parseInt(ratioParts);
		}
	}
	if (nilai_anaklakisaudarakandung > 0) {
		ratioParts =
			resultIndex / secondanaklakisaudarakandung * firstanaklakisaudarakandung;
		if (
			thirdanaklakisaudarakandung != 'A' &&
			thirdanaklakisaudarakandung != 'M' &&
			thirdanaklakisaudarakandung != 'R'
		) {
			numerator = numerator + parseInt(ratioParts);
		}
		denominator = denominator + parseInt(ratioParts);
	}
	if (nilai_anaklakisaudaraseayah > 0) {
		ratioParts =
			resultIndex / secondanaklakisaudaraseayah * firstanaklakisaudaraseayah;
		if (
			thirdanaklakisaudaraseayah != 'A' &&
			thirdanaklakisaudaraseayah != 'M' &&
			thirdanaklakisaudaraseayah != 'R'
		) {
			numerator = numerator + parseInt(ratioParts);
		}
		denominator = denominator + parseInt(ratioParts);
	}
	if (nilai_pamankandungayah > 0) {
		ratioParts = resultIndex / secondpamankandung * firstpamankandungayah;
		if (
			thirdpamankandung != 'A' &&
			thirdpamankandung != 'M' &&
			thirdpamankandung != 'R'
		) {
			numerator = numerator + parseInt(ratioParts);
		}
		denominator = denominator + parseInt(ratioParts);
	}
	if (nilai_pamansekakekayah > 0) {
		ratioParts = resultIndex / secondpamansekakek * firstpamansekakekayah;
		if (
			thirdpamansekakek != 'A' &&
			thirdpamansekakek != 'B' &&
			thirdpamansekakek != 'R'
		) {
			numerator = numerator + parseInt(ratioParts);
		}
		denominator = denominator + parseInt(ratioParts);
	}
	if (nilai_anaklakipamankandung > 0) {
		ratioParts =
			resultIndex / secondanaklakipamankandung * firstanaklakipamankandung;
		if (
			thirdanaklakipamankandung != 'A' &&
			thirdanaklakipamankandung != 'B' &&
			thirdanaklakipamankandung != 'R'
		) {
			numerator = numerator + parseInt(ratioParts);
		}
		denominator = denominator + parseInt(ratioParts);
	}
	if (nilai_anaklakipamansekakek > 0) {
		ratioParts =
			resultIndex / secondanaklakipamansekakek * firstanaklakipamansekakek;
		if (
			thirdanaklakipamansekakek != 'A' &&
			thirdanaklakipamansekakek != 'B' &&
			thirdanaklakipamansekakek != 'R'
		) {
			numerator = numerator + parseInt(ratioParts);
		}
		denominator = denominator + parseInt(ratioParts);
	}
	sisasaham = numerator;
	adjustedShares = resultIndex - sisasaham;
	shareRatio = adjustedShares + '/' + resultIndex;
	if (sisasaham > resultIndex) {
		jenis = 'Al-’AUL';
		naul = sisasaham;
	} else {
		naul = 0;
		jenis = 'AR-RADD';
	}
	for (var ratioParts in a) {
		if (
			ash[ratioParts] == 'A' ||
			ash[ratioParts] == 'M' ||
			ash[ratioParts] == 'R' ||
			ash[ratioParts] == '+'
		) {
			totalashobah =
				totalashobah + parseInt(_a[ratioParts]) * parseInt(a2[ratioParts]);
		}
	}
	console.log(ratioParts);
	var distributedAssets = 0;
	_TotalHartaAshobah = calculateShare(1, shareRatio, nIrst);
	hartaashobah = _TotalHartaAshobah;
	_hasilmasalah = '';
	if (resultIndex > 1) {
		var ratioParts = processRatio('1/' + resultIndex, resultIndex, shareRatio);
		var secondCharacter = ratioParts.split('/');
		var shareArrow = '';
		if (secondCharacter[1] == sisasaham) {
			if (sisasaham > 0 && sisasaham != resultIndex) {
				shareArrow = ' &rarr; ' + sisasaham;
			}
			if (resultIndex > sisasaham) {
				_hasilmasalah = 'Raad';
			}
			if (resultIndex < sisasaham) {
				_hasilmasalah = "'Aul";
			}
		}
		if (_hasilmasalah) {
			alpha = alpha + ' (' + _hasilmasalah + ')';
		}
	}

	$(document).on('click', '#img-next-button8', function() {
		// Fungsi untuk memproses nilai dan menambahkannya ke tabel
		console.log(ratioParts);
		if (nilai_ayah > 0) {
			ratioParts = processRatio(rAyah, resultIndex, shareRatio);
			h = calculateShare(nilai_ayah, ratioParts, nIrst);
			distributedAssets = distributedAssets + h;
			_HasilAyah = h;
			secondCharacter = secondCharacter + 1;
			if (rAyah == '1/6+') {
				if (nIrst - distributedAssets > 0) {
					h = h + (nIrst - distributedAssets);
					_HasilAyah = h;
					distributedAssets = nIrst;
					ratioParts = ratioParts + '+A';
				}
			}
			if (determineShareType(ratioParts) == 'Ashobah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}

			$('#hasil_ayah').text(toRp(h / nilai_ayah));
			console.log(toRp(h / nilai_ayah));
			console.log(
				nilai_ayah,
				ratioParts,
				nIrst,
				rAyah,
				resultIndex,
				shareRatio
			);
		}
		if (nilai_ibu > 0) {
			ratioParts = processRatio(rIbu, resultIndex, shareRatio);
			h = calculateShare(nilai_ibu, ratioParts, nIrst);
			distributedAssets = distributedAssets + h;
			_HasilIbu = h;
			secondCharacter = secondCharacter + 1;
			if (determineShareType(ratioParts) == 'Ashobah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}
			alpha =
				alpha +
				'<td>' +
				nilai_ibu +
				' Ibu (' +
				rIbu +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha + '</td><td align="right">' + toRp(h / nilai_ibu) + '</td></tr>';
		}
		if (nilai_anaklaki > 0) {
			ratioParts = processRatio(rAnakLaki, resultIndex, shareRatio);
			h = calculateShare(nilai_anaklaki, ratioParts, nIrst);
			distributedAssets = distributedAssets + h;
			_HasilAnakLaki = h;
			secondCharacter = secondCharacter + 1;
			if (determineShareType(ratioParts) == 'Ashobah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}
			alpha =
				alpha +
				'<td>' +
				nilai_anaklaki +
				' Anak Laki-laki (' +
				rAnakLaki +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha +
				'</td><td align="right">' +
				toRp(h / nilai_anaklaki) +
				'</td></tr>';
		}
		if (nilai_anakperempuan > 0) {
			ratioParts = processRatio(rAnakPerempuan, resultIndex, shareRatio);
			h = calculateShare(nilai_anakperempuan, ratioParts, nIrst);
			distributedAssets = distributedAssets + h;
			_HasilAnakPerempuan = h;
			secondCharacter = secondCharacter + 1;
			if (determineShareType(ratioParts) == 'Ashobah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}
			alpha =
				alpha +
				'<td>' +
				nilai_anakperempuan +
				' Anak Perempuan (' +
				rAnakPerempuan +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha +
				'</td><td align="right">' +
				toRp(h / nilai_anakperempuan) +
				'</td></tr>';
		}
		if (nilai_suami > 0) {
			ratioParts = processRatio(rSuami, resultIndex, shareRatio);
			if (nradd > 0) {
				ratioParts = rSuami;
				h = calculateShare(nilai_suami, ratioParts, nIrst);
				nIrst = nIrst - h;
				sisasaham = calculateRemainingShare(rSuami, resultIndex, sisasaham);
			} else {
				h = calculateShare(nilai_suami, ratioParts, nIrst);
			}
			distributedAssets = distributedAssets + h;
			_HasilSuami = h;
			secondCharacter = secondCharacter + 1;
			if (determineShareType(ratioParts) == 'Ashobah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}
			alpha = alpha + '<tr>';
			alpha =
				alpha +
				'<td>' +
				nilai_suami +
				' Suami (' +
				rSuami +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha +
				'</td><td align="right">' +
				toRp(h / nilai_suami) +
				'</td></tr>';
			if (nradd > 0) {
				alpha =
					alpha +
					'<tr><td>Sisa harta [<b>' +
					toRp(nIrst) +
					'</b>]</td><td colspan="2"><hr></td></tr>';
			}
		}
		if (nilai_istri > 0) {
			ratioParts = processRatio(rIstri, resultIndex, shareRatio);

			if (nradd > 0) {
				ratioParts = rIstri;
				h = calculateShare(nilai_istri, ratioParts, nIrst);
				nIrst = nIrst - h;
				distributedAssets = distributedAssets - h;
				sisasaham = calculateRemainingShare(rIstri, resultIndex, sisasaham);
			} else {
				h = calculateShare(nilai_istri, ratioParts, nIrst);
			}

			distributedAssets = distributedAssets + h;
			_HasilIstri = h;
			secondCharacter = secondCharacter + 1;

			// Menggunakan jQuery untuk memperbarui elemen HTML
			$('#kolom_istri').show(); // Tampilkan baris istri
			$('#bagian_istri').text(determineShareType(ratioParts)); // Jenis bagian istri
			$('#hasil_istri').text(toRp(h)); // Hasil harta istri

			if (determineShareType(ratioParts) === 'Ashobah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}

			alpha +=
				'<td>' +
				nilai_istri +
				' Istri (' +
				rIstri +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha += '</td><td align="right">' + toRp(h / nilai_istri) + '</td></tr>';

			if (nradd > 0) {
				alpha +=
					'<tr><td>Sisa harta [<b>' +
					toRp(nIrst) +
					'</b>]</td><td colspan="2"><hr></td></tr>';
			}
		}
		if (nilai_kakek > 0) {
			ratioParts = processRatio(rKakek, resultIndex, shareRatio);
			h = calculateShare(nilai_kakek, ratioParts, nIrst);
			distributedAssets = distributedAssets + h;
			_HasilKakek = h;
			secondCharacter = secondCharacter + 1;
			if (rKakek == '1/6+') {
				if (nIrst - distributedAssets > 0) {
					h = h + (nIrst - distributedAssets);
					_HasilKakek = h;
					distributedAssets = nIrst;
					ratioParts = ratioParts + '+A';
				}
			}
			if (determineShareType(ratioParts) == 'Ashobah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}
			$('#hasil_kakek').text(toRp(h / nilai_kakek));
		}
		if (nilai_nenekayah > 0 && nilai_nenekibu > 0) {
			ratioParts = processRatio('1/6', resultIndex, shareRatio);
			h = calculateShare(1, ratioParts, nIrst);
			distributedAssets = distributedAssets + h;
			secondCharacter = secondCharacter + 1;
			alpha =
				alpha +
				'<td>Bagian Nenek (Ayah) dan Nenek (Ibu) (' +
				ratioParts +
				') [<b>' +
				toRp(h) +
				'</b>]</td><td colspan="2"><hr></td></tr>';
			ratioParts = calculateAshobahShare(
				h / nilai_nenek2 * nilai_nenekayah,
				nIrst,
				adjustedShares,
				ratioParts
			);
			alpha =
				alpha +
				'<td>&rarr; ' +
				nilai_nenekayah +
				' Nenek dari Ayah</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha +
				'</td><td align="right">' +
				toRp(h / nilai_nenek2 * nilai_nenekayah / nilai_nenekayah) +
				'</td></tr>';
			ratioParts = calculateAshobahShare(
				h / nilai_nenek2 * nilai_nenekibu,
				nIrst,
				adjustedShares,
				ratioParts
			);
			alpha =
				alpha +
				'<td>&rarr; ' +
				nilai_nenekibu +
				' Nenek dari Ibu</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha +
				'</td><td align="right">' +
				toRp(h / nilai_nenek2 * nilai_nenekibu / nilai_nenekibu) +
				'</td></tr>';
		} else {
			if (nilai_nenekayah > 0) {
				ratioParts = processRatio(rNenekAyah, resultIndex, shareRatio);
				h = calculateShare(nilai_nenekayah, ratioParts, nIrst);
				distributedAssets = distributedAssets + h;
				_HasilNenekAyah = h;
				secondCharacter = secondCharacter + 1;
				if (determineShareType(ratioParts) == 'Ashobah') {
					ratioParts = calculateAshobahShare(
						h,
						nIrst,
						adjustedShares,
						ratioParts
					);
				}
				alpha =
					alpha +
					'<td>' +
					nilai_nenekayah +
					' Nenek dari Ayah (' +
					rNenekAyah +
					')</td><td align="center">' +
					determineShareType(ratioParts) +
					'</td>';
				alpha =
					alpha +
					'</td><td align="right">' +
					toRp(h / nilai_nenekayah) +
					'</td></tr>';
			}
			if (nilai_nenekibu > 0) {
				ratioParts = processRatio(rNenekIbu, resultIndex, shareRatio);
				h = calculateShare(nilai_nenekibu, ratioParts, nIrst);
				distributedAssets = distributedAssets + h;
				_HasilNenekIbu = h;
				secondCharacter = secondCharacter + 1;
				if (determineShareType(ratioParts) == 'Ashobah') {
					ratioParts = calculateAshobahShare(
						h,
						nIrst,
						adjustedShares,
						ratioParts
					);
				}
				alpha =
					alpha +
					'<td>' +
					nilai_nenekibu +
					' Nenek dari Ibu (' +
					rNenekIbu +
					')</td><td align="center">' +
					determineShareType(ratioParts) +
					'</td>';
				alpha =
					alpha +
					'</td><td align="right">' +
					toRp(h / nilai_nenekibu) +
					'</td></tr>';
			}
		}
		if (nilai_cuculaki > 0) {
			ratioParts = processRatio(rCucuLaki, resultIndex, shareRatio);
			h = calculateShare(nilai_cuculaki, ratioParts, nIrst);
			distributedAssets = distributedAssets + h;
			_HasilCucuLaki = h;
			secondCharacter = secondCharacter + 1;
			if (determineShareType(ratioParts) == 'Ashobah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}
			alpha =
				alpha +
				'<td>' +
				nilai_cuculaki +
				' Cucu Laki-laki (' +
				rCucuLaki +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha +
				'</td><td align="right">' +
				toRp(h / nilai_cuculaki) +
				'</td></tr>';
		}
		if (nilai_cucuperempuan > 0) {
			ratioParts = processRatio(rCucuPerempuan, resultIndex, shareRatio);
			h = calculateShare(nilai_cucuperempuan, ratioParts, nIrst);
			distributedAssets = distributedAssets + h;
			_HasilCucuPerempuan = h;
			secondCharacter = secondCharacter + 1;
			if (determineShareType(ratioParts) == 'Ashobah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}
			alpha =
				alpha +
				'<td>' +
				nilai_cucuperempuan +
				' Cucu Perempuan (' +
				rCucuPerempuan +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha +
				'</td><td align="right">' +
				toRp(h / nilai_cucuperempuan) +
				'</td></tr>';
		}
		if (nilai_saudaralakikandung > 0) {
			ratioParts = processRatio(rSaudaraLakiKandung, resultIndex, shareRatio);
			h = calculateShare(nilai_saudaralakikandung, ratioParts, nIrst);
			distributedAssets = distributedAssets + h;
			_HasilSaudaraLakiKandung = h;
			secondCharacter = secondCharacter + 1;
			if (determineShareType(ratioParts) == 'Ashobah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}
			if (determineShareType(ratioParts) == 'Musytarakah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}
			alpha =
				alpha +
				'<td>' +
				nilai_saudaralakikandung +
				' Saudara Laki-laki sekandung (' +
				rSaudaraLakiKandung +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha +
				'</td><td align="right">' +
				toRp(h / nilai_saudaralakikandung) +
				'</td></tr>';
		}
		if (nilai_saudaraperempuankandung > 0) {
			ratioParts = processRatio(
				rSaudaraPerempuanKandung,
				resultIndex,
				shareRatio
			);
			h = calculateShare(nilai_saudaraperempuankandung, ratioParts, nIrst);
			distributedAssets = distributedAssets + h;
			_HasilSaudaraPerempuanKandung = h;
			secondCharacter = secondCharacter + 1;
			if (determineShareType(ratioParts) == 'Ashobah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}
			alpha =
				alpha +
				'<td>' +
				nilai_saudaraperempuankandung +
				' Saudara Perempuan sekandung (' +
				rSaudaraPerempuanKandung +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha +
				'</td><td align="right">' +
				toRp(h / nilai_saudaraperempuankandung) +
				'</td></tr>';
		}
		if (nilai_saudaralakiseayah > 0) {
			ratioParts = processRatio(rSaudaraLakiSeAyah, resultIndex, shareRatio);
			h = calculateShare(nilai_saudaralakiseayah, ratioParts, nIrst);
			distributedAssets = distributedAssets + h;
			_HasilSaudaraLakiSeAyah = h;
			secondCharacter = secondCharacter + 1;
			if (determineShareType(ratioParts) == 'Ashobah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}
			alpha =
				alpha +
				'<td>' +
				nilai_saudaralakiseayah +
				' Saudara Laki-laki satu Ayah (' +
				rSaudaraLakiSeAyah +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha +
				'</td><td align="right">' +
				toRp(h / nilai_saudaralakiseayah) +
				'</td></tr>';
		}
		if (nilai_saudaraperempuanseayah > 0) {
			ratioParts = processRatio(
				rSaudaraPerempuanSeAyah,
				resultIndex,
				shareRatio
			);
			h = calculateShare(nilai_saudaraperempuanseayah, ratioParts, nIrst);
			distributedAssets = distributedAssets + h;
			_HasilSaudaraPerempuanSeAyah = h;
			secondCharacter = secondCharacter + 1;
			if (determineShareType(ratioParts) == 'Ashobah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}
			alpha =
				alpha +
				'<td>' +
				nilai_saudaraperempuanseayah +
				' Saudara Perempuan satu Ayah (' +
				rSaudaraPerempuanSeAyah +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha +
				'</td><td align="right">' +
				toRp(h / nilai_saudaraperempuanseayah) +
				'</td></tr>';
		}
		if (
			nilai_saudaralakiseibu > 0 &&
			nilai_saudaraperempuanseIbu > 0 &&
			(nilai_saudaralakikandung == 0 || nilai_suami == 0 || nilai_ibu == 0)
		) {
			ratioParts = processRatio('1/3', resultIndex, shareRatio);
			h = calculateShare(1, ratioParts, nIrst);
			distributedAssets = distributedAssets + h;
			secondCharacter = secondCharacter + 1;
			alpha =
				alpha +
				'<td>Bagian saudara satu Ibu (' +
				ratioParts +
				') [<b>' +
				toRp(h) +
				'</b>]</td><td colspan="2"><hr></td></tr>';
			ratioParts = calculateAshobahShare(
				h / _SaudaraIbu * nilai_saudaralakiseibu,
				nIrst,
				adjustedShares,
				ratioParts
			);
			alpha =
				alpha +
				'<td>&rarr; ' +
				nilai_saudaralakiseibu +
				' Saudara Laki-laki satu Ibu</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha +
				'</td><td align="right">' +
				toRp(
					h / _SaudaraIbu * nilai_saudaralakiseibu / nilai_saudaralakiseibu
				) +
				'</td></tr>';
			ratioParts = calculateAshobahShare(
				h / _SaudaraIbu * nilai_saudaraperempuanseIbu,
				nIrst,
				adjustedShares,
				ratioParts
			);
			alpha =
				alpha +
				'<td>&rarr; ' +
				nilai_saudaraperempuanseIbu +
				' Saudara Prempuan satu Ibu</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha +
				'</td><td align="right">' +
				toRp(
					h /
						_SaudaraIbu *
						nilai_saudaraperempuanseIbu /
						nilai_saudaraperempuanseIbu
				) +
				'</td></tr>';
		} else {
			if (ash.length == 2 && _SaudaraIbu > 1) {
				ratioParts = processRatio('1/3', resultIndex, shareRatio);
				h = calculateShare(1, ratioParts, nIrst);
				distributedAssets = distributedAssets + h;
				secondCharacter = secondCharacter + 1;
				alpha =
					alpha +
					'<td>Bagian saudara satu Ibu (1/3) [<b>' +
					toRp(h) +
					'</b>]</td><td colspan="2"><hr></td></tr>';
				if (nilai_saudaralakiseibu > 0) {
					alpha =
						alpha +
						'<td>&rarr; ' +
						nilai_saudaralakiseibu +
						' Saudara Laki-laki satu Ibu</td><td align="center">' +
						determineShareType('1/1B') +
						'</td>';
					alpha =
						alpha +
						'</td><td align="right">' +
						toRp(h / _SaudaraIbu) +
						'</td></tr>';
				}
				if (nilai_saudaraperempuanseIbu > 0) {
					alpha =
						alpha +
						'<td>&rarr; ' +
						nilai_saudaraperempuanseIbu +
						' Saudara Perempuan satu Ibu</td><td align="center">' +
						determineShareType('1/1B') +
						'</td>';
					alpha =
						alpha +
						'</td><td align="right">' +
						toRp(h / _SaudaraIbu) +
						'</td></tr>';
				}
			} else {
				if (nilai_saudaralakiseibu > 0) {
					ratioParts = processRatio(rSaudaraLakiSeIbu, resultIndex, shareRatio);
					h = calculateShare(nilai_saudaralakiseibu, ratioParts, nIrst);
					distributedAssets = distributedAssets + h;
					_HasilSaudaraLakiSeIbu = h;
					secondCharacter = secondCharacter + 1;
					if (determineShareType(ratioParts) == 'Musytarakah') {
						ratioParts = calculateAshobahShare(
							h,
							nIrst,
							adjustedShares,
							ratioParts
						);
					}

					alpha =
						alpha +
						'<td>' +
						nilai_saudaralakiseibu +
						' Saudara Laki-laki satu Ibu (' +
						rSaudaraLakiSeIbu +
						')</td><td align="center">' +
						determineShareType(ratioParts) +
						'</td>';
					alpha =
						alpha +
						'</td><td align="right">' +
						toRp(h / nilai_saudaralakiseibu) +
						'</td></tr>';
				}
				if (nilai_saudaraperempuanseIbu > 0) {
					ratioParts = processRatio(
						rSaudaraPerempuanSeIbu,
						resultIndex,
						shareRatio
					);
					h = calculateShare(nilai_saudaraperempuanseIbu, ratioParts, nIrst);
					distributedAssets = distributedAssets + h;
					_HasilSaudaraPerempuanSeIbu = h;
					secondCharacter = secondCharacter + 1;
					if (determineShareType(ratioParts) == 'Musytarakah') {
						ratioParts = calculateAshobahShare(
							h,
							nIrst,
							adjustedShares,
							ratioParts
						);
					}
					alpha =
						alpha +
						'<td>' +
						nilai_saudaraperempuanseIbu +
						' Saudara Perempuan satu Ibu (' +
						rSaudaraPerempuanSeIbu +
						')</td><td align="center">' +
						determineShareType(ratioParts) +
						'</td>';
					alpha =
						alpha +
						'</td><td align="right">' +
						toRp(h / nilai_saudaraperempuanseIbu) +
						'</td></tr>';
				}
			}
		}
		if (nilai_anaklakisaudarakandung > 0) {
			ratioParts = processRatio(
				rAnakLakiSaudaraKandung,
				resultIndex,
				shareRatio
			);
			h = calculateShare(nilai_anaklakisaudarakandung, ratioParts, nIrst);
			distributedAssets = distributedAssets + h;
			_HasilAnakLakiSaudaraKandung = h;
			secondCharacter = secondCharacter + 1;
			if (determineShareType(ratioParts) == 'Ashobah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}
			alpha =
				alpha +
				'<td>' +
				nilai_anaklakisaudarakandung +
				' Anak Laki-laki saudara Sekandung (' +
				rAnakLakiSaudaraKandung +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha +
				'</td><td align="right">' +
				toRp(h / nilai_anaklakisaudarakandung) +
				'</td></tr>';
		}
		if (nilai_anaklakisaudaraseayah > 0) {
			ratioParts = processRatio(
				rAnakLakiSaudaraSeAyah,
				resultIndex,
				shareRatio
			);
			h = calculateShare(nilai_anaklakisaudaraseayah, ratioParts, nIrst);
			distributedAssets = distributedAssets + h;
			_HasilAnakLakiSaudaraSeAyah = h;
			secondCharacter = secondCharacter + 1;
			if (determineShareType(ratioParts) == 'Ashobah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}
			alpha =
				alpha +
				'<td>' +
				nilai_anaklakisaudaraseayah +
				' Anak Laki-laki saudara satu Ayah (' +
				rAnakLakiSaudaraSeAyah +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha +
				'</td><td align="right">' +
				toRp(h / nilai_anaklakisaudaraseayah) +
				'</td></tr>';
		}
		if (nilai_pamankandungayah > 0) {
			ratioParts = processRatio(rPamanKandungAyah, resultIndex, shareRatio);
			h = calculateShare(nilai_pamankandungayah, ratioParts, nIrst);
			distributedAssets = distributedAssets + h;
			_HasilPamanKandungAyah = h;
			secondCharacter = secondCharacter + 1;
			if (determineShareType(ratioParts) == 'Ashobah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}
			alpha =
				alpha +
				'<td>' +
				nilai_pamankandungayah +
				' Paman kandung dari Ayah (' +
				rPamanKandungAyah +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha +
				'</td><td align="right">' +
				toRp(h / nilai_pamankandungayah) +
				'</td></tr>';
		}
		if (nilai_pamansekakekayah > 0) {
			ratioParts = processRatio(rPamanSeKakekAyah, resultIndex, shareRatio);
			h = calculateShare(nilai_pamansekakekayah, ratioParts, nIrst);
			distributedAssets = distributedAssets + h;
			_HasilPamanSeKakekAyah = h;
			secondCharacter = secondCharacter + 1;
			if (determineShareType(ratioParts) == 'Ashobah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}
			alpha =
				alpha +
				'<td>' +
				nilai_pamansekakekayah +
				' Paman satu Kakek dari Ayah (' +
				rPamanSeKakekAyah +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha +
				'</td><td align="right">' +
				toRp(h / nilai_pamansekakekayah) +
				'</td></tr>';
		}
		if (nilai_anaklakipamankandung > 0) {
			ratioParts = processRatio(rAnakLakiPamanKandung, resultIndex, shareRatio);
			h = calculateShare(nilai_anaklakipamankandung, ratioParts, nIrst);
			distributedAssets = distributedAssets + h;
			_HasilAnakLakiPamanKandung = h;
			secondCharacter = secondCharacter + 1;
			if (determineShareType(ratioParts) == 'Ashobah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}
			alpha =
				alpha +
				'<td>' +
				nilai_anaklakipamankandung +
				' Anak Laki-laki Paman sekandung (' +
				rAnakLakiPamanKandung +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha +
				'</td><td align="right">' +
				toRp(h / nilai_anaklakipamankandung) +
				'</td></tr>';
		}
		if (nilai_anaklakipamansekakek > 0) {
			ratioParts = processRatio(rAnakLakiPamanSeKakek, resultIndex, shareRatio);
			h = calculateShare(nilai_anaklakipamansekakek, ratioParts, nIrst);
			distributedAssets = distributedAssets + h;
			_HasilAnakLakiPamanSeKakek = h;
			secondCharacter = secondCharacter + 1;
			if (determineShareType(ratioParts) == 'Ashobah') {
				ratioParts = calculateAshobahShare(
					h,
					nIrst,
					adjustedShares,
					ratioParts
				);
			}
			alpha =
				alpha +
				'<td>' +
				nilai_anaklakipamansekakek +
				' Anak Laki-laki Paman satu Kakek (' +
				rAnakLakiPamanSeKakek +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha +
				'</td><td align="right">' +
				fractionToDecimal(h / nilai_anaklakipamansekakek) +
				'</td></tr>';
		}

		function fractionToDecimal(fraction) {
			let parts = fraction.split('/');
			if (parts.length === 2) {
				return parseInt(parts[0], 10) / parseInt(parts[1], 10);
			} else {
				throw new Error('Format fraction tidak valid');
			}
		}

		function updateTable(idPrefix, r, nilai_) {
			const rowId = `#kolom_${idPrefix}`;
			if (nilai_ > 0) {
				$(rowId).show(); // Menampilkan baris jika memiliki hasil
				$(`#bagian_${idPrefix}`).text(r); // Memasukkan nilai bagian
				// $(`#hasil_${idPrefix}`).text(toRp(h / nilai_)); // Memasukkan nilai hasil
			}
		}

		// Update elemen total warisan
		$('#total_tirkah').text(nTirkah); // Jumlah total warisan
		$('#total_hutang').text(nHutang); // Total hutang
		$('#total_wasiat').text(nWasiat); // Total wasiat
		$('#total_tajhiz').text(nTajhiz); // Total biaya tajhiz
		$('#total_irts').text(nIrst); // Total sisa warisan

		// Proses nilai-nilai untuk tiap pewaris
		updateTable('ayah', rAyah, nilai_ayah);
		updateTable('ibu', rIbu, nilai_ibu);
		updateTable('kakek', rKakek, nilai_kakek);
		updateTable('nenekayah', rNenekAyah, nilai_nenekayah);
		updateTable('nenekibu', rNenekIbu, nilai_nenekibu);
		updateTable('suami', rSuami, nilai_suami);
		updateTable('istri', rIstri, nilai_istri);
		updateTable('anaklaki', rAnakLaki, nilai_anaklaki);
		updateTable('anakperempuan', rAnakPerempuan, nilai_anakperempuan);
		updateTable('cuculaki', rCucuLaki, nilai_cuculaki);
		updateTable('cucuperempuan', rCucuPerempuan, nilai_cucuperempuan);
		updateTable(
			'saudaralakikandung',
			rSaudaraLakiKandung,
			nilai_saudaralakikandung
		);
		updateTable(
			'saudaraperempuankandung',
			rSaudaraPerempuanKandung,
			nilai_saudaraperempuankandung
		);
		updateTable(
			'saudaralakiseayah',
			rSaudaraLakiSeAyah,
			nilai_saudaralakiseayah
		);
		updateTable(
			'saudaraperempuanseayah',
			rSaudaraPerempuanSeAyah,
			nilai_saudaraperempuanseayah
		);
		updateTable('saudaralakiseibu', rSaudaraLakiSeIbu, nilai_saudaralakiseibu);
		updateTable(
			'saudaraperempuanseibu',
			rSaudaraPerempuanSeIbu,
			nilai_saudaraperempuanseIbu
		);
		updateTable(
			'anaklakisaudarakandung',
			rAnakLakiSaudaraKandung,
			nilai_anaklakisaudarakandung
		);
		updateTable(
			'anaklakisaudaraseayah',
			rAnakLakiSaudaraSeAyah,
			nilai_anaklakisaudaraseayah
		);
		updateTable('pamankandungayah', rPamanKandungAyah, nilai_pamankandungayah);
		updateTable('pamansekakekayah', rPamanSeKakekAyah, nilai_pamansekakekayah);
		updateTable(
			'anaklakipamankandung',
			rAnakLakiPamanKandung,
			nilai_anaklakipamankandung
		);
		updateTable(
			'anaklakipamankandung',
			rAnakLakiPamanKandung,
			nilai_anaklakipamansekakek
		);
		console.log('p');
	});
});
