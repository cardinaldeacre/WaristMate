var mode = "USER";
var sisasaham = 0;
var totalashobah = 0;
var jenis = "";
var naul = 0;
var nradd = 0;
var _Halaman = 0; //
var nIrst = 0;
var _HartaKotor = 0;
var _Harta = 0;
var _GonoGini = 0;
var hartaashobah = 0;
var _Hutang = 0;
var _Makam = 0;
var _Wasiat = 0;
var nilai_istri = 0;
var nilai_suami = 0;
var nilai_anaklaki = 0;
var nilai_anakperempuan = 0;
var nilai_ayah = 0;
var nilai_ibu = 0;
var nilai_cuculaki = 0;
var nilai_cucuperempuan = 0;
var nilai_anaklakipamankandung = 0;
var nilai_anaklakipamansekakek = 0;
var nilai_anaklakisaudarakandung = 0;
var nilai_anaklakisaudaraseayah = 0;
var nilai_kakek = 0;
var nilai_nenekayah = 0;
var nilai_nenekibu = 0;
var nilai_nenek2 = 0;
var nilai_pamankandungayah = 0;
var nilai_pamansekakekayah = 0;
var nilai_saudaralakikandung = 0;
var nilai_saudaralakiseayah = 0;
var nilai_saudaralakiseibu = 0;
var nilai_saudaraperempuanseayah = 0;
var nilai_saudaraperempuanseIbu = 0;
var nilai_saudaraperempuankandung = 0;
var _Waris = "";
var _Kelamin = "";
var nilai_anak = 0;
var nilai_cucu = 0;
var nilai_saudara = 0;
var nilai_saudaraibu = 0;
var nilai_saudaraayah = 0;
var nilai_saudarakandung = 0;
var rIstri = "1/4";
var rSuami = "1/2";
var rAnakLaki = "2:1A";
var rAnakPerempuan = "1/2";
var rAyah = "1/6";
var rIbu = "1/3";
var rCucuLaki = "2:1A";
var rCucuPerempuan = "1/2";
var rKakek = "1/6";
var rNenekAyah = "1/6";
var rNenekIbu = "1/6";
var rSaudaraLakiKandung = "2:1A";
var rSaudaraPerempuanKandung = "1/2";
var rSaudaraLakiSeAyah = "2:1A";
var rSaudaraPerempuanSeAyah = "1/2";
var rSaudaraLakiSeIbu = "1/6";
var rSaudaraPerempuanSeIbu = "1/6";
var rAnakLakiSaudaraKandung = "2:1A";
var rAnakLakiSaudaraSeAyah = "2:1A";
var rPamanKandungAyah = "2:1A";
var rPamanSeKakekAyah = "2:1A";
var rAnakLakiPamanKandung = "2:1A";
var rAnakLakiPamanSeKakek = "2:1A";

var a = [],
  a1 = [],
  a2 = [];
// kunci ashabah
var _a = [],
  _a1 = [];
var ash = [],
  ash1 = [];
if (typeof partnerHTML == undefined) {
  var partnerHTML = "";
}
$("#NilaiHartaKotor,#NilaiHutang,#NilaiGonoGini,#NilaiMakam,#NilaiWasiat").live(
  "change paste keyup",
  function () {
    _HartaKotor = $("#NilaiHartaKotor").val();
    _Harta = _HartaKotor - _GonoGini;
    _Hutang = $("#NilaiHutang").val();
    _Makam = $("#NilaiMakam").val();
    _Wasiat = $("#NilaiWasiat").val();
    nIrst = _Harta - _Hutang - _Makam - _Wasiat;
    $("#NilaiHarta").val(_Harta);
    $("#hasil_harta").val(toRp(nIrst));
    $("#hasil_harta").css({ color: "#000" });
  },
);
$("#gonogini").change(function () {
  _GonoGini = ($("input=[name=gonogini]:checked").val() / 100) * _HartaKotor;
  _Harta = _HartaKotor - _GonoGini;
  nIrst = _Harta - _Hutang - _Makam - _Wasiat;
  $("#NilaiHarta").val(_HartaKotor - _GonoGini);
  $("#hasil_harta").val(toRp(nIrst));
});
$("#cb_hartabersama").click(function () {
  $("#pewaris").change();
  var ratioParts = $("#cb_hartabersama").attr("checked");
  if (ratioParts) {
    $("#field_tirkah").show();
    $(".field_totalharta").text("Harta Sebelum Tirkah (total Harta)");
  } else {
    $("#field_tirkah").hide();
    $(".field_totalharta").html("Tirkah (Harta <i>muwarrits</i>)");
    _GonoGini = 0;
    _Harta = _HartaKotor - _GonoGini;
    nIrst = _Harta - _Hutang - _Makam - _Wasiat;
    $("#NilaiHarta").val(_Harta);
    $("#hasil_harta").val(toRp(nIrst));
    $("#nilai_istri").val("0").slider().slider("refresh");
    $("#field_istri").hide();
    $("#field_suami").show();
    $("#field_gonogini").hide();
    $("#NilaiGonoGini").val("").val();
  }
});

//isHartaBersamaChecked = harta bersama

$("#pewaris").change(function () {
  _Waris = $("input[name=pewaris]:checked").val();
  var isHartaBersamaChecked = $("#cb_hartabersama").attr("checked");
  if (_Waris == "Laki-laki") {
    if (isHartaBersamaChecked) {
      var gonoginiPercentage = $("input=[name=gonogini]:checked").val();
      if (gonoginiPercentage > 0) {
        _GonoGini =
          ($("input=[name=gonogini]:checked").val() / 100) * _HartaKotor;
        _Harta = _HartaKotor - _GonoGini;
        nIrst = _Harta - _Hutang - _Makam - _Wasiat;
        $("#NilaiHarta").val(_Harta);
        $("#hasil_harta").val(toRp(nIrst));
      }
      nilai_suami = 0;
      $("#nilai_suami").val("0");
      $("#nilai_suami").prop("checked", false).checkboxradio("refresh");
      $("#field_gonogini").show();
    } else {
      $("#field_gonogini").hide();
    }
    $("#field_suami").hide();
    $("#field_istri").show();
  }
  if (_Waris == "Perempuan") {
    _GonoGini = 0;
    _Harta = _HartaKotor - _GonoGini;
    nIrst = _Harta - _Hutang - _Makam - _Wasiat;
    $("#NilaiHarta").val(_Harta);
    $("#hasil_harta").val(toRp(nIrst));
    $("#nilai_istri").val("0").slider().slider("refresh");
    $("#field_istri").hide();
    $("#field_suami").show();
    $("#field_gonogini").hide();
    $("#NilaiGonoGini").val("").val();
  }
});
$("#cb_ayah,#cb_ibu,#cb_suami,#cb_kakek").live("change", function () {
  if ($("#cb_ayah").is(":checked")) {
    nilai_ayah = 1;
    nilai_kakek = 0;
    nilai_nenekayah = 0;
  } else {
    nilai_ayah = 0;
  }
  if ($("#cb_ibu").is(":checked")) {
    nilai_ibu = 1;
  } else {
    nilai_ibu = 0;
  }
  if ($("#cb_suami").is(":checked")) {
    nilai_suami = 1;
  } else {
    nilai_suami = 0;
  }
  if ($("#cb_kakek").is(":checked")) {
    if (nilai_ayah == 0) {
      nilai_kakek = 1;
    }
  } else {
    nilai_kakek = 0;
  }
  isSaham();
});
$("#nilai_i3stri").live("change", function () {
  nilai_istri = $(this).val();
  isSaham();
});
$("#nilai_anaklaki").live("change", function () {
  nilai_anaklaki = $(this).val();
  isSaham();
});
$("#nilai_anakperempuan").live("change", function () {
  nilai_anakperempuan = $(this).val();
  isSaham();
});
$("#nilai_cuculaki").live("change", function () {
  nilai_cuculaki = $(this).val();
  isSaham();
});
$("#nilai_cucuperempuan").live("change", function () {
  nilai_cucuperempuan = $(this).val();
  isSaham();
});
$("#nilai_nenekayah").live("change", function () {
  nilai_nenekayah = $(this).val();
  isSaham();
});
$("#nilai_nenekibu").live("change", function () {
  nilai_nenekibu = $(this).val();
  isSaham();
});
$("#nilai_saudaralakikandung").live("change", function () {
  _SaudaraLakiKandung = $(this).val();
  isSaham();
});
$("#nilai_saudaraperempuankandung").live("change", function () {
  nilai_saudaraperempuankandung = $(this).val();
  isSaham();
});
$("#nilai_saudaralakiseayah").live("change", function () {
  nilai_saudaralakiseayah = $(this).val();
  isSaham();
});
$("#nilai_saudaraperempuanseayah").live("change", function () {
  nilai_saudaraperempuanseayah = $(this).val();
  isSaham();
});
$("#nilai_saudaralakiseibu").live("change", function () {
  nilai_saudaralakiseibu = $(this).val();
  isSaham();
});
$("#nilai_saudaraperempuanseIbu").live("change", function () {
  nilai_saudaraperempuanseIbu = $(this).val();
  isSaham();
});
$("#nilai_anaklakisaudarakandung").live("change", function () {
  nilai_anaklakisaudarakandung = $(this).val();
  isSaham();
});
$("#nilai_anaklakisaudaraseayah").live("change", function () {
  nilai_anaklakisaudaraseayah = $(this).val();
  isSaham();
});
$("#nilai_pamankandungayah").live("change", function () {
  nilai_pamankandungayah = $(this).val();
  isSaham();
});
$("#nilai_pamansekakekayah").live("change", function () {
  nilai_pamansekakekayah = $(this).val();
  isSaham();
});
$("#nilai_anaklakipamankandung").live("change", function () {
  nilai_anaklakipamankandung = $(this).val();
  isSaham();
});
$("#nilai_anaklakipamansekakek").live("change", function () {
  nilai_anaklakipamansekakek = $(this).val();
  isSaham();
});
$(
  "#nilai_cuculaki,#nilai_saudaralakiseayah,#nilai_anaklakisaudarakandung",
).live("change", function () {
  if (nilai_Anakperempuan > 1) {
    if (nilai_cuculaki > 0) {
      $("#field_cucuperempuan").show();
      $("#info_penghalang_1a").hide();
    } else {
      $("#nilai_cucuperempuan").val("0").slider().slider("refresh");
      $("#field_cucuperempuan").hide();
      $("#info_penghalang_1a").show();
    }
  }
  if (nilai_saudaraperempuankandung > 1) {
    if (nilai_saudaralakiseayah > 0) {
      if (nilai_saudaraperempuankandung > 1) {
        $("#field_saudaraperempuanseayah").show();
        $("#info_penghalang_a4").hide();
      }
    } else {
      $("#nilai_saudaraperempuanseayah").val("0").slider().slider("refresh");
      $("#field_saudaraperempuanseayah").hide();
      $("#info_penghalang_a4").show();
    }
  } else {
    $("#info_penghalang_a4").hide();
  }
  if (nilai_anaklakisaudarakandung > 0) {
    $("#nilai_anaklakisaudaraseayah").val("0").slider().slider("refresh");
    $("#field_anaklakisaudaraseayah").hide();
  } else {
    $("#field_anaklakisaudaraseayah").show();
  }
});
$("#nilai_anaklakipamankandung").live("change", function () {
  if (
    nilai_anaklakipamankandung > 0 ||
    nilai_pamansekakekayah > 0 ||
    nilai_anaklakisaudaraseayah > 0 ||
    nilai_saudaralakikandung > 0 ||
    nilai_ayah > 0
  ) {
    $("#nilai_anaklakipamansekakek").val("0").slider().slider("refresh");
    $("#field_anaklakipamansekakek").hide();
  } else {
    $("#field_anaklakipamansekakek").show();
  }
});
$("#nilai_pamankandungayah").live("change", function () {
  if (
    nilai_pamankandungayah > 0 ||
    nilai_anaklakisaudaraseayah > 0 ||
    nilai_saudaralakikandung > 0 ||
    nilai_ayah > 0
  ) {
    $("#nilai_pamansekakekayah").val("0").slider().slider("refresh");
    $("#field_pamansekakekayah").hide();
  } else {
    $("#field_pamansekakekayah").show();
  }
});

// fungsi penghalang
function isDone() {
  var x = "";
  if (nilai_anaklaki > 0) {
    $("#nilai_cuculaki").val("0").slider().slider("refresh");
    $("#nilai_cucuperempuan").val("0").slider().slider("refresh");
    $("#field_cucu").hide();
    $("#info_penghalang_1").show();
    $("#info_penghalang_1a").hide();
  } else {
    $("#info_penghalang_1").hide();
    $("#field_cucu").show();
  }
  if (nilai_anakperempuan > 1) {
    if (nilai_cuculaki == 0) {
      $("#nilai_cucuperempuan").val("0").slider().slider("refresh");
      $("#field_cucuperempuan").hide();
      $("#info_penghalang_1a").show();
    } else {
      $("#field_cucuperempuan").show();
      $("#info_penghalang_1a").hide();
    }
  } else {
    $("#field_cucuperempuan").show();
    $("#info_penghalang_1a").hide();
  }
  if (nilai_ayah > 0) {
    $("#info_penghalang_3").show();
    $("#nilai_saudaraperempuanseayah").val("0").slider().slider("refresh");
    $("#nilai_saudaralakikandung").val("0").slider().slider("refresh");
    $("#nilai_saudaraperempuankandung").val("0").slider().slider("refresh");
    $(
      "#field_kakek,#field_saudaralakikandung,#field_saudaraperempuankandung,#field_saudaraperempuanseayah",
    ).hide();
  } else {
    $("#info_penghalang_3").hide();
    $(
      "#field_kakek,#nilai_nenekayah,#field_saudaralakikandung,#field_saudaraperempuankandung,#field_saudaraperempuanseayah",
    ).show();
  }
  if (nilai_ibu > 0) {
    $("#field_nenekayah,#field_nenekibu").hide();
    $("#nilai_nenekayah,#nilai_nenekibu").val("0").slider().slider("refresh");
    nilai_nenekayah = 0;
    nilai_nenekibu = 0;
    nilai_nenek2 = 0;
  } else {
    if (nilai_ayah == 0) {
      $("#field_nenekayah").show();
    } else {
      nilai_nenek2 = parseInt(nilai_nenekayah) + parseInt(nilai_nenekibu);
    }
    $("#field_nenekibu").show();
  }
  if (nilai_ayah > 0 && nilai_ibu > 0) {
    $("#info_penghalang_2").show();
  } else {
    $("#info_penghalang_2").hide();
  }
  if (nilai_cucuperempuan > 0 || nilai_anakperempuan > 0) {
    $("#nilai_saudaralakiseibu").val("0").slider().slider("refresh");
    $("#nilai_saudaraperempuanseIbu").val("0").slider().slider("refresh");
    $("#field_saudaralakiseibu,#field_saudaraperempuanseibu").hide();
    $("#info_penghalang_b4").show();
    if (nilai_saudaraperempuankandung > 0) {
      $("#field_saudaralakikandung").hide();
      $("#info_penghalang_a3").show();
      $("#field_saudaralakiseayah,#field_saudaraperempuanseayah").hide();
      $("#info_penghalang_4").show();
    } else {
      $("#info_penghalang_a3").hide();
    }
    if (nilai_saudaraperempuanseayah > 0) {
      $("#field_saudaralakiseayah").hide();
      $("#info_penghalang_a3").show();
    } else {
      $("#info_penghalang_a3").hide();
    }
  } else {
    $(
      "#field_saudaralakiseibu,#field_saudaraperempuanseibu,#field_saudaralakikandung,#field_saudaralakiseayah",
    ).show();
    $("#info_penghalang_a,#info_penghalang_c4").hide();
    $("#info_penghalang_4").hide();
  }
  if (nilai_saudaralakikandung > 0) {
    $("#nilai_saudaralakiseayah").val("0").slider().slider("refresh");
    $("#nilai_saudaraperempuanseayah").val("0").slider().slider("refresh");
    $("#field_saudaralakiseayah,#field_saudaraperempuanseayah").hide();
    $("#info_penghalang_4").show();
  } else {
    if (
      (nilai_anakperempuan == 0 || nilai_cucuperempuan == 0) &&
      nilai_saudaraperempuankandung == 0
    ) {
      $("#info_penghalang_4").hide();
      $("#field_saudaraperempuanseayah").show();
    }
    if (
      (nilai_cucuperempuan > 0 || nilai_anakperempuan > 0) &&
      nilai_saudaraperempuanseayah > 0
    ) {
      $("#field_saudaralakiseayah").show();
    }
  }
  if (nilai_saudaraperempuankandung > 1) {
    if (nilai_Saudaralakiseayah == 0) {
      $("#nilai_saudaraperempuanseayah").val("0").slider().slider("refresh");
      $("#field_saudaraperempuanseayah").hide();
      $("#info_penghalang_a4").show();
    } else {
      $("#field_saudaraperempuanseayah").show();
      $("#info_penghalang_a4").hide();
    }
  } else {
    $("#info_penghalang_a4").hide();
  }
  if (
    nilai_anaklakipamankandung > 0 ||
    nilai_pamansekakekayah > 0 ||
    nilai_anaklakisaudaraseayah > 0 ||
    nilai_saudaralakikandung > 0
  ) {
    $("#nilai_anaklakipamansekakek").val("0").slider().slider("refresh");
    $("#field_anaklakipamansekakek").hide();
  } else {
    $("#field_anaklakipamansekakek").show();
  }
  if (
    nilai_pamankandungayah > 0 ||
    nilai_anaklakisaudaraseayah > 0 ||
    nilai_saudaralakikandung > 0
  ) {
    $("#nilai_pamansekakekayah").val("0").slider().slider("refresh");
    $("#field_pamansekakekayah").hide();
  } else {
    $("#field_pamansekakekayah").show();
  }
  x =
    '<div data-role="header" data-position="fixed" data-theme="b"><h1>Hasil</h1></div><div data-role="content">';
  x =
    x +
    '<div id="hasilperhitungan"><p>Sudah dapat diketahui hasilnya, karena ada penghalang dari ahli waris.</p></div>';
  x =
    x +
    '<div id="footer" data-role="footer" data-position="fixed"><div data-role="navbar" data-iconpos="top" data-theme="a"><ul class="selesai"><li ckass="restart"><a href="" id="reset">HITUNG ULANG</a></li><li class="hitung"><a href="" id="hitung">LIHAT HASIL</a></li></ul></div></div>';
  if (nilai_anaklaki > 0) {
    x = x + "</div>";
    nilai_cuculaki = 0;
    nilai_cucuperempuan = 0;
    nilai_saudaralakikandung = 0;
    nilai_saudaraperempuankandung = 0;
    nilai_anaklakisaudarakandung = 0;
    nilai_anaklakisaudaraseayah = 0;
    nilai_pamankandungayah = 0;
    nilai_pamansekakekayah = 0;
    nilai_anaklakipamankandung = 0;
    nilai_anaklakipamansekakek = 0;
    $(".penghalang_3").html(x);
  }
  if (nilai_cuculaki > 0) {
    x = x + "</div>";
    nilai_saudaralakikandung = 0;
    nilai_saudaraperempuankandung = 0;
    nilai_anaklakisaudarakandung = 0;
    nilai_anaklakisaudaraseayah = 0;
    nilai_pamankandungayah = 0;
    nilai_pamansekakekayah = 0;
    nilai_anaklakipamankandung = 0;
    nilai_anaklakipamansekakek = 0;
    $(".penghalang_3").html(x);
  }
  if (nilai_kakek > 0 || nilai_ayah > 0) {
    x = x + "</div>";
    nilai_saudaralakikandung = 0;
    nilai_saudaraperempuankandung = 0;
    nilai_anaklakisaudarakandung = 0;
    nilai_anaklakisaudaraseayah = 0;
    nilai_pamankandungayah = 0;
    nilai_pamansekakekayah = 0;
    nilai_anaklakipamankandung = 0;
    nilai_anaklakipamansekakek = 0;
    $(".penghalang_3").html(x);
  }
  if (nilai_saudaralakikandung > 0 || nilai_Saudaralakiseayah > 0) {
    x = x + "</div>";
    nilai_anaklakisaudarakandung = 0;
    nilai_anaklakisaudaraseayah = 0;
    nilai_pamankandungayah = 0;
    nilai_pamansekakekayah = 0;
    nilai_anaklakipamankandung = 0;
    nilai_anaklakipamansekakek = 0;
    $(".penghalang_5").html(x);
  }
  if (nilai_anaklakisaudarakandung > 0 || nilai_anaklakisaudaraseayah > 0) {
    x = x + "</div>";
    nilai_pamankandungayah = 0;
    nilai_pamansekakekayah = 0;
    nilai_anaklakipamankandung = 0;
    nilai_anaklakipamansekakek = 0;
    $(".penghalang_6").html(x);
  }
  if (nilai_pamankandungayah > 0 || nilai_pamansekakekayah > 0) {
    x = x + "</div>";
    nilai_anaklakipamankandung = 0;
    nilai_anaklakipamansekakek = 0;
    $(".penghalang_7").html(x);
  }
  x = x + "</div>";
  $(".penghalang_8").html(x);
}

//formula begin

function isSaham() {
  nilai_anak = parseInt(nilai_anaklaki) + parseInt(nilai_anakperempuan);
  nilai_cucu = parseInt(nilai_cuculaki) + parseInt(nilai_cucuperempuan);
  nilai_nenek2 = parseInt(nilai_nenekayah) + parseInt(nilai_nenekibu);
  nilai_saudaraibu =
    parseInt(nilai_saudaralakiseibu) + parseInt(nilai_saudaraperempuanseIbu);
  nilai_saudaraayah =
    parseInt(nilai_Saudaralakiseayah) + parseInt(nilai_saudaraperempuanseayah);
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
  if (nilai_Saudaralakiseayah == 0) {
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
  if (nilai_saudaraperempuanseayah > 1 && nilai_Saudaralakiseayah == 0) {
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
  if ((nilai_anakperempuan > 0 || nilai_cucuperempuan > 0) && nilai_ibu == 0) {
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
    nilai_Saudaralakiseayah == 0 &&
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
  if (nilai_Saudaralakiseayah > 0) {
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
    if (nilai_Saudaralakiseayah == 0 && nilai_saudaraperempuanseayah == 0) {
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
  if (nilai_saudaraperempuanseayah > 0 && nilai_Saudaralakiseayah > 0) {
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
    nilai_Saudaralakiseayah > 0 &&
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

//formula end
function toRp(amount) {
  // Membalikkan string angka setelah dibulatkan
  var reversedNumber = parseInt(Math.round(amount), 10)
    .toString()
    .split("")
    .reverse()
    .join("");
  var formattedString = "";

  // Menambahkan titik setiap tiga digit
  for (var index = 0; index < reversedNumber.length; index++) {
    formattedString += reversedNumber[index];
    if ((index + 1) % 3 === 0 && index !== reversedNumber.length - 1) {
      formattedString += ".";
    }
  }

  // Membalikkan string kembali ke urutan normal dan menambahkan prefix "Rp."
  return "Rp." + formattedString.split("").reverse().join("");
}

function calculateShare(adjustmentFactor, ratioString, totalShare) {
  var ratioParts = ratioString.split("/");
  if (ratioParts.length < 2) {
    ratioParts = ratioString.split(":");
    denominator = ratioParts[1].substr(0, 1);
  } else {
    var denominator = ratioParts[1];
  }
  var numerator = ratioParts[0];
  var firstCharacter = ratioString.substr(3, 1);
  var secondCharacter = ratioString.substr(1, 1);
  var share = 0;
  var calculatedShare = 0;
  var totalCalculatedShare = 0;

  if (
    firstCharacter == "A" ||
    firstCharacter == "M" ||
    firstCharacter == "R" ||
    firstCharacter == "+"
  ) {
    if (secondCharacter == ":") {
      totalCalculatedShare = getTotalAshobahShare();
      share = totalHartaAshobah;
      calculatedShare =
        (share / totalCalculatedShare) *
        (numerator / denominator) *
        adjustmentFactor;
      if (calculatedShare > hartaAshobah) {
        calculatedShare = hartaAshobah;
      }
      hartaAshobah = hartaAshobah - calculatedShare;
      if (calculatedShare < 0) {
        calculatedShare = 0;
      }
      return calculatedShare;
    } else {
      return (numerator / denominator) * totalShare;
    }
  } else {
    return (numerator / denominator) * totalShare;
  }
  return ratioParts;
}

// _h → calculateShare: Nama fungsi menjelaskan tujuannya.
// ratioString → ratioString: Representasi string pecahan (rasio).
// totalShare → totalShare: Jumlah total bagian yang akan dihitung.
// ratioParts → ratioParts: Hasil pecahan string rasio.
// denominator → denominator: Penyebut dalam rasio.
// numerator → numerator: Pembilang dalam rasio.
// firstCharacter → firstCharacter: Karakter pertama setelah indeks tertentu.
// secondCharacter → secondCharacter: Karakter kedua setelah indeks tertentu.
// calculatedShare → calculatedShare: Bagian hasil perhitungan.
// totalCalculatedShare → totalCalculatedShare: Total hasil perhitungan.

function getTotalAshobahShare() {
  var secondCharacter = 0;
  for (var ratioParts in ash) {
    if (
      (ash[ratioParts] == "A" ||
        ash[ratioParts] == "M" ||
        ash[ratioParts] == "R" ||
        ash[ratioParts] == "+") &&
      a[ratioParts] == "1"
    ) {
      secondCharacter =
        secondCharacter + parseInt(_a[ratioParts] * a2[ratioParts]);
    }
  }
  return secondCharacter;
}

// _sa → calculateTotalAshobah: Nama ini menjelaskan bahwa fungsi menghitung total nilai Ashobah.

function processRatio(ratioString, totalShare, individualShare) {
  var numerator = ratioString.substr(0, 1).match(/[0-9]+/g);
  var denominator = ratioString.substr(2, 2).match(/[0-9]+/g);
  var firstCharacter = ratioString.substr(3, 1);
  var secondCharacter = ratioString.substr(1, 1);
  var calculatedShare = 0;

  if (firstCharacter == "A" || firstCharacter == "M" || firstCharacter == "R") {
    if (secondCharacter == ":") {
      return ratioString;
    } else {
      return individualShare;
    }
  } else {
    var ratioParts = (totalShare / denominator) * numerator;
    if (inheritanceType == "AR-RADD") {
      calculatedShare = ratioParts + "/" + totalShare;
    } else {
      calculatedShare = ratioParts + "/" + totalAul;
    }
    if (ash.length > 1) {
      if (ash.length == 2 && siblingFromMother > 1) {
        remainingAshobah = 0;
      }
      if (remainingAshobah > 0 && totalashobah == 0) {
        remainingShare = remainingAshobah;
        calculatedShare = ratioParts + "/" + remainingFraction;
      }
    }
    return calculatedShare;
  }
}
// totalShare → totalShare: Representasi jumlah total saham atau bagian.
// a → individualShare: Representasi bagian individu dalam perhitungan.

function calculateRemainingShare(ratioString, allocatedShare, totalShare) {
  var numerator = ratioString.substr(0, 1).match(/[0-9]+/g);
  var denominator = ratioString.substr(2, 2).match(/[0-9]+/g);
  return totalShare - allocatedShare / denominator;
}
// allocatedShare → allocatedShare: Variabel ini diubah untuk menjelaskan bahwa ini adalah bagian yang sudah dialokasikan.
// totalShare → totalShare: Variabel ini diubah untuk mencerminkan total bagian yang tersedia.

function determineShareType(shareString) {
  var shareType = shareString;
  var indexOfAshobah = shareString.indexOf("A");
  var indexOfMusytarakah = shareString.indexOf("M");
  var indexOfBersama = shareString.indexOf("B");
  var indexOfPlusAshobah = shareString.indexOf("+A");

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
// totalShare → indexOfMusytarakah: Mengindikasikan posisi huruf "M" untuk jenis bagian "Musytarakah".
// indexOfBersama → indexOfBersama: Mengindikasikan posisi huruf "B", yang mengacu pada jenis bagian "Bersama".
// indexOfPlusAshobah → indexOfPlusAshobah: Mengindikasikan posisi "+A" dalam string.

function sahamAshobah(targetShare, multiplier, maxIterations, defaultShare) {
  var numerator = 0,
    denominator = 0,
    calculatedValue = 0,
    outputLog = "",
    resultLog = "";

  for (numerator = 0; numerator <= maxIterations; numerator++) {
    for (denominator = 1; denominator <= maxIterations; denominator++) {
      calculatedValue = (numerator / denominator) * multiplier;
      resultLog =
        resultLog +
        " " +
        numerator +
        "/" +
        denominator +
        " = " +
        calculatedValue +
        " ";
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

  if (numerator === 0 || denominator === 0) {
    return "Habis";
  }
  if (numerator < maxIterations || denominator < maxIterations) {
    return numerator + "/" + denominator;
  } else {
    return defaultShare;
  }
}

// _0xc3f3x70 → targetShare: Target nilai bagian yang akan dicocokkan.
// _0xc3f3x71 → multiplier: Faktor pengali dalam perhitungan bagian.
// _0xc3f3x72 → maxIterations: Batas maksimum iterasi yang dilakukan.
// _0xc3f3x73 → defaultShare: Nilai bagian default jika iterasi mencapai batas

$(window).load(function () {
  $(document).on("click", "#hitung", function () {
    if (nilai_suami > 0) {
      var numerator = rSuami.substr(0, 1),
        denominator = rSuami.substr(2, 1),
        ashobahType = rSuami.substr(3, 1);
      ash.push(ashobahType);
      ratios.push(numerator);
      denominators.push(denominator);
      shares.push(nilai_suami);
    }

    //  numerator → numerator: Menyimpan pembilang dari string rSuami.
    // denominator → denominator: Menyimpan penyebut dari string rSuami.
    // ashobahType → ashobahType: Jenis Ashobah yang diperoleh dari bagian string rSuami.

    if (nilai_istri > 0) {
      var initialLetter = rIstri.substr(0, 1),
        middleLetter = rIstri.substr(2, 1),
        thirdLetter = rIstri.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(initialLetter);
      a.push(middleLetter);
      a2.push(nilai_istri);
    }
    if (nilai_anaklaki > 0) {
      var firstLetter = rAnakLaki.substr(0, 1),
        secondLetter = rAnakLaki.substr(2, 1),
        thirdLetter = rAnakLaki.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_AnakLaki);
    }
    if (nilai_anakperempuan > 0) {
      var firstLetter = rAnakPerempuan.substr(0, 1),
        secondLetter = rAnakPerempuan.substr(2, 1),
        thirdLetter = rAnakPerempuan.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_anakperempuan);
    }
    if (nilai_ayah > 0) {
      var firstLetter = rAyah.substr(0, 1),
        secondLetter = rAyah.substr(2, 1),
        thirdLetter = rAyah.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_ayah);
    }
    if (nilai_ibu > 0) {
      var firstLetter = rIbu.substr(0, 1),
        secondLetter = rIbu.substr(2, 1),
        thirdLetter = rIbu.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_ibu);
    }
    if (nilai_cuculaki > 0) {
      var firstLetter = rCucuLaki.substr(0, 1),
        secondLetter = rCucuLaki.substr(2, 1),
        thirdLetter = rCucuLaki.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_cuculaki);
    }
    if (nilai_cucuperempuan > 0) {
      var firstLetter = rCucuPerempuan.substr(0, 1),
        secondLetter = rCucuPerempuan.substr(2, 1),
        thirdLetter = rCucuPerempuan.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_cucuperempuan);
    }
    if (nilai_kakek > 0) {
      var firstLetter = rKakek.substr(0, 1),
        secondLetter = rKakek.substr(2, 1),
        thirdLetter = rKakek.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_kakek);
    }
    if (nilai_nenekayah > 0) {
      var firstLetter = rNenekAyah.substr(0, 1),
        secondLetter = rNenekAyah.substr(2, 1),
        thirdLetter = rNenekAyah.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_nenekayah);
    }
    if (nilai_nenekibu > 0) {
      var firstLetter = rNenekIbu.substr(0, 1),
        secondLetter = rNenekIbu.substr(2, 1),
        thirdLetter = rNenekIbu.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_nenekibu);
    }
    if (nilai_saudaralakikandung > 0) {
      var firstLetter = rSaudaraLakiKandung.substr(0, 1),
        secondLetter = rSaudaraLakiKandung.substr(2, 1),
        thirdLetter = rSaudaraLakiKandung.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_saudaralakikandung);
    }
    if (nilai_Saudaralakiseayah > 0) {
      var firstLetter = rSaudaraLakiSeAyah.substr(0, 1),
        secondLetter = rSaudaraLakiSeAyah.substr(2, 1),
        thirdLetter = rSaudaraLakiSeAyah.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_Saudaralakiseayah);
    }
    if (nilai_saudaraperempuanseayah > 0) {
      var firstLetter = rSaudaraPerempuanSeAyah.substr(0, 1),
        secondLetter = rSaudaraPerempuanSeAyah.substr(2, 1),
        thirdLetter = rSaudaraPerempuanSeAyah.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_saudaraperempuanseayah);
    }
    if (nilai_saudaralakiseibu > 0) {
      var firstLetter = rSaudaraLakiSeIbu.substr(0, 1),
        secondLetter = rSaudaraLakiSeIbu.substr(2, 1),
        thirdLetter = rSaudaraLakiSeIbu.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_saudaralakiseibu);
    }
    if (nilai_saudaraperempuanseIbu > 0) {
      var firstLetter = rSaudaraPerempuanSeIbu.substr(0, 1),
        secondLetter = rSaudaraPerempuanSeIbu.substr(2, 1),
        thirdLetter = rSaudaraPerempuanSeIbu.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_saudaraperempuanseIbu);
    }
    if (nilai_saudaraperempuankandung > 0) {
      var firstLetter = rSaudaraPerempuanKandung.substr(0, 1),
        secondLetter = rSaudaraPerempuanKandung.substr(2, 1),
        thirdLetter = rSaudaraPerempuanKandung.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_saudaraperempuankandung);
    }
    if (nilai_anaklakisaudarakandung > 0) {
      var firstLetter = rAnakLakiSaudaraKandung.substr(0, 1),
        secondLetter = rAnakLakiSaudaraKandung.substr(2, 1),
        thirdLetter = rAnakLakiSaudaraKandung.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_anaklakisaudarakandung);
    }
    if (nilai_anaklakisaudaraseayah > 0) {
      var firstLetter = rAnakLakiSaudaraSeAyah.substr(0, 1),
        secondLetter = rAnakLakiSaudaraSeAyah.substr(2, 1),
        thirdLetter = rAnakLakiSaudaraSeAyah.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_anaklakisaudaraseayah);
    }
    if (nilai_pamankandungayah > 0) {
      var firstLetter = rPamanKandungAyah.substr(0, 1),
        secondLetter = rPamanKandungAyah.substr(2, 1),
        thirdLetter = rPamanKandungAyah.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_pamankandungayah);
    }
    if (nilai_pamansekakekayah > 0) {
      var firstLetter = rPamanSeKakekAyah.substr(0, 1),
        secondLetter = rPamanSeKakekAyah.substr(2, 1),
        thirdLetter = rPamanSeKakekAyah.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_pamansekakekayah);
    }
    if (nilai_anaklakipamankandung > 0) {
      var firstLetter = rAnakLakiPamanKandung.substr(0, 1),
        secondLetter = rAnakLakiPamanKandung.substr(2, 1),
        thirdLetter = rAnakLakiPamanKandung.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_anaklakipamankandung);
    }
    if (nilai_anaklakipamansekakek > 0) {
      var firstLetter = rAnakLakiPamanSeKakek.substr(0, 1),
        secondLetter = rAnakLakiPamanSeKakek.substr(2, 1),
        thirdLetter = rAnakLakiPamanSeKakek.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(nilai_anaklakipamansekakek);
    }
    var x = "";
    var currentIndex = 0;
    var indexOfBersama = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
      76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
      94, 95, 96, 97, 98, 99, 100,
    ];
    var resultIndex = 0;
    for (var secondCharacter in indexOfBersama) {
      var divisibleCount = 0;
      for (var ratioParts in a) {
        h = indexOfBersama[secondCharacter] % a[ratioParts];
        if (h == 0) {
          divisibleCount = divisibleCount + 1;
        }
        if (divisibleCount >= a.length) {
          resultIndex = indexOfBersama[secondCharacter];
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
      ratioParts = (resultIndex / denominator) * numerator;
      if (ashobahType != "A" && ashobahType != "M" && ashobahType != "R") {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (nilai_istri > 0) {
      ratioParts = (resultIndex / middleLetter) * initialLetter;
      if (thirdLetter != "A" && thirdLetter != "M" && thirdLetter != "R") {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (nilai_anaklaki > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != "A" && thirdLetter != "M" && thirdLetter != "R") {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (nilai_anakperempuan > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != "A" && thirdLetter != "M" && thirdLetter != "R") {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (nilai_ibu > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != "A" && thirdLetter != "M" && thirdLetter != "R") {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (nilai_ayah > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != "A" && thirdLetter != "M" && thirdLetter != "R") {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (nilai_cuculaki > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != "A" && thirdLetter != "M" && thirdLetter != "R") {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (nilai_cucuperempuan > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != "A" && thirdLetter != "M" && thirdLetter != "R") {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (nilai_kakek > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != "A" && thirdLetter != "M" && thirdLetter != "R") {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (nilai_nenekayah > 0 && nilai_nenekibu > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      numerator = numerator + parseInt(ratioParts);
      denominator = denominator + parseInt(ratioParts);
    } else {
      if (nilai_nenekayah > 0) {
        ratioParts = (resultIndex / secondLetter) * firstLetter;
        if (thirdLetter != "A" && thirdLetter != "M" && thirdLetter != "R") {
          numerator = numerator + parseInt(ratioParts);
        }
        denominator = denominator + parseInt(ratioParts);
      }
      if (nilai_nenekibu > 0) {
        ratioParts = (resultIndex / secondLetter) * firstLetter;
        if (thirdLetter != "A" && thirdLetter != "M" && thirdLetter != "R") {
          numerator = numerator + parseInt(ratioParts);
        }
        denominator = denominator + parseInt(ratioParts);
      }
    }
    if (nilai_saudaralakikandung > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != "A" && thirdLetter != "M" && thirdLetter != "R") {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (nilai_saudaraperempuankandung > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != "A" && thirdLetter != "M" && thirdLetter != "R") {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (nilai_Saudaralakiseayah > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != "A" && thirdLetter != "M" && thirdLetter != "R") {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (nilai_saudaraperempuanseayah > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != "A" && thirdLetter != "M" && thirdLetter != "R") {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (
      nilai_saudaraperempuanseIbu > 0 &&
      nilai_saudaralakiseibu > 0 &&
      (nilai_saudaralakikandung == 0 || nilai_suami == 0 || nilai_ibu == 0)
    ) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      numerator = numerator + parseInt(ratioParts);
      denominator = denominator + parseInt(ratioParts);
    } else {
      if (nilai_saudaralakiseibu > 0) {
        ratioParts = (resultIndex / secondLetter) * firstLetter;
        if (thirdLetter != "A" && thirdLetter != "M" && thirdLetter != "R") {
          numerator = numerator + parseInt(ratioParts);
        }
        denominator = denominator + parseInt(ratioParts);
      }
      if (nilai_saudaraperempuanseIbu > 0) {
        ratioParts = (resultIndex / secondLetter) * firstLetter;
        if (thirdLetter != "A" && thirdLetter != "M" && thirdLetter != "R") {
          numerator = numerator + parseInt(ratioParts);
        }
        denominator = denominator + parseInt(ratioParts);
      }
    }
    if (nilai_anaklakisaudarakandung > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != "A" && thirdLetter != "M" && thirdLetter != "R") {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (nilai_anaklakisaudaraseayah > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != "A" && thirdLetter != "M" && thirdLetter != "R") {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (nilai_pamankandungayah > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != "A" && thirdLetter != "M" && thirdLetter != "R") {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (nilai_pamansekakekayah > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != "A" && thirdLetter != "B" && thirdLetter != "R") {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (nilai_anaklakipamankandung > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != "A" && thirdLetter != "B" && thirdLetter != "R") {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (nilai_anaklakipamansekakek > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != "A" && thirdLetter != "B" && thirdLetter != "R") {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    sisasaham = numerator;
    var adjustedShares = resultIndex - sisasaham;
    var shareRatio = adjustedShares + "/" + resultIndex;
    if (sisasaham > resultIndex) {
      jenis = "Al-’AUL";
      naul = sisasaham;
    } else {
      naul = 0;
      jenis = "AR-RADD";
    }
    for (var ratioParts in a) {
      if (
        ash[ratioParts] == "A" ||
        ash[ratioParts] == "M" ||
        ash[ratioParts] == "R" ||
        ash[ratioParts] == "+"
      ) {
        totalashobah =
          totalashobah + parseInt(_a[ratioParts]) * parseInt(a2[ratioParts]);
      }
    }
    var distributedAssets = 0;
    _TotalHartaAshobah = calculateShare(1, shareRatio, nIrst);
    hartaashobah = _TotalHartaAshobah;
    x = '<table id="table">';
    x =
      x +
      '<tr><td><b>Tirkah</b></td><td align="right"><b>' +
      toRp(_Harta) +
      "</b></td></tr>";
    if (_Hutang > 0) {
      x =
        x +
        '<tr><td>Hutang</td><td align="right">' +
        toRp(_Hutang) +
        "</td></tr>";
    }
    if (_Makam > 0) {
      x =
        x +
        '<tr><td>Biaya Makam</td><td align="right">' +
        toRp(_Makam) +
        "</td></tr>";
    }
    if (_Wasiat > 0) {
      x =
        x +
        '<tr><td>Wasiat</td><td align="right">' +
        toRp(_Wasiat) +
        "</td></tr>";
    }
    if (_Hutang > 0 || _Makam > 0 || _Wasiat > 0) {
      x = x + '<tr><td colspan="2"><hr></td></tr>';
      x =
        x +
        '<tr><td>Al-Irts</td><td align="right"><b>' +
        toRp(nIrst) +
        "</b></td></tr>";
    }
    _hasilmasalah = "";
    if (resultIndex > 1) {
      var ratioParts = processRatio(
        "1/" + resultIndex,
        resultIndex,
        shareRatio,
      );
      var secondCharacter = ratioParts.split("/");
      var shareArrow = "";
      if (secondCharacter[1] == sisasaham) {
        if (sisasaham > 0 && sisasaham != resultIndex) {
          shareArrow = " &rarr; " + sisasaham;
        }
        if (resultIndex > sisasaham) {
          _hasilmasalah = "Raad";
        }
        if (resultIndex < sisasaham) {
          _hasilmasalah = "'Aul";
        }
      }
      x = x + "<tr><td>Asal masalah";
      if (_hasilmasalah) {
        x = x + " (" + _hasilmasalah + ")";
      }
      x =
        x +
        '</td><td align="right"><b>' +
        resultIndex +
        shareArrow +
        "</b></td></tr>";
    }
    if (mode == "DEVELOPER") {
      x = x + '<tr><td colspan="2"><hr></td></tr>';
      x =
        x +
        '<tr><td>Jenis masalah</td><td align="right"><b>' +
        jenis +
        ":" +
        sisasaham +
        "</b></td></tr>";
    }
    if (jenis == "AR-RADD") {
      if (hartaashobah > 0 && totalashobah == 0) {
      } else {
        if (mode == "DEVELOPER") {
          if (hartaashobah > 0) {
            x =
              x +
              "<tr><td>Ashobah	 (" +
              shareRatio +
              ')</td><td align="right"><b>' +
              toRp(hartaashobah) +
              "</b></td></tr>";
          }
        }
      }
    }
    x = x + "</table><br>";
    var secondCharacter = 0;
    x =
      x +
      '<table id="table" data-role="table" data-mode="columntoggle" class="ui-body-d ui-shadow table-stripe ui-responsive"><thead><tr class="ui-bar-a">';
    x = x + "<th>WARIST</th><th>BAGIAN</th>";
    x = x + "<th>@ORANG</th></tr></thead><tbody>";
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
      if (determineShareType(ratioParts) == "Ashobah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      x =
        x +
        "<td>" +
        nilai_istri +
        " Istri (" +
        rIstri +
        ')</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x = x + '</td><td align="right">' + toRp(h / nilai_istri) + "</td></tr>";
      if (nradd > 0) {
        x =
          x +
          "<tr><td>Sisa harta [<b>" +
          toRp(nIrst) +
          '</b>]</td><td colspan="2"><hr></td></tr>';
      }
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
      if (determineShareType(ratioParts) == "Ashobah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      x = x + "<tr>";
      x =
        x +
        "<td>" +
        nilai_suami +
        " Suami (" +
        rSuami +
        ')</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x = x + '</td><td align="right">' + toRp(h / nilai_suami) + "</td></tr>";
      if (nradd > 0) {
        x =
          x +
          "<tr><td>Sisa harta [<b>" +
          toRp(nIrst) +
          '</b>]</td><td colspan="2"><hr></td></tr>';
      }
    }
    if (nilai_ibu > 0) {
      ratioParts = processRatio(rIbu, resultIndex, shareRatio);
      h = calculateShare(nilai_ibu, ratioParts, nIrst);
      distributedAssets = distributedAssets + h;
      _HasilIbu = h;
      secondCharacter = secondCharacter + 1;
      if (determineShareType(ratioParts) == "Ashobah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      x =
        x +
        "<td>" +
        nilai_ibu +
        " Ibu (" +
        rIbu +
        ')</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x = x + '</td><td align="right">' + toRp(h / nilai_ibu) + "</td></tr>";
    }
    if (nilai_nenekayah > 0 && nilai_nenekibu > 0) {
      ratioParts = processRatio("1/6", resultIndex, shareRatio);
      h = calculateShare(1, ratioParts, nIrst);
      distributedAssets = distributedAssets + h;
      secondCharacter = secondCharacter + 1;
      x =
        x +
        "<td>Bagian Nenek (Ayah) dan Nenek (Ibu) (" +
        ratioParts +
        ") [<b>" +
        toRp(h) +
        '</b>]</td><td colspan="2"><hr></td></tr>';
      ratioParts = sahamAshobah(
        (h / nilai_nenek2) * nilai_nenekayah,
        nIrst,
        adjustedShares,
        ratioParts,
      );
      x =
        x +
        "<td>&rarr; " +
        nilai_nenekayah +
        ' Nenek dari Ayah</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x =
        x +
        '</td><td align="right">' +
        toRp(((h / nilai_nenek2) * nilai_nenekayah) / nilai_nenekayah) +
        "</td></tr>";
      ratioParts = sahamAshobah(
        (h / nilai_nenek2) * nilai_nenekibu,
        nIrst,
        adjustedShares,
        ratioParts,
      );
      x =
        x +
        "<td>&rarr; " +
        nilai_nenekibu +
        ' Nenek dari Ibu</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x =
        x +
        '</td><td align="right">' +
        toRp(((h / nilai_nenek2) * nilai_nenekibu) / nilai_nenekibu) +
        "</td></tr>";
    } else {
      if (nilai_nenekayah > 0) {
        ratioParts = processRatio(rNenekAyah, resultIndex, shareRatio);
        h = calculateShare(nilai_nenekayah, ratioParts, nIrst);
        distributedAssets = distributedAssets + h;
        _HasilNenekAyah = h;
        secondCharacter = secondCharacter + 1;
        if (determineShareType(ratioParts) == "Ashobah") {
          ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
        }
        x =
          x +
          "<td>" +
          nilai_nenekayah +
          " Nenek dari Ayah (" +
          rNenekAyah +
          ')</td><td align="center">' +
          determineShareType(ratioParts) +
          "</td>";
        x =
          x +
          '</td><td align="right">' +
          toRp(h / nilai_nenekayah) +
          "</td></tr>";
      }
      if (nilai_nenekibu > 0) {
        ratioParts = processRatio(rNenekIbu, resultIndex, shareRatio);
        h = calculateShare(nilai_nenekibu, ratioParts, nIrst);
        distributedAssets = distributedAssets + h;
        _HasilNenekIbu = h;
        secondCharacter = secondCharacter + 1;
        if (determineShareType(ratioParts) == "Ashobah") {
          ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
        }
        x =
          x +
          "<td>" +
          nilai_nenekibu +
          " Nenek dari Ibu (" +
          rNenekIbu +
          ')</td><td align="center">' +
          determineShareType(ratioParts) +
          "</td>";
        x =
          x +
          '</td><td align="right">' +
          toRp(h / nilai_nenekibu) +
          "</td></tr>";
      }
    }
    if (nilai_anakperempuan > 0) {
      ratioParts = processRatio(rAnakPerempuan, resultIndex, shareRatio);
      h = calculateShare(nilai_anakperempuan, ratioParts, nIrst);
      distributedAssets = distributedAssets + h;
      _HasilAnakPerempuan = h;
      secondCharacter = secondCharacter + 1;
      if (determineShareType(ratioParts) == "Ashobah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      x =
        x +
        "<td>" +
        nilai_anakperempuan +
        " Anak Perempuan (" +
        rAnakPerempuan +
        ')</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x =
        x +
        '</td><td align="right">' +
        toRp(h / nilai_anakperempuan) +
        "</td></tr>";
    }
    if (nilai_anaklaki > 0) {
      ratioParts = processRatio(rAnakLaki, resultIndex, shareRatio);
      h = calculateShare(_AnakLaki, ratioParts, nIrst);
      distributedAssets = distributedAssets + h;
      _HasilAnakLaki = h;
      secondCharacter = secondCharacter + 1;
      if (determineShareType(ratioParts) == "Ashobah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      x =
        x +
        "<td>" +
        nilai_anaklaki +
        " Anak Laki-laki (" +
        rAnakLaki +
        ')</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x = x + '</td><td align="right">' + toRp(h / _AnakLaki) + "</td></tr>";
    }
    if (nilai_cuculaki > 0) {
      ratioParts = processRatio(rCucuLaki, resultIndex, shareRatio);
      h = calculateShare(nilai_cuculaki, ratioParts, nIrst);
      distributedAssets = distributedAssets + h;
      _HasilCucuLaki = h;
      secondCharacter = secondCharacter + 1;
      if (determineShareType(ratioParts) == "Ashobah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      x =
        x +
        "<td>" +
        nilai_cuculaki +
        " Cucu Laki-laki (" +
        rCucuLaki +
        ')</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x =
        x + '</td><td align="right">' + toRp(h / nilai_cuculaki) + "</td></tr>";
    }
    if (nilai_cucuperempuan > 0) {
      ratioParts = processRatio(rCucuPerempuan, resultIndex, shareRatio);
      h = calculateShare(nilai_cucuperempuan, ratioParts, nIrst);
      distributedAssets = distributedAssets + h;
      _HasilCucuPerempuan = h;
      secondCharacter = secondCharacter + 1;
      if (determineShareType(ratioParts) == "Ashobah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      x =
        x +
        "<td>" +
        nilai_cucuperempuan +
        " Cucu Perempuan (" +
        rCucuPerempuan +
        ')</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x =
        x +
        '</td><td align="right">' +
        toRp(h / nilai_cucuperempuan) +
        "</td></tr>";
    }
    if (nilai_saudaraperempuankandung > 0) {
      ratioParts = processRatio(
        rSaudaraPerempuanKandung,
        resultIndex,
        shareRatio,
      );
      h = calculateShare(nilai_saudaraperempuankandung, ratioParts, nIrst);
      distributedAssets = distributedAssets + h;
      _HasilSaudaraPerempuanKandung = h;
      secondCharacter = secondCharacter + 1;
      if (determineShareType(ratioParts) == "Ashobah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      x =
        x +
        "<td>" +
        nilai_saudaraperempuankandung +
        " Saudara Perempuan sekandung (" +
        rSaudaraPerempuanKandung +
        ')</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x =
        x +
        '</td><td align="right">' +
        toRp(h / nilai_saudaraperempuankandung) +
        "</td></tr>";
    }
    if (nilai_saudaralakikandung > 0) {
      ratioParts = processRatio(rSaudaraLakiKandung, resultIndex, shareRatio);
      h = calculateShare(nilai_saudaralakikandung, ratioParts, nIrst);
      distributedAssets = distributedAssets + h;
      _HasilSaudaraLakiKandung = h;
      secondCharacter = secondCharacter + 1;
      if (determineShareType(ratioParts) == "Ashobah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      if (determineShareType(ratioParts) == "Musytarakah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      x =
        x +
        "<td>" +
        nilai_saudaralakikandung +
        " Saudara Laki-laki sekandung (" +
        rSaudaraLakiKandung +
        ')</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x =
        x +
        '</td><td align="right">' +
        toRp(h / nilai_saudaralakikandung) +
        "</td></tr>";
    }
    if (nilai_Saudaralakiseayah > 0) {
      ratioParts = processRatio(rSaudaraLakiSeAyah, resultIndex, shareRatio);
      h = calculateShare(nilai_Saudaralakiseayah, ratioParts, nIrst);
      distributedAssets = distributedAssets + h;
      _HasilSaudaraLakiSeAyah = h;
      secondCharacter = secondCharacter + 1;
      if (determineShareType(ratioParts) == "Ashobah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      x =
        x +
        "<td>" +
        nilai_Saudaralakiseayah +
        " Saudara Laki-laki satu Ayah (" +
        rSaudaraLakiSeAyah +
        ')</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x =
        x +
        '</td><td align="right">' +
        toRp(h / nilai_Saudaralakiseayah) +
        "</td></tr>";
    }
    if (nilai_saudaraperempuanseayah > 0) {
      ratioParts = processRatio(
        rSaudaraPerempuanSeAyah,
        resultIndex,
        shareRatio,
      );
      h = calculateShare(nilai_saudaraperempuanseayah, ratioParts, nIrst);
      distributedAssets = distributedAssets + h;
      _HasilSaudaraPerempuanSeAyah = h;
      secondCharacter = secondCharacter + 1;
      if (determineShareType(ratioParts) == "Ashobah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      x =
        x +
        "<td>" +
        nilai_saudaraperempuanseayah +
        " Saudara Perempuan satu Ayah (" +
        rSaudaraPerempuanSeAyah +
        ')</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x =
        x +
        '</td><td align="right">' +
        toRp(h / nilai_saudaraperempuanseayah) +
        "</td></tr>";
    }
    if (
      nilai_saudaralakiseibu > 0 &&
      nilai_saudaraperempuanseIbu > 0 &&
      (nilai_saudaralakikandung == 0 || nilai_suami == 0 || nilai_ibu == 0)
    ) {
      ratioParts = processRatio("1/3", resultIndex, shareRatio);
      h = calculateShare(1, ratioParts, nIrst);
      distributedAssets = distributedAssets + h;
      secondCharacter = secondCharacter + 1;
      x =
        x +
        "<td>Bagian saudara satu Ibu (" +
        ratioParts +
        ") [<b>" +
        toRp(h) +
        '</b>]</td><td colspan="2"><hr></td></tr>';
      ratioParts = sahamAshobah(
        (h / nilai_saudaraibu) * nilai_saudaralakiseibu,
        nIrst,
        adjustedShares,
        ratioParts,
      );
      x =
        x +
        "<td>&rarr; " +
        nilai_saudaralakiseibu +
        ' Saudara Laki-laki satu Ibu</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x =
        x +
        '</td><td align="right">' +
        toRp(
          ((h / nilai_saudaraibu) * nilai_saudaralakiseibu) /
            nilai_saudaralakiseibu,
        ) +
        "</td></tr>";
      ratioParts = sahamAshobah(
        (h / nilai_saudaraibu) * nilai_saudaraperempuanseIbu,
        nIrst,
        adjustedShares,
        ratioParts,
      );
      x =
        x +
        "<td>&rarr; " +
        nilai_saudaraperempuanseIbu +
        ' Saudara Prempuan satu Ibu</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x =
        x +
        '</td><td align="right">' +
        toRp(
          ((h / nilai_saudaraibu) * nilai_saudaraperempuanseIbu) /
            nilai_saudaraperempuanseIbu,
        ) +
        "</td></tr>";
    } else {
      if (ash.length == 2 && nilai_saudaraibu > 1) {
        ratioParts = processRatio("1/3", resultIndex, shareRatio);
        h = calculateShare(1, ratioParts, nIrst);
        distributedAssets = distributedAssets + h;
        secondCharacter = secondCharacter + 1;
        x =
          x +
          "<td>Bagian saudara satu Ibu (1/3) [<b>" +
          toRp(h) +
          '</b>]</td><td colspan="2"><hr></td></tr>';
        if (nilai_saudaralakiseibu > 0) {
          x =
            x +
            "<td>&rarr; " +
            nilai_saudaralakiseibu +
            ' Saudara Laki-laki satu Ibu</td><td align="center">' +
            determineShareType("1/1B") +
            "</td>";
          x =
            x +
            '</td><td align="right">' +
            toRp(h / nilai_saudaraibu) +
            "</td></tr>";
        }
        if (nilai_saudaraperempuanseIbu > 0) {
          x =
            x +
            "<td>&rarr; " +
            nilai_saudaraperempuanseIbu +
            ' Saudara Perempuan satu Ibu</td><td align="center">' +
            determineShareType("1/1B") +
            "</td>";
          x =
            x +
            '</td><td align="right">' +
            toRp(h / nilai_saudaraibu) +
            "</td></tr>";
        }
      } else {
        if (nilai_saudaralakiseibu > 0) {
          ratioParts = processRatio(rSaudaraLakiSeIbu, resultIndex, shareRatio);
          h = calculateShare(nilai_saudaralakiseibu, ratioParts, nIrst);
          distributedAssets = distributedAssets + h;
          _HasilSaudaraLakiSeIbu = h;
          secondCharacter = secondCharacter + 1;
          if (determineShareType(ratioParts) == "Musytarakah") {
            ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
          }
          x =
            x +
            "<td>" +
            nilai_saudaralakiseibu +
            " Saudara Laki-laki satu Ibu (" +
            rSaudaraLakiSeIbu +
            ')</td><td align="center">' +
            determineShareType(ratioParts) +
            "</td>";
          x =
            x +
            '</td><td align="right">' +
            toRp(h / nilai_saudaralakiseibu) +
            "</td></tr>";
        }
        if (nilai_saudaraperempuanseIbu > 0) {
          ratioParts = processRatio(
            rSaudaraPerempuanSeIbu,
            resultIndex,
            shareRatio,
          );
          h = calculateShare(nilai_saudaraperempuanseIbu, ratioParts, nIrst);
          distributedAssets = distributedAssets + h;
          _HasilSaudaraPerempuanSeIbu = h;
          secondCharacter = secondCharacter + 1;
          if (determineShareType(ratioParts) == "Musytarakah") {
            ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
          }
          x =
            x +
            "<td>" +
            nilai_saudaraperempuanseIbu +
            " Saudara Perempuan satu Ibu (" +
            rSaudaraPerempuanSeIbu +
            ')</td><td align="center">' +
            determineShareType(ratioParts) +
            "</td>";
          x =
            x +
            '</td><td align="right">' +
            toRp(h / nilai_saudaraperempuanseIbu) +
            "</td></tr>";
        }
      }
    }
    if (nilai_anaklakisaudarakandung > 0) {
      ratioParts = processRatio(
        rAnakLakiSaudaraKandung,
        resultIndex,
        shareRatio,
      );
      h = calculateShare(nilai_anaklakisaudarakandung, ratioParts, nIrst);
      distributedAssets = distributedAssets + h;
      _HasilAnakLakiSaudaraKandung = h;
      secondCharacter = secondCharacter + 1;
      if (determineShareType(ratioParts) == "Ashobah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      x =
        x +
        "<td>" +
        nilai_anaklakisaudarakandung +
        " Anak Laki-laki saudara Sekandung (" +
        rAnakLakiSaudaraKandung +
        ')</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x =
        x +
        '</td><td align="right">' +
        toRp(h / nilai_anaklakisaudarakandung) +
        "</td></tr>";
    }
    if (nilai_anaklakisaudaraseayah > 0) {
      ratioParts = processRatio(
        rAnakLakiSaudaraSeAyah,
        resultIndex,
        shareRatio,
      );
      h = calculateShare(nilai_anaklakisaudaraseayah, ratioParts, nIrst);
      distributedAssets = distributedAssets + h;
      _HasilAnakLakiSaudaraSeAyah = h;
      secondCharacter = secondCharacter + 1;
      if (determineShareType(ratioParts) == "Ashobah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      x =
        x +
        "<td>" +
        nilai_anaklakisaudaraseayah +
        " Anak Laki-laki saudara satu Ayah (" +
        rAnakLakiSaudaraSeAyah +
        ')</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x =
        x +
        '</td><td align="right">' +
        toRp(h / nilai_anaklakisaudaraseayah) +
        "</td></tr>";
    }
    if (nilai_pamankandungayah > 0) {
      ratioParts = processRatio(rPamanKandungAyah, resultIndex, shareRatio);
      h = calculateShare(nilai_pamankandungayah, ratioParts, nIrst);
      distributedAssets = distributedAssets + h;
      _HasilPamanKandungAyah = h;
      secondCharacter = secondCharacter + 1;
      if (determineShareType(ratioParts) == "Ashobah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      x =
        x +
        "<td>" +
        nilai_pamankandungayah +
        " Paman kandung dari Ayah (" +
        rPamanKandungAyah +
        ')</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x =
        x +
        '</td><td align="right">' +
        toRp(h / nilai_pamankandungayah) +
        "</td></tr>";
    }
    if (nilai_pamansekakekayah > 0) {
      ratioParts = processRatio(rPamanSeKakekAyah, resultIndex, shareRatio);
      h = calculateShare(nilai_pamansekakekayah, ratioParts, nIrst);
      distributedAssets = distributedAssets + h;
      _HasilPamanSeKakekAyah = h;
      secondCharacter = secondCharacter + 1;
      if (determineShareType(ratioParts) == "Ashobah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      x =
        x +
        "<td>" +
        nilai_pamansekakekayah +
        " Paman satu Kakek dari Ayah (" +
        rPamanSeKakekAyah +
        ')</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x =
        x +
        '</td><td align="right">' +
        toRp(h / nilai_pamansekakekayah) +
        "</td></tr>";
    }
    if (nilai_anaklakipamankandung > 0) {
      ratioParts = processRatio(rAnakLakiPamanKandung, resultIndex, shareRatio);
      h = calculateShare(nilai_anaklakipamankandung, ratioParts, nIrst);
      distributedAssets = distributedAssets + h;
      _HasilAnakLakiPamanKandung = h;
      secondCharacter = secondCharacter + 1;
      if (determineShareType(ratioParts) == "Ashobah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      x =
        x +
        "<td>" +
        nilai_anaklakipamankandung +
        " Anak Laki-laki Paman sekandung (" +
        rAnakLakiPamanKandung +
        ')</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x =
        x +
        '</td><td align="right">' +
        toRp(h / nilai_anaklakipamankandung) +
        "</td></tr>";
    }
    if (nilai_anaklakipamansekakek > 0) {
      ratioParts = processRatio(rAnakLakiPamanSeKakek, resultIndex, shareRatio);
      h = calculateShare(nilai_anaklakipamansekakek, ratioParts, nIrst);
      distributedAssets = distributedAssets + h;
      _HasilAnakLakiPamanSeKakek = h;
      secondCharacter = secondCharacter + 1;
      if (determineShareType(ratioParts) == "Ashobah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      x =
        x +
        "<td>" +
        nilai_anaklakipamansekakek +
        " Anak Laki-laki Paman satu Kakek (" +
        rAnakLakiPamanSeKakek +
        ')</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x =
        x +
        '</td><td align="right">' +
        toRp(h / nilai_anaklakipamansekakek) +
        "</td></tr>";
    }
    if (nilai_ayah > 0) {
      ratioParts = processRatio(rAyah, resultIndex, shareRatio);
      h = calculateShare(nilai_ayah, ratioParts, nIrst);
      distributedAssets = distributedAssets + h;
      _HasilAyah = h;
      secondCharacter = secondCharacter + 1;
      if (rAyah == "1/6+") {
        if (nIrst - distributedAssets > 0) {
          h = h + (nIrst - distributedAssets);
          _HasilAyah = h;
          distributedAssets = nIrst;
          ratioParts = ratioParts + "+A";
        }
      }
      if (determineShareType(ratioParts) == "Ashobah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      x =
        x +
        "<td>" +
        nilai_ayah +
        " Ayah (" +
        rAyah +
        ')</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x = x + '</td><td align="right">' + toRp(h / nilai_ayah) + "</td></tr>";
    }
    if (nilai_kakek > 0) {
      ratioParts = processRatio(rKakek, resultIndex, shareRatio);
      h = calculateShare(nilai_kakek, ratioParts, nIrst);
      distributedAssets = distributedAssets + h;
      _HasilKakek = h;
      secondCharacter = secondCharacter + 1;
      if (rKakek == "1/6+") {
        if (nIrst - distributedAssets > 0) {
          h = h + (nIrst - distributedAssets);
          _HasilKakek = h;
          distributedAssets = nIrst;
          ratioParts = ratioParts + "+A";
        }
      }
      if (determineShareType(ratioParts) == "Ashobah") {
        ratioParts = sahamAshobah(h, nIrst, adjustedShares, ratioParts);
      }
      x =
        x +
        "<td>" +
        nilai_kakek +
        " Kakek (" +
        rKakek +
        ')</td><td align="center">' +
        determineShareType(ratioParts) +
        "</td>";
      x = x + '</td><td align="right">' + toRp(h / nilai_kakek) + "</td></tr>";
    }
    if (nIrst - distributedAssets > 1) {
      x =
        x +
        '<td colspan="3">Sisa harta ' +
        toRp(nIrst - distributedAssets) +
        " diserahkan ke <i><b>Baitul maal</b></i></td>";
    }
    x = x + "<tr>";
    x = x + "</tbody></table>";
    x = x + '<p id="table">' + partnerHTML + "</p>";
    $("li.hitung").remove();
    $("ul.selesai").html(
      '<li><a href="" id="reset" class="ui-link ui-btn">HITUNG LAGI</a></li>',
    );
    $("#hasilperhitungan").html(x);
  });
  _Halaman = 0;
  $(document).on("click", "#next", function () {
    if ($.mobile.activePage.next("[data-role=page]").length !== 0) {
      var currentPage = $.mobile.activePage.next("[data-role=page]");
      if (nIrst > 0 && _Waris != "") {
        if (_Wasiat > _Harta / 3) {
          $("#hasil_harta")
            .val(
              "Wasiat tidak boleh lebih dari 1/3 (" +
                toRp(_Harta / 3) +
                ") harta warist",
            )
            .val();
          $("#hasil_harta").css({ color: "red" });
          $("#hasil_harta").focus();
        } else {
          if (_GonoGini > _HartaKotor / 2) {
            $("#hasil_harta")
              .val(
                "Gonogini tidak boleh lebih dari 1/2 (" +
                  toRp(_Harta / 2) +
                  ") harta warist",
              )
              .val();
            $("#hasil_harta").css({ color: "red" });
            $("#hasil_harta").focus();
          } else {
            isDone();
            $.mobile.changePage(currentPage, { transition: "slide" });
            _Halaman++;
          }
        }
      } else {
        if (_Waris == "") {
          $("#hasil_harta").val("Muwarrits tidak boleh kosong.").val();
        } else {
          $("#hasil_harta").val("Tidak ada harta yang akan diwariskan.").val();
        }
        $("#hasil_harta").css({ color: "red" });
        $("#hasil_harta").focus();
      }
    } else {
    }
  });
  $(document).on("click", "#back", function () {
    if ($.mobile.activePage.prev("[data-role=page]").length !== 0) {
      var previousPage = $.mobile.activePage.prev("[data-role=page]");
      isDone();
      $.mobile.changePage(previousPage, {
        transition: "slide",
        reverse: true,
      });
    } else {
      window.location = "?host=" + host;
    }
  });
  $(document).on("click", "#reset", function () {
    window.location = "?host=" + host;
  });
});
