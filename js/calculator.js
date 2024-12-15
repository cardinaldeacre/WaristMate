// Variabel global untuk menyimpan nilai form
let formData = {
  cb_ayah: false,
  cb_ibu: false,
  saham_ayah: 0,
  saham_ibu: 0,
  cb_suami: false,
  cb_istri: 0,
  nilai_anaklaki: 0,
  nilai_anakperempuan: 0,
  nTirkah: 0,
  nHutang: 0,
  nWasiat: 0,
  nTajhiz: 0,
  nIrst: 0,
  muwarrits: 'p',
  cucuLaki: 0,
  cucuPerempuan: 0,
  cb_kakek: 0,
  nilai_nenekayah: 0,
  nilai_nenekibu: 0,
  nilai_saudaralakikandung: 0,
  nilai_saudaraperempuankandung: 0,
  nilai_saudaralakiseayah: 0,
  nilai_saudaraperempuanseayah: 0,
  nilai_saudaralakiseibu: 0,
  nilai_saudaraperempuanseIbu: 0,
  nilai_anaklakisaudarakandung: 0,
  nilai_anaklakisaudaraseayah: 0,
  nilai_pamankandungayah: 0,
  nilai_pamansekakekayah: 0,
  nilai_anaklakipamankandung: 0,
  nilai_anaklakipamansekakek: 0,
};

// Fungsi untuk menghitung Al-Irts
function calculateIrts() {
  let tirkah = parseFloat($('#nTirkah').val()) || 0;
  let hutang = parseFloat($('#nHutang').val()) || 0;
  let wasiat = parseFloat($('#nWasiat').val()) || 0;
  let tajhiz = parseFloat($('#nTajhiz').val()) || 0;

  let maxWasiat = tirkah / 3;
  if (wasiat > maxWasiat) {
    wasiat = maxWasiat;
    $('#nWasiat').val(maxWasiat.toFixed(2));
    alert('Wasiat tidak boleh lebih dari 1/3 harta (' + maxWasiat.toFixed(2) + ')');
  }

  let irst = tirkah - hutang - wasiat - tajhiz;
  $('#nIrst').val(`Rp.${irst.toFixed(2)}`);
}

// Fungsi untuk menyimpan nilai input
function saveFormData() {
  formData.nTirkah = $('#nTirkah').val();
  formData.nHutang = $('#nHutang').val();
  formData.nWasiat = $('#nWasiat').val();
  formData.nTajhiz = $('#nTajhiz').val();
  formData.nIrst = $('#nIrst').val();
  formData.muwarrits = $("input[name='muwarrits']:checked").val() || 'p';
  console.log('Data tersimpan:', formData);
}

// Fungsi validasi input
function validateInputs() {
  if (!$('#nTirkah').val()) {
    alert('Harap masukkan jumlah harta yang diwariskan.');
    return false;
  }
  if (!$("input[name='muwarrits']:checked").val()) {
    alert('Harap pilih jenis kelamin Muwarrits.');
    return false;
  }
  return true;
}

// Fungsi untuk menyimpan data checkbox
function updateCheckboxData() {
  formData.cb_ayah = $('#cb_ayah').is(':checked');
  formData.cb_ibu = $('#cb_ibu').is(':checked');
  $('#saham_ayah').text(formData.cb_ayah ? 1 : 0);
  $('#saham_ibu').text(formData.cb_ibu ? 1 : 0);
}

function updateHusbandData() {
  formData.cb_suami = $('#cb_suami').is(':checked');
  $('#saham_suami').text(formData.cb_suami ? 1 : 0);
}

function updateWifeData() {
  formData.cb_istri = parseInt($('#nilai_istri').val(), 10) || 0;
  $('#saham_istri').text(formData.cb_istri);
}

function updateSonData() {
  formData.nilai_anaklaki = parseInt($('#nilai_anaklaki').val(), 10) || 0;
  $('#saham_anaklaki').text(formData.nilai_anaklaki);
}

function updateDaughterData() {
  formData.nilai_anakperempuan = parseInt($('#nilai_anakperempuan').val(), 10) || 0;
  $('#saham_anakperempuan').text(formData.nilai_anakperempuan);
}

// Fungsi untuk mengontrol tampilan suami/istri berdasarkan muwarrits
function toggleSpouseFields(muwarrits) {
  if (muwarrits === 'wanita') {
    $('#field_suami').show();
  } else if (muwarrits === 'laki-laki') {
    $('#field_istri').show();
  }
}

$(document).ready(function () {
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

  $(document).on('change', "input[name='muwarrits']", function () {
    saveFormData();
    toggleSpouseFields(formData.muwarrits);
  });

  $('#cb_ayah, #cb_ibu').on('change', updateCheckboxData);
  $('#cb_suami').on('change', updateHusbandData);
  $('#nilai_istri').on('input', updateWifeData);
  $('#nilai_anaklaki').on('input', updateSonData);
  $('#nilai_anakperempuan').on('input', updateDaughterData);

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
    $('#nTirkah').val(formData.nTirkah);
    $('#nHutang').val(formData.nHutang);
    $('#nWasiat').val(formData.nWasiat);
    $('#nTajhiz').val(formData.nTajhiz);
    $('#nIrst').val(formData.nIrst);
    $("input[name='muwarrits'][value='" + formData.muwarrits + "']").prop('checked', true);
  });
});

$(document).ready(function () {
  // Fungsi untuk memperbarui nilai cucu laki-laki
  function updateCucuLakiData() {
    formData.cucuLaki = parseInt($('#nilai_cuculaki').val(), 10) || 0;
    $('#saham_cuculaki').text(formData.cucuLaki);
  }

  // Fungsi untuk memperbarui nilai cucu perempuan
  function updateCucuPerempuanData() {
    formData.cucuPerempuan = parseInt($('#nilai_cucuperempuan').val(), 10) || 0;
    $('#saham_cucuperempuan').text(formData.cucuPerempuan);
  }

  // Event handler untuk perubahan nilai pada range cucu laki-laki
  $('#nilai_cuculaki').on('input', function () {
    updateCucuLakiData();
  });

  // Event handler untuk perubahan nilai pada range cucu perempuan
  $('#nilai_cucuperempuan').on('input', function () {
    updateCucuPerempuanData();
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

  // Inisialisasi awal untuk memastikan nilai span sesuai dengan nilai range

  updateCucuLakiData();
  updateCucuPerempuanData();
});

$(document).ready(function () {
  // Fungsi untuk memperbarui nilai Kakek
  function updateKakekData() {
    formData.cb_kakek = $('#cb_kakek').is(':checked');
    $('#saham_kakek').text(formData.cb_kakek ? 1 : 0);
  }

  // Fungsi untuk memperbarui nilai Nenek dari Ayah
  function updateNenekAyahData() {
    formData.nilai_nenekayah = parseInt($('#nilai_nenekayah').val(), 10) || 0;
    $('#saham_nenekayah').text(formData.nilai_nenekayah);
  }

  // Fungsi untuk memperbarui nilai Nenek dari Ibu
  function updateNenekIbuData() {
    formData.nilai_nenekibu = parseInt($('#nilai_nenekibu').val(), 10) || 0;
    $('#saham_nenekibu').text(formData.nilai_nenekibu);
  }

  // Event Listener untuk input Kakek
  $('#cb_kakek').on('change', function () {
    updateKakekData();
  });

  // Event Listener untuk input Nenek dari Ayah
  $('#nilai_nenekayah').on('input', function () {
    updateNenekAyahData();
  });

  // Event Listener untuk input Nenek dari Ibu
  $('#nilai_nenekibu').on('input', function () {
    updateNenekIbuData();
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
});

$(document).ready(function () {
  // Fungsi untuk memperbarui nilai Saudara Laki Kandung
  function updateSaudaraLakiKandungData() {
    formData.nilai_saudaralakikandung = parseInt($('#nilai_saudaralakikandung').val(), 10) || 0;
    $('#saham_saudaralakikandung').text(formData.nilai_saudaralakikandung);
  }

  // Fungsi untuk memperbarui nilai Saudara Perempuan Kandung
  function updateSaudaraPerempuanKandungData() {
    formData.nilai_saudaraperempuankandung =
      parseInt($('#nilai_saudaraperempuankandung').val(), 10) || 0;
    $('#saham_saudaraperempuankandung').text(formData.nilai_saudaraperempuankandung);
  }

  // Event Listener untuk input Saudara Laki Kandung
  $('#nilai_saudaralakikandung').on('input', function () {
    updateSaudaraLakiKandungData();
  });

  // Event Listener untuk input Saudara Perempuan Kandung
  $('#nilai_saudaraperempuankandung').on('input', function () {
    updateSaudaraPerempuanKandungData();
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
});

$(document).ready(function () {
  // Fungsi untuk memperbarui nilai Saudara Laki Kandung
  function updateSaudaraLakiSeayahData() {
    formData.nilai_saudaralakiseayah = parseInt($('#nilai_saudaralakiseayah').val(), 10) || 0;
    $('#saham_saudaralakiseayah').text(formData.nilai_saudaralakiseayah);
  }

  // Fungsi untuk memperbarui nilai Saudara Perempuan Kandung
  function updateSaudaraPerempuanSeayahData() {
    formData.nilai_saudaraperempuanseayah =
      parseInt($('#nilai_saudaraperempuanseayah').val(), 10) || 0;
    $('#saham_saudaraperempuanseayah').text(formData.nilai_saudaraperempuanseayah);
  }

  // Fungsi untuk memperbarui nilai Saudara Laki Kandung
  function updateSaudaraLakiSeibuData() {
    formData.nilai_saudaralakiseibu = parseInt($('#nilai_saudaralakiseibu').val(), 10) || 0;
    $('#saham_saudaralakiseibu').text(formData.nilai_saudaralakiseibu);
  }

  // Fungsi untuk memperbarui nilai Saudara Perempuan Kandung
  function updateSaudaraPerempuanSeibuData() {
    formData.nilai_saudaraperempuanseIbu =
      parseInt($('#nilai_saudaraperempuanseIbu').val(), 10) || 0;
    $('#saham_saudaraperempuanseIbu').text(formData.nilai_saudaraperempuanseIbu);
  }

  // Event Listener untuk input Saudara Laki Kandung
  $('#nilai_saudaralakiseayah').on('input', function () {
    updateSaudaraLakiSeayahData();
  });

  // Event Listener untuk input Saudara Perempuan Kandung
  $('#nilai_saudaraperempuanseayah').on('input', function () {
    updateSaudaraPerempuanSeayahData();
  });

  // Event Listener untuk input Saudara Laki Kandung
  $('#nilai_saudaralakiseibu').on('input', function () {
    updateSaudaraLakiSeibuData();
  });

  // Event Listener untuk input Saudara Perempuan Kandung
  $('#nilai_saudaraperempuanseIbu').on('input', function () {
    updateSaudaraPerempuanSeibuData();
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
});

$(document).ready(function () {
  function updateAnakLakiSaudaraKandungData() {
    formData.nilai_anaklakisaudarakandung =
      parseInt($('#nilai_anaklakisaudarakandung').val(), 10) || 0;
    $('#saham_anaklakisaudarakandung').text(formData.nilai_anaklakisaudarakandung);
  }

  function updateAnakLakiSaudaraSeayahData() {
    formData.nilai_anaklakisaudaraseayah =
      parseInt($('#nilai_anaklakisaudaraseayah').val(), 10) || 0;
    $('#saham_anaklakisaudaraseayah').text(formData.nilai_anaklakisaudaraseayah);
  }

  $('#nilai_anaklakisaudarakandung').on('input', function () {
    updateAnakLakiSaudaraKandungData();
  });

  $('#nilai_anaklakisaudaraseayah').on('input', function () {
    updateAnakLakiSaudaraSeayahData();
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
});

$(document).ready(function () {
  function updatePamanKandungData() {
    formData.nilai_pamankandungayah = parseInt($('#nilai_pamankandungayah').val(), 10) || 0;
    $('#saham_pamankandungayah').text(formData.nilai_pamankandungayah);
  }

  function updatePamanSekakekAyahData() {
    formData.nilai_pamansekakekayah = parseInt($('#nilai_pamansekakekayah').val(), 10) || 0;
    $('#saham_pamansekakekayah').text(formData.nilai_pamansekakekayah);
  }

  $('#nilai_pamankandungayah').on('input', function () {
    updatePamanKandungData();
  });

  $('#nilai_pamansekakekayah').on('input', function () {
    updatePamanSekakekAyahData();
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
});

$(document).ready(function () {
  function updateAnakPamanKandungData() {
    formData.nilai_anaklakipamankandung = parseInt($('#nilai_anaklakipamankandung').val(), 10) || 0;
    $('#saham_anaklakipamankandung').text(formData.nilai_anaklakipamankandung);
  }

  function updatePamanSekakekData() {
    formData.nilai_anaklakipamansekakek = parseInt($('#nilai_anaklakipamansekakek').val(), 10) || 0;
    $('#saham_anaklakipamansekakek').text(formData.nilai_anaklakipamansekakek);
  }

  $('#nilai_anaklakipamankandung').on('input', function () {
    updateAnakPamanKandungData();
  });

  $('#nilai_anaklakipamansekakek').on('input', function () {
    updatePamanSekakekData();
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

  updateAnakPamanKandungData();
  updatePamanSekakekData();
});
