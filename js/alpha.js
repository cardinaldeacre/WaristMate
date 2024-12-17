var mode = 'USER';
var sisasaham = 0;
var totalAshobah = 0;
var _Jenis = '';
var _aul = 0;
var _radd = 0;
var _Halaman = 0; //
var _Modal = 0;
var _HartaKotor = 0;
var _Harta = 0;
var _GonoGini = 0;
var _HartaAshobah = 0;
var _Hutang = 0;
var _Makam = 0;
var _Wasiat = 0;
var _Istri = 0;
var _Suami = 0;
var _AnakLaki = 0;
var _AnakPerempuan = 0;
var _Ayah = 0;
var _Ibu = 0;
var _CucuLaki = 0;
var _CucuPerempuan = 0;
var _AnakLakiPamanKandung = 0;
var _AnakLakiPamanSeKakek = 0;
var _AnakLakiSaudaraKandung = 0;
var _AnakLakiSaudaraSeAyah = 0;
var _Kakek = 0;
var _NenekAyah = 0;
var _NenekIbu = 0;
var _Nenek2 = 0;
var _PamanKandungAyah = 0;
var _PamanSeKakekAyah = 0;
var _SaudaraLakiKandung = 0;
var _SaudaraLakiSeAyah = 0;
var _SaudaraLakiSeIbu = 0;
var _SaudaraPerempuanSeAyah = 0;
var _SaudaraPerempuanSeIbu = 0;
var _SaudaraPerempuanKandung = 0;
var _Waris = '';
var _Kelamin = '';
var _Anak = 0;
var _Cucu = 0;
var _Saudara = 0;
var _SaudaraIbu = 0;
var _SaudaraAyah = 0;
var _SaudaraKandung = 0;
var rIstri = '1/4';
var rSuami = '1/2';
var rAnakLaki = '2:1A';
var rAnakPerempuan = '1/2';
var rAyah = '1/6';
var rIbu = '1/3';
var rCucuLaki = '2:1A';
var rCucuPerempuan = '1/2';
var rKakek = '1/6';
var rNenekAyah = '1/6';
var rNenekIbu = '1/6';
var rSaudaraLakiKandung = '2:1A';
var rSaudaraPerempuanKandung = '1/2';
var rSaudaraLakiSeAyah = '2:1A';
var rSaudaraPerempuanSeAyah = '1/2';
var rSaudaraLakiSeIbu = '1/6';
var rSaudaraPerempuanSeIbu = '1/6';
var rAnakLakiSaudaraKandung = '2:1A';
var rAnakLakiSaudaraSeAyah = '2:1A';
var rPamanKandungAyah = '2:1A';
var rPamanSeKakekAyah = '2:1A';
var rAnakLakiPamanKandung = '2:1A';
var rAnakLakiPamanSeKakek = '2:1A';

var a = [],
  a1 = [],
  a2 = [];
// kunci ashabah
var _a = [],
  _a1 = [];
var ash = [],
  ash1 = [];
if (typeof partnerHTML == undefined) {
  var partnerHTML = '';
}
$('#NilaiHartaKotor,#NilaiHutang,#NilaiGonoGini,#NilaiMakam,#NilaiWasiat').live(
  'change paste keyup',
  function () {
    _HartaKotor = $('#NilaiHartaKotor').val();
    _Harta = _HartaKotor - _GonoGini;
    _Hutang = $('#NilaiHutang').val();
    _Makam = $('#NilaiMakam').val();
    _Wasiat = $('#NilaiWasiat').val();
    _Modal = _Harta - _Hutang - _Makam - _Wasiat;
    $('#NilaiHarta').val(_Harta);
    $('#hasil_harta').val(toRp(_Modal));
    $('#hasil_harta').css({ color: '#000' });
  }
);
$('#gonogini').change(function () {
  _GonoGini = ($('input=[name=gonogini]:checked').val() / 100) * _HartaKotor;
  _Harta = _HartaKotor - _GonoGini;
  _Modal = _Harta - _Hutang - _Makam - _Wasiat;
  $('#NilaiHarta').val(_HartaKotor - _GonoGini);
  $('#hasil_harta').val(toRp(_Modal));
});
$('#cb_hartabersama').click(function () {
  $('#pewaris').change();
  var ratioParts = $('#cb_hartabersama').attr('checked');
  if (ratioParts) {
    $('#field_tirkah').show();
    $('.field_totalharta').tealphat('Harta Sebelum Tirkah (total Harta)');
  } else {
    $('#field_tirkah').hide();
    $('.field_totalharta').html('Tirkah (Harta <i>muwarrits</i>)');
    _GonoGini = 0;
    _Harta = _HartaKotor - _GonoGini;
    _Modal = _Harta - _Hutang - _Makam - _Wasiat;
    $('#NilaiHarta').val(_Harta);
    $('#hasil_harta').val(toRp(_Modal));
    $('#nilai_istri').val('0').slider().slider('refresh');
    $('#field_istri').hide();
    $('#field_suami').show();
    $('#field_gonogini').hide();
    $('#NilaiGonoGini').val('').val();
  }
});

//isHartaBersamaChecked = harta bersama

$('#pewaris').change(function () {
  _Waris = $('input[name=pewaris]:checked').val();
  var isHartaBersamaChecked = $('#cb_hartabersama').attr('checked');
  if (_Waris == 'Laki-laki') {
    if (isHartaBersamaChecked) {
      var gonoginiPercentage = $('input=[name=gonogini]:checked').val();
      if (gonoginiPercentage > 0) {
        _GonoGini = ($('input=[name=gonogini]:checked').val() / 100) * _HartaKotor;
        _Harta = _HartaKotor - _GonoGini;
        _Modal = _Harta - _Hutang - _Makam - _Wasiat;
        $('#NilaiHarta').val(_Harta);
        $('#hasil_harta').val(toRp(_Modal));
      }
      _Suami = 0;
      $('#nilai_suami').val('0');
      $('#nilai_suami').prop('checked', false).checkboalpharadio('refresh');
      $('#field_gonogini').show();
    } else {
      $('#field_gonogini').hide();
    }
    $('#field_suami').hide();
    $('#field_istri').show();
  }
  if (_Waris == 'Perempuan') {
    _GonoGini = 0;
    _Harta = _HartaKotor - _GonoGini;
    _Modal = _Harta - _Hutang - _Makam - _Wasiat;
    $('#NilaiHarta').val(_Harta);
    $('#hasil_harta').val(toRp(_Modal));
    $('#nilai_istri').val('0').slider().slider('refresh');
    $('#field_istri').hide();
    $('#field_suami').show();
    $('#field_gonogini').hide();
    $('#NilaiGonoGini').val('').val();
  }
});
$('#cb_ayah,#cb_ibu,#cb_suami,#cb_kakek').live('change', function () {
  if ($('#cb_ayah').is(':checked')) {
    _Ayah = 1;
    _Kakek = 0;
    _NenekAyah = 0;
  } else {
    _Ayah = 0;
  }
  if ($('#cb_ibu').is(':checked')) {
    _Ibu = 1;
  } else {
    _Ibu = 0;
  }
  if ($('#cb_suami').is(':checked')) {
    _Suami = 1;
  } else {
    _Suami = 0;
  }
  if ($('#cb_kakek').is(':checked')) {
    if (_Ayah == 0) {
      _Kakek = 1;
    }
  } else {
    _Kakek = 0;
  }
  isSaham();
});
$('#nilai_i3stri').live('change', function () {
  _Istri = $(this).val();
  isSaham();
});
$('#nilai_anaklaki').live('change', function () {
  _AnakLaki = $(this).val();
  isSaham();
});
$('#nilai_anakperempuan').live('change', function () {
  _AnakPerempuan = $(this).val();
  isSaham();
});
$('#nilai_cuculaki').live('change', function () {
  _CucuLaki = $(this).val();
  isSaham();
});
$('#nilai_cucuperempuan').live('change', function () {
  _CucuPerempuan = $(this).val();
  isSaham();
});
$('#nilai_nenekayah').live('change', function () {
  _NenekAyah = $(this).val();
  isSaham();
});
$('#nilai_nenekibu').live('change', function () {
  _NenekIbu = $(this).val();
  isSaham();
});
$('#nilai_saudaralakikandung').live('change', function () {
  _SaudaraLakiKandung = $(this).val();
  isSaham();
});
$('#nilai_saudaraperempuankandung').live('change', function () {
  _SaudaraPerempuanKandung = $(this).val();
  isSaham();
});
$('#nilai_saudaralakiseayah').live('change', function () {
  _SaudaraLakiSeAyah = $(this).val();
  isSaham();
});
$('#nilai_saudaraperempuanseayah').live('change', function () {
  _SaudaraPerempuanSeAyah = $(this).val();
  isSaham();
});
$('#nilai_saudaralakiseibu').live('change', function () {
  _SaudaraLakiSeIbu = $(this).val();
  isSaham();
});
$('#nilai_saudaraperempuanseibu').live('change', function () {
  _SaudaraPerempuanSeIbu = $(this).val();
  isSaham();
});
$('#nilai_anaklakisaudarakandung').live('change', function () {
  _AnakLakiSaudaraKandung = $(this).val();
  isSaham();
});
$('#nilai_anaklakisaudaraseayah').live('change', function () {
  _AnakLakiSaudaraSeAyah = $(this).val();
  isSaham();
});
$('#nilai_pamankandungayah').live('change', function () {
  _PamanKandungAyah = $(this).val();
  isSaham();
});
$('#nilai_pamansekakekayah').live('change', function () {
  _PamanSeKakekAyah = $(this).val();
  isSaham();
});
$('#nilai_anaklakipamankandung').live('change', function () {
  _AnakLakiPamanKandung = $(this).val();
  isSaham();
});
$('#nilai_anaklakipamansekakek').live('change', function () {
  _AnakLakiPamanSeKakek = $(this).val();
  isSaham();
});
$('#nilai_cuculaki,#nilai_saudaralakiseayah,#nilai_anaklakisaudarakandung').live(
  'change',
  function () {
    if (_AnakPerempuan > 1) {
      if (_CucuLaki > 0) {
        $('#field_cucuperempuan').show();
        $('#info_penghalang_1a').hide();
      } else {
        $('#nilai_cucuperempuan').val('0').slider().slider('refresh');
        $('#field_cucuperempuan').hide();
        $('#info_penghalang_1a').show();
      }
    }
    if (_SaudaraPerempuanKandung > 1) {
      if (_SaudaraLakiSeAyah > 0) {
        if (_SaudaraPerempuanKandung > 1) {
          $('#field_saudaraperempuanseayah').show();
          $('#info_penghalang_a4').hide();
        }
      } else {
        $('#nilai_saudaraperempuanseayah').val('0').slider().slider('refresh');
        $('#field_saudaraperempuanseayah').hide();
        $('#info_penghalang_a4').show();
      }
    } else {
      $('#info_penghalang_a4').hide();
    }
    if (_AnakLakiSaudaraKandung > 0) {
      $('#nilai_anaklakisaudaraseayah').val('0').slider().slider('refresh');
      $('#field_anaklakisaudaraseayah').hide();
    } else {
      $('#field_anaklakisaudaraseayah').show();
    }
  }
);
$('#nilai_anaklakipamankandung').live('change', function () {
  if (
    _AnakLakiPamanKandung > 0 ||
    _PamanSeKakekAyah > 0 ||
    _AnakLakiSaudaraSeAyah > 0 ||
    _SaudaraLakiKandung > 0 ||
    _Ayah > 0
  ) {
    $('#nilai_anaklakipamansekakek').val('0').slider().slider('refresh');
    $('#field_anaklakipamansekakek').hide();
  } else {
    $('#field_anaklakipamansekakek').show();
  }
});
$('#nilai_pamankandungayah').live('change', function () {
  if (_PamanKandungAyah > 0 || _AnakLakiSaudaraSeAyah > 0 || _SaudaraLakiKandung > 0 || _Ayah > 0) {
    $('#nilai_pamansekakekayah').val('0').slider().slider('refresh');
    $('#field_pamansekakekayah').hide();
  } else {
    $('#field_pamansekakekayah').show();
  }
});
function isDone() {
  var alpha = '';
  if (_AnakLaki > 0) {
    $('#nilai_cuculaki').val('0').slider().slider('refresh');
    $('#nilai_cucuperempuan').val('0').slider().slider('refresh');
    $('#field_cucu').hide();
    $('#info_penghalang_1').show();
    $('#info_penghalang_1a').hide();
  } else {
    $('#info_penghalang_1').hide();
    $('#field_cucu').show();
  }
  if (_AnakPerempuan > 1) {
    if (_CucuLaki == 0) {
      $('#nilai_cucuperempuan').val('0').slider().slider('refresh');
      $('#field_cucuperempuan').hide();
      $('#info_penghalang_1a').show();
    } else {
      $('#field_cucuperempuan').show();
      $('#info_penghalang_1a').hide();
    }
  } else {
    $('#field_cucuperempuan').show();
    $('#info_penghalang_1a').hide();
  }
  if (_Ayah > 0) {
    $('#info_penghalang_3').show();
    $('#nilai_saudaraperempuanseayah').val('0').slider().slider('refresh');
    $('#nilai_saudaralakikandung').val('0').slider().slider('refresh');
    $('#nilai_saudaraperempuankandung').val('0').slider().slider('refresh');
    $(
      '#field_kakek,#field_saudaralakikandung,#field_saudaraperempuankandung,#field_saudaraperempuanseayah'
    ).hide();
  } else {
    $('#info_penghalang_3').hide();
    $(
      '#field_kakek,#nilai_nenekayah,#field_saudaralakikandung,#field_saudaraperempuankandung,#field_saudaraperempuanseayah'
    ).show();
  }
  if (_Ibu > 0) {
    $('#field_nenekayah,#field_nenekibu').hide();
    $('#nilai_nenekayah,#nilai_nenekibu').val('0').slider().slider('refresh');
    _NenekAyah = 0;
    _NenekIbu = 0;
    _Nenek2 = 0;
  } else {
    if (_Ayah == 0) {
      $('#field_nenekayah').show();
    } else {
      _Nenek2 = parseInt(_NenekAyah) + parseInt(_NenekIbu);
    }
    $('#field_nenekibu').show();
  }
  if (_Ayah > 0 && _Ibu > 0) {
    $('#info_penghalang_2').show();
  } else {
    $('#info_penghalang_2').hide();
  }
  if (_CucuPerempuan > 0 || _AnakPerempuan > 0) {
    $('#nilai_saudaralakiseibu').val('0').slider().slider('refresh');
    $('#nilai_saudaraperempuanseibu').val('0').slider().slider('refresh');
    $('#field_saudaralakiseibu,#field_saudaraperempuanseibu').hide();
    $('#info_penghalang_b4').show();
    if (_SaudaraPerempuanKandung > 0) {
      $('#field_saudaralakikandung').hide();
      $('#info_penghalang_a3').show();
      $('#field_saudaralakiseayah,#field_saudaraperempuanseayah').hide();
      $('#info_penghalang_4').show();
    } else {
      $('#info_penghalang_a3').hide();
    }
    if (_SaudaraPerempuanSeAyah > 0) {
      $('#field_saudaralakiseayah').hide();
      $('#info_penghalang_a3').show();
    } else {
      $('#info_penghalang_a3').hide();
    }
  } else {
    $(
      '#field_saudaralakiseibu,#field_saudaraperempuanseibu,#field_saudaralakikandung,#field_saudaralakiseayah'
    ).show();
    $('#info_penghalang_a,#info_penghalang_c4').hide();
    $('#info_penghalang_4').hide();
  }
  if (_SaudaraLakiKandung > 0) {
    $('#nilai_saudaralakiseayah').val('0').slider().slider('refresh');
    $('#nilai_saudaraperempuanseayah').val('0').slider().slider('refresh');
    $('#field_saudaralakiseayah,#field_saudaraperempuanseayah').hide();
    $('#info_penghalang_4').show();
  } else {
    if ((_AnakPerempuan == 0 || _CucuPerempuan == 0) && _SaudaraPerempuanKandung == 0) {
      $('#info_penghalang_4').hide();
      $('#field_saudaraperempuanseayah').show();
    }
    if ((_CucuPerempuan > 0 || _AnakPerempuan > 0) && _SaudaraPerempuanSeAyah > 0) {
      $('#field_saudaralakiseayah').show();
    }
  }
  if (_SaudaraPerempuanKandung > 1) {
    if (_SaudaraLakiSeAyah == 0) {
      $('#nilai_saudaraperempuanseayah').val('0').slider().slider('refresh');
      $('#field_saudaraperempuanseayah').hide();
      $('#info_penghalang_a4').show();
    } else {
      $('#field_saudaraperempuanseayah').show();
      $('#info_penghalang_a4').hide();
    }
  } else {
    $('#info_penghalang_a4').hide();
  }
  if (
    _AnakLakiPamanKandung > 0 ||
    _PamanSeKakekAyah > 0 ||
    _AnakLakiSaudaraSeAyah > 0 ||
    _SaudaraLakiKandung > 0
  ) {
    $('#nilai_anaklakipamansekakek').val('0').slider().slider('refresh');
    $('#field_anaklakipamansekakek').hide();
  } else {
    $('#field_anaklakipamansekakek').show();
  }
  if (_PamanKandungAyah > 0 || _AnakLakiSaudaraSeAyah > 0 || _SaudaraLakiKandung > 0) {
    $('#nilai_pamansekakekayah').val('0').slider().slider('refresh');
    $('#field_pamansekakekayah').hide();
  } else {
    $('#field_pamansekakekayah').show();
  }
  alpha =
    '<div data-role="header" data-position="fialphaed" data-theme="b"><h1>Hasil</h1></div><div data-role="content">';
  alpha =
    alpha +
    '<div id="hasilperhitungan"><p>Sudah dapat diketahui hasilnya, karena ada penghalang dari ahli waris.</p></div>';
  alpha =
    alpha +
    '<div id="footer" data-role="footer" data-position="fialphaed"><div data-role="navbar" data-iconpos="top" data-theme="a"><ul class="selesai"><li ckass="restart"><a href="" id="reset">HITUNG ULANG</a></li><li class="hitung"><a href="" id="hitung">LIHAT HASIL</a></li></ul></div></div>';
  if (_AnakLaki > 0) {
    alpha = alpha + '</div>';
    _CucuLaki = 0;
    _CucuPerempuan = 0;
    _SaudaraLakiKandung = 0;
    _SaudaraPerempuanKandung = 0;
    _AnakLakiSaudaraKandung = 0;
    _AnakLakiSaudaraSeAyah = 0;
    _PamanKandungAyah = 0;
    _PamanSeKakekAyah = 0;
    _AnakLakiPamanKandung = 0;
    _AnakLakiPamanSeKakek = 0;
    $('.penghalang_3').html(alpha);
  }
  if (_CucuLaki > 0) {
    alpha = alpha + '</div>';
    _SaudaraLakiKandung = 0;
    _SaudaraPerempuanKandung = 0;
    _AnakLakiSaudaraKandung = 0;
    _AnakLakiSaudaraSeAyah = 0;
    _PamanKandungAyah = 0;
    _PamanSeKakekAyah = 0;
    _AnakLakiPamanKandung = 0;
    _AnakLakiPamanSeKakek = 0;
    $('.penghalang_3').html(alpha);
  }
  if (_Kakek > 0 || _Ayah > 0) {
    alpha = alpha + '</div>';
    _SaudaraLakiKandung = 0;
    _SaudaraPerempuanKandung = 0;
    _AnakLakiSaudaraKandung = 0;
    _AnakLakiSaudaraSeAyah = 0;
    _PamanKandungAyah = 0;
    _PamanSeKakekAyah = 0;
    _AnakLakiPamanKandung = 0;
    _AnakLakiPamanSeKakek = 0;
    $('.penghalang_3').html(alpha);
  }
  if (_SaudaraLakiKandung > 0 || _SaudaraLakiSeAyah > 0) {
    alpha = alpha + '</div>';
    _AnakLakiSaudaraKandung = 0;
    _AnakLakiSaudaraSeAyah = 0;
    _PamanKandungAyah = 0;
    _PamanSeKakekAyah = 0;
    _AnakLakiPamanKandung = 0;
    _AnakLakiPamanSeKakek = 0;
    $('.penghalang_5').html(alpha);
  }
  if (_AnakLakiSaudaraKandung > 0 || _AnakLakiSaudaraSeAyah > 0) {
    alpha = alpha + '</div>';
    _PamanKandungAyah = 0;
    _PamanSeKakekAyah = 0;
    _AnakLakiPamanKandung = 0;
    _AnakLakiPamanSeKakek = 0;
    $('.penghalang_6').html(alpha);
  }
  if (_PamanKandungAyah > 0 || _PamanSeKakekAyah > 0) {
    alpha = alpha + '</div>';
    _AnakLakiPamanKandung = 0;
    _AnakLakiPamanSeKakek = 0;
    $('.penghalang_7').html(alpha);
  }
  alpha = alpha + '</div>';
  $('.penghalang_8').html(alpha);
}

//formula begin

function isSaham() {
  _Anak = parseInt(_AnakLaki) + parseInt(_AnakPerempuan);
  _Cucu = parseInt(_CucuLaki) + parseInt(_CucuPerempuan);
  _Nenek2 = parseInt(_NenekAyah) + parseInt(_NenekIbu);
  _SaudaraIbu = parseInt(_SaudaraLakiSeIbu) + parseInt(_SaudaraPerempuanSeIbu);
  _SaudaraAyah = parseInt(_SaudaraLakiSeAyah) + parseInt(_SaudaraPerempuanSeAyah);
  _SaudaraKandung = parseInt(_SaudaraLakiKandung) + parseInt(_SaudaraPerempuanKandung);
  _Saudara = parseInt(_SaudaraKandung) + parseInt(_SaudaraAyah) + parseInt(_SaudaraIbu);
  if (_Ayah == 0) {
    rAyah = 0;
  }
  if (_Ibu == 0) {
    rIbu = 0;
  }
  if (_Suami == 0) {
    rSuami = 0;
  }
  if (_Istri == 0) {
    rIstri = 0;
  }
  if (_AnakLaki == 0) {
    rAnakLaki = 0;
  }
  if (_AnakPerempuan == 0) {
    rAnakPerempuan = 0;
  }
  if (_CucuLaki == 0) {
    rCucuLaki = 0;
  }
  if (_CucuPerempuan == 0) {
    rCucuPerempuan = 0;
  }
  if (_Kakek == 0) {
    rKakek = 0;
  }
  if (_NenekAyah == 0) {
    rNenekAyah = 0;
  }
  if (_NenekIbu == 0) {
    rNenekIbu = 0;
  }
  if (_SaudaraLakiKandung == 0) {
    rSaudaraLakiKandung = 0;
  }
  if (_SaudaraPerempuanKandung == 0) {
    rSaudaraPerempuanKandung = 0;
  }
  if (_SaudaraLakiSeAyah == 0) {
    rSaudaraLakiSeAyah = 0;
  }
  if (_SaudaraPerempuanSeAyah == 0) {
    rSaudaraPerempuanSeAyah = 0;
  }
  if (_SaudaraLakiSeIbu == 0) {
    rSaudaraLakiSeIbu = 0;
  }
  if (_SaudaraPerempuanSeIbu == 0) {
    rSaudaraPerempuanSeIbu = 0;
  }
  if (_AnakLakiSaudaraKandung == 0) {
    rAnakLakiSaudaraKandung = 0;
  }
  if (_AnakLakiSaudaraSeAyah == 0) {
    rAnakLakiSaudaraSeAyah = 0;
  }
  if (_PamanKandungAyah == 0) {
    rPamanKandungAyah = 0;
  }
  if (_PamanSeKakekAyah == 0) {
    rPamanSeKakekAyah = 0;
  }
  if (_AnakLakiPamanKandung == 0) {
    rAnakLakiPamanKandung = 0;
  }
  if (_AnakLakiPamanSeKakek == 0) {
    rAnakLakiPamanSeKakek = 0;
  }
  if (_AnakPerempuan > 1 && _AnakLaki == 0) {
    rAnakPerempuan = '2/3';
  }
  if (_CucuPerempuan > 1 && _CucuLaki == 0) {
    rCucuPerempuan = '2/3';
  }
  if (_SaudaraPerempuanKandung > 1 && _SaudaraLakiKandung == 0) {
    rSaudaraPerempuanKandung = '2/3';
  }
  if (_SaudaraPerempuanKandung > 1) {
    rSaudaraPerempuanKandung = '2/3';
  }
  if (_SaudaraPerempuanSeAyah > 1 && _SaudaraLakiSeAyah == 0) {
    rSaudaraPerempuanSeAyah = '2/3';
  }
  if (_Anak == 0 || _Cucu == 0 || _Saudara > 1) {
    if (_Ibu > 0) {
      rIbu = '1/3';
    } else {
      rIbu = '0';
      rumusIbu = '';
    }
    if (_Ayah > 0) {
      rAyah = '1:1A';
      rumusAyah = 'Ashobah';
    } else {
      rAyah = '0';
      rumusAyah = '';
    }
  }
  if ((_Suami > 0 || _Istri > 0) && _Ayah > 0) {
    if (_Ibu > 0) {
      rIbu = '1:3A';
      rumusIbu = '1/3 Sisa (Gharawain)';
    } else {
      rIbu = '0';
      rumusIbu = '';
    }
  }
  if ((_Anak > 0 || _Cucu > 0 || _Saudara > 1) && _Ibu > 0 && _Ayah > 0) {
    if (_Ibu > 0) {
      rIbu = '1/6';
    } else {
      rIbu = '0';
      rumusIbu = '';
    }
    if (_Ayah > 0) {
      rAyah = '1/6+';
      rumusAyah = '1/6 + Sisa';
    } else {
      rAyah = '0';
      rumusAyah = '';
    }
  }
  if (_Anak > 0 || _Cucu > 0 || _Saudara > 1) {
    if (_Ibu > 0) {
      rIbu = '1/6';
    } else {
      rIbu = '0';
    }
  }
  if (_AnakPerempuan == 1) {
    if (_CucuPerempuan > 0) {
      rCucuPerempuan = '1/6';
    } else {
      rCucuPerempuan = '0';
    }
  }
  if (_AnakLaki > 0 || _CucuLaki > 0) {
    if (_Ayah > 0) {
      rAyah = '1/6';
    } else {
      rAyah = '0';
    }
    if (_Kakek > 0) {
      rKakek = '1/6';
    } else {
      rKakek = '0';
    }
  }
  if (
    _AnakLaki == 0 &&
    _AnakPerempuan == 0 &&
    _CucuLaki == 0 &&
    _CucuPerempuan == 0 &&
    _Kakek > 0
  ) {
    rKakek = '1/6';
  }
  if ((_Istri > 0 || _Ibu > 0) && _Kakek > 0) {
    if (_AnakLaki == 0 && _AnakPerempuan == 0 && _CucuLaki == 0 && _CucuPerempuan == 0) {
      rKakek = '1:1A';
    }
  }
  if (_SaudaraLakiSeIbu > 0 && (_SaudaraLakiKandung == 0 || _Suami == 0 || _Ibu == 0)) {
    if (_SaudaraPerempuanSeIbu > 0) {
      rSaudaraLakiSeIbu = '1/3B';
    } else {
      if (_SaudaraIbu == 1) {
        rSaudaraLakiSeIbu = '1/6';
      }
      if (_SaudaraIbu > 1) {
        rSaudaraLakiSeIbu = '1/3';
      }
    }
  } else {
    if (_SaudaraLakiSeIbu == 1 && _SaudaraPerempuanSeIbu == 0 && _SaudaraLakiKandung > 0) {
      rSaudaraLakiSeIbu = '1/6';
    }
  }
  if (_SaudaraPerempuanSeIbu > 0 && (_SaudaraLakiKandung == 0 || _Suami == 0 || _Ibu == 0)) {
    if (_SaudaraLakiSeIbu > 0) {
      rSaudaraPerempuanSeIbu = '1/3B';
    } else {
      if (_SaudaraIbu == 1) {
        rSaudaraPerempuanSeIbu = '1/6';
      }
      if (_SaudaraIbu > 1) {
        rSaudaraPerempuanSeIbu = '1/3';
      }
    }
  } else {
    if (_SaudaraPerempuanSeIbu == 1 && _SaudaraLakiSeIbu == 0 && _SaudaraLakiKandung > 0) {
      rSaudaraPerempuanSeIbu = '1/6';
    }
  }
  if (_SaudaraPerempuanKandung == 1) {
    if (_SaudaraPerempuanSeAyah > 0) {
      rSaudaraPerempuanSeAyah = '1/6';
    }
  }
  if (_Ibu == 0) {
    if (_NenekAyah > 0) {
      rNenekAyah = '1/6';
    } else {
      rNenekAyah = '0';
    }
    if (_NenekIbu > 0) {
      rNenekIbu = '1/6';
    } else {
      rNenekIbu = '0';
    }
    if (_NenekAyah > 0 && _NenekIbu > 0) {
      rNenekAyah = '1/6B';
      rNenekIbu = '1/6B';
    }
  }
  if ((_AnakPerempuan > 0 || _CucuPerempuan > 0) && _Ibu == 0) {
    if (_Ayah > 0) {
      if (_AnakLaki > 0 || _CucuLaki > 0) {
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
  if ((_AnakPerempuan > 0 || _CucuPerempuan > 0) && _AnakLaki == 0 && _CucuLaki == 0) {
    if (_Kakek > 0) {
      rKakek = '1/6+';
      rumusKakek = '1/6 + Sisa';
    } else {
      rKakek = '0';
      rumusKakek = '';
    }
  }
  if (_Suami > 0) {
    rSuami = '1/2';
  } else {
    rSuami = '0';
  }
  if (_Anak == 0 || _Cucu == 0) {
    if (_Suami > 0) {
      rSuami = '1/2';
    } else {
      rSuami = '0';
    }
  }
  if (_AnakPerempuan == 1 && _AnakLaki == 0) {
    rAnakPerempuan = '1/2';
  }
  if (_CucuPerempuan == 1 && _CucuLaki == 0 && _AnakPerempuan == 0) {
    rCucuPerempuan = '1/2';
  }
  if (_SaudaraPerempuanSeAyah == 1 && _SaudaraLakiSeAyah == 0 && _SaudaraPerempuanKandung == 0) {
    rSaudaraPerempuanSeAyah = '1/2';
  }
  if (_SaudaraPerempuanKandung == 1 && _SaudaraLakiKandung == 0) {
    rSaudaraPerempuanKandung = '1/2';
  }
  if (_Anak == 0 || _Cucu == 0) {
    if (_Istri > 0) {
      rIstri = '1/4';
    } else {
      rIstri = '0';
    }
  }
  if (_Anak > 0 || _Cucu > 0) {
    if (_Suami > 0) {
      rSuami = '1/4';
    } else {
      rSuami = '0';
    }
  }
  if (_Anak > 0 || _Cucu > 0) {
    if (_Istri > 0) {
      rIstri = '1/8';
    } else {
      rIstri = '0';
    }
  }
  if (_Ayah > 0 && _Ibu > 0 && (_Anak == 0 || _Cucu == 0 || _Saudara < 2)) {
  }
  if (_CucuLaki > 0) {
    if (_CucuPerempuan > 0) {
      rCucuLaki = '2:1A';
      rCucuPerempuan = '1:1A';
    } else {
      rCucuLaki = '1:1A';
    }
  }
  if (
    _Istri == 0 &&
    _Suami == 0 &&
    _Ibu == 0 &&
    _AnakLaki == 0 &&
    _AnakPerempuan == 0 &&
    _CucuLaki == 0 &&
    _CucuPerempuan == 0 &&
    _Kakek > 0
  ) {
    rKakek = '1:1A';
  }
  if (_AnakLaki > 0) {
    if (_AnakPerempuan > 0) {
      rAnakLaki = '2:1A';
      rumusAnakLaki = 'Ashobah';
      rAnakPerempuan = '1:1A';
      rumusAnakPerempuan = 'Ashobah';
    } else {
      rAnakLaki = '1:1A';
      rumusAnakLaki = 'Ashobah';
    }
  }
  if (_SaudaraLakiKandung > 0) {
    if (_Suami > 0 && _Ibu > 0 && _SaudaraPerempuanSeIbu > 1) {
    } else {
      rSaudaraLakiKandung = '1:1A';
      rumusSaudaraLakiKandung = 'Ashobah';
    }
  }
  if (_SaudaraLakiSeAyah > 0) {
    if (_SaudaraPerempuanSeAyah > 0) {
      rSaudaraLakiSeAyah = '2:1A';
      rumusSaudaraLakiSeAyah = 'Ashobah';
      rSaudaraPerempuanSeAyah = '1:1A';
      rumusSaudaraPerempuanSeAyah = 'Ashobah';
    } else {
      rSaudaraLakiSeAyah = '1:1A';
      rumusSaudaraLakiSeAyah = 'Ashobah';
    }
  }
  if (_SaudaraPerempuanKandung > 0 && (_AnakPerempuan > 0 || _CucuPerempuan > 0)) {
    if (_SaudaraLakiSeAyah == 0 && _SaudaraPerempuanSeAyah == 0) {
      rSaudaraPerempuanKandung = '1:1A';
      rumusSaudaraPerempuanKandung = 'Ashobah';
    }
    if (_SaudaraLakiKandung > 0) {
      rSaudaraLakiKandung = '2:1A';
      rumusSaudaraLakiKandung = 'Ashobah';
    } else {
      rSaudaraLakiKandung = '0';
      rumusSaudaraLakiKandung = '';
    }
  }
  if (_SaudaraPerempuanKandung > 0 && _SaudaraLakiKandung > 0) {
    rSaudaraLakiKandung = '2:1A';
    rumusSaudaraLakiKandung = 'Ashobah';
    rSaudaraPerempuanKandung = '1:1A';
    rumusSaudaraPerempuanKandung = 'Ashobah';
  }
  if (_SaudaraPerempuanSeAyah > 0 && _SaudaraLakiSeAyah > 0) {
    rSaudaraPerempuanSeAyah = '1:1A';
    rumusSaudaraPerempuanSeAyah = 'Ashobah';
  }
  if (_SaudaraPerempuanSeAyah > 0 && (_AnakPerempuan > 0 || _CucuPerempuan > 0)) {
    rSaudaraPerempuanSeAyah = '1:1A';
    rumusSaudaraPerempuanSeAyah = 'Ashobah';
  }
  if (_AnakLakiSaudaraKandung > 0) {
    rAnakLakiSaudaraKandung = '1:1A';
    rumusAnakLakiSaudaraKandung = 'Ashobah';
  }
  if (_AnakLakiSaudaraSeAyah > 0) {
    rAnakLakiSaudaraSeAyah = '1:1A';
    rumusAnakLakiSaudaraSeAyah = 'Ashobah';
  }
  if (_PamanKandungAyah > 0) {
    rPamanKandungAyah = '1:1A';
    rumusPamanKandungAyah = 'Ashobah';
  }
  if (_PamanSeKakekAyah > 0) {
    rPamanSeKakekAyah = '1:1A';
    rumusPamanSeKakekAyah = 'Ashobah';
  }
  if (_AnakLakiPamanKandung > 0) {
    rAnakLakiPamanKandung = '1:1A';
    rumusAnakLakiPamanKandung = 'Ashobah';
  }
  if (_AnakLakiPamanSeKakek > 0) {
    rAnakLakiPamanSeKakek = '1:1A';
    rumusAnakLakiPamanSeKakek = 'Ashobah';
  }
  if (
    _SaudaraPerempuanKandung > 0 &&
    _SaudaraLakiSeAyah > 0 &&
    _SaudaraLakiSeIbu > 0 &&
    _SaudaraPerempuanSeIbu > 0
  ) {
    rSaudaraPerempuanKandung = '1:1A';
    rSaudaraLakiSeAyah = '2:1A';
    rumusSaudaraPerempuanKandung = 'Kalalah';
    rumusSaudaraLakiSeAyah = 'Kalalah';
  }
  if (_Suami > 0 && _Ibu > 0 && _SaudaraIbu > 1 && _SaudaraLakiKandung > 0) {
    if (_SaudaraPerempuanKandung == 0) {
      rSaudaraLakiKandung =
        parseInt(_SaudaraLakiKandung) +
        parseInt(_SaudaraLakiSeIbu) +
        parseInt(_SaudaraPerempuanSeIbu) +
        ':1M';
      if (_SaudaraPerempuanSeIbu > 0) {
        rSaudaraPerempuanSeIbu =
          parseInt(_SaudaraLakiKandung) +
          parseInt(_SaudaraLakiSeIbu) +
          parseInt(_SaudaraPerempuanSeIbu) +
          ':1M';
      }
      if (_SaudaraLakiSeIbu > 0) {
        rSaudaraLakiSeIbu =
          parseInt(_SaudaraLakiKandung) +
          parseInt(_SaudaraLakiSeIbu) +
          parseInt(_SaudaraPerempuanSeIbu) +
          ':1M';
      }
      rumusSaudaraLakiKandung = 'Musytarakah';
      rumusPerempuanSeIbu = 'Musytarakah';
    } else {
      if (_SaudaraPerempuanSeIbu > 0) {
        if (_SaudaraLakiSeIbu > 0) {
          rSaudaraLakiSeIbu = '1/3B';
        }
      } else {
        if (_SaudaraIbu == 1) {
          rSaudaraLakiSeIbu = '1/6';
        }
        if (_SaudaraIbu > 1) {
          rSaudaraLakiSeIbu = '1/3';
        }
      }
      if (_SaudaraLakiSeIbu > 0) {
        if (_SaudaraPerempuanSeIbu > 0) {
          rSaudaraPerempuanSeIbu = '1/3B';
        }
      } else {
        if (_SaudaraIbu == 1) {
          rSaudaraPerempuanSeIbu = '1/6';
        }
        if (_SaudaraIbu > 1) {
          rSaudaraPerempuanSeIbu = '1/3';
        }
      }
    }
  }
  $('#saham_anaklaki').tealphat(rAnakLaki);
  $('#saham_anakperempuan').tealphat(rAnakPerempuan);
  $('#saham_ibu').tealphat(rIbu);
  $('#saham_ayah').tealphat(rAyah);
  $('#saham_istri').tealphat(rIstri);
  $('#saham_suami').tealphat(rSuami);
  $('#saham_cuculaki').tealphat(rCucuLaki);
  $('#saham_cucuperempuan').tealphat(rCucuPerempuan);
  $('#saham_kakek').tealphat(rKakek);
  $('#saham_nenekayah').tealphat(rNenekAyah);
  $('#saham_nenekibu').tealphat(rNenekIbu);
  $('#saham_saudaralakikandung').tealphat(rSaudaraLakiKandung);
  $('#saham_saudaraperempuankandung').tealphat(rSaudaraPerempuanKandung);
  $('#saham_saudaralakiseayah').tealphat(rSaudaraLakiSeAyah);
  $('#saham_saudaraperempuanseayah').tealphat(rSaudaraPerempuanSeAyah);
  $('#saham_saudaralakiseibu').tealphat(rSaudaraLakiSeIbu);
  $('#saham_saudaraperempuanseibu').tealphat(rSaudaraPerempuanSeIbu);
  $('#saham_anaklakisaudarakandung').tealphat(rAnakLakiSaudaraKandung);
  $('#saham_anaklakisaudaraseayah').tealphat(rAnakLakiSaudaraSeAyah);
  $('#saham_pamankandungayah').tealphat(rPamanKandungAyah);
  $('#saham_pamansekakekayah').tealphat(rPamanSeKakekAyah);
  $('#saham_anaklakipamankandung').tealphat(rAnakLakiPamanKandung);
  $('#saham_anaklakipamansekakek').tealphat(rAnakLakiPamanSeKakek);
}

//formula end
function toRp(eta) {
  var delta = parseInt(Math.round(eta), 10).toString().split('').reverse().join('');
  var beta = '';
  for (var zeta = 0; zeta < delta.length; zeta++) {
    beta += delta[zeta];
    if ((zeta + 1) % 3 === 0 && zeta !== delta.length - 1) {
      beta += '.';
    }
  }
  return 'Rp.' + beta.split('').reverse().join('');
}

function calculateShare(adjustmentFactor, ratioString, totalShare) {
  var ratioParts = ratioString.split('/');
  if (ratioParts.length < 2) {
    ratioParts = ratioString.split(':');
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
    firstCharacter == 'A' ||
    firstCharacter == 'M' ||
    firstCharacter == 'R' ||
    firstCharacter == '+'
  ) {
    if (secondCharacter == ':') {
      totalCalculatedShare = getTotalAshobahShare();
      share = totalHartaAshobah;
      calculatedShare =
        (share / totalCalculatedShare) * (numerator / denominator) * adjustmentFactor;
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

function _sa() {
  var secondCharacter = 0;
  for (var ratioParts in ash) {
    if (
      (ash[ratioParts] == 'A' ||
        ash[ratioParts] == 'M' ||
        ash[ratioParts] == 'R' ||
        ash[ratioParts] == '+') &&
      a[ratioParts] == '1'
    ) {
      secondCharacter = secondCharacter + parseInt(_a[ratioParts] * a2[ratioParts]);
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

  if (firstCharacter == 'A' || firstCharacter == 'M' || firstCharacter == 'R') {
    if (secondCharacter == ':') {
      return ratioString;
    } else {
      return individualShare;
    }
  } else {
    var ratioParts = (totalShare / denominator) * numerator;
    if (inheritanceType == 'AR-RADD') {
      calculatedShare = ratioParts + '/' + totalShare;
    } else {
      calculatedShare = ratioParts + '/' + totalAul;
    }
    if (ash.length > 1) {
      if (ash.length == 2 && siblingFromMother > 1) {
        remainingAshobah = 0;
      }
      if (remainingAshobah > 0 && totalAshobah == 0) {
        remainingShare = remainingAshobah;
        calculatedShare = ratioParts + '/' + remainingFraction;
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
  var indexOfAshobah = shareString.indexOf('A');
  var indexOfMusytarakah = shareString.indexOf('M');
  var indexOfBersama = shareString.indexOf('B');
  var indexOfPlusAshobah = shareString.indexOf('+A');

  if (indexOfAshobah > 0) {
    shareType = 'Ashobah';
  }
  if (indexOfMusytarakah > 0) {
    shareType = 'Musytarakah';
  }
  if (indexOfBersama > 0) {
    shareType = 'Bersama';
  }
  if (indexOfPlusAshobah > 0) {
    shareType = shareString + 'sobah';
  }

  return shareType;
}
// totalShare → indexOfMusytarakah: Mengindikasikan posisi huruf "M" untuk jenis bagian "Musytarakah".
// indexOfBersama → indexOfBersama: Mengindikasikan posisi huruf "B", yang mengacu pada jenis bagian "Bersama".
// indexOfPlusAshobah → indexOfPlusAshobah: Mengindikasikan posisi "+A" dalam string.

function calculateAshobahShare(targetShare, multiplier, maxIterations, defaultShare) {
  var numerator = 0,
    denominator = 0,
    calculatedValue = 0,
    outputLog = '',
    resultLog = '';

  for (numerator = 0; numerator <= maxIterations; numerator++) {
    for (denominator = 1; denominator <= maxIterations; denominator++) {
      calculatedValue = (numerator / denominator) * multiplier;
      resultLog = resultLog + ' ' + numerator + '/' + denominator + ' = ' + calculatedValue + ' ';
      if (targetShare > calculatedValue - 0.1 && targetShare < calculatedValue + 0.1) {
        break;
      }
    }
    if (targetShare > calculatedValue - 0.1 && targetShare < calculatedValue + 0.1) {
      break;
    }
  }

  if (numerator === 0 || denominator === 0) {
    return 'Habis';
  }
  if (numerator < maxIterations || denominator < maxIterations) {
    return numerator + '/' + denominator;
  } else {
    return defaultShare;
  }
}

// _0alphac3f3alpha70 → targetShare: Target nilai bagian yang akan dicocokkan.
// _0alphac3f3alpha71 → multiplier: Faktor pengali dalam perhitungan bagian.
// _0alphac3f3alpha72 → maxIterations: Batas maksimum iterasi yang dilakukan.
// _0alphac3f3alpha73 → defaultShare: Nilai bagian default jika iterasi mencapai batas

$(window).load(function () {
  $(document).on('click', '#hitung', function () {
    if (_Suami > 0) {
      var numerator = rSuami.substr(0, 1),
        denominator = rSuami.substr(2, 1),
        ashobahType = rSuami.substr(3, 1);
      ash.push(ashobahType);
      ratios.push(numerator);
      denominators.push(denominator);
      shares.push(_Suami);
    }

    //  numerator → numerator: Menyimpan pembilang dari string rSuami.
    // denominator → denominator: Menyimpan penyebut dari string rSuami.
    // ashobahType → ashobahType: Jenis Ashobah yang diperoleh dari bagian string rSuami.

    if (_Istri > 0) {
      var initialLetter = rIstri.substr(0, 1),
        middleLetter = rIstri.substr(2, 1),
        thirdLetter = rIstri.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(initialLetter);
      a.push(middleLetter);
      a2.push(_Istri);
    }
    if (_AnakLaki > 0) {
      var firstLetter = rAnakLaki.substr(0, 1),
        secondLetter = rAnakLaki.substr(2, 1),
        thirdLetter = rAnakLaki.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_AnakLaki);
    }
    if (_AnakPerempuan > 0) {
      var firstLetter = rAnakPerempuan.substr(0, 1),
        secondLetter = rAnakPerempuan.substr(2, 1),
        thirdLetter = rAnakPerempuan.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_AnakPerempuan);
    }
    if (_Ayah > 0) {
      var firstLetter = rAyah.substr(0, 1),
        secondLetter = rAyah.substr(2, 1),
        thirdLetter = rAyah.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_Ayah);
    }
    if (_Ibu > 0) {
      var firstLetter = rIbu.substr(0, 1),
        secondLetter = rIbu.substr(2, 1),
        thirdLetter = rIbu.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_Ibu);
    }
    if (_CucuLaki > 0) {
      var firstLetter = rCucuLaki.substr(0, 1),
        secondLetter = rCucuLaki.substr(2, 1),
        thirdLetter = rCucuLaki.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_CucuLaki);
    }
    if (_CucuPerempuan > 0) {
      var firstLetter = rCucuPerempuan.substr(0, 1),
        secondLetter = rCucuPerempuan.substr(2, 1),
        thirdLetter = rCucuPerempuan.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_CucuPerempuan);
    }
    if (_Kakek > 0) {
      var firstLetter = rKakek.substr(0, 1),
        secondLetter = rKakek.substr(2, 1),
        thirdLetter = rKakek.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_Kakek);
    }
    if (_NenekAyah > 0) {
      var firstLetter = rNenekAyah.substr(0, 1),
        secondLetter = rNenekAyah.substr(2, 1),
        thirdLetter = rNenekAyah.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_NenekAyah);
    }
    if (_NenekIbu > 0) {
      var firstLetter = rNenekIbu.substr(0, 1),
        secondLetter = rNenekIbu.substr(2, 1),
        thirdLetter = rNenekIbu.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_NenekIbu);
    }
    if (_SaudaraLakiKandung > 0) {
      var firstLetter = rSaudaraLakiKandung.substr(0, 1),
        secondLetter = rSaudaraLakiKandung.substr(2, 1),
        thirdLetter = rSaudaraLakiKandung.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_SaudaraLakiKandung);
    }
    if (_SaudaraLakiSeAyah > 0) {
      var firstLetter = rSaudaraLakiSeAyah.substr(0, 1),
        secondLetter = rSaudaraLakiSeAyah.substr(2, 1),
        thirdLetter = rSaudaraLakiSeAyah.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_SaudaraLakiSeAyah);
    }
    if (_SaudaraPerempuanSeAyah > 0) {
      var firstLetter = rSaudaraPerempuanSeAyah.substr(0, 1),
        secondLetter = rSaudaraPerempuanSeAyah.substr(2, 1),
        thirdLetter = rSaudaraPerempuanSeAyah.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_SaudaraPerempuanSeAyah);
    }
    if (_SaudaraLakiSeIbu > 0) {
      var firstLetter = rSaudaraLakiSeIbu.substr(0, 1),
        secondLetter = rSaudaraLakiSeIbu.substr(2, 1),
        thirdLetter = rSaudaraLakiSeIbu.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_SaudaraLakiSeIbu);
    }
    if (_SaudaraPerempuanSeIbu > 0) {
      var firstLetter = rSaudaraPerempuanSeIbu.substr(0, 1),
        secondLetter = rSaudaraPerempuanSeIbu.substr(2, 1),
        thirdLetter = rSaudaraPerempuanSeIbu.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_SaudaraPerempuanSeIbu);
    }
    if (_SaudaraPerempuanKandung > 0) {
      var firstLetter = rSaudaraPerempuanKandung.substr(0, 1),
        secondLetter = rSaudaraPerempuanKandung.substr(2, 1),
        thirdLetter = rSaudaraPerempuanKandung.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_SaudaraPerempuanKandung);
    }
    if (_AnakLakiSaudaraKandung > 0) {
      var firstLetter = rAnakLakiSaudaraKandung.substr(0, 1),
        secondLetter = rAnakLakiSaudaraKandung.substr(2, 1),
        thirdLetter = rAnakLakiSaudaraKandung.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_AnakLakiSaudaraKandung);
    }
    if (_AnakLakiSaudaraSeAyah > 0) {
      var firstLetter = rAnakLakiSaudaraSeAyah.substr(0, 1),
        secondLetter = rAnakLakiSaudaraSeAyah.substr(2, 1),
        thirdLetter = rAnakLakiSaudaraSeAyah.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_AnakLakiSaudaraSeAyah);
    }
    if (_PamanKandungAyah > 0) {
      var firstLetter = rPamanKandungAyah.substr(0, 1),
        secondLetter = rPamanKandungAyah.substr(2, 1),
        thirdLetter = rPamanKandungAyah.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_PamanKandungAyah);
    }
    if (_PamanSeKakekAyah > 0) {
      var firstLetter = rPamanSeKakekAyah.substr(0, 1),
        secondLetter = rPamanSeKakekAyah.substr(2, 1),
        thirdLetter = rPamanSeKakekAyah.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_PamanSeKakekAyah);
    }
    if (_AnakLakiPamanKandung > 0) {
      var firstLetter = rAnakLakiPamanKandung.substr(0, 1),
        secondLetter = rAnakLakiPamanKandung.substr(2, 1),
        thirdLetter = rAnakLakiPamanKandung.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_AnakLakiPamanKandung);
    }
    if (_AnakLakiPamanSeKakek > 0) {
      var firstLetter = rAnakLakiPamanSeKakek.substr(0, 1),
        secondLetter = rAnakLakiPamanSeKakek.substr(2, 1),
        thirdLetter = rAnakLakiPamanSeKakek.substr(3, 1);
      ash.push(thirdLetter);
      _a.push(firstLetter);
      a.push(secondLetter);
      a2.push(_AnakLakiPamanSeKakek);
    }
    var alpha = '';
    var currentIndex = 0;
    var indexOfBersama = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
      27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
      50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
      73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
      96, 97, 98, 99, 100,
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
    if (_Suami > 0) {
      ratioParts = (resultIndex / denominator) * numerator;
      if (ashobahType != 'A' && ashobahType != 'M' && ashobahType != 'R') {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (_Istri > 0) {
      ratioParts = (resultIndex / middleLetter) * initialLetter;
      if (thirdLetter != 'A' && thirdLetter != 'M' && thirdLetter != 'R') {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (_AnakLaki > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != 'A' && thirdLetter != 'M' && thirdLetter != 'R') {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (_AnakPerempuan > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != 'A' && thirdLetter != 'M' && thirdLetter != 'R') {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (_Ibu > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != 'A' && thirdLetter != 'M' && thirdLetter != 'R') {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (_Ayah > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != 'A' && thirdLetter != 'M' && thirdLetter != 'R') {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (_CucuLaki > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != 'A' && thirdLetter != 'M' && thirdLetter != 'R') {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (_CucuPerempuan > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != 'A' && thirdLetter != 'M' && thirdLetter != 'R') {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (_Kakek > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != 'A' && thirdLetter != 'M' && thirdLetter != 'R') {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (_NenekAyah > 0 && _NenekIbu > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      numerator = numerator + parseInt(ratioParts);
      denominator = denominator + parseInt(ratioParts);
    } else {
      if (_NenekAyah > 0) {
        ratioParts = (resultIndex / secondLetter) * firstLetter;
        if (thirdLetter != 'A' && thirdLetter != 'M' && thirdLetter != 'R') {
          numerator = numerator + parseInt(ratioParts);
        }
        denominator = denominator + parseInt(ratioParts);
      }
      if (_NenekIbu > 0) {
        ratioParts = (resultIndex / secondLetter) * firstLetter;
        if (thirdLetter != 'A' && thirdLetter != 'M' && thirdLetter != 'R') {
          numerator = numerator + parseInt(ratioParts);
        }
        denominator = denominator + parseInt(ratioParts);
      }
    }
    if (_SaudaraLakiKandung > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != 'A' && thirdLetter != 'M' && thirdLetter != 'R') {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (_SaudaraPerempuanKandung > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != 'A' && thirdLetter != 'M' && thirdLetter != 'R') {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (_SaudaraLakiSeAyah > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != 'A' && thirdLetter != 'M' && thirdLetter != 'R') {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (_SaudaraPerempuanSeAyah > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != 'A' && thirdLetter != 'M' && thirdLetter != 'R') {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (
      _SaudaraPerempuanSeIbu > 0 &&
      _SaudaraLakiSeIbu > 0 &&
      (_SaudaraLakiKandung == 0 || _Suami == 0 || _Ibu == 0)
    ) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      numerator = numerator + parseInt(ratioParts);
      denominator = denominator + parseInt(ratioParts);
    } else {
      if (_SaudaraLakiSeIbu > 0) {
        ratioParts = (resultIndex / secondLetter) * firstLetter;
        if (thirdLetter != 'A' && thirdLetter != 'M' && thirdLetter != 'R') {
          numerator = numerator + parseInt(ratioParts);
        }
        denominator = denominator + parseInt(ratioParts);
      }
      if (_SaudaraPerempuanSeIbu > 0) {
        ratioParts = (resultIndex / secondLetter) * firstLetter;
        if (thirdLetter != 'A' && thirdLetter != 'M' && thirdLetter != 'R') {
          numerator = numerator + parseInt(ratioParts);
        }
        denominator = denominator + parseInt(ratioParts);
      }
    }
    if (_AnakLakiSaudaraKandung > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != 'A' && thirdLetter != 'M' && thirdLetter != 'R') {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (_AnakLakiSaudaraSeAyah > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != 'A' && thirdLetter != 'M' && thirdLetter != 'R') {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (_PamanKandungAyah > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != 'A' && thirdLetter != 'M' && thirdLetter != 'R') {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (_PamanSeKakekAyah > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != 'A' && thirdLetter != 'B' && thirdLetter != 'R') {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (_AnakLakiPamanKandung > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != 'A' && thirdLetter != 'B' && thirdLetter != 'R') {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    if (_AnakLakiPamanSeKakek > 0) {
      ratioParts = (resultIndex / secondLetter) * firstLetter;
      if (thirdLetter != 'A' && thirdLetter != 'B' && thirdLetter != 'R') {
        numerator = numerator + parseInt(ratioParts);
      }
      denominator = denominator + parseInt(ratioParts);
    }
    sisasaham = numerator;
    var adjustedShares = resultIndex - sisasaham;
    var shareRatio = adjustedShares + '/' + resultIndex;
    if (sisasaham > resultIndex) {
      _Jenis = 'Al-’AUL';
      _aul = sisasaham;
    } else {
      _aul = 0;
      _Jenis = 'AR-RADD';
    }
    for (var ratioParts in a) {
      if (
        ash[ratioParts] == 'A' ||
        ash[ratioParts] == 'M' ||
        ash[ratioParts] == 'R' ||
        ash[ratioParts] == '+'
      ) {
        totalAshobah = totalAshobah + parseInt(_a[ratioParts]) * parseInt(a2[ratioParts]);
      }
    }
    var distributedAssets = 0;
    _TotalHartaAshobah = _h(1, shareRatio, _Modal);
    _HartaAshobah = _TotalHartaAshobah;
    alpha = '<table id="table">';
    alpha =
      alpha + '<tr><td><b>Tirkah</b></td><td align="right"><b>' + toRp(_Harta) + '</b></td></tr>';
    if (_Hutang > 0) {
      alpha = alpha + '<tr><td>Hutang</td><td align="right">' + toRp(_Hutang) + '</td></tr>';
    }
    if (_Makam > 0) {
      alpha = alpha + '<tr><td>Biaya Makam</td><td align="right">' + toRp(_Makam) + '</td></tr>';
    }
    if (_Wasiat > 0) {
      alpha = alpha + '<tr><td>Wasiat</td><td align="right">' + toRp(_Wasiat) + '</td></tr>';
    }
    if (_Hutang > 0 || _Makam > 0 || _Wasiat > 0) {
      alpha = alpha + '<tr><td colspan="2"><hr></td></tr>';
      alpha = alpha + '<tr><td>Al-Irts</td><td align="right"><b>' + toRp(_Modal) + '</b></td></tr>';
    }
    _hasilmasalah = '';
    if (resultIndex > 1) {
      var ratioParts = _p('1/' + resultIndex, resultIndex, shareRatio);
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
      alpha = alpha + '<tr><td>Asal masalah';
      if (_hasilmasalah) {
        alpha = alpha + ' (' + _hasilmasalah + ')';
      }
      alpha = alpha + '</td><td align="right"><b>' + resultIndex + shareArrow + '</b></td></tr>';
    }
    if (mode == 'DEVELOPER') {
      alpha = alpha + '<tr><td colspan="2"><hr></td></tr>';
      alpha =
        alpha +
        '<tr><td>Jenis masalah</td><td align="right"><b>' +
        _Jenis +
        ':' +
        sisasaham +
        '</b></td></tr>';
    }
    if (_Jenis == 'AR-RADD') {
      if (_HartaAshobah > 0 && totalAshobah == 0) {
      } else {
        if (mode == 'DEVELOPER') {
          if (_HartaAshobah > 0) {
            alpha =
              alpha +
              '<tr><td>Ashobah	 (' +
              shareRatio +
              ')</td><td align="right"><b>' +
              toRp(_HartaAshobah) +
              '</b></td></tr>';
          }
        }
      }
    }
    alpha = alpha + '</table><br>';
    var secondCharacter = 0;
    alpha =
      alpha +
      '<table id="table" data-role="table" data-mode="columntoggle" class="ui-body-d ui-shadow table-stripe ui-responsive"><thead><tr class="ui-bar-a">';
    alpha = alpha + '<th>WARIST</th><th>BAGIAN</th>';
    alpha = alpha + '<th>@ORANG</th></tr></thead><tbody>';
    if (_Istri > 0) {
      ratioParts = _p(rIstri, resultIndex, shareRatio);
      if (_radd > 0) {
        ratioParts = rIstri;
        h = _h(_Istri, ratioParts, _Modal);
        _Modal = _Modal - h;
        distributedAssets = distributedAssets - h;
        sisasaham = _ep(rIstri, resultIndex, sisasaham);
      } else {
        h = _h(_Istri, ratioParts, _Modal);
      }
      distributedAssets = distributedAssets + h;
      _HasilIstri = h;
      secondCharacter = secondCharacter + 1;
      if (_l(ratioParts) == 'Ashobah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      alpha =
        alpha +
        '<td>' +
        _Istri +
        ' Istri (' +
        rIstri +
        ')</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha = alpha + '</td><td align="right">' + toRp(h / _Istri) + '</td></tr>';
      if (_radd > 0) {
        alpha =
          alpha +
          '<tr><td>Sisa harta [<b>' +
          toRp(_Modal) +
          '</b>]</td><td colspan="2"><hr></td></tr>';
      }
    }
    if (_Suami > 0) {
      ratioParts = _p(rSuami, resultIndex, shareRatio);
      if (_radd > 0) {
        ratioParts = rSuami;
        h = _h(_Suami, ratioParts, _Modal);
        _Modal = _Modal - h;
        sisasaham = _ep(rSuami, resultIndex, sisasaham);
      } else {
        h = _h(_Suami, ratioParts, _Modal);
      }
      distributedAssets = distributedAssets + h;
      _HasilSuami = h;
      secondCharacter = secondCharacter + 1;
      if (_l(ratioParts) == 'Ashobah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      alpha = alpha + '<tr>';
      alpha =
        alpha +
        '<td>' +
        _Suami +
        ' Suami (' +
        rSuami +
        ')</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha = alpha + '</td><td align="right">' + toRp(h / _Suami) + '</td></tr>';
      if (_radd > 0) {
        alpha =
          alpha +
          '<tr><td>Sisa harta [<b>' +
          toRp(_Modal) +
          '</b>]</td><td colspan="2"><hr></td></tr>';
      }
    }
    if (_Ibu > 0) {
      ratioParts = _p(rIbu, resultIndex, shareRatio);
      h = _h(_Ibu, ratioParts, _Modal);
      distributedAssets = distributedAssets + h;
      _HasilIbu = h;
      secondCharacter = secondCharacter + 1;
      if (_l(ratioParts) == 'Ashobah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      alpha =
        alpha +
        '<td>' +
        _Ibu +
        ' Ibu (' +
        rIbu +
        ')</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha = alpha + '</td><td align="right">' + toRp(h / _Ibu) + '</td></tr>';
    }
    if (_NenekAyah > 0 && _NenekIbu > 0) {
      ratioParts = _p('1/6', resultIndex, shareRatio);
      h = _h(1, ratioParts, _Modal);
      distributedAssets = distributedAssets + h;
      secondCharacter = secondCharacter + 1;
      alpha =
        alpha +
        '<td>Bagian Nenek (Ayah) dan Nenek (Ibu) (' +
        ratioParts +
        ') [<b>' +
        toRp(h) +
        '</b>]</td><td colspan="2"><hr></td></tr>';
      ratioParts = sahamAshobah((h / _Nenek2) * _NenekAyah, _Modal, adjustedShares, ratioParts);
      alpha =
        alpha +
        '<td>&rarr; ' +
        _NenekAyah +
        ' Nenek dari Ayah</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha =
        alpha +
        '</td><td align="right">' +
        toRp(((h / _Nenek2) * _NenekAyah) / _NenekAyah) +
        '</td></tr>';
      ratioParts = sahamAshobah((h / _Nenek2) * _NenekIbu, _Modal, adjustedShares, ratioParts);
      alpha =
        alpha +
        '<td>&rarr; ' +
        _NenekIbu +
        ' Nenek dari Ibu</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha =
        alpha +
        '</td><td align="right">' +
        toRp(((h / _Nenek2) * _NenekIbu) / _NenekIbu) +
        '</td></tr>';
    } else {
      if (_NenekAyah > 0) {
        ratioParts = _p(rNenekAyah, resultIndex, shareRatio);
        h = _h(_NenekAyah, ratioParts, _Modal);
        distributedAssets = distributedAssets + h;
        _HasilNenekAyah = h;
        secondCharacter = secondCharacter + 1;
        if (_l(ratioParts) == 'Ashobah') {
          ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
        }
        alpha =
          alpha +
          '<td>' +
          _NenekAyah +
          ' Nenek dari Ayah (' +
          rNenekAyah +
          ')</td><td align="center">' +
          _l(ratioParts) +
          '</td>';
        alpha = alpha + '</td><td align="right">' + toRp(h / _NenekAyah) + '</td></tr>';
      }
      if (_NenekIbu > 0) {
        ratioParts = _p(rNenekIbu, resultIndex, shareRatio);
        h = _h(_NenekIbu, ratioParts, _Modal);
        distributedAssets = distributedAssets + h;
        _HasilNenekIbu = h;
        secondCharacter = secondCharacter + 1;
        if (_l(ratioParts) == 'Ashobah') {
          ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
        }
        alpha =
          alpha +
          '<td>' +
          _NenekIbu +
          ' Nenek dari Ibu (' +
          rNenekIbu +
          ')</td><td align="center">' +
          _l(ratioParts) +
          '</td>';
        alpha = alpha + '</td><td align="right">' + toRp(h / _NenekIbu) + '</td></tr>';
      }
    }
    if (_AnakPerempuan > 0) {
      ratioParts = _p(rAnakPerempuan, resultIndex, shareRatio);
      h = _h(_AnakPerempuan, ratioParts, _Modal);
      distributedAssets = distributedAssets + h;
      _HasilAnakPerempuan = h;
      secondCharacter = secondCharacter + 1;
      if (_l(ratioParts) == 'Ashobah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      alpha =
        alpha +
        '<td>' +
        _AnakPerempuan +
        ' Anak Perempuan (' +
        rAnakPerempuan +
        ')</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha = alpha + '</td><td align="right">' + toRp(h / _AnakPerempuan) + '</td></tr>';
    }
    if (_AnakLaki > 0) {
      ratioParts = _p(rAnakLaki, resultIndex, shareRatio);
      h = _h(_AnakLaki, ratioParts, _Modal);
      distributedAssets = distributedAssets + h;
      _HasilAnakLaki = h;
      secondCharacter = secondCharacter + 1;
      if (_l(ratioParts) == 'Ashobah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      alpha =
        alpha +
        '<td>' +
        _AnakLaki +
        ' Anak Laki-laki (' +
        rAnakLaki +
        ')</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha = alpha + '</td><td align="right">' + toRp(h / _AnakLaki) + '</td></tr>';
    }
    if (_CucuLaki > 0) {
      ratioParts = _p(rCucuLaki, resultIndex, shareRatio);
      h = _h(_CucuLaki, ratioParts, _Modal);
      distributedAssets = distributedAssets + h;
      _HasilCucuLaki = h;
      secondCharacter = secondCharacter + 1;
      if (_l(ratioParts) == 'Ashobah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      alpha =
        alpha +
        '<td>' +
        _CucuLaki +
        ' Cucu Laki-laki (' +
        rCucuLaki +
        ')</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha = alpha + '</td><td align="right">' + toRp(h / _CucuLaki) + '</td></tr>';
    }
    if (_CucuPerempuan > 0) {
      ratioParts = _p(rCucuPerempuan, resultIndex, shareRatio);
      h = _h(_CucuPerempuan, ratioParts, _Modal);
      distributedAssets = distributedAssets + h;
      _HasilCucuPerempuan = h;
      secondCharacter = secondCharacter + 1;
      if (_l(ratioParts) == 'Ashobah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      alpha =
        alpha +
        '<td>' +
        _CucuPerempuan +
        ' Cucu Perempuan (' +
        rCucuPerempuan +
        ')</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha = alpha + '</td><td align="right">' + toRp(h / _CucuPerempuan) + '</td></tr>';
    }
    if (_SaudaraPerempuanKandung > 0) {
      ratioParts = _p(rSaudaraPerempuanKandung, resultIndex, shareRatio);
      h = _h(_SaudaraPerempuanKandung, ratioParts, _Modal);
      distributedAssets = distributedAssets + h;
      _HasilSaudaraPerempuanKandung = h;
      secondCharacter = secondCharacter + 1;
      if (_l(ratioParts) == 'Ashobah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      alpha =
        alpha +
        '<td>' +
        _SaudaraPerempuanKandung +
        ' Saudara Perempuan sekandung (' +
        rSaudaraPerempuanKandung +
        ')</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha = alpha + '</td><td align="right">' + toRp(h / _SaudaraPerempuanKandung) + '</td></tr>';
    }
    if (_SaudaraLakiKandung > 0) {
      ratioParts = _p(rSaudaraLakiKandung, resultIndex, shareRatio);
      h = _h(_SaudaraLakiKandung, ratioParts, _Modal);
      distributedAssets = distributedAssets + h;
      _HasilSaudaraLakiKandung = h;
      secondCharacter = secondCharacter + 1;
      if (_l(ratioParts) == 'Ashobah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      if (_l(ratioParts) == 'Musytarakah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      alpha =
        alpha +
        '<td>' +
        _SaudaraLakiKandung +
        ' Saudara Laki-laki sekandung (' +
        rSaudaraLakiKandung +
        ')</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha = alpha + '</td><td align="right">' + toRp(h / _SaudaraLakiKandung) + '</td></tr>';
    }
    if (_SaudaraLakiSeAyah > 0) {
      ratioParts = _p(rSaudaraLakiSeAyah, resultIndex, shareRatio);
      h = _h(_SaudaraLakiSeAyah, ratioParts, _Modal);
      distributedAssets = distributedAssets + h;
      _HasilSaudaraLakiSeAyah = h;
      secondCharacter = secondCharacter + 1;
      if (_l(ratioParts) == 'Ashobah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      alpha =
        alpha +
        '<td>' +
        _SaudaraLakiSeAyah +
        ' Saudara Laki-laki satu Ayah (' +
        rSaudaraLakiSeAyah +
        ')</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha = alpha + '</td><td align="right">' + toRp(h / _SaudaraLakiSeAyah) + '</td></tr>';
    }
    if (_SaudaraPerempuanSeAyah > 0) {
      ratioParts = _p(rSaudaraPerempuanSeAyah, resultIndex, shareRatio);
      h = _h(_SaudaraPerempuanSeAyah, ratioParts, _Modal);
      distributedAssets = distributedAssets + h;
      _HasilSaudaraPerempuanSeAyah = h;
      secondCharacter = secondCharacter + 1;
      if (_l(ratioParts) == 'Ashobah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      alpha =
        alpha +
        '<td>' +
        _SaudaraPerempuanSeAyah +
        ' Saudara Perempuan satu Ayah (' +
        rSaudaraPerempuanSeAyah +
        ')</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha = alpha + '</td><td align="right">' + toRp(h / _SaudaraPerempuanSeAyah) + '</td></tr>';
    }
    if (
      _SaudaraLakiSeIbu > 0 &&
      _SaudaraPerempuanSeIbu > 0 &&
      (_SaudaraLakiKandung == 0 || _Suami == 0 || _Ibu == 0)
    ) {
      ratioParts = _p('1/3', resultIndex, shareRatio);
      h = _h(1, ratioParts, _Modal);
      distributedAssets = distributedAssets + h;
      secondCharacter = secondCharacter + 1;
      alpha =
        alpha +
        '<td>Bagian saudara satu Ibu (' +
        ratioParts +
        ') [<b>' +
        toRp(h) +
        '</b>]</td><td colspan="2"><hr></td></tr>';
      ratioParts = sahamAshobah(
        (h / _SaudaraIbu) * _SaudaraLakiSeIbu,
        _Modal,
        adjustedShares,
        ratioParts
      );
      alpha =
        alpha +
        '<td>&rarr; ' +
        _SaudaraLakiSeIbu +
        ' Saudara Laki-laki satu Ibu</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha =
        alpha +
        '</td><td align="right">' +
        toRp(((h / _SaudaraIbu) * _SaudaraLakiSeIbu) / _SaudaraLakiSeIbu) +
        '</td></tr>';
      ratioParts = sahamAshobah(
        (h / _SaudaraIbu) * _SaudaraPerempuanSeIbu,
        _Modal,
        adjustedShares,
        ratioParts
      );
      alpha =
        alpha +
        '<td>&rarr; ' +
        _SaudaraPerempuanSeIbu +
        ' Saudara Prempuan satu Ibu</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha =
        alpha +
        '</td><td align="right">' +
        toRp(((h / _SaudaraIbu) * _SaudaraPerempuanSeIbu) / _SaudaraPerempuanSeIbu) +
        '</td></tr>';
    } else {
      if (ash.length == 2 && _SaudaraIbu > 1) {
        ratioParts = _p('1/3', resultIndex, shareRatio);
        h = _h(1, ratioParts, _Modal);
        distributedAssets = distributedAssets + h;
        secondCharacter = secondCharacter + 1;
        alpha =
          alpha +
          '<td>Bagian saudara satu Ibu (1/3) [<b>' +
          toRp(h) +
          '</b>]</td><td colspan="2"><hr></td></tr>';
        if (_SaudaraLakiSeIbu > 0) {
          alpha =
            alpha +
            '<td>&rarr; ' +
            _SaudaraLakiSeIbu +
            ' Saudara Laki-laki satu Ibu</td><td align="center">' +
            _l('1/1B') +
            '</td>';
          alpha = alpha + '</td><td align="right">' + toRp(h / _SaudaraIbu) + '</td></tr>';
        }
        if (_SaudaraPerempuanSeIbu > 0) {
          alpha =
            alpha +
            '<td>&rarr; ' +
            _SaudaraPerempuanSeIbu +
            ' Saudara Perempuan satu Ibu</td><td align="center">' +
            _l('1/1B') +
            '</td>';
          alpha = alpha + '</td><td align="right">' + toRp(h / _SaudaraIbu) + '</td></tr>';
        }
      } else {
        if (_SaudaraLakiSeIbu > 0) {
          ratioParts = _p(rSaudaraLakiSeIbu, resultIndex, shareRatio);
          h = _h(_SaudaraLakiSeIbu, ratioParts, _Modal);
          distributedAssets = distributedAssets + h;
          _HasilSaudaraLakiSeIbu = h;
          secondCharacter = secondCharacter + 1;
          if (_l(ratioParts) == 'Musytarakah') {
            ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
          }
          alpha =
            alpha +
            '<td>' +
            _SaudaraLakiSeIbu +
            ' Saudara Laki-laki satu Ibu (' +
            rSaudaraLakiSeIbu +
            ')</td><td align="center">' +
            _l(ratioParts) +
            '</td>';
          alpha = alpha + '</td><td align="right">' + toRp(h / _SaudaraLakiSeIbu) + '</td></tr>';
        }
        if (_SaudaraPerempuanSeIbu > 0) {
          ratioParts = _p(rSaudaraPerempuanSeIbu, resultIndex, shareRatio);
          h = _h(_SaudaraPerempuanSeIbu, ratioParts, _Modal);
          distributedAssets = distributedAssets + h;
          _HasilSaudaraPerempuanSeIbu = h;
          secondCharacter = secondCharacter + 1;
          if (_l(ratioParts) == 'Musytarakah') {
            ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
          }
          alpha =
            alpha +
            '<td>' +
            _SaudaraPerempuanSeIbu +
            ' Saudara Perempuan satu Ibu (' +
            rSaudaraPerempuanSeIbu +
            ')</td><td align="center">' +
            _l(ratioParts) +
            '</td>';
          alpha =
            alpha + '</td><td align="right">' + toRp(h / _SaudaraPerempuanSeIbu) + '</td></tr>';
        }
      }
    }
    if (_AnakLakiSaudaraKandung > 0) {
      ratioParts = _p(rAnakLakiSaudaraKandung, resultIndex, shareRatio);
      h = _h(_AnakLakiSaudaraKandung, ratioParts, _Modal);
      distributedAssets = distributedAssets + h;
      _HasilAnakLakiSaudaraKandung = h;
      secondCharacter = secondCharacter + 1;
      if (_l(ratioParts) == 'Ashobah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      alpha =
        alpha +
        '<td>' +
        _AnakLakiSaudaraKandung +
        ' Anak Laki-laki saudara Sekandung (' +
        rAnakLakiSaudaraKandung +
        ')</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha = alpha + '</td><td align="right">' + toRp(h / _AnakLakiSaudaraKandung) + '</td></tr>';
    }
    if (_AnakLakiSaudaraSeAyah > 0) {
      ratioParts = _p(rAnakLakiSaudaraSeAyah, resultIndex, shareRatio);
      h = _h(_AnakLakiSaudaraSeAyah, ratioParts, _Modal);
      distributedAssets = distributedAssets + h;
      _HasilAnakLakiSaudaraSeAyah = h;
      secondCharacter = secondCharacter + 1;
      if (_l(ratioParts) == 'Ashobah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      alpha =
        alpha +
        '<td>' +
        _AnakLakiSaudaraSeAyah +
        ' Anak Laki-laki saudara satu Ayah (' +
        rAnakLakiSaudaraSeAyah +
        ')</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha = alpha + '</td><td align="right">' + toRp(h / _AnakLakiSaudaraSeAyah) + '</td></tr>';
    }
    if (_PamanKandungAyah > 0) {
      ratioParts = _p(rPamanKandungAyah, resultIndex, shareRatio);
      h = _h(_PamanKandungAyah, ratioParts, _Modal);
      distributedAssets = distributedAssets + h;
      _HasilPamanKandungAyah = h;
      secondCharacter = secondCharacter + 1;
      if (_l(ratioParts) == 'Ashobah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      alpha =
        alpha +
        '<td>' +
        _PamanKandungAyah +
        ' Paman kandung dari Ayah (' +
        rPamanKandungAyah +
        ')</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha = alpha + '</td><td align="right">' + toRp(h / _PamanKandungAyah) + '</td></tr>';
    }
    if (_PamanSeKakekAyah > 0) {
      ratioParts = _p(rPamanSeKakekAyah, resultIndex, shareRatio);
      h = _h(_PamanSeKakekAyah, ratioParts, _Modal);
      distributedAssets = distributedAssets + h;
      _HasilPamanSeKakekAyah = h;
      secondCharacter = secondCharacter + 1;
      if (_l(ratioParts) == 'Ashobah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      alpha =
        alpha +
        '<td>' +
        _PamanSeKakekAyah +
        ' Paman satu Kakek dari Ayah (' +
        rPamanSeKakekAyah +
        ')</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha = alpha + '</td><td align="right">' + toRp(h / _PamanSeKakekAyah) + '</td></tr>';
    }
    if (_AnakLakiPamanKandung > 0) {
      ratioParts = _p(rAnakLakiPamanKandung, resultIndex, shareRatio);
      h = _h(_AnakLakiPamanKandung, ratioParts, _Modal);
      distributedAssets = distributedAssets + h;
      _HasilAnakLakiPamanKandung = h;
      secondCharacter = secondCharacter + 1;
      if (_l(ratioParts) == 'Ashobah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      alpha =
        alpha +
        '<td>' +
        _AnakLakiPamanKandung +
        ' Anak Laki-laki Paman sekandung (' +
        rAnakLakiPamanKandung +
        ')</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha = alpha + '</td><td align="right">' + toRp(h / _AnakLakiPamanKandung) + '</td></tr>';
    }
    if (_AnakLakiPamanSeKakek > 0) {
      ratioParts = _p(rAnakLakiPamanSeKakek, resultIndex, shareRatio);
      h = _h(_AnakLakiPamanSeKakek, ratioParts, _Modal);
      distributedAssets = distributedAssets + h;
      _HasilAnakLakiPamanSeKakek = h;
      secondCharacter = secondCharacter + 1;
      if (_l(ratioParts) == 'Ashobah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      alpha =
        alpha +
        '<td>' +
        _AnakLakiPamanSeKakek +
        ' Anak Laki-laki Paman satu Kakek (' +
        rAnakLakiPamanSeKakek +
        ')</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha = alpha + '</td><td align="right">' + toRp(h / _AnakLakiPamanSeKakek) + '</td></tr>';
    }
    if (_Ayah > 0) {
      ratioParts = _p(rAyah, resultIndex, shareRatio);
      h = _h(_Ayah, ratioParts, _Modal);
      distributedAssets = distributedAssets + h;
      _HasilAyah = h;
      secondCharacter = secondCharacter + 1;
      if (rAyah == '1/6+') {
        if (_Modal - distributedAssets > 0) {
          h = h + (_Modal - distributedAssets);
          _HasilAyah = h;
          distributedAssets = _Modal;
          ratioParts = ratioParts + '+A';
        }
      }
      if (_l(ratioParts) == 'Ashobah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      alpha =
        alpha +
        '<td>' +
        _Ayah +
        ' Ayah (' +
        rAyah +
        ')</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha = alpha + '</td><td align="right">' + toRp(h / _Ayah) + '</td></tr>';
    }
    if (_Kakek > 0) {
      ratioParts = _p(rKakek, resultIndex, shareRatio);
      h = _h(_Kakek, ratioParts, _Modal);
      distributedAssets = distributedAssets + h;
      _HasilKakek = h;
      secondCharacter = secondCharacter + 1;
      if (rKakek == '1/6+') {
        if (_Modal - distributedAssets > 0) {
          h = h + (_Modal - distributedAssets);
          _HasilKakek = h;
          distributedAssets = _Modal;
          ratioParts = ratioParts + '+A';
        }
      }
      if (_l(ratioParts) == 'Ashobah') {
        ratioParts = sahamAshobah(h, _Modal, adjustedShares, ratioParts);
      }
      alpha =
        alpha +
        '<td>' +
        _Kakek +
        ' Kakek (' +
        rKakek +
        ')</td><td align="center">' +
        _l(ratioParts) +
        '</td>';
      alpha = alpha + '</td><td align="right">' + toRp(h / _Kakek) + '</td></tr>';
    }
    if (_Modal - distributedAssets > 1) {
      alpha =
        alpha +
        '<td colspan="3">Sisa harta ' +
        toRp(_Modal - distributedAssets) +
        ' diserahkan ke <i><b>Baitul maal</b></i></td>';
    }
    alpha = alpha + '<tr>';
    alpha = alpha + '</tbody></table>';
    alpha = alpha + '<p id="table">' + partnerHTML + '</p>';
    $('li.hitung').remove();
    $('ul.selesai').html('<li><a href="" id="reset" class="ui-link ui-btn">HITUNG LAGI</a></li>');
    $('#hasilperhitungan').html(alpha);
  });
  _Halaman = 0;
  $(document).on('click', '#nealphat', function () {
    if ($.mobile.activePage.nealphat('[data-role=page]').length !== 0) {
      var currentPage = $.mobile.activePage.nealphat('[data-role=page]');
      if (_Modal > 0 && _Waris != '') {
        if (_Wasiat > _Harta / 3) {
          $('#hasil_harta')
            .val('Wasiat tidak boleh lebih dari 1/3 (' + toRp(_Harta / 3) + ') harta warist')
            .val();
          $('#hasil_harta').css({ color: 'red' });
          $('#hasil_harta').focus();
        } else {
          if (_GonoGini > _HartaKotor / 2) {
            $('#hasil_harta')
              .val('Gonogini tidak boleh lebih dari 1/2 (' + toRp(_Harta / 2) + ') harta warist')
              .val();
            $('#hasil_harta').css({ color: 'red' });
            $('#hasil_harta').focus();
          } else {
            isDone();
            $.mobile.changePage(currentPage, { transition: 'slide' });
            _Halaman++;
          }
        }
      } else {
        if (_Waris == '') {
          $('#hasil_harta').val('Muwarrits tidak boleh kosong.').val();
        } else {
          $('#hasil_harta').val('Tidak ada harta yang akan diwariskan.').val();
        }
        $('#hasil_harta').css({ color: 'red' });
        $('#hasil_harta').focus();
      }
    } else {
    }
  });
  $(document).on('click', '#back', function () {
    if ($.mobile.activePage.prev('[data-role=page]').length !== 0) {
      var previousPage = $.mobile.activePage.prev('[data-role=page]');
      isDone();
      $.mobile.changePage(previousPage, {
        transition: 'slide',
        reverse: true,
      });
    } else {
      window.location = '?host=' + host;
    }
  });
  $(document).on('click', '#reset', function () {
    window.location = '?host=' + host;
  });
});
