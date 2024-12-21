// Variabel global untuk menyimpan nilai form
let formData = {
  nTirkah: 0,
  nHutang: 0,
  nWasiat: 0,
  nTajhiz: 0,
  nIrst: 0,
  muwarrits: "",
  sisasaham: 0,
  totalashobah: 0,
  hartaashobah: 0,
  jenis: "",
  naul: 0,
  nradd: 0,
  nilai_ayah: false,
  nilai_ibu: false,
  nilai_suami: false,
  nilai_istri: 0,
  nilai_anaklaki: 0,
  nilai_anakperempuan: 0,
  nilai_cuculaki: 0,
  nilai_cucuperempuan: 0,
  nilai_kakek: 0,
  nilai_nenekayah: 0,
  nilai_nenekibu: 0,
  nilai_nenek2: 0,
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
  nilai_anak: 0,
  nilai_cucu: 0,
  nilai_saudara: 0,
  nilai_saudaraibu: 0,
  rIstri: "1/4",
  rSuami: "1/2",
  rAnakLaki: "2:1A",
  rAnakPerempuan: "1/2",
  rAyah: "1/6",
  rIbu: "1/3",
  rCucuLaki: "2:1A",
  rCucuPerempuan: "1/2",
  rKakek: "1/6",
  rNenekAyah: "1/6",
  rNenekIbu: "1/6",
  rSaudaraLakiKandung: "2:1A",
  rSaudaraPerempuanKandung: "1/2",
  rSaudaraLakiSeAyah: "2:1A",
  rSaudaraPerempuanSeAyah: "1/2",
  rSaudaraLakiSeIbu: "1/6",
  rSaudaraPerempuanSeIbu: "1/6",
  rAnakLakiSaudaraKandung: "2:1A",
  rAnakLakiSaudaraSeAyah: "2:1A",
  rPamanKandungAyah: "2:1A",
  rPamanSeKakekAyah: "2:1A",
  rAnakLakiPamanKandung: "2:1A",
  rAnakLakiPamanSeKakek: "2:1A",
};

let results = [];

let a = [],
  a1 = [],
  a2 = [];
// kunci ashabah
let _a = [],
  _a1 = [];
let ash = [],
  ash1 = [];

$(document).ready(function () {
  // Fungsi untuk menghitung Al-Irts
  // Fungsi untuk menghitung Irtis
  function calculateIrts() {
    let tirkah = parseFloat($("#nTirkah").val()) || 0;
    let hutang = parseFloat($("#nHutang").val()) || 0;
    let wasiat = parseFloat($("#nWasiat").val()) || 0;
    let tajhiz = parseFloat($("#nTajhiz").val()) || 0;

    let maxWasiat = tirkah / 3;
    if (wasiat > maxWasiat) {
      wasiat = maxWasiat;
      $("#nWasiat").val(maxWasiat.toFixed(2));
      Notiflix.Notify.failure(
        "Wasiat tidak boleh lebih dari 1/3 harta (" + toRp(maxWasiat) + ")",
      );
    }

    let irst = tirkah - hutang - wasiat - tajhiz;
    $("#nIrst").val(toRp(irst)); // Menggunakan toRp untuk format Rupiah
  }

  // Fungsi untuk menyimpan nilai input
  function saveFormData() {
    formData.nTirkah = toRp($("#nTirkah").val()); // Format Rupiah
    formData.nHutang = toRp($("#nHutang").val()); // Format Rupiah
    formData.nWasiat = toRp($("#nWasiat").val()); // Format Rupiah
    formData.nTajhiz = toRp($("#nTajhiz").val()); // Format Rupiah
    formData.nIrst = $("#nIrst").val(); // Sudah diformat sebelumnya
    formData.muwarrits = $("input[name='muwarrits']:checked").val() || "p";

    console.log("Data tersimpan:", formData);
  }

  // Fungsi validasi input
  function validateInputs() {
    if (!$("#nTirkah").val()) {
      Notiflix.Notify.failure("Harap masukkan jumlah harta yang diwariskan.");
      return false;
    }
    if (!$("input[name='muwarrits']:checked").val()) {
      Notiflix.Notify.failure("Harap pilih jenis kelamin Muwarrits.");
      return false;
    }
    return true;
  }

  // Fungsi untuk menyimpan data checkbox
  function updateCheckboxData() {
    formData.nilai_ayah = $("#cb_ayah").is(":checked");
    formData.nilai_ibu = $("#cb_ibu").is(":checked");
    $("#saham_ayah").text(formData.nilai_ayah ? 1 : 0);
    $("#saham_ibu").text(formData.nilai_ibu ? 1 : 0);
  }

  function updateHusbandData() {
    formData.nilai_suami = $("#cb_suami").is(":checked");
    $("#saham_suami").text(formData.nilai_suami ? 1 : 0);
    isSaham();
  }

  function updateWifeData() {
    formData.nilai_istri = parseInt($("#nilai_istri").val(), 10) || 0;
    $("#saham_istri").text(formData.nilai_istri);
    isSaham();
  }

  function updateSonData() {
    formData.nilai_anaklaki = parseInt($("#nilai_anaklaki").val(), 10) || 0;
    $("#saham_anaklaki").text(formData.nilai_anaklaki);
    isSaham();
  }

  function updateDaughterData() {
    formData.nilai_anakperempuan =
      parseInt($("#nilai_anakperempuan").val(), 10) || 0;
    $("#saham_anakperempuan").text(formData.nilai_anakperempuan);
    isSaham();
  }

  // Fungsi untuk mengontrol tampilan suami/istri berdasarkan muwarrits
  function toggleSpouseFields1(muwarrits) {
    if (muwarrits === "wanita") {
      $("#field_suami").show();
    } else if (muwarrits === "laki-laki") {
      $("#field_istri").show();
    }
  }

  // Inisialisasi awal
  $("#legacy1").show();
  $("#legacy2").hide();
  calculateIrts();
  updateCheckboxData();
  updateHusbandData();
  updateWifeData();
  updateSonData();
  updateDaughterData();

  // Event listeners
  $("#nTirkah, #nHutang, #nWasiat, #nTajhiz").on("input", calculateIrts);

  $(document).on("change", "input[name='muwarrits']", function () {
    saveFormData();
    toggleSpouseFields1(formData.muwarrits);
  });

  $("#cb_ayah, #cb_ibu").on("change", updateCheckboxData);
  $("#cb_suami").on("change", updateHusbandData);
  $("#nilai_istri").on("input", updateWifeData);
  $("#nilai_anaklaki").on("input", function () {
    updateSonData();
    isSaham();
    checkBlockingConditions(); // Tambahkan fungsi pengecekan di sini
  });
  $("#nilai_anakperempuan").on("input", function () {
    updateDaughterData();
    isSaham();
    checkBlockingConditions(); // Tambahkan fungsi pengecekan di sini
  });

  $("#img-next-button0").click(function (e) {
    e.preventDefault();
    if (validateInputs()) {
      saveFormData();
      $("#legacy1").hide();
      $("#legacy2").show();
    }
  });

  $("#img-next-button1").click(function (e) {
    e.preventDefault();
    if (validateInputs()) {
      saveFormData();
      $("#legacy2").hide();
      $("#legacy3").show();
    }
  });

  $("#img-return-button1").click(function (e) {
    e.preventDefault();
    $("#legacy2").hide();
    $("#legacy1").show();

    // Restore data ke form
    $("#nTirkah").val(formData.nTirkah);
    $("#nHutang").val(formData.nHutang);
    $("#nWasiat").val(formData.nWasiat);
    $("#nTajhiz").val(formData.nTajhiz);
    $("#nIrst").val(formData.nIrst);
    $("input[name='muwarrits'][value='" + formData.muwarrits + "']").prop(
      "checked",
      true,
    );
  });

  // Fungsi untuk memperbarui nilai cucu laki-laki
  function updatenilai_cuculakiData() {
    formData.nilai_cuculaki = parseInt($("#nilai_cuculaki").val(), 10) || 0;
    $("#saham_cuculaki").text(formData.nilai_cuculaki);
  }

  // Fungsi untuk memperbarui nilai cucu perempuan
  function updatenilai_cucuperempuanData() {
    formData.nilai_cucuperempuan =
      parseInt($("#nilai_cucuperempuan").val(), 10) || 0;
    $("#saham_cucuperempuan").text(formData.nilai_cucuperempuan);
  }

  // Event handler untuk perubahan nilai pada range cucu laki-laki
  $("#nilai_cuculaki").on("input", function () {
    updatenilai_cuculakiData();
    checkBlockingConditions();
    isSaham();
  });

  // Event handler untuk perubahan nilai pada range cucu perempuan
  $("#nilai_cucuperempuan").on("input", function () {
    updatenilai_cucuperempuanData();
    checkBlockingConditions();
    isSaham();
  });

  $("#img-next-button2").click(function (e) {
    e.preventDefault();
    if (validateInputs()) {
      saveFormData();
      $("#legacy3").hide();
      $("#legacy4").show();
    }
  });

  $("#img-return-button2").click(function (e) {
    e.preventDefault();
    if (validateInputs()) {
      saveFormData();
      $("#legacy3").hide();
      $("#legacy2").show();
    }
  });

  updatenilai_cuculakiData();
  updatenilai_cucuperempuanData();

  function toggleSpouseFieldskakeknenek() {}

  // Event listener untuk checkbox Ayah
  $(document).on("change", "#cb_ayah", function () {
    toggleSpouseFieldskakeknenek();
    checkBlockingConditions();
    isSaham();
  });

  // Event listener untuk checkbox Ibu
  $(document).on("change", "#cb_ibu", function () {
    toggleSpouseFieldskakeknenek();
    checkBlockingConditions();
    isSaham();
  });

  // Fungsi untuk memperbarui nilai Kakek
  function updateKakekData() {
    formData.nilai_kakek = $("#cb_kakek").is(":checked");
    $("#saham_kakek").text(formData.nilai_kakek ? 1 : 0);
  }

  // Fungsi untuk memperbarui nilai Nenek dari Ayah
  function updateNenekAyahData() {
    formData.nilai_nenekayah = parseInt($("#nilai_nenekayah").val(), 10) || 0;
    $("#saham_nenekayah").text(formData.nilai_nenekayah);
  }

  // Fungsi untuk memperbarui nilai Nenek dari Ibu
  function updateNenekIbuData() {
    formData.nilai_nenekibu = parseInt($("#nilai_nenekibu").val(), 10) || 0;
    $("#saham_nenekibu").text(formData.nilai_nenekibu);
  }

  // Event Listener untuk input Kakek
  $("#cb_kakek").on("change", function () {
    isSaham();
    updateKakekData();
    checkBlockingConditions();
  });

  // Event Listener untuk input Nenek dari Ayah
  $("#nilai_nenekayah").on("input", function () {
    isSaham();
    updateNenekAyahData();
    checkBlockingConditions();
  });

  // Event Listener untuk input Nenek dari Ibu
  $("#nilai_nenekibu").on("input", function () {
    isSaham();
    updateNenekIbuData();
    checkBlockingConditions();
  });

  $("#img-next-button3").click(function (e) {
    e.preventDefault();
    if (validateInputs()) {
      saveFormData();
      $("#legacy4").hide();
      $("#legacy5").show();
    }
  });

  $("#img-return-button3").click(function (e) {
    e.preventDefault();
    if (validateInputs()) {
      saveFormData();
      $("#legacy4").hide();
      $("#legacy3").show();
    }
  });

  updateKakekData();
  updateNenekAyahData();
  updateNenekIbuData();

  // Fungsi untuk memperbarui nilai Saudara Laki Kandung
  function updateSaudaraLakiKandungData() {
    formData.nilai_saudaralakikandung =
      parseInt($("#nilai_saudaralakikandung").val(), 10) || 0;
    $("#saham_saudaralakikandung").text(formData.nilai_saudaralakikandung);
  }

  // Fungsi untuk memperbarui nilai Saudara Perempuan Kandung
  function updateSaudaraPerempuanKandungData() {
    formData.nilai_saudaraperempuankandung =
      parseInt($("#nilai_saudaraperempuankandung").val(), 10) || 0;
    $("#saham_saudaraperempuankandung").text(
      formData.nilai_saudaraperempuankandung,
    );
  }

  // Event Listener untuk input Saudara Laki Kandung
  $("#nilai_saudaralakikandung").on("input", function () {
    isSaham();
    updateSaudaraLakiKandungData();
    checkBlockingConditions();
  });

  // Event Listener untuk input Saudara Perempuan Kandung
  $("#nilai_saudaraperempuankandung").on("input", function () {
    isSaham();
    updateSaudaraPerempuanKandungData();
    checkBlockingConditions();
  });

  $("#img-next-button4").click(function (e) {
    e.preventDefault();
    if (validateInputs()) {
      saveFormData();
      $("#legacy5").hide();
      $("#legacy6").show();
    }
  });

  $("#img-return-button4").click(function (e) {
    e.preventDefault();
    if (validateInputs()) {
      saveFormData();
      $("#legacy5").hide();
      $("#legacy4").show();
    }
  });

  updateSaudaraLakiKandungData();
  updateSaudaraPerempuanKandungData();

  // Fungsi untuk memperbarui nilai Saudara Laki Kandung
  function updateSaudaraLakiSeayahData() {
    formData.nilai_saudaralakiseayah =
      parseInt($("#nilai_saudaralakiseayah").val(), 10) || 0;
    $("#saham_saudaralakiseayah").text(formData.nilai_saudaralakiseayah);
  }

  // Fungsi untuk memperbarui nilai Saudara Perempuan Kandung
  function updateSaudaraPerempuanSeayahData() {
    formData.nilai_saudaraperempuanseayah =
      parseInt($("#nilai_saudaraperempuanseayah").val(), 10) || 0;
    $("#saham_saudaraperempuanseayah").text(
      formData.nilai_saudaraperempuanseayah,
    );
  }

  // Fungsi untuk memperbarui nilai Saudara Laki Kandung
  function updateSaudaraLakiSeibuData() {
    formData.nilai_saudaralakiseibu =
      parseInt($("#nilai_saudaralakiseibu").val(), 10) || 0;
    $("#saham_saudaralakiseibu").text(formData.nilai_saudaralakiseibu);
  }

  // Fungsi untuk memperbarui nilai Saudara Perempuan Kandung
  function updateSaudaraPerempuanSeibuData() {
    formData.nilai_saudaraperempuanseIbu =
      parseInt($("#nilai_saudaraperempuanseIbu").val(), 10) || 0;
    $("#saham_saudaraperempuanseIbu").text(
      formData.nilai_saudaraperempuanseIbu,
    );
  }

  // Event Listener untuk input Saudara Laki Kandung
  $("#nilai_saudaralakiseayah").on("input", function () {
    isSaham();
    updateSaudaraLakiSeayahData();
    checkBlockingConditions();
  });

  // Event Listener untuk input Saudara Perempuan Kandung
  $("#nilai_saudaraperempuanseayah").on("input", function () {
    isSaham();
    updateSaudaraPerempuanSeayahData();
    checkBlockingConditions();
  });

  // Event Listener untuk input Saudara Laki Kandung
  $("#nilai_saudaralakiseibu").on("input", function () {
    isSaham();
    updateSaudaraLakiSeibuData();
    checkBlockingConditions();
  });

  // Event Listener untuk input Saudara Perempuan Kandung
  $("#nilai_saudaraperempuanseIbu").on("input", function () {
    isSaham();
    updateSaudaraPerempuanSeibuData();
    checkBlockingConditions();
  });

  $("#img-next-button5").click(function (e) {
    e.preventDefault();
    if (validateInputs()) {
      saveFormData();
      $("#legacy6").hide();
      $("#legacy7").show();
    }
  });

  $("#img-return-button5").click(function (e) {
    e.preventDefault();
    if (validateInputs()) {
      saveFormData();
      $("#legacy6").hide();
      $("#legacy5").show();
    }
  });

  updateSaudaraLakiSeayahData();
  updateSaudaraPerempuanSeayahData();
  updateSaudaraLakiSeibuData();
  updateSaudaraPerempuanSeibuData();

  function updateAnakLakiSaudaraKandungData() {
    formData.nilai_anaklakisaudarakandung =
      parseInt($("#nilai_anaklakisaudarakandung").val(), 10) || 0;
    $("#saham_anaklakisaudarakandung").text(
      formData.nilai_anaklakisaudarakandung,
    );
  }

  function updateAnakLakiSaudaraSeayahData() {
    formData.nilai_anaklakisaudaraseayah =
      parseInt($("#nilai_anaklakisaudaraseayah").val(), 10) || 0;
    $("#saham_anaklakisaudaraseayah").text(
      formData.nilai_anaklakisaudaraseayah,
    );
  }

  $("#nilai_anaklakisaudarakandung").on("input", function () {
    isSaham();
    updateAnakLakiSaudaraKandungData();
    checkBlockingConditions();
  });

  $("#nilai_anaklakisaudaraseayah").on("input", function () {
    isSaham();
    updateAnakLakiSaudaraSeayahData();
    checkBlockingConditions();
  });

  $("#img-next-button6").click(function (e) {
    e.preventDefault();
    if (validateInputs()) {
      saveFormData();
      $("#legacy7").hide();
      $("#legacy8").show();
    }
  });

  $("#img-return-button6").click(function (e) {
    e.preventDefault();
    if (validateInputs()) {
      saveFormData();
      $("#legacy7").hide();
      $("#legacy6").show();
    }
  });

  updateAnakLakiSaudaraKandungData();
  updateAnakLakiSaudaraSeayahData();

  function updatePamanKandungData() {
    formData.nilai_pamankandungayah =
      parseInt($("#nilai_pamankandungayah").val(), 10) || 0;
    $("#saham_pamankandungayah").text(formData.nilai_pamankandungayah);
  }

  function updatePamanSekakekAyahData() {
    formData.nilai_pamansekakekayah =
      parseInt($("#nilai_pamansekakekayah").val(), 10) || 0;
    $("#saham_pamansekakekayah").text(formData.nilai_pamansekakekayah);
  }

  $("#nilai_pamankandungayah").on("input", function () {
    isSaham();
    updatePamanKandungData();
    checkBlockingConditions();
  });

  $("#nilai_pamansekakekayah").on("input", function () {
    isSaham();
    updatePamanSekakekAyahData();
    checkBlockingConditions();
  });

  $("#img-next-button7").click(function (e) {
    e.preventDefault();
    if (validateInputs()) {
      saveFormData();
      $("#legacy8").hide();
      $("#legacy9").show();
    }
  });

  $("#img-return-button7").click(function (e) {
    e.preventDefault();
    if (validateInputs()) {
      saveFormData();
      $("#legacy8").hide();
      $("#legacy7").show();
    }
  });

  updatePamanKandungData();
  updatePamanSekakekAyahData();

  function updateAnakPamanKandungData() {
    formData.nilai_anaklakipamankandung =
      parseInt($("#nilai_anaklakipamankandung").val(), 10) || 0;
    $("#saham_anaklakipamankandung").text(formData.nilai_anaklakipamankandung);
  }

  function updatePamanSekakekData() {
    formData.nilai_anaklakipamansekakek =
      parseInt($("#nilai_anaklakipamansekakek").val(), 10) || 0;
    $("#saham_anaklakipamansekakek").text(formData.nilai_anaklakipamansekakek);
  }

  $("#nilai_anaklakipamankandung").on("input", function () {
    isSaham();
    updateAnakPamanKandungData();
    checkBlockingConditions();
  });

  $("#nilai_anaklakipamansekakek").on("input", function () {
    isSaham();
    updatePamanSekakekData();
    checkBlockingConditions();
  });

  $("#img-next-button8").click(function (e) {
    e.preventDefault();
    if (validateInputs()) {
      saveFormData();
      $("#legacy9").hide();
      $("#legacy_total").show();
    }
  });

  $("#img-return-button8").click(function (e) {
    e.preventDefault();
    if (validateInputs()) {
      saveFormData();
      $("#legacy9").hide();
      $("#legacy8").show();
    }
  });

  $("#img-next-button9").click(function (e) {
    e.preventDefault();
    if (validateInputs()) {
      saveFormData();
      $("#legacy_total").hide();
      $("#legacy1").show();
    }
  });

  $("#img-return-button9").click(function (e) {
    e.preventDefault();
    if (validateInputs()) {
      saveFormData();
      $("#legacy_total").hide();
      $("#legacy9").show();
    }
  });

  updateAnakPamanKandungData();
  updatePamanSekakekData();

  function checkBlockingConditions() {
    const nilai_anaklaki = parseInt($("#nilai_anaklaki").val(), 10) || 0;
    const nilai_anakperempuan =
      parseInt($("#nilai_anakperempuan").val(), 10) || 0;
    const nilai_kakek = $("#cb_kakek").prop("checked") ? 1 : 0;
    const nilai_ayah = $("#cb_ayah").prop("checked") ? 1 : 0;
    const nilai_ibu = $("#cb_ibu").prop("checked") ? 1 : 0;
    const nilai_cuculaki = parseInt($("#nilai_cuculaki").val(), 10) || 0;
    const nilai_saudaralakikandung =
      parseInt($("#nilai_saudaralakikandung").val(), 10) || 0;
    const nilai_saudaralakiseayah =
      parseInt($("#nilai_saudaralakiseayah").val(), 10) || 0;
    const nilai_anaklakisaudarakandung =
      parseInt($("#nilai_anaklakisaudarakandung").val(), 10) || 0;
    const nilai_anaklakisaudaraseayah =
      parseInt($("#nilai_anaklakisaudaraseayah").val(), 10) || 0;
    const nilai_pamankandungayah =
      parseInt($("#nilai_pamankandungayah").val(), 10) || 0;
    const nilai_pamansekakekayah =
      parseInt($("#nilai_pamansekakekayah").val(), 10) || 0;
    const nilai_anaklakipamankandung =
      parseInt($("#nilai_anaklakipamankandung").val(), 10) || 0;

    if (nilai_anaklaki > 0) {
      $("#info_penghalang_1").show();
      $("#field_cucu").hide();
      if (nilai_anakperempuan > 1) {
        $("#info_penghalang_1a").hide();
      }
    } else {
      $("#info_penghalang_1").hide();
    }

    if (nilai_anaklaki === 0 && nilai_anakperempuan > 1) {
      $("#info_penghalang_1a").show();
      $("#field_cucu").hide();
    } else if (nilai_anaklaki === 0 && nilai_anakperempuan <= 1) {
      $("#info_penghalang_1a").hide();
      $("#field_cucu").show();
    }

    if (nilai_ayah && nilai_ibu) {
      // Jika Ayah dan Ibu dicentang
      $("#field_kakek").hide();
      $("#field_nenekayah").hide();
      $("#field_nenekibu").hide();
      $("#info_penghalang_2").show();
    } else {
      $("#field_kakek").toggle(!nilai_ayah);
      $("#field_nenekayah").toggle(!nilai_ibu);
      $("#field_nenekibu").toggle(!nilai_ibu);
      $("#info_penghalang_2").hide();
    }

    if (nilai_anaklaki > 0) {
      $("#info_penghalang_1").show();
      $("#field_cucu").hide();
      if (nilai_anakperempuan > 1) {
        $("#info_penghalang_1a").hide();
      }
    } else {
      $("#info_penghalang_1").hide();
    }

    if (nilai_anaklaki > 0 && nilai_ayah > 0) {
      $("#info_penghalang_3").show();
      $("#si_penghalang").text("Ayah & Anak Laki-Laki");
      $("#field_saudaraperempuankandung").hide();
      $("#field_saudaralakikandung").hide();
    } else if (nilai_ayah > 0) {
      $("#info_penghalang_3").show();
      $("#si_penghalang").text("Ayah");
      $("#field_saudaraperempuankandung").hide();
      $("#field_saudaralakikandung").hide();
    } else if (nilai_anaklaki > 0) {
      $("#info_penghalang_3").show();
      $("#si_penghalang").text("Anak Laki-laki");
      $("#field_saudaraperempuankandung").hide();
      $("#field_saudaralakikandung").hide();
    } else {
      $("#field_saudaraperempuankandung").show();
      $("#field_saudaralakikandung").show();
    }

    if (nilai_ayah > 0) {
      $("#info_penghalang_4a").show();
      $("#si_penghalang_4a").text("Ayah");
      $("#field_saudaralakiseayah").hide();
      $("#field_saudaraperempuanseayah").hide();
      $("#info_penghalang_4b").show();
      $("#si_penghalang_4b").text("Ayah");
      $("#field_saudaralakiseibu").hide();
      $("#field_saudaraperempuanseibu").hide();
      $("#info_penghalang_5a").show();
      $("#si_penghalang_5a").text("Ayah");
      $("#info_penghalang_5b").show();
      $("#si_penghalang_5b").text("Ayah");
      $("#field_anaklakisaudarakandung").hide();
      $("#field_anaklakisaudaraseayah").hide();
      $("#info_penghalang_6a").show();
      $("#si_penghalang_6a").text("Ayah");
      $("#info_penghalang_6b").show();
      $("#si_penghalang_6b").text("Ayah");
      $("#field_pamankandung").hide();
      $("#field_pamansekakekayah").hide();
      $("#info_penghalang_7a").show();
      $("#si_penghalang_7a").text("Ayah");
      $("#info_penghalang_7b").show();
      $("#si_penghalang_7b").text("Ayah");
      $("#field_anaklakipamansekandung").hide();
      $("#field_anaklakipamansekakek").hide();
    } else if (nilai_anaklaki > 0) {
      $("#info_penghalang_4a").show();
      $("#si_penghalang_4a").text("Anak Laki-Laki");
      $("#field_saudaralakiseayah").hide();
      $("#field_saudaraperempuanseayah").hide();
      $("#info_penghalang_4b").show();
      $("#si_penghalang_4b").text("Anak Laki-Laki");
      $("#field_saudaralakiseibu").hide();
      $("#field_saudaraperempuanseibu").hide();
      $("#info_penghalang_5a").show();
      $("#si_penghalang_5a").text("Anak Laki-Laki");
      $("#info_penghalang_5b").show();
      $("#si_penghalang_5b").text("Anak Laki-Laki");
      $("#field_anaklakisaudarakandung").hide();
      $("#field_anaklakisaudaraseayah").hide();
      $("#info_penghalang_6a").show();
      $("#si_penghalang_6a").text("Anak Laki-Laki");
      $("#info_penghalang_6b").show();
      $("#si_penghalang_6b").text("Anak Laki-Laki");
      $("#field_pamankandung").hide();
      $("#field_pamansekakekayah").hide();
      $("#info_penghalang_7a").show();
      $("#si_penghalang_7a").text("Anak Laki-Laki");
      $("#info_penghalang_7b").show();
      $("#si_penghalang_7b").text("Anak Laki-Laki");
      $("#field_anaklakipamansekandung").hide();
      $("#field_anaklakipamansekakek").hide();
    } else if (nilai_kakek > 0) {
      $("#info_penghalang_4b").show();
      $("#si_penghalang_4a").text("Kakek");
      $("#field_saudaraperempuanseibu").hide();
      $("#field_saudaralakiseibu").hide();
      $("#info_penghalang_5a").show();
      $("#si_penghalang_5a").text("Kakek");
      $("#info_penghalang_5b").show();
      $("#si_penghalang_5b").text("Kakek");
      $("#field_anaklakisaudarakandung").hide();
      $("#field_anaklakisaudaraseayah").hide();
      $("#info_penghalang_6a").show();
      $("#si_penghalang_6a").text("Kakek");
      $("#info_penghalang_6b").show();
      $("#si_penghalang_6b").text("Kakek");
      $("#field_pamankandung").hide();
      $("#field_pamansekakekayah").hide();
      $("#info_penghalang_7a").show();
      $("#si_penghalang_7a").text("Kakek");
      $("#info_penghalang_7b").show();
      $("#si_penghalang_7b").text("Kakek");
      $("#field_anaklakipamansekandung").hide();
      $("#field_anaklakipamansekakek").hide();
    } else if (nilai_cuculaki > 0) {
      $("#info_penghalang_4b").show();
      $("#si_penghalang_4a").text("Cucu Laki-Laki");
      $("#field_saudaraperempuanseibu").hide();
      $("#field_saudaralakiseibu").hide();
      $("#info_penghalang_5a").show();
      $("#si_penghalang_5a").text("Cucu Laki-Laki");
      $("#info_penghalang_5b").show();
      $("#si_penghalang_5b").text("Cucu Laki-Laki");
      $("#field_anaklakisaudarakandung").hide();
      $("#field_anaklakisaudaraseayah").hide();
      $("#info_penghalang_6a").show();
      $("#si_penghalang_6a").text("Cucu Laki-Laki");
      $("#info_penghalang_6b").show();
      $("#si_penghalang_6b").text("Cucu Laki-Laki");
      $("#field_pamankandung").hide();
      $("#field_pamansekakekayah").hide();
      $("#info_penghalang_7a").show();
      $("#si_penghalang_7a").text("Cucu Laki-Laki");
      $("#info_penghalang_7b").show();
      $("#si_penghalang_7b").text("Cucu Laki-Laki");
      $("#field_anaklakipamansekandung").hide();
      $("#field_anaklakipamansekakek").hide();
    } else if (nilai_saudaralakikandung > 0) {
      $("#info_penghalang_4a").show();
      $("#si_penghalang_4a").text("Saudara Laki-Laki Kandung");
      $("#field_saudaraperempuanseayah").hide();
      $("#field_saudaralakiseayah").hide();
      $("#info_penghalang_5a").show();
      $("#si_penghalang_5a").text("Saudara Laki-Laki Kandung");
      $("#info_penghalang_5b").show();
      $("#si_penghalang_5b").text("Saudara Laki-Laki Kandung");
      $("#field_anaklakisaudarakandung").hide();
      $("#field_anaklakisaudaraseayah").hide();
      $("#info_penghalang_6a").show();
      $("#si_penghalang_6a").text("Saudara Laki-Laki Kandung");
      $("#info_penghalang_6b").show();
      $("#si_penghalang_6b").text("Saudara Laki-Laki Kandung");
      $("#field_pamankandung").hide();
      $("#field_pamansekakekayah").hide();
      $("#info_penghalang_7a").show();
      $("#si_penghalang_7a").text("Saudara Laki-Laki Kandung");
      $("#info_penghalang_7b").show();
      $("#si_penghalang_7b").text("Saudara Laki-Laki Kandung");
      $("#field_anaklakipamansekandung").hide();
      $("#field_anaklakipamansekakek").hide();
    } else if (nilai_saudaralakiseayah > 0) {
      $("#info_penghalang_5a").show();
      $("#si_penghalang_5a").text("Saudara Laki-Laki Seayah");
      $("#info_penghalang_5b").show();
      $("#si_penghalang_5b").text("Saudara Laki-Laki Seayah");
      $("#field_anaklakisaudarakandung").hide();
      $("#field_anaklakisaudaraseayah").hide();
      $("#info_penghalang_6a").show();
      $("#si_penghalang_6a").text("Saudara Laki-Laki Seayah");
      $("#info_penghalang_6b").show();
      $("#si_penghalang_6b").text("Saudara Laki-Laki Seayah");
      $("#field_pamankandung").hide();
      $("#field_pamansekakekayah").hide();
      $("#info_penghalang_7a").show();
      $("#si_penghalang_7a").text("Saudara Laki-Laki Seayah");
      $("#info_penghalang_7b").show();
      $("#si_penghalang_7b").text("Saudara Laki-Laki Seayah");
      $("#field_anaklakipamansekandung").hide();
      $("#field_anaklakipamansekakek").hide();
    } else if (nilai_anaklakisaudarakandung > 0) {
      $("#info_penghalang_6a").show();
      $("#si_penghalang_6a").text("Anak Laki-Laki Saudara Kandung");
      $("#info_penghalang_6b").show();
      $("#si_penghalang_6b").text("Anak Laki-Laki Saudara Kandung");
      $("#field_pamankandung").hide();
      $("#field_pamansekakekayah").hide();
      $("#info_penghalang_7a").show();
      $("#si_penghalang_7a").text("Anak Laki-Laki Saudara Kandung");
      $("#info_penghalang_7b").show();
      $("#si_penghalang_7b").text("Anak Laki-Laki Saudara Kandung");
      $("#field_anaklakipamansekandung").hide();
      $("#field_anaklakipamansekakek").hide();
    } else if (nilai_anaklakisaudaraseayah > 0) {
      $("#info_penghalang_5b").show();
      $("#si_penghalang_5b").text("Anak Laki-Laki Saudara Kandung");
      $("#field_anaklakisaudaraseayah").hide();
      $("#info_penghalang_6a").show();
      $("#si_penghalang_6a").text("Anak Laki-Laki Saudara Seayah");
      $("#info_penghalang_6b").show();
      $("#si_penghalang_6b").text("Anak Laki-Laki Saudara Seayah");
      $("#field_pamankandung").hide();
      $("#field_pamansekakekayah").hide();
      $("#info_penghalang_7a").show();
      $("#si_penghalang_7a").text("Anak Laki-Laki Saudara Seayah");
      $("#info_penghalang_7b").show();
      $("#si_penghalang_7b").text("Anak Laki-Laki Saudara Seayah");
      $("#field_anaklakipamansekandung").hide();
      $("#field_anaklakipamansekakek").hide();
    } else if (nilai_pamankandungayah > 0) {
      $("#info_penghalang_6b").show();
      $("#si_penghalang_6b").text("Paman Kandung (dari Ayah)");
      $("#field_pamansekakekayah").hide();
      $("#info_penghalang_7a").show();
      $("#si_penghalang_7a").text("Paman Kandung (dari Ayah)");
      $("#field_anaklakipamansekandung").hide();
      $("#field_anaklakipamansekakek").hide();
    } else if (nilai_pamansekakekayah > 0) {
      $("#info_penghalang_7a").show();
      $("#si_penghalang_7a").text("Paman Sekakek (dari Ayah)");
      $("#info_penghalang_7b").show();
      $("#si_penghalang_7b").text("Paman Sekakek (dari Ayah)");
      $("#field_anaklakipamansekandung").hide();
      $("#field_anaklakipamansekakek").hide();
    } else if (nilai_anaklakipamankandung > 0) {
      $("#info_penghalang_7b").show();
      $("#si_penghalang_7b").text("Paman Sekakek (dari Ayah)");
      $("#field_anaklakipamansekakek").hide();
    } else {
      $("#info_penghalang_4a").hide();
      $("#field_saudaralakiseayah").show();
      $("#field_saudaraperempuanseayah").show();
      $("#info_penghalang_4b").hide();
      $("#field_saudaralakiseibu").show();
      $("#field_saudaraperempuanseibu").show();
      $("#info_penghalang_5a").hide();
      $("#info_penghalang_5b").hide();
      $("#field_anaklakisaudarakandung").show();
      $("#field_anaklakisaudaraseayah").show();
      $("#info_penghalang_6a").hide();
      $("#info_penghalang_6b").hide();
      $("#field_pamankandung").show();
      $("#field_pamansekakekayah").show();
      $("#info_penghalang_7a").hide();
      $("#info_penghalang_7b").hide();
      $("#field_anaklakipamansekandung").show();
      $("#field_anaklakipamansekakek").show();
    }
  }

  function toRp(amount) {
    // Konversi angka ke format Rupiah
    let formattedString = parseInt(Math.round(amount), 10)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return "Rp." + formattedString;
  }

  /*  */

  function determineShareType(shareString) {
    let shareType = shareString;
    let indexOfAshobah = shareString.indexOf("A");
    let indexOfMusytarakah = shareString.indexOf("M");
    let indexOfBersama = shareString.indexOf("B");
    let indexOfPlusAshobah = shareString.indexOf("+A");

    if (indexOfAshobah > 0) {
      shareType = "Ashobah";
    }
    if (indexOfMusytarakah > 0) {
      shareType = "Musytarakah";
    }
    if (indexOfBersama > 0) {
      shareType = "Bersama";
    }
    if (indexOfPlusAshobah > 0) {
      shareType = shareString + "sobah";
    }

    return shareType;
  }

  function isSaham() {
    let {
      nilai_ayah,
      nilai_ibu,
      nilai_suami,
      nilai_istri,
      nilai_anaklaki,
      nilai_anakperempuan,
      nilai_cuculaki,
      nilai_cucuperempuan,
      nilai_kakek,
      nilai_nenekayah,
      nilai_nenekibu,
      nilai_nenek2,
      nilai_saudaralakikandung,
      nilai_saudaraperempuankandung,
      nilai_saudaralakiseayah,
      nilai_saudaraperempuanseayah,
      nilai_saudaralakiseibu,
      nilai_saudaraperempuanseIbu,
      nilai_anaklakisaudarakandung,
      nilai_anaklakisaudaraseayah,
      nilai_pamankandungayah,
      nilai_pamansekakekayah,
      nilai_anaklakipamankandung,
      nilai_anaklakipamansekakek,
      nilai_anak,
      nilai_cucu,
      nilai_saudara,
      nilai_saudaraibu,
    } = formData;
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
      rAnakPerempuan = "2/3";
    }
    if (nilai_cucuperempuan > 1 && nilai_cuculaki == 0) {
      rCucuPerempuan = "2/3";
    }
    if (nilai_saudaraperempuankandung > 1 && nilai_saudaralakikandung == 0) {
      rSaudaraPerempuanKandung = "2/3";
    }
    if (nilai_saudaraperempuankandung > 1) {
      rSaudaraPerempuanKandung = "2/3";
    }
    if (nilai_saudaraperempuanseayah > 1 && nilai_saudaralakiseayah == 0) {
      rSaudaraPerempuanSeAyah = "2/3";
    }
    if (nilai_anak == 0 || nilai_cucu == 0 || nilai_saudara > 1) {
      if (nilai_ibu > 0) {
        rIbu = "1/3";
      } else {
        rIbu = "0";
        rumusIbu = "";
      }
      if (nilai_ayah > 0) {
        rAyah = "1:1A";
        rumusAyah = "Ashobah";
      } else {
        rAyah = "0";
        rumusAyah = "";
      }
    }
    if ((nilai_suami > 0 || nilai_istri > 0) && nilai_ayah > 0) {
      if (nilai_ibu > 0) {
        rIbu = "1:3A";
        rumusIbu = "1/3 Sisa (Gharawain)";
      } else {
        rIbu = "0";
        rumusIbu = "";
      }
    }
    if (
      (nilai_anak > 0 || nilai_cucu > 0 || nilai_saudara > 1) &&
      nilai_ibu > 0 &&
      nilai_ayah > 0
    ) {
      if (nilai_ibu > 0) {
        rIbu = "1/6";
      } else {
        rIbu = "0";
        rumusIbu = "";
      }
      if (nilai_ayah > 0) {
        rAyah = "1/6+";
        rumusAyah = "1/6 + Sisa";
      } else {
        rAyah = "0";
        rumusAyah = "";
      }
    }
    if (nilai_anak > 0 || nilai_cucu > 0 || nilai_saudara > 1) {
      if (nilai_ibu > 0) {
        rIbu = "1/6";
      } else {
        rIbu = "0";
      }
    }
    if (nilai_anakperempuan == 1) {
      if (nilai_cucuperempuan > 0) {
        rCucuPerempuan = "1/6";
      } else {
        rCucuPerempuan = "0";
      }
    }
    if (nilai_anaklaki > 0 || nilai_cuculaki > 0) {
      if (nilai_ayah > 0) {
        rAyah = "1/6";
      } else {
        rAyah = "0";
      }
      if (nilai_kakek > 0) {
        rKakek = "1/6";
      } else {
        rKakek = "0";
      }
    }
    if (
      nilai_anaklaki == 0 &&
      nilai_anakperempuan == 0 &&
      nilai_cuculaki == 0 &&
      nilai_cucuperempuan == 0 &&
      nilai_kakek > 0
    ) {
      rKakek = "1/6";
    }
    if ((nilai_istri > 0 || nilai_ibu > 0) && nilai_kakek > 0) {
      if (
        nilai_anaklaki == 0 &&
        nilai_anakperempuan == 0 &&
        nilai_cuculaki == 0 &&
        nilai_cucuperempuan == 0
      ) {
        rKakek = "1:1A";
      }
    }
    if (
      nilai_saudaralakiseibu > 0 &&
      (nilai_saudaralakikandung == 0 || nilai_suami == 0 || nilai_ibu == 0)
    ) {
      if (nilai_saudaraperempuanseIbu > 0) {
        rSaudaraLakiSeIbu = "1/3B";
      } else {
        if (nilai_saudaraibu == 1) {
          rSaudaraLakiSeIbu = "1/6";
        }
        if (nilai_saudaraibu > 1) {
          rSaudaraLakiSeIbu = "1/3";
        }
      }
    } else {
      if (
        nilai_saudaralakiseibu == 1 &&
        nilai_saudaraperempuanseIbu == 0 &&
        nilai_saudaralakikandung > 0
      ) {
        rSaudaraLakiSeIbu = "1/6";
      }
    }
    if (
      nilai_saudaraperempuanseIbu > 0 &&
      (nilai_saudaralakikandung == 0 || nilai_suami == 0 || nilai_ibu == 0)
    ) {
      if (nilai_saudaralakiseibu > 0) {
        rSaudaraPerempuanSeIbu = "1/3B";
      } else {
        if (nilai_saudaraibu == 1) {
          rSaudaraPerempuanSeIbu = "1/6";
        }
        if (nilai_saudaraibu > 1) {
          rSaudaraPerempuanSeIbu = "1/3";
        }
      }
    } else {
      if (
        nilai_saudaraperempuanseIbu == 1 &&
        nilai_saudaralakiseibu == 0 &&
        nilai_saudaralakikandung > 0
      ) {
        rSaudaraPerempuanSeIbu = "1/6";
      }
    }
    if (nilai_saudaraperempuankandung == 1) {
      if (nilai_saudaraperempuanseayah > 0) {
        rSaudaraPerempuanSeAyah = "1/6";
      }
    }
    if (nilai_ibu == 0) {
      if (nilai_nenekayah > 0) {
        rNenekAyah = "1/6";
      } else {
        rNenekAyah = "0";
      }
      if (nilai_nenekibu > 0) {
        rNenekIbu = "1/6";
      } else {
        rNenekIbu = "0";
      }
      if (nilai_nenekayah > 0 && nilai_nenekibu > 0) {
        rNenekAyah = "1/6B";
        rNenekIbu = "1/6B";
      }
    }
    if (
      (nilai_anakperempuan > 0 || nilai_cucuperempuan > 0) &&
      nilai_ibu == 0
    ) {
      if (nilai_ayah > 0) {
        if (nilai_anaklaki > 0 || nilai_cuculaki > 0) {
          rAyah = "1/6";
          rumusAyah = "1/6";
        } else {
          rAyah = "1/6+";
          rumusAyah = "1/6 Sisa";
        }
      } else {
        rAyah = "0";
        rumusAyah = "";
      }
    }
    if (
      (nilai_anakperempuan > 0 || nilai_cucuperempuan > 0) &&
      nilai_anaklaki == 0 &&
      nilai_cuculaki == 0
    ) {
      if (nilai_kakek > 0) {
        rKakek = "1/6+";
        rumusKakek = "1/6 + Sisa";
      } else {
        rKakek = "0";
        rumusKakek = "";
      }
    }
    if (nilai_suami > 0) {
      rSuami = "1/2";
    } else {
      rSuami = "0";
    }
    if (nilai_anak == 0 || nilai_cucu == 0) {
      if (nilai_suami > 0) {
        rSuami = "1/2";
      } else {
        rSuami = "0";
      }
    }
    if (nilai_anakperempuan == 1 && nilai_anaklaki == 0) {
      rAnakPerempuan = "1/2";
    }
    if (
      nilai_cucuperempuan == 1 &&
      nilai_cuculaki == 0 &&
      nilai_anakperempuan == 0
    ) {
      rCucuPerempuan = "1/2";
    }
    if (
      nilai_saudaraperempuanseayah == 1 &&
      nilai_saudaralakiseayah == 0 &&
      nilai_saudaraperempuankandung == 0
    ) {
      rSaudaraPerempuanSeAyah = "1/2";
    }
    if (nilai_saudaraperempuankandung == 1 && nilai_saudaralakikandung == 0) {
      rSaudaraPerempuanKandung = "1/2";
    }
    if (nilai_anak == 0 || nilai_cucu == 0) {
      if (nilai_istri > 0) {
        rIstri = "1/4";
      } else {
        rIstri = "0";
      }
    }
    if (nilai_anak > 0 || nilai_cucu > 0) {
      if (nilai_suami > 0) {
        rSuami = "1/4";
      } else {
        rSuami = "0";
      }
    }
    if (nilai_anak > 0 || nilai_cucu > 0) {
      if (nilai_istri > 0) {
        rIstri = "1/8";
      } else {
        rIstri = "0";
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
        rCucuLaki = "2:1A";
        rCucuPerempuan = "1:1A";
      } else {
        rCucuLaki = "1:1A";
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
      rKakek = "1:1A";
    }
    if (nilai_anaklaki > 0) {
      if (nilai_anakperempuan > 0) {
        rAnakLaki = "2:1A";
        rumusAnakLaki = "Ashobah";
        rAnakPerempuan = "1:1A";
        rumusAnakPerempuan = "Ashobah";
      } else {
        rAnakLaki = "1:1A";
        rumusAnakLaki = "Ashobah";
      }
    }
    if (nilai_saudaralakikandung > 0) {
      if (nilai_suami > 0 && nilai_ibu > 0 && nilai_saudaraperempuanseIbu > 1) {
      } else {
        rSaudaraLakiKandung = "1:1A";
        rumusSaudaraLakiKandung = "Ashobah";
      }
    }
    if (nilai_saudaralakiseayah > 0) {
      if (nilai_saudaraperempuanseayah > 0) {
        rSaudaraLakiSeAyah = "2:1A";
        rumusSaudaraLakiSeAyah = "Ashobah";
        rSaudaraPerempuanSeAyah = "1:1A";
        rumusSaudaraPerempuanSeAyah = "Ashobah";
      } else {
        rSaudaraLakiSeAyah = "1:1A";
        rumusSaudaraLakiSeAyah = "Ashobah";
      }
    }
    if (
      nilai_saudaraperempuankandung > 0 &&
      (nilai_anakperempuan > 0 || nilai_cucuperempuan > 0)
    ) {
      if (nilai_saudaralakiseayah == 0 && nilai_saudaraperempuanseayah == 0) {
        rSaudaraPerempuanKandung = "1:1A";
        rumusSaudaraPerempuanKandung = "Ashobah";
      }
      if (nilai_saudaralakikandung > 0) {
        rSaudaraLakiKandung = "2:1A";
        rumusSaudaraLakiKandung = "Ashobah";
      } else {
        rSaudaraLakiKandung = "0";
        rumusSaudaraLakiKandung = "";
      }
    }
    if (nilai_saudaraperempuankandung > 0 && nilai_saudaralakikandung > 0) {
      rSaudaraLakiKandung = "2:1A";
      rumusSaudaraLakiKandung = "Ashobah";
      rSaudaraPerempuanKandung = "1:1A";
      rumusSaudaraPerempuanKandung = "Ashobah";
    }
    if (nilai_saudaraperempuanseayah > 0 && nilai_saudaralakiseayah > 0) {
      rSaudaraPerempuanSeAyah = "1:1A";
      rumusSaudaraPerempuanSeAyah = "Ashobah";
    }
    if (
      nilai_saudaraperempuanseayah > 0 &&
      (nilai_anakperempuan > 0 || nilai_cucuperempuan > 0)
    ) {
      rSaudaraPerempuanSeAyah = "1:1A";
      rumusSaudaraPerempuanSeAyah = "Ashobah";
    }
    if (nilai_anaklakisaudarakandung > 0) {
      rAnakLakiSaudaraKandung = "1:1A";
      rumusAnakLakiSaudaraKandung = "Ashobah";
    }
    if (nilai_anaklakisaudaraseayah > 0) {
      rAnakLakiSaudaraSeAyah = "1:1A";
      rumusAnakLakiSaudaraSeAyah = "Ashobah";
    }
    if (nilai_pamankandungayah > 0) {
      rPamanKandungAyah = "1:1A";
      rumusPamanKandungAyah = "Ashobah";
    }
    if (nilai_pamansekakekayah > 0) {
      rPamanSeKakekAyah = "1:1A";
      rumusPamanSeKakekAyah = "Ashobah";
    }
    if (nilai_anaklakipamankandung > 0) {
      rAnakLakiPamanKandung = "1:1A";
      rumusAnakLakiPamanKandung = "Ashobah";
    }
    if (nilai_anaklakipamansekakek > 0) {
      rAnakLakiPamanSeKakek = "1:1A";
      rumusAnakLakiPamanSeKakek = "Ashobah";
    }
    if (
      nilai_saudaraperempuankandung > 0 &&
      nilai_saudaralakiseayah > 0 &&
      nilai_saudaralakiseibu > 0 &&
      nilai_saudaraperempuanseIbu > 0
    ) {
      rSaudaraPerempuanKandung = "1:1A";
      rSaudaraLakiSeAyah = "2:1A";
      rumusSaudaraPerempuanKandung = "Kalalah";
      rumusSaudaraLakiSeAyah = "Kalalah";
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
          ":1M";
        if (nilai_saudaraperempuanseIbu > 0) {
          rSaudaraPerempuanSeIbu =
            parseInt(nilai_saudaralakikandung) +
            parseInt(nilai_saudaralakiseibu) +
            parseInt(nilai_saudaraperempuanseIbu) +
            ":1M";
        }
        if (nilai_saudaralakiseibu > 0) {
          rSaudaraLakiSeIbu =
            parseInt(nilai_saudaralakikandung) +
            parseInt(nilai_saudaralakiseibu) +
            parseInt(nilai_saudaraperempuanseIbu) +
            ":1M";
        }
        rumusSaudaraLakiKandung = "Musytarakah";
        rumusPerempuanSeIbu = "Musytarakah";
      } else {
        if (nilai_saudaraperempuanseIbu > 0) {
          if (nilai_saudaralakiseibu > 0) {
            rSaudaraLakiSeIbu = "1/3B";
          }
        } else {
          if (nilai_saudaraibu == 1) {
            rSaudaraLakiSeIbu = "1/6";
          }
          if (nilai_saudaraibu > 1) {
            rSaudaraLakiSeIbu = "1/3";
          }
        }
        if (nilai_saudaralakiseibu > 0) {
          if (nilai_saudaraperempuanseIbu > 0) {
            rSaudaraPerempuanSeIbu = "1/3B";
          }
        } else {
          if (nilai_saudaraibu == 1) {
            rSaudaraPerempuanSeIbu = "1/6";
          }
          if (nilai_saudaraibu > 1) {
            rSaudaraPerempuanSeIbu = "1/3";
          }
        }
      }
    }
    $("#saham_anaklaki").text(rAnakLaki);
    $("#saham_anakperempuan").text(rAnakPerempuan);
    $("#saham_ibu").text(rIbu);
    $("#saham_ayah").text(rAyah);
    $("#saham_istri").text(rIstri);
    $("#saham_suami").text(rSuami);
    $("#saham_cuculaki").text(rCucuLaki);
    $("#saham_cucuperempuan").text(rCucuPerempuan);
    $("#saham_kakek").text(rKakek);
    $("#saham_nenekayah").text(rNenekAyah);
    $("#saham_nenekibu").text(rNenekIbu);
    $("#saham_saudaralakikandung").text(rSaudaraLakiKandung);
    $("#saham_saudaraperempuankandung").text(rSaudaraPerempuanKandung);
    $("#saham_saudaralakiseayah").text(rSaudaraLakiSeAyah);
    $("#saham_saudaraperempuanseayah").text(rSaudaraPerempuanSeAyah);
    $("#saham_saudaralakiseibu").text(rSaudaraLakiSeIbu);
    $("#saham_saudaraperempuanseibu").text(rSaudaraPerempuanSeIbu);
    $("#saham_anaklakisaudarakandung").text(rAnakLakiSaudaraKandung);
    $("#saham_anaklakisaudaraseayah").text(rAnakLakiSaudaraSeAyah);
    $("#saham_pamankandungayah").text(rPamanKandungAyah);
    $("#saham_pamansekakekayah").text(rPamanSeKakekAyah);
    $("#saham_anaklakipamankandung").text(rAnakLakiPamanKandung);
    $("#saham_anaklakipamansekakek").text(rAnakLakiPamanSeKakek);
  }
});

$(window).load(function () {
  $(document).on("click", "#hitung", function () {
    // Fungsi untuk memproses nilai dan menambahkannya ke array
    function processValue(nilai, rString) {
      if (nilai > 0) {
        let firstLetter = rString.substr(0, 1),
          secondLetter = rString.substr(2, 1),
          thirdLetter = rString.substr(3, 1);

        ash.push(thirdLetter);
        _a.push(firstLetter);
        a.push(secondLetter);
        a2.push(nilai);
      }
    }

    // Proses nilai-nilai dengan memanggil fungsi `processValue`
    processValue(nilai_suami, rSuami);
    processValue(nilai_istri, rIstri);
    processValue(nilai_anaklaki, rAnakLaki);
    processValue(nilai_anakperempuan, rAnakPerempuan);
    processValue(nilai_ayah, rAyah);
    processValue(nilai_ibu, rIbu);
    processValue(nilai_cuculaki, rCucuLaki);
    processValue(nilai_cucuperempuan, rCucuPerempuan);
    processValue(nilai_kakek, rKakek);
    processValue(nilai_nenekayah, rNenekAyah);
    processValue(nilai_nenekibu, rNenekIbu);
    processValue(nilai_saudaralakikandung, rSaudaraLakiKandung);
    processValue(nilai_Saudaralakiseayah, rSaudaraLakiSeAyah);
    processValue(nilai_saudaraperempuanseayah, rSaudaraPerempuanSeAyah);
    processValue(nilai_saudaralakiseibu, rSaudaraLakiSeIbu);
    processValue(nilai_saudaraperempuanseIbu, rSaudaraPerempuanSeIbu);
    processValue(nilai_saudaraperempuankandung, rSaudaraPerempuanKandung);
    processValue(nilai_anaklakisaudarakandung, rAnakLakiSaudaraKandung);
    processValue(nilai_anaklakisaudaraseayah, rAnakLakiSaudaraSeAyah);
    processValue(nilai_pamankandungayah, rPamanKandungAyah);
    processValue(nilai_pamansekakekayah, rPamanSeKakekAyah);
    processValue(nilai_anaklakipamankandung, rAnakLakiPamanKandung);
    processValue(nilai_anaklakipamansekakek, rAnakLakiPamanSeKakek);
  });
});
