var mode = 'USER';
var sisasaham = 0;
var totalAshobah = 0;
var _Jenis = '';
var _aul = 0;
var _radd = 0;
var _Halaman = 0;
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
var _a = [],
	_a1 = [];
var ash = [],
	ash1 = [];
if (typeof partnerHTML == undefined) {
	var partnerHTML = '';
}
$(
	'#NilaiHartaKotor,#NilaiHutang,#NilaiGonoGini,#NilaiMakam,#NilaiWasiat'
).live('change paste keyup', function() {
	_HartaKotor = $('#NilaiHartaKotor').val();
	_Harta = _HartaKotor - _GonoGini;
	_Hutang = $('#NilaiHutang').val();
	_Makam = $('#NilaiMakam').val();
	_Wasiat = $('#NilaiWasiat').val();
	_Modal = _Harta - _Hutang - _Makam - _Wasiat;
	$('#NilaiHarta').val(_Harta);
	$('#hasil_harta').val(toRp(_Modal));
	$('#hasil_harta').css({ color: '#000' });
});
$('#gonogini').change(function() {
	_GonoGini = $('input=[name=gonogini]:checked').val() / 100 * _HartaKotor;
	_Harta = _HartaKotor - _GonoGini;
	_Modal = _Harta - _Hutang - _Makam - _Wasiat;
	$('#NilaiHarta').val(_HartaKotor - _GonoGini);
	$('#hasil_harta').val(toRp(_Modal));
});
$('#cb_hartabersama').click(function() {
	$('#pewaris').change();
	var _0xc3f3x4f = $('#cb_hartabersama').attr('checked');
	if (_0xc3f3x4f) {
		$('#field_tirkah').show();
		$('.field_totalharta').text('Harta Sebelum Tirkah (total Harta)');
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
$('#pewaris').change(function() {
	_Waris = $('input[name=pewaris]:checked').val();
	var _0xc3f3x50 = $('#cb_hartabersama').attr('checked');
	if (_Waris == 'Laki-laki') {
		if (_0xc3f3x50) {
			var _0xc3f3x51 = $('input=[name=gonogini]:checked').val();
			if (_0xc3f3x51 > 0) {
				_GonoGini =
					$('input=[name=gonogini]:checked').val() / 100 * _HartaKotor;
				_Harta = _HartaKotor - _GonoGini;
				_Modal = _Harta - _Hutang - _Makam - _Wasiat;
				$('#NilaiHarta').val(_Harta);
				$('#hasil_harta').val(toRp(_Modal));
			}
			_Suami = 0;
			$('#nilai_suami').val('0');
			$('#nilai_suami').prop('checked', false).checkboxradio('refresh');
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
$('#cb_ayah,#cb_ibu,#cb_suami,#cb_kakek').live('change', function() {
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
$('#nilai_istri').live('change', function() {
	_Istri = $(this).val();
	isSaham();
});
$('#nilai_anaklaki').live('change', function() {
	_AnakLaki = $(this).val();
	isSaham();
});
$('#nilai_anakperempuan').live('change', function() {
	_AnakPerempuan = $(this).val();
	isSaham();
});
$('#nilai_cuculaki').live('change', function() {
	_CucuLaki = $(this).val();
	isSaham();
});
$('#nilai_cucuperempuan').live('change', function() {
	_CucuPerempuan = $(this).val();
	isSaham();
});
$('#nilai_nenekayah').live('change', function() {
	_NenekAyah = $(this).val();
	isSaham();
});
$('#nilai_nenekibu').live('change', function() {
	_NenekIbu = $(this).val();
	isSaham();
});
$('#nilai_saudaralakikandung').live('change', function() {
	_SaudaraLakiKandung = $(this).val();
	isSaham();
});
$('#nilai_saudaraperempuankandung').live('change', function() {
	_SaudaraPerempuanKandung = $(this).val();
	isSaham();
});
$('#nilai_saudaralakiseayah').live('change', function() {
	_SaudaraLakiSeAyah = $(this).val();
	isSaham();
});
$('#nilai_saudaraperempuanseayah').live('change', function() {
	_SaudaraPerempuanSeAyah = $(this).val();
	isSaham();
});
$('#nilai_saudaralakiseibu').live('change', function() {
	_SaudaraLakiSeIbu = $(this).val();
	isSaham();
});
$('#nilai_saudaraperempuanseibu').live('change', function() {
	_SaudaraPerempuanSeIbu = $(this).val();
	isSaham();
});
$('#nilai_anaklakisaudarakandung').live('change', function() {
	_AnakLakiSaudaraKandung = $(this).val();
	isSaham();
});
$('#nilai_anaklakisaudaraseayah').live('change', function() {
	_AnakLakiSaudaraSeAyah = $(this).val();
	isSaham();
});
$('#nilai_pamankandungayah').live('change', function() {
	_PamanKandungAyah = $(this).val();
	isSaham();
});
$('#nilai_pamansekakekayah').live('change', function() {
	_PamanSeKakekAyah = $(this).val();
	isSaham();
});
$('#nilai_anaklakipamankandung').live('change', function() {
	_AnakLakiPamanKandung = $(this).val();
	isSaham();
});
$('#nilai_anaklakipamansekakek').live('change', function() {
	_AnakLakiPamanSeKakek = $(this).val();
	isSaham();
});
$(
	'#nilai_cuculaki,#nilai_saudaralakiseayah,#nilai_anaklakisaudarakandung'
).live('change', function() {
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
});
$('#nilai_anaklakipamankandung').live('change', function() {
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
$('#nilai_pamankandungayah').live('change', function() {
	if (
		_PamanKandungAyah > 0 ||
		_AnakLakiSaudaraSeAyah > 0 ||
		_SaudaraLakiKandung > 0 ||
		_Ayah > 0
	) {
		$('#nilai_pamansekakekayah').val('0').slider().slider('refresh');
		$('#field_pamansekakekayah').hide();
	} else {
		$('#field_pamansekakekayah').show();
	}
});
function isDone() {
	var _0xc3f3x53 = '';
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
		if (
			(_AnakPerempuan == 0 || _CucuPerempuan == 0) &&
			_SaudaraPerempuanKandung == 0
		) {
			$('#info_penghalang_4').hide();
			$('#field_saudaraperempuanseayah').show();
		}
		if (
			(_CucuPerempuan > 0 || _AnakPerempuan > 0) &&
			_SaudaraPerempuanSeAyah > 0
		) {
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
	if (
		_PamanKandungAyah > 0 ||
		_AnakLakiSaudaraSeAyah > 0 ||
		_SaudaraLakiKandung > 0
	) {
		$('#nilai_pamansekakekayah').val('0').slider().slider('refresh');
		$('#field_pamansekakekayah').hide();
	} else {
		$('#field_pamansekakekayah').show();
	}
	_0xc3f3x53 =
		'<div data-role="header" data-position="fixed" data-theme="b"><h1>Hasil</h1></div><div data-role="content">';
	_0xc3f3x53 =
		_0xc3f3x53 +
		'<div id="hasilperhitungan"><p>Sudah dapat diketahui hasilnya, karena ada penghalang dari ahli waris.</p></div>';
	_0xc3f3x53 =
		_0xc3f3x53 +
		'<div id="footer" data-role="footer" data-position="fixed"><div data-role="navbar" data-iconpos="top" data-theme="a"><ul class="selesai"><li ckass="restart"><a href="" id="reset">HITUNG ULANG</a></li><li class="hitung"><a href="" id="hitung">LIHAT HASIL</a></li></ul></div></div>';
	if (_AnakLaki > 0) {
		_0xc3f3x53 = _0xc3f3x53 + '</div>';
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
		$('.penghalang_3').html(_0xc3f3x53);
	}
	if (_CucuLaki > 0) {
		_0xc3f3x53 = _0xc3f3x53 + '</div>';
		_SaudaraLakiKandung = 0;
		_SaudaraPerempuanKandung = 0;
		_AnakLakiSaudaraKandung = 0;
		_AnakLakiSaudaraSeAyah = 0;
		_PamanKandungAyah = 0;
		_PamanSeKakekAyah = 0;
		_AnakLakiPamanKandung = 0;
		_AnakLakiPamanSeKakek = 0;
		$('.penghalang_3').html(_0xc3f3x53);
	}
	if (_Kakek > 0 || _Ayah > 0) {
		_0xc3f3x53 = _0xc3f3x53 + '</div>';
		_SaudaraLakiKandung = 0;
		_SaudaraPerempuanKandung = 0;
		_AnakLakiSaudaraKandung = 0;
		_AnakLakiSaudaraSeAyah = 0;
		_PamanKandungAyah = 0;
		_PamanSeKakekAyah = 0;
		_AnakLakiPamanKandung = 0;
		_AnakLakiPamanSeKakek = 0;
		$('.penghalang_3').html(_0xc3f3x53);
	}
	if (_SaudaraLakiKandung > 0 || _SaudaraLakiSeAyah > 0) {
		_0xc3f3x53 = _0xc3f3x53 + '</div>';
		_AnakLakiSaudaraKandung = 0;
		_AnakLakiSaudaraSeAyah = 0;
		_PamanKandungAyah = 0;
		_PamanSeKakekAyah = 0;
		_AnakLakiPamanKandung = 0;
		_AnakLakiPamanSeKakek = 0;
		$('.penghalang_5').html(_0xc3f3x53);
	}
	if (_AnakLakiSaudaraKandung > 0 || _AnakLakiSaudaraSeAyah > 0) {
		_0xc3f3x53 = _0xc3f3x53 + '</div>';
		_PamanKandungAyah = 0;
		_PamanSeKakekAyah = 0;
		_AnakLakiPamanKandung = 0;
		_AnakLakiPamanSeKakek = 0;
		$('.penghalang_6').html(_0xc3f3x53);
	}
	if (_PamanKandungAyah > 0 || _PamanSeKakekAyah > 0) {
		_0xc3f3x53 = _0xc3f3x53 + '</div>';
		_AnakLakiPamanKandung = 0;
		_AnakLakiPamanSeKakek = 0;
		$('.penghalang_7').html(_0xc3f3x53);
	}
	_0xc3f3x53 = _0xc3f3x53 + '</div>';
	$('.penghalang_8').html(_0xc3f3x53);
}
function isSaham() {
	_Anak = parseInt(_AnakLaki) + parseInt(_AnakPerempuan);
	_Cucu = parseInt(_CucuLaki) + parseInt(_CucuPerempuan);
	_Nenek2 = parseInt(_NenekAyah) + parseInt(_NenekIbu);
	_SaudaraIbu = parseInt(_SaudaraLakiSeIbu) + parseInt(_SaudaraPerempuanSeIbu);
	_SaudaraAyah =
		parseInt(_SaudaraLakiSeAyah) + parseInt(_SaudaraPerempuanSeAyah);
	_SaudaraKandung =
		parseInt(_SaudaraLakiKandung) + parseInt(_SaudaraPerempuanKandung);
	_Saudara =
		parseInt(_SaudaraKandung) + parseInt(_SaudaraAyah) + parseInt(_SaudaraIbu);
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
	if ((_Anak > 0 || _Cucu > 0 || _Saudara > 1) && (_Ibu > 0 && _Ayah > 0)) {
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
		if (
			_AnakLaki == 0 &&
			_AnakPerempuan == 0 &&
			_CucuLaki == 0 &&
			_CucuPerempuan == 0
		) {
			rKakek = '1:1A';
		}
	}
	if (
		_SaudaraLakiSeIbu > 0 &&
		(_SaudaraLakiKandung == 0 || _Suami == 0 || _Ibu == 0)
	) {
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
		if (
			_SaudaraLakiSeIbu == 1 &&
			_SaudaraPerempuanSeIbu == 0 &&
			_SaudaraLakiKandung > 0
		) {
			rSaudaraLakiSeIbu = '1/6';
		}
	}
	if (
		_SaudaraPerempuanSeIbu > 0 &&
		(_SaudaraLakiKandung == 0 || _Suami == 0 || _Ibu == 0)
	) {
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
		if (
			_SaudaraPerempuanSeIbu == 1 &&
			_SaudaraLakiSeIbu == 0 &&
			_SaudaraLakiKandung > 0
		) {
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
	if (
		(_AnakPerempuan > 0 || _CucuPerempuan > 0) &&
		_AnakLaki == 0 &&
		_CucuLaki == 0
	) {
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
	if (
		_SaudaraPerempuanSeAyah == 1 &&
		_SaudaraLakiSeAyah == 0 &&
		_SaudaraPerempuanKandung == 0
	) {
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
	if (_Ayah > 0 && (_Ibu > 0 && (_Anak == 0 || _Cucu == 0 || _Saudara < 2))) {
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
	if (
		_SaudaraPerempuanKandung > 0 &&
		(_AnakPerempuan > 0 || _CucuPerempuan > 0)
	) {
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
	if (
		_SaudaraPerempuanSeAyah > 0 &&
		(_AnakPerempuan > 0 || _CucuPerempuan > 0)
	) {
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
	$('#saham_anaklaki').text(rAnakLaki);
	$('#saham_anakperempuan').text(rAnakPerempuan);
	$('#saham_ibu').text(rIbu);
	$('#saham_ayah').text(rAyah);
	$('#saham_istri').text(rIstri);
	$('#saham_suami').text(rSuami);
	$('#saham_cuculaki').text(rCucuLaki);
	$('#saham_cucuperempuan').text(rCucuPerempuan);
	$('#saham_kakek').text(rKakek);
	$('#saham_nenekayah').text(rNenekAyah);
	$('#saham_nenekibu').text(rNenekIbu);
	$('#saham_saudaralakikandung').text(rSaudaraLakiKandung);
	$('#saham_saudaraperempuankandung').text(rSaudaraPerempuanKandung);
	$('#saham_saudaralakiseayah').text(rSaudaraLakiSeAyah);
	$('#saham_saudaraperempuanseayah').text(rSaudaraPerempuanSeAyah);
	$('#saham_saudaralakiseibu').text(rSaudaraLakiSeIbu);
	$('#saham_saudaraperempuanseibu').text(rSaudaraPerempuanSeIbu);
	$('#saham_anaklakisaudarakandung').text(rAnakLakiSaudaraKandung);
	$('#saham_anaklakisaudaraseayah').text(rAnakLakiSaudaraSeAyah);
	$('#saham_pamankandungayah').text(rPamanKandungAyah);
	$('#saham_pamansekakekayah').text(rPamanSeKakekAyah);
	$('#saham_anaklakipamankandung').text(rAnakLakiPamanKandung);
	$('#saham_anaklakipamansekakek').text(rAnakLakiPamanSeKakek);
}
function toRp(_0xc3f3x56) {
	var _0xc3f3x57 = parseInt(Math.round(_0xc3f3x56), 10)
		.toString()
		.split('')
		.reverse()
		.join('');
	var _0xc3f3x58 = '';
	for (var _0xc3f3x59 = 0; _0xc3f3x59 < _0xc3f3x57.length; _0xc3f3x59++) {
		_0xc3f3x58 += _0xc3f3x57[_0xc3f3x59];
		if ((_0xc3f3x59 + 1) % 3 === 0 && _0xc3f3x59 !== _0xc3f3x57.length - 1) {
			_0xc3f3x58 += '.';
		}
	}
	return 'Rp.' + _0xc3f3x58.split('').reverse().join('');
}
function _h(_0xc3f3x5b, _0xc3f3x5c, _0xc3f3x5d) {
	var _0xc3f3x4f = _0xc3f3x5c.split('/');
	if (_0xc3f3x4f.length < 2) {
		_0xc3f3x4f = _0xc3f3x5c.split(':');
		_0xc3f3x5e = _0xc3f3x4f[1].substr(0, 1);
	} else {
		var _0xc3f3x5e = _0xc3f3x4f[1];
	}
	var _0xc3f3x5f = _0xc3f3x4f[0];
	var _0xc3f3x60 = _0xc3f3x5c.substr(3, 1);
	var _0xc3f3x61 = _0xc3f3x5c.substr(1, 1);
	var a = 0;
	var _0xc3f3x62 = 0;
	var _0xc3f3x63 = 0;
	if (
		_0xc3f3x60 == 'A' ||
		_0xc3f3x60 == 'M' ||
		_0xc3f3x60 == 'R' ||
		_0xc3f3x60 == '+'
	) {
		if (_0xc3f3x61 == ':') {
			_0xc3f3x63 = _sa();
			a = _TotalHartaAshobah;
			_0xc3f3x62 = a / _0xc3f3x63 * (_0xc3f3x5f / _0xc3f3x5e) * _0xc3f3x5b;
			if (_0xc3f3x62 > _HartaAshobah) {
				_0xc3f3x62 = _HartaAshobah;
			}
			_HartaAshobah = _HartaAshobah - _0xc3f3x62;
			if (_0xc3f3x62 < 0) {
				_0xc3f3x62 = 0;
			}
			return _0xc3f3x62;
		} else {
			return _0xc3f3x5f / _0xc3f3x5e * _0xc3f3x5d;
		}
	} else {
		return _0xc3f3x5f / _0xc3f3x5e * _0xc3f3x5d;
	}
	return _0xc3f3x4f;
}
function _sa() {
	var _0xc3f3x61 = 0;
	for (var _0xc3f3x4f in ash) {
		if (
			(ash[_0xc3f3x4f] == 'A' ||
				ash[_0xc3f3x4f] == 'M' ||
				ash[_0xc3f3x4f] == 'R' ||
				ash[_0xc3f3x4f] == '+') &&
			a[_0xc3f3x4f] == '1'
		) {
			_0xc3f3x61 = _0xc3f3x61 + parseInt(_a[_0xc3f3x4f] * a2[_0xc3f3x4f]);
		}
	}
	return _0xc3f3x61;
}
function _p(_0xc3f3x5c, _0xc3f3x67, a) {
	var _0xc3f3x5f = _0xc3f3x5c.substr(0, 1).match(/[0-9]+/g);
	var _0xc3f3x5e = _0xc3f3x5c.substr(2, 2).match(/[0-9]+/g);
	var _0xc3f3x60 = _0xc3f3x5c.substr(3, 1);
	var _0xc3f3x61 = _0xc3f3x5c.substr(1, 1);
	var _0xc3f3x62 = 0;
	if (_0xc3f3x60 == 'A' || _0xc3f3x60 == 'M' || _0xc3f3x60 == 'R') {
		if (_0xc3f3x61 == ':') {
			return _0xc3f3x5c;
		} else {
			return a;
		}
	} else {
		var _0xc3f3x4f = _0xc3f3x67 / _0xc3f3x5e * _0xc3f3x5f;
		if (_Jenis == 'AR-RADD') {
			_0xc3f3x62 = _0xc3f3x4f + '/' + _0xc3f3x67;
		} else {
			_0xc3f3x62 = _0xc3f3x4f + '/' + _aul;
		}
		if (ash.length > 1) {
			if (ash.length == 2 && _SaudaraIbu > 1) {
				_HartaAshobah = 0;
			}
			if (_HartaAshobah > 0 && totalAshobah == 0) {
				_radd = _HartaAshobah;
				_0xc3f3x62 = _0xc3f3x4f + '/' + sisasaham;
			}
		}
		return _0xc3f3x62;
	}
}
function _ep(_0xc3f3x5c, _0xc3f3x69, _0xc3f3x6a) {
	var _0xc3f3x5f = _0xc3f3x5c.substr(0, 1).match(/[0-9]+/g);
	var _0xc3f3x5e = _0xc3f3x5c.substr(2, 2).match(/[0-9]+/g);
	return _0xc3f3x6a - _0xc3f3x69 / _0xc3f3x5e;
}
function _l(_0xc3f3x6c) {
	var _0xc3f3x62 = _0xc3f3x6c;
	var a = _0xc3f3x62.indexOf('A');
	var _0xc3f3x5d = _0xc3f3x62.indexOf('M');
	var _0xc3f3x6d = _0xc3f3x62.indexOf('B');
	var _0xc3f3x6e = _0xc3f3x62.indexOf('+A');
	if (a > 0) {
		_0xc3f3x62 = 'Ashobah';
	}
	if (_0xc3f3x5d > 0) {
		_0xc3f3x62 = 'Musytarakah';
	}
	if (_0xc3f3x6d > 0) {
		_0xc3f3x62 = 'Bersama';
	}
	if (_0xc3f3x6e > 0) {
		_0xc3f3x62 = _0xc3f3x6c + 'sobah';
	}
	return _0xc3f3x62;
}
function sahamAshobah(_0xc3f3x70, _0xc3f3x71, _0xc3f3x72, _0xc3f3x73) {
	var _0xc3f3x4f = 0,
		_0xc3f3x61 = 0,
		_0xc3f3x74 = 0,
		a = '',
		_0xc3f3x6d = '';
	for (_0xc3f3x4f = 0; _0xc3f3x4f <= 1e3; _0xc3f3x4f++) {
		for (_0xc3f3x61 = 0; _0xc3f3x61 <= 1e3; _0xc3f3x61++) {
			_0xc3f3x74 = _0xc3f3x4f / _0xc3f3x61 * _0xc3f3x71;
			_0xc3f3x6d =
				_0xc3f3x6d + ' ' + _0xc3f3x4f + '/' + _0xc3f3x61 + ' = ' + a + ' ';
			if (_0xc3f3x70 > _0xc3f3x74 - 0.1 && _0xc3f3x70 < _0xc3f3x74 + 0.1) {
				break;
			}
		}
		if (_0xc3f3x70 > _0xc3f3x74 - 0.1 && _0xc3f3x70 < _0xc3f3x74 + 0.1) {
			break;
		}
	}
	if (_0xc3f3x4f == 0 || _0xc3f3x61 == 0) {
		return 'Habis';
	}
	if (_0xc3f3x4f < 1e3 || _0xc3f3x61 < 1e3) {
		return _0xc3f3x4f + '/' + _0xc3f3x61;
	} else {
		return _0xc3f3x73;
	}
}
$(window).load(function() {
	$(document).on('click', '#hitung', function() {
		if (_Suami > 0) {
			var _0xc3f3x75 = rSuami.substr(0, 1),
				_0xc3f3x76 = rSuami.substr(2, 1),
				_0xc3f3x77 = rSuami.substr(3, 1);
			ash.push(_0xc3f3x77);
			_a.push(_0xc3f3x75);
			a.push(_0xc3f3x76);
			a2.push(_Suami);
		}
		if (_Istri > 0) {
			var _0xc3f3x78 = rIstri.substr(0, 1),
				_0xc3f3x79 = rIstri.substr(2, 1),
				_0xc3f3x7a = rIstri.substr(3, 1);
			ash.push(_0xc3f3x7a);
			_a.push(_0xc3f3x78);
			a.push(_0xc3f3x79);
			a2.push(_Istri);
		}
		if (_AnakLaki > 0) {
			var _0xc3f3x7b = rAnakLaki.substr(0, 1),
				_0xc3f3x7c = rAnakLaki.substr(2, 1),
				_0xc3f3x7d = rAnakLaki.substr(3, 1);
			ash.push(_0xc3f3x7d);
			_a.push(_0xc3f3x7b);
			a.push(_0xc3f3x7c);
			a2.push(_AnakLaki);
		}
		if (_AnakPerempuan > 0) {
			var _0xc3f3x7e = rAnakPerempuan.substr(0, 1),
				_0xc3f3x7f = rAnakPerempuan.substr(2, 1),
				_0xc3f3x80 = rAnakPerempuan.substr(3, 1);
			ash.push(_0xc3f3x80);
			_a.push(_0xc3f3x7e);
			a.push(_0xc3f3x7f);
			a2.push(_AnakPerempuan);
		}
		if (_Ayah > 0) {
			var _0xc3f3x81 = rAyah.substr(0, 1),
				_0xc3f3x82 = rAyah.substr(2, 1),
				_0xc3f3x83 = rAyah.substr(3, 1);
			ash.push(_0xc3f3x83);
			_a.push(_0xc3f3x81);
			a.push(_0xc3f3x82);
			a2.push(_Ayah);
		}
		if (_Ibu > 0) {
			var _0xc3f3x84 = rIbu.substr(0, 1),
				_0xc3f3x85 = rIbu.substr(2, 1),
				_0xc3f3x86 = rIbu.substr(3, 1);
			ash.push(_0xc3f3x86);
			_a.push(_0xc3f3x84);
			a.push(_0xc3f3x85);
			a2.push(_Ibu);
		}
		if (_CucuLaki > 0) {
			var _0xc3f3x87 = rCucuLaki.substr(0, 1),
				_0xc3f3x88 = rCucuLaki.substr(2, 1),
				_0xc3f3x89 = rCucuLaki.substr(3, 1);
			ash.push(_0xc3f3x89);
			_a.push(_0xc3f3x87);
			a.push(_0xc3f3x88);
			a2.push(_CucuLaki);
		}
		if (_CucuPerempuan > 0) {
			var _0xc3f3x8a = rCucuPerempuan.substr(0, 1),
				_0xc3f3x8b = rCucuPerempuan.substr(2, 1),
				_0xc3f3x8c = rCucuPerempuan.substr(3, 1);
			ash.push(_0xc3f3x8c);
			_a.push(_0xc3f3x8a);
			a.push(_0xc3f3x8b);
			a2.push(_CucuPerempuan);
		}
		if (_Kakek > 0) {
			var _0xc3f3x8d = rKakek.substr(0, 1),
				_0xc3f3x8e = rKakek.substr(2, 1),
				_0xc3f3x8f = rKakek.substr(3, 1);
			ash.push(_0xc3f3x8f);
			_a.push(_0xc3f3x8d);
			a.push(_0xc3f3x8e);
			a2.push(_Kakek);
		}
		if (_NenekAyah > 0) {
			var _0xc3f3x90 = rNenekAyah.substr(0, 1),
				_0xc3f3x91 = rNenekAyah.substr(2, 1),
				_0xc3f3x92 = rNenekAyah.substr(3, 1);
			ash.push(_0xc3f3x92);
			_a.push(_0xc3f3x90);
			a.push(_0xc3f3x91);
			a2.push(_NenekAyah);
		}
		if (_NenekIbu > 0) {
			var _0xc3f3x93 = rNenekIbu.substr(0, 1),
				_0xc3f3x94 = rNenekIbu.substr(2, 1),
				_0xc3f3x95 = rNenekIbu.substr(3, 1);
			ash.push(_0xc3f3x95);
			_a.push(_0xc3f3x93);
			a.push(_0xc3f3x94);
			a2.push(_NenekIbu);
		}
		if (_SaudaraLakiKandung > 0) {
			var _0xc3f3x96 = rSaudaraLakiKandung.substr(0, 1),
				_0xc3f3x97 = rSaudaraLakiKandung.substr(2, 1),
				_0xc3f3x98 = rSaudaraLakiKandung.substr(3, 1);
			ash.push(_0xc3f3x98);
			_a.push(_0xc3f3x96);
			a.push(_0xc3f3x97);
			a2.push(_SaudaraLakiKandung);
		}
		if (_SaudaraLakiSeAyah > 0) {
			var _0xc3f3x99 = rSaudaraLakiSeAyah.substr(0, 1),
				_0xc3f3x9a = rSaudaraLakiSeAyah.substr(2, 1),
				_0xc3f3x9b = rSaudaraLakiSeAyah.substr(3, 1);
			ash.push(_0xc3f3x9b);
			_a.push(_0xc3f3x99);
			a.push(_0xc3f3x9a);
			a2.push(_SaudaraLakiSeAyah);
		}
		if (_SaudaraPerempuanSeAyah > 0) {
			var _0xc3f3x9c = rSaudaraPerempuanSeAyah.substr(0, 1),
				_0xc3f3x9d = rSaudaraPerempuanSeAyah.substr(2, 1),
				_0xc3f3x9e = rSaudaraPerempuanSeAyah.substr(3, 1);
			ash.push(_0xc3f3x9e);
			_a.push(_0xc3f3x9c);
			a.push(_0xc3f3x9d);
			a2.push(_SaudaraPerempuanSeAyah);
		}
		if (_SaudaraLakiSeIbu > 0) {
			var _0xc3f3x9f = rSaudaraLakiSeIbu.substr(0, 1),
				_0xc3f3xa0 = rSaudaraLakiSeIbu.substr(2, 1),
				_0xc3f3xa1 = rSaudaraLakiSeIbu.substr(3, 1);
			ash.push(_0xc3f3xa1);
			_a.push(_0xc3f3x9f);
			a.push(_0xc3f3xa0);
			a2.push(_SaudaraLakiSeIbu);
		}
		if (_SaudaraPerempuanSeIbu > 0) {
			var _0xc3f3xa2 = rSaudaraPerempuanSeIbu.substr(0, 1),
				_0xc3f3xa3 = rSaudaraPerempuanSeIbu.substr(2, 1),
				_0xc3f3xa4 = rSaudaraPerempuanSeIbu.substr(3, 1);
			ash.push(_0xc3f3xa4);
			_a.push(_0xc3f3xa2);
			a.push(_0xc3f3xa3);
			a2.push(_SaudaraPerempuanSeIbu);
		}
		if (_SaudaraPerempuanKandung > 0) {
			var _0xc3f3xa5 = rSaudaraPerempuanKandung.substr(0, 1),
				_0xc3f3xa6 = rSaudaraPerempuanKandung.substr(2, 1),
				_0xc3f3xa7 = rSaudaraPerempuanKandung.substr(3, 1);
			ash.push(_0xc3f3xa7);
			_a.push(_0xc3f3xa5);
			a.push(_0xc3f3xa6);
			a2.push(_SaudaraPerempuanKandung);
		}
		if (_AnakLakiSaudaraKandung > 0) {
			var _0xc3f3xa8 = rAnakLakiSaudaraKandung.substr(0, 1),
				_0xc3f3xa9 = rAnakLakiSaudaraKandung.substr(2, 1),
				_0xc3f3xaa = rAnakLakiSaudaraKandung.substr(3, 1);
			ash.push(_0xc3f3xaa);
			_a.push(_0xc3f3xa8);
			a.push(_0xc3f3xa9);
			a2.push(_AnakLakiSaudaraKandung);
		}
		if (_AnakLakiSaudaraSeAyah > 0) {
			var _0xc3f3xab = rAnakLakiSaudaraSeAyah.substr(0, 1),
				_0xc3f3xac = rAnakLakiSaudaraSeAyah.substr(2, 1),
				_0xc3f3xad = rAnakLakiSaudaraSeAyah.substr(3, 1);
			ash.push(_0xc3f3xad);
			_a.push(_0xc3f3xab);
			a.push(_0xc3f3xac);
			a2.push(_AnakLakiSaudaraSeAyah);
		}
		if (_PamanKandungAyah > 0) {
			var _0xc3f3xae = rPamanKandungAyah.substr(0, 1),
				_0xc3f3xaf = rPamanKandungAyah.substr(2, 1),
				_0xc3f3xb0 = rPamanKandungAyah.substr(3, 1);
			ash.push(_0xc3f3xb0);
			_a.push(_0xc3f3xae);
			a.push(_0xc3f3xaf);
			a2.push(_PamanKandungAyah);
		}
		if (_PamanSeKakekAyah > 0) {
			var _0xc3f3xb1 = rPamanSeKakekAyah.substr(0, 1),
				_0xc3f3xb2 = rPamanSeKakekAyah.substr(2, 1),
				_0xc3f3xb3 = rPamanSeKakekAyah.substr(3, 1);
			ash.push(_0xc3f3xb3);
			_a.push(_0xc3f3xb1);
			a.push(_0xc3f3xb2);
			a2.push(_PamanSeKakekAyah);
		}
		if (_AnakLakiPamanKandung > 0) {
			var _0xc3f3xb4 = rAnakLakiPamanKandung.substr(0, 1),
				_0xc3f3xb5 = rAnakLakiPamanKandung.substr(2, 1),
				_0xc3f3xb6 = rAnakLakiPamanKandung.substr(3, 1);
			ash.push(_0xc3f3xb6);
			_a.push(_0xc3f3xb4);
			a.push(_0xc3f3xb5);
			a2.push(_AnakLakiPamanKandung);
		}
		if (_AnakLakiPamanSeKakek > 0) {
			var _0xc3f3xb7 = rAnakLakiPamanSeKakek.substr(0, 1),
				_0xc3f3xb8 = rAnakLakiPamanSeKakek.substr(2, 1),
				_0xc3f3xb9 = rAnakLakiPamanSeKakek.substr(3, 1);
			ash.push(_0xc3f3xb9);
			_a.push(_0xc3f3xb7);
			a.push(_0xc3f3xb8);
			a2.push(_AnakLakiPamanSeKakek);
		}
		var _0xc3f3x53 = '';
		var _0xc3f3xba = 0;
		var _0xc3f3x6d = [
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
		var _0xc3f3xbb = 0;
		for (var _0xc3f3x61 in _0xc3f3x6d) {
			var _0xc3f3xbc = 0;
			for (var _0xc3f3x4f in a) {
				h = _0xc3f3x6d[_0xc3f3x61] % a[_0xc3f3x4f];
				if (h == 0) {
					_0xc3f3xbc = _0xc3f3xbc + 1;
				}
				if (_0xc3f3xbc >= a.length) {
					_0xc3f3xbb = _0xc3f3x6d[_0xc3f3x61];
					break;
				}
			}
			if (_0xc3f3xbb > 0) {
				break;
			}
		}
		var _0xc3f3x4f = 0;
		var _0xc3f3x5f = 0;
		var _0xc3f3x5e = 0;
		if (_Suami > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3x76 * _0xc3f3x75;
			if (_0xc3f3x77 != 'A' && _0xc3f3x77 != 'M' && _0xc3f3x77 != 'R') {
				_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			}
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		}
		if (_Istri > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3x79 * _0xc3f3x78;
			if (_0xc3f3x7a != 'A' && _0xc3f3x7a != 'M' && _0xc3f3x7a != 'R') {
				_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			}
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		}
		if (_AnakLaki > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3x7c * _0xc3f3x7b;
			if (_0xc3f3x7d != 'A' && _0xc3f3x7d != 'M' && _0xc3f3x7d != 'R') {
				_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			}
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		}
		if (_AnakPerempuan > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3x7f * _0xc3f3x7e;
			if (_0xc3f3x80 != 'A' && _0xc3f3x80 != 'M' && _0xc3f3x80 != 'R') {
				_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			}
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		}
		if (_Ibu > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3x85 * _0xc3f3x84;
			if (_0xc3f3x86 != 'A' && _0xc3f3x86 != 'M' && _0xc3f3x86 != 'R') {
				_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			}
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		}
		if (_Ayah > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3x82 * _0xc3f3x81;
			if (_0xc3f3x83 != 'A' && _0xc3f3x83 != 'M' && _0xc3f3x83 != 'R') {
				_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			}
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		}
		if (_CucuLaki > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3x88 * _0xc3f3x87;
			if (_0xc3f3x89 != 'A' && _0xc3f3x83 != 'M' && _0xc3f3x89 != 'R') {
				_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			}
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		}
		if (_CucuPerempuan > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3x8b * _0xc3f3x8a;
			if (_0xc3f3x8c != 'A' && _0xc3f3x8c != 'M' && _0xc3f3x8c != 'R') {
				_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			}
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		}
		if (_Kakek > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3x8e * _0xc3f3x8d;
			if (_0xc3f3x8f != 'A' && _0xc3f3x8f != 'M' && _0xc3f3x8f != 'R') {
				_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			}
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		}
		if (_NenekAyah > 0 && _NenekIbu > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3x91 * _0xc3f3x90;
			_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		} else {
			if (_NenekAyah > 0) {
				_0xc3f3x4f = _0xc3f3xbb / _0xc3f3x91 * _0xc3f3x90;
				if (_0xc3f3x92 != 'A' && _0xc3f3x92 != 'M' && _0xc3f3x92 != 'R') {
					_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
				}
				_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
			}
			if (_NenekIbu > 0) {
				_0xc3f3x4f = _0xc3f3xbb / _0xc3f3x94 * _0xc3f3x93;
				if (_0xc3f3x95 != 'A' && _0xc3f3x95 != 'M' && _0xc3f3x95 != 'R') {
					_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
				}
				_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
			}
		}
		if (_SaudaraLakiKandung > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3x97 * _0xc3f3x96;
			if (_0xc3f3x98 != 'A' && _0xc3f3x98 != 'M' && _0xc3f3x98 != 'R') {
				_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			}
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		}
		if (_SaudaraPerempuanKandung > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3xa6 * _0xc3f3xa5;
			if (_0xc3f3xa7 != 'A' && _0xc3f3xa7 != 'M' && _0xc3f3xa7 != 'R') {
				_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			}
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		}
		if (_SaudaraLakiSeAyah > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3x9a * _0xc3f3x99;
			if (_0xc3f3x9b != 'A' && _0xc3f3x9b != 'M' && _0xc3f3x9b != 'R') {
				_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			}
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		}
		if (_SaudaraPerempuanSeAyah > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3x9d * _0xc3f3x9c;
			if (_0xc3f3x9e != 'A' && _0xc3f3x9e != 'M' && _0xc3f3x9e != 'R') {
				_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			}
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		}
		if (
			_SaudaraPerempuanSeIbu > 0 &&
			_SaudaraLakiSeIbu > 0 &&
			(_SaudaraLakiKandung == 0 || _Suami == 0 || _Ibu == 0)
		) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3xa0 * _0xc3f3x9f;
			_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		} else {
			if (_SaudaraLakiSeIbu > 0) {
				_0xc3f3x4f = _0xc3f3xbb / _0xc3f3xa0 * _0xc3f3x9f;
				if (_0xc3f3xa1 != 'A' && _0xc3f3xa1 != 'M' && _0xc3f3xa1 != 'R') {
					_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
				}
				_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
			}
			if (_SaudaraPerempuanSeIbu > 0) {
				_0xc3f3x4f = _0xc3f3xbb / _0xc3f3xa3 * _0xc3f3xa2;
				if (_0xc3f3xa4 != 'A' && _0xc3f3xa4 != 'M' && _0xc3f3xa4 != 'R') {
					_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
				}
				_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
			}
		}
		if (_AnakLakiSaudaraKandung > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3xa9 * _0xc3f3xa8;
			if (_0xc3f3xaa != 'A' && _0xc3f3xaa != 'M' && _0xc3f3xaa != 'R') {
				_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			}
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		}
		if (_AnakLakiSaudaraSeAyah > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3xac * _0xc3f3xab;
			if (_0xc3f3xad != 'A' && _0xc3f3xad != 'M' && _0xc3f3xad != 'R') {
				_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			}
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		}
		if (_PamanKandungAyah > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3xaf * _0xc3f3xae;
			if (_0xc3f3xb0 != 'A' && _0xc3f3xb0 != 'M' && _0xc3f3xb0 != 'R') {
				_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			}
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		}
		if (_PamanSeKakekAyah > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3xb2 * _0xc3f3xb1;
			if (_0xc3f3xb3 != 'A' && _0xc3f3xb3 != 'B' && _0xc3f3xb3 != 'R') {
				_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			}
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		}
		if (_AnakLakiPamanKandung > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3xb5 * _0xc3f3xb4;
			if (_0xc3f3xb6 != 'A' && _0xc3f3xb6 != 'B' && _0xc3f3xb6 != 'R') {
				_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			}
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		}
		if (_AnakLakiPamanSeKakek > 0) {
			_0xc3f3x4f = _0xc3f3xbb / _0xc3f3xb8 * _0xc3f3xb7;
			if (_0xc3f3xb9 != 'A' && _0xc3f3xb9 != 'B' && _0xc3f3xb9 != 'R') {
				_0xc3f3x5f = _0xc3f3x5f + parseInt(_0xc3f3x4f);
			}
			_0xc3f3x5e = _0xc3f3x5e + parseInt(_0xc3f3x4f);
		}
		sisasaham = _0xc3f3x5f;
		var _0xc3f3xbd = _0xc3f3xbb - sisasaham;
		var _0xc3f3xbe = _0xc3f3xbd + '/' + _0xc3f3xbb;
		if (sisasaham > _0xc3f3xbb) {
			_Jenis = 'Al-’AUL';
			_aul = sisasaham;
		} else {
			_aul = 0;
			_Jenis = 'AR-RADD';
		}
		for (var _0xc3f3x4f in a) {
			if (
				ash[_0xc3f3x4f] == 'A' ||
				ash[_0xc3f3x4f] == 'M' ||
				ash[_0xc3f3x4f] == 'R' ||
				ash[_0xc3f3x4f] == '+'
			) {
				totalAshobah =
					totalAshobah + parseInt(_a[_0xc3f3x4f]) * parseInt(a2[_0xc3f3x4f]);
			}
		}
		var _0xc3f3xbf = 0;
		_TotalHartaAshobah = _h(1, _0xc3f3xbe, _Modal);
		_HartaAshobah = _TotalHartaAshobah;
		_0xc3f3x53 = '<table id="table">';
		_0xc3f3x53 =
			_0xc3f3x53 +
			'<tr><td><b>Tirkah</b></td><td align="right"><b>' +
			toRp(_Harta) +
			'</b></td></tr>';
		if (_Hutang > 0) {
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<tr><td>Hutang</td><td align="right">' +
				toRp(_Hutang) +
				'</td></tr>';
		}
		if (_Makam > 0) {
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<tr><td>Biaya Makam</td><td align="right">' +
				toRp(_Makam) +
				'</td></tr>';
		}
		if (_Wasiat > 0) {
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<tr><td>Wasiat</td><td align="right">' +
				toRp(_Wasiat) +
				'</td></tr>';
		}
		if (_Hutang > 0 || _Makam > 0 || _Wasiat > 0) {
			_0xc3f3x53 = _0xc3f3x53 + '<tr><td colspan="2"><hr></td></tr>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<tr><td>Al-Irts</td><td align="right"><b>' +
				toRp(_Modal) +
				'</b></td></tr>';
		}
		_hasilmasalah = '';
		if (_0xc3f3xbb > 1) {
			var _0xc3f3x4f = _p('1/' + _0xc3f3xbb, _0xc3f3xbb, _0xc3f3xbe);
			var _0xc3f3x61 = _0xc3f3x4f.split('/');
			var _0xc3f3xc0 = '';
			if (_0xc3f3x61[1] == sisasaham) {
				if (sisasaham > 0 && sisasaham != _0xc3f3xbb) {
					_0xc3f3xc0 = ' &rarr; ' + sisasaham;
				}
				if (_0xc3f3xbb > sisasaham) {
					_hasilmasalah = 'Raad';
				}
				if (_0xc3f3xbb < sisasaham) {
					_hasilmasalah = "'Aul";
				}
			}
			_0xc3f3x53 = _0xc3f3x53 + '<tr><td>Asal masalah';
			if (_hasilmasalah) {
				_0xc3f3x53 = _0xc3f3x53 + ' (' + _hasilmasalah + ')';
			}
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right"><b>' +
				_0xc3f3xbb +
				_0xc3f3xc0 +
				'</b></td></tr>';
		}
		if (mode == 'DEVELOPER') {
			_0xc3f3x53 = _0xc3f3x53 + '<tr><td colspan="2"><hr></td></tr>';
			_0xc3f3x53 =
				_0xc3f3x53 +
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
						_0xc3f3x53 =
							_0xc3f3x53 +
							'<tr><td>Ashobah	 (' +
							_0xc3f3xbe +
							')</td><td align="right"><b>' +
							toRp(_HartaAshobah) +
							'</b></td></tr>';
					}
				}
			}
		}
		_0xc3f3x53 = _0xc3f3x53 + '</table><br>';
		var _0xc3f3x61 = 0;
		_0xc3f3x53 =
			_0xc3f3x53 +
			'<table id="table" data-role="table" data-mode="columntoggle" class="ui-body-d ui-shadow table-stripe ui-responsive"><thead><tr class="ui-bar-a">';
		_0xc3f3x53 = _0xc3f3x53 + '<th>WARIST</th><th>BAGIAN</th>';
		_0xc3f3x53 = _0xc3f3x53 + '<th>@ORANG</th></tr></thead><tbody>';
		if (_Istri > 0) {
			_0xc3f3x4f = _p(rIstri, _0xc3f3xbb, _0xc3f3xbe);
			if (_radd > 0) {
				_0xc3f3x4f = rIstri;
				h = _h(_Istri, _0xc3f3x4f, _Modal);
				_Modal = _Modal - h;
				_0xc3f3xbf = _0xc3f3xbf - h;
				sisasaham = _ep(rIstri, _0xc3f3xbb, sisasaham);
			} else {
				h = _h(_Istri, _0xc3f3x4f, _Modal);
			}
			_0xc3f3xbf = _0xc3f3xbf + h;
			_HasilIstri = h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			if (_l(_0xc3f3x4f) == 'Ashobah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>' +
				_Istri +
				' Istri (' +
				rIstri +
				')</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _Istri) +
				'</td></tr>';
			if (_radd > 0) {
				_0xc3f3x53 =
					_0xc3f3x53 +
					'<tr><td>Sisa harta [<b>' +
					toRp(_Modal) +
					'</b>]</td><td colspan="2"><hr></td></tr>';
			}
		}
		if (_Suami > 0) {
			_0xc3f3x4f = _p(rSuami, _0xc3f3xbb, _0xc3f3xbe);
			if (_radd > 0) {
				_0xc3f3x4f = rSuami;
				h = _h(_Suami, _0xc3f3x4f, _Modal);
				_Modal = _Modal - h;
				sisasaham = _ep(rSuami, _0xc3f3xbb, sisasaham);
			} else {
				h = _h(_Suami, _0xc3f3x4f, _Modal);
			}
			_0xc3f3xbf = _0xc3f3xbf + h;
			_HasilSuami = h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			if (_l(_0xc3f3x4f) == 'Ashobah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			_0xc3f3x53 = _0xc3f3x53 + '<tr>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>' +
				_Suami +
				' Suami (' +
				rSuami +
				')</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _Suami) +
				'</td></tr>';
			if (_radd > 0) {
				_0xc3f3x53 =
					_0xc3f3x53 +
					'<tr><td>Sisa harta [<b>' +
					toRp(_Modal) +
					'</b>]</td><td colspan="2"><hr></td></tr>';
			}
		}
		if (_Ibu > 0) {
			_0xc3f3x4f = _p(rIbu, _0xc3f3xbb, _0xc3f3xbe);
			h = _h(_Ibu, _0xc3f3x4f, _Modal);
			_0xc3f3xbf = _0xc3f3xbf + h;
			_HasilIbu = h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			if (_l(_0xc3f3x4f) == 'Ashobah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>' +
				_Ibu +
				' Ibu (' +
				rIbu +
				')</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 + '</td><td align="right">' + toRp(h / _Ibu) + '</td></tr>';
		}
		if (_NenekAyah > 0 && _NenekIbu > 0) {
			_0xc3f3x4f = _p('1/6', _0xc3f3xbb, _0xc3f3xbe);
			h = _h(1, _0xc3f3x4f, _Modal);
			_0xc3f3xbf = _0xc3f3xbf + h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>Bagian Nenek (Ayah) dan Nenek (Ibu) (' +
				_0xc3f3x4f +
				') [<b>' +
				toRp(h) +
				'</b>]</td><td colspan="2"><hr></td></tr>';
			_0xc3f3x4f = sahamAshobah(
				h / _Nenek2 * _NenekAyah,
				_Modal,
				_0xc3f3xbd,
				_0xc3f3x4f
			);
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>&rarr; ' +
				_NenekAyah +
				' Nenek dari Ayah</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _Nenek2 * _NenekAyah / _NenekAyah) +
				'</td></tr>';
			_0xc3f3x4f = sahamAshobah(
				h / _Nenek2 * _NenekIbu,
				_Modal,
				_0xc3f3xbd,
				_0xc3f3x4f
			);
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>&rarr; ' +
				_NenekIbu +
				' Nenek dari Ibu</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _Nenek2 * _NenekIbu / _NenekIbu) +
				'</td></tr>';
		} else {
			if (_NenekAyah > 0) {
				_0xc3f3x4f = _p(rNenekAyah, _0xc3f3xbb, _0xc3f3xbe);
				h = _h(_NenekAyah, _0xc3f3x4f, _Modal);
				_0xc3f3xbf = _0xc3f3xbf + h;
				_HasilNenekAyah = h;
				_0xc3f3x61 = _0xc3f3x61 + 1;
				if (_l(_0xc3f3x4f) == 'Ashobah') {
					_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
				}
				_0xc3f3x53 =
					_0xc3f3x53 +
					'<td>' +
					_NenekAyah +
					' Nenek dari Ayah (' +
					rNenekAyah +
					')</td><td align="center">' +
					_l(_0xc3f3x4f) +
					'</td>';
				_0xc3f3x53 =
					_0xc3f3x53 +
					'</td><td align="right">' +
					toRp(h / _NenekAyah) +
					'</td></tr>';
			}
			if (_NenekIbu > 0) {
				_0xc3f3x4f = _p(rNenekIbu, _0xc3f3xbb, _0xc3f3xbe);
				h = _h(_NenekIbu, _0xc3f3x4f, _Modal);
				_0xc3f3xbf = _0xc3f3xbf + h;
				_HasilNenekIbu = h;
				_0xc3f3x61 = _0xc3f3x61 + 1;
				if (_l(_0xc3f3x4f) == 'Ashobah') {
					_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
				}
				_0xc3f3x53 =
					_0xc3f3x53 +
					'<td>' +
					_NenekIbu +
					' Nenek dari Ibu (' +
					rNenekIbu +
					')</td><td align="center">' +
					_l(_0xc3f3x4f) +
					'</td>';
				_0xc3f3x53 =
					_0xc3f3x53 +
					'</td><td align="right">' +
					toRp(h / _NenekIbu) +
					'</td></tr>';
			}
		}
		if (_AnakPerempuan > 0) {
			_0xc3f3x4f = _p(rAnakPerempuan, _0xc3f3xbb, _0xc3f3xbe);
			h = _h(_AnakPerempuan, _0xc3f3x4f, _Modal);
			_0xc3f3xbf = _0xc3f3xbf + h;
			_HasilAnakPerempuan = h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			if (_l(_0xc3f3x4f) == 'Ashobah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>' +
				_AnakPerempuan +
				' Anak Perempuan (' +
				rAnakPerempuan +
				')</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _AnakPerempuan) +
				'</td></tr>';
		}
		if (_AnakLaki > 0) {
			_0xc3f3x4f = _p(rAnakLaki, _0xc3f3xbb, _0xc3f3xbe);
			h = _h(_AnakLaki, _0xc3f3x4f, _Modal);
			_0xc3f3xbf = _0xc3f3xbf + h;
			_HasilAnakLaki = h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			if (_l(_0xc3f3x4f) == 'Ashobah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>' +
				_AnakLaki +
				' Anak Laki-laki (' +
				rAnakLaki +
				')</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _AnakLaki) +
				'</td></tr>';
		}
		if (_CucuLaki > 0) {
			_0xc3f3x4f = _p(rCucuLaki, _0xc3f3xbb, _0xc3f3xbe);
			h = _h(_CucuLaki, _0xc3f3x4f, _Modal);
			_0xc3f3xbf = _0xc3f3xbf + h;
			_HasilCucuLaki = h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			if (_l(_0xc3f3x4f) == 'Ashobah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>' +
				_CucuLaki +
				' Cucu Laki-laki (' +
				rCucuLaki +
				')</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _CucuLaki) +
				'</td></tr>';
		}
		if (_CucuPerempuan > 0) {
			_0xc3f3x4f = _p(rCucuPerempuan, _0xc3f3xbb, _0xc3f3xbe);
			h = _h(_CucuPerempuan, _0xc3f3x4f, _Modal);
			_0xc3f3xbf = _0xc3f3xbf + h;
			_HasilCucuPerempuan = h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			if (_l(_0xc3f3x4f) == 'Ashobah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>' +
				_CucuPerempuan +
				' Cucu Perempuan (' +
				rCucuPerempuan +
				')</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _CucuPerempuan) +
				'</td></tr>';
		}
		if (_SaudaraPerempuanKandung > 0) {
			_0xc3f3x4f = _p(rSaudaraPerempuanKandung, _0xc3f3xbb, _0xc3f3xbe);
			h = _h(_SaudaraPerempuanKandung, _0xc3f3x4f, _Modal);
			_0xc3f3xbf = _0xc3f3xbf + h;
			_HasilSaudaraPerempuanKandung = h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			if (_l(_0xc3f3x4f) == 'Ashobah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>' +
				_SaudaraPerempuanKandung +
				' Saudara Perempuan sekandung (' +
				rSaudaraPerempuanKandung +
				')</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _SaudaraPerempuanKandung) +
				'</td></tr>';
		}
		if (_SaudaraLakiKandung > 0) {
			_0xc3f3x4f = _p(rSaudaraLakiKandung, _0xc3f3xbb, _0xc3f3xbe);
			h = _h(_SaudaraLakiKandung, _0xc3f3x4f, _Modal);
			_0xc3f3xbf = _0xc3f3xbf + h;
			_HasilSaudaraLakiKandung = h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			if (_l(_0xc3f3x4f) == 'Ashobah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			if (_l(_0xc3f3x4f) == 'Musytarakah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>' +
				_SaudaraLakiKandung +
				' Saudara Laki-laki sekandung (' +
				rSaudaraLakiKandung +
				')</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _SaudaraLakiKandung) +
				'</td></tr>';
		}
		if (_SaudaraLakiSeAyah > 0) {
			_0xc3f3x4f = _p(rSaudaraLakiSeAyah, _0xc3f3xbb, _0xc3f3xbe);
			h = _h(_SaudaraLakiSeAyah, _0xc3f3x4f, _Modal);
			_0xc3f3xbf = _0xc3f3xbf + h;
			_HasilSaudaraLakiSeAyah = h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			if (_l(_0xc3f3x4f) == 'Ashobah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>' +
				_SaudaraLakiSeAyah +
				' Saudara Laki-laki satu Ayah (' +
				rSaudaraLakiSeAyah +
				')</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _SaudaraLakiSeAyah) +
				'</td></tr>';
		}
		if (_SaudaraPerempuanSeAyah > 0) {
			_0xc3f3x4f = _p(rSaudaraPerempuanSeAyah, _0xc3f3xbb, _0xc3f3xbe);
			h = _h(_SaudaraPerempuanSeAyah, _0xc3f3x4f, _Modal);
			_0xc3f3xbf = _0xc3f3xbf + h;
			_HasilSaudaraPerempuanSeAyah = h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			if (_l(_0xc3f3x4f) == 'Ashobah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>' +
				_SaudaraPerempuanSeAyah +
				' Saudara Perempuan satu Ayah (' +
				rSaudaraPerempuanSeAyah +
				')</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _SaudaraPerempuanSeAyah) +
				'</td></tr>';
		}
		if (
			_SaudaraLakiSeIbu > 0 &&
			_SaudaraPerempuanSeIbu > 0 &&
			(_SaudaraLakiKandung == 0 || _Suami == 0 || _Ibu == 0)
		) {
			_0xc3f3x4f = _p('1/3', _0xc3f3xbb, _0xc3f3xbe);
			h = _h(1, _0xc3f3x4f, _Modal);
			_0xc3f3xbf = _0xc3f3xbf + h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>Bagian saudara satu Ibu (' +
				_0xc3f3x4f +
				') [<b>' +
				toRp(h) +
				'</b>]</td><td colspan="2"><hr></td></tr>';
			_0xc3f3x4f = sahamAshobah(
				h / _SaudaraIbu * _SaudaraLakiSeIbu,
				_Modal,
				_0xc3f3xbd,
				_0xc3f3x4f
			);
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>&rarr; ' +
				_SaudaraLakiSeIbu +
				' Saudara Laki-laki satu Ibu</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _SaudaraIbu * _SaudaraLakiSeIbu / _SaudaraLakiSeIbu) +
				'</td></tr>';
			_0xc3f3x4f = sahamAshobah(
				h / _SaudaraIbu * _SaudaraPerempuanSeIbu,
				_Modal,
				_0xc3f3xbd,
				_0xc3f3x4f
			);
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>&rarr; ' +
				_SaudaraPerempuanSeIbu +
				' Saudara Prempuan satu Ibu</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(
					h / _SaudaraIbu * _SaudaraPerempuanSeIbu / _SaudaraPerempuanSeIbu
				) +
				'</td></tr>';
		} else {
			if (ash.length == 2 && _SaudaraIbu > 1) {
				_0xc3f3x4f = _p('1/3', _0xc3f3xbb, _0xc3f3xbe);
				h = _h(1, _0xc3f3x4f, _Modal);
				_0xc3f3xbf = _0xc3f3xbf + h;
				_0xc3f3x61 = _0xc3f3x61 + 1;
				_0xc3f3x53 =
					_0xc3f3x53 +
					'<td>Bagian saudara satu Ibu (1/3) [<b>' +
					toRp(h) +
					'</b>]</td><td colspan="2"><hr></td></tr>';
				if (_SaudaraLakiSeIbu > 0) {
					_0xc3f3x53 =
						_0xc3f3x53 +
						'<td>&rarr; ' +
						_SaudaraLakiSeIbu +
						' Saudara Laki-laki satu Ibu</td><td align="center">' +
						_l('1/1B') +
						'</td>';
					_0xc3f3x53 =
						_0xc3f3x53 +
						'</td><td align="right">' +
						toRp(h / _SaudaraIbu) +
						'</td></tr>';
				}
				if (_SaudaraPerempuanSeIbu > 0) {
					_0xc3f3x53 =
						_0xc3f3x53 +
						'<td>&rarr; ' +
						_SaudaraPerempuanSeIbu +
						' Saudara Perempuan satu Ibu</td><td align="center">' +
						_l('1/1B') +
						'</td>';
					_0xc3f3x53 =
						_0xc3f3x53 +
						'</td><td align="right">' +
						toRp(h / _SaudaraIbu) +
						'</td></tr>';
				}
			} else {
				if (_SaudaraLakiSeIbu > 0) {
					_0xc3f3x4f = _p(rSaudaraLakiSeIbu, _0xc3f3xbb, _0xc3f3xbe);
					h = _h(_SaudaraLakiSeIbu, _0xc3f3x4f, _Modal);
					_0xc3f3xbf = _0xc3f3xbf + h;
					_HasilSaudaraLakiSeIbu = h;
					_0xc3f3x61 = _0xc3f3x61 + 1;
					if (_l(_0xc3f3x4f) == 'Musytarakah') {
						_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
					}
					_0xc3f3x53 =
						_0xc3f3x53 +
						'<td>' +
						_SaudaraLakiSeIbu +
						' Saudara Laki-laki satu Ibu (' +
						rSaudaraLakiSeIbu +
						')</td><td align="center">' +
						_l(_0xc3f3x4f) +
						'</td>';
					_0xc3f3x53 =
						_0xc3f3x53 +
						'</td><td align="right">' +
						toRp(h / _SaudaraLakiSeIbu) +
						'</td></tr>';
				}
				if (_SaudaraPerempuanSeIbu > 0) {
					_0xc3f3x4f = _p(rSaudaraPerempuanSeIbu, _0xc3f3xbb, _0xc3f3xbe);
					h = _h(_SaudaraPerempuanSeIbu, _0xc3f3x4f, _Modal);
					_0xc3f3xbf = _0xc3f3xbf + h;
					_HasilSaudaraPerempuanSeIbu = h;
					_0xc3f3x61 = _0xc3f3x61 + 1;
					if (_l(_0xc3f3x4f) == 'Musytarakah') {
						_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
					}
					_0xc3f3x53 =
						_0xc3f3x53 +
						'<td>' +
						_SaudaraPerempuanSeIbu +
						' Saudara Perempuan satu Ibu (' +
						rSaudaraPerempuanSeIbu +
						')</td><td align="center">' +
						_l(_0xc3f3x4f) +
						'</td>';
					_0xc3f3x53 =
						_0xc3f3x53 +
						'</td><td align="right">' +
						toRp(h / _SaudaraPerempuanSeIbu) +
						'</td></tr>';
				}
			}
		}
		if (_AnakLakiSaudaraKandung > 0) {
			_0xc3f3x4f = _p(rAnakLakiSaudaraKandung, _0xc3f3xbb, _0xc3f3xbe);
			h = _h(_AnakLakiSaudaraKandung, _0xc3f3x4f, _Modal);
			_0xc3f3xbf = _0xc3f3xbf + h;
			_HasilAnakLakiSaudaraKandung = h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			if (_l(_0xc3f3x4f) == 'Ashobah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>' +
				_AnakLakiSaudaraKandung +
				' Anak Laki-laki saudara Sekandung (' +
				rAnakLakiSaudaraKandung +
				')</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _AnakLakiSaudaraKandung) +
				'</td></tr>';
		}
		if (_AnakLakiSaudaraSeAyah > 0) {
			_0xc3f3x4f = _p(rAnakLakiSaudaraSeAyah, _0xc3f3xbb, _0xc3f3xbe);
			h = _h(_AnakLakiSaudaraSeAyah, _0xc3f3x4f, _Modal);
			_0xc3f3xbf = _0xc3f3xbf + h;
			_HasilAnakLakiSaudaraSeAyah = h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			if (_l(_0xc3f3x4f) == 'Ashobah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>' +
				_AnakLakiSaudaraSeAyah +
				' Anak Laki-laki saudara satu Ayah (' +
				rAnakLakiSaudaraSeAyah +
				')</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _AnakLakiSaudaraSeAyah) +
				'</td></tr>';
		}
		if (_PamanKandungAyah > 0) {
			_0xc3f3x4f = _p(rPamanKandungAyah, _0xc3f3xbb, _0xc3f3xbe);
			h = _h(_PamanKandungAyah, _0xc3f3x4f, _Modal);
			_0xc3f3xbf = _0xc3f3xbf + h;
			_HasilPamanKandungAyah = h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			if (_l(_0xc3f3x4f) == 'Ashobah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>' +
				_PamanKandungAyah +
				' Paman kandung dari Ayah (' +
				rPamanKandungAyah +
				')</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _PamanKandungAyah) +
				'</td></tr>';
		}
		if (_PamanSeKakekAyah > 0) {
			_0xc3f3x4f = _p(rPamanSeKakekAyah, _0xc3f3xbb, _0xc3f3xbe);
			h = _h(_PamanSeKakekAyah, _0xc3f3x4f, _Modal);
			_0xc3f3xbf = _0xc3f3xbf + h;
			_HasilPamanSeKakekAyah = h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			if (_l(_0xc3f3x4f) == 'Ashobah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>' +
				_PamanSeKakekAyah +
				' Paman satu Kakek dari Ayah (' +
				rPamanSeKakekAyah +
				')</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _PamanSeKakekAyah) +
				'</td></tr>';
		}
		if (_AnakLakiPamanKandung > 0) {
			_0xc3f3x4f = _p(rAnakLakiPamanKandung, _0xc3f3xbb, _0xc3f3xbe);
			h = _h(_AnakLakiPamanKandung, _0xc3f3x4f, _Modal);
			_0xc3f3xbf = _0xc3f3xbf + h;
			_HasilAnakLakiPamanKandung = h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			if (_l(_0xc3f3x4f) == 'Ashobah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>' +
				_AnakLakiPamanKandung +
				' Anak Laki-laki Paman sekandung (' +
				rAnakLakiPamanKandung +
				')</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _AnakLakiPamanKandung) +
				'</td></tr>';
		}
		if (_AnakLakiPamanSeKakek > 0) {
			_0xc3f3x4f = _p(rAnakLakiPamanSeKakek, _0xc3f3xbb, _0xc3f3xbe);
			h = _h(_AnakLakiPamanSeKakek, _0xc3f3x4f, _Modal);
			_0xc3f3xbf = _0xc3f3xbf + h;
			_HasilAnakLakiPamanSeKakek = h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			if (_l(_0xc3f3x4f) == 'Ashobah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>' +
				_AnakLakiPamanSeKakek +
				' Anak Laki-laki Paman satu Kakek (' +
				rAnakLakiPamanSeKakek +
				')</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _AnakLakiPamanSeKakek) +
				'</td></tr>';
		}
		if (_Ayah > 0) {
			_0xc3f3x4f = _p(rAyah, _0xc3f3xbb, _0xc3f3xbe);
			h = _h(_Ayah, _0xc3f3x4f, _Modal);
			_0xc3f3xbf = _0xc3f3xbf + h;
			_HasilAyah = h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			if (rAyah == '1/6+') {
				if (_Modal - _0xc3f3xbf > 0) {
					h = h + (_Modal - _0xc3f3xbf);
					_HasilAyah = h;
					_0xc3f3xbf = _Modal;
					_0xc3f3x4f = _0xc3f3x4f + '+A';
				}
			}
			if (_l(_0xc3f3x4f) == 'Ashobah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>' +
				_Ayah +
				' Ayah (' +
				rAyah +
				')</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 + '</td><td align="right">' + toRp(h / _Ayah) + '</td></tr>';
		}
		if (_Kakek > 0) {
			_0xc3f3x4f = _p(rKakek, _0xc3f3xbb, _0xc3f3xbe);
			h = _h(_Kakek, _0xc3f3x4f, _Modal);
			_0xc3f3xbf = _0xc3f3xbf + h;
			_HasilKakek = h;
			_0xc3f3x61 = _0xc3f3x61 + 1;
			if (rKakek == '1/6+') {
				if (_Modal - _0xc3f3xbf > 0) {
					h = h + (_Modal - _0xc3f3xbf);
					_HasilKakek = h;
					_0xc3f3xbf = _Modal;
					_0xc3f3x4f = _0xc3f3x4f + '+A';
				}
			}
			if (_l(_0xc3f3x4f) == 'Ashobah') {
				_0xc3f3x4f = sahamAshobah(h, _Modal, _0xc3f3xbd, _0xc3f3x4f);
			}
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td>' +
				_Kakek +
				' Kakek (' +
				rKakek +
				')</td><td align="center">' +
				_l(_0xc3f3x4f) +
				'</td>';
			_0xc3f3x53 =
				_0xc3f3x53 +
				'</td><td align="right">' +
				toRp(h / _Kakek) +
				'</td></tr>';
		}
		if (_Modal - _0xc3f3xbf > 1) {
			_0xc3f3x53 =
				_0xc3f3x53 +
				'<td colspan="3">Sisa harta ' +
				toRp(_Modal - _0xc3f3xbf) +
				' diserahkan ke <i><b>Baitul maal</b></i></td>';
		}
		_0xc3f3x53 = _0xc3f3x53 + '<tr>';
		_0xc3f3x53 = _0xc3f3x53 + '</tbody></table>';
		_0xc3f3x53 = _0xc3f3x53 + '<p id="table">' + partnerHTML + '</p>';
		$('li.hitung').remove();
		$('ul.selesai').html(
			'<li><a href="" id="reset" class="ui-link ui-btn">HITUNG LAGI</a></li>'
		);
		$('#hasilperhitungan').html(_0xc3f3x53);
	});
	_Halaman = 0;
	$(document).on('click', '#next', function() {
		if ($.mobile.activePage.next('[data-role=page]').length !== 0) {
			var _0xc3f3xc1 = $.mobile.activePage.next('[data-role=page]');
			if (_Modal > 0 && _Waris != '') {
				if (_Wasiat > _Harta / 3) {
					$('#hasil_harta')
						.val(
							'Wasiat tidak boleh lebih dari 1/3 (' +
								toRp(_Harta / 3) +
								') harta warist'
						)
						.val();
					$('#hasil_harta').css({ color: 'red' });
					$('#hasil_harta').focus();
				} else {
					if (_GonoGini > _HartaKotor / 2) {
						$('#hasil_harta')
							.val(
								'Gonogini tidak boleh lebih dari 1/2 (' +
									toRp(_Harta / 2) +
									') harta warist'
							)
							.val();
						$('#hasil_harta').css({ color: 'red' });
						$('#hasil_harta').focus();
					} else {
						isDone();
						$.mobile.changePage(_0xc3f3xc1, { transition: 'slide' });
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
	$(document).on('click', '#back', function() {
		if ($.mobile.activePage.prev('[data-role=page]').length !== 0) {
			var _0xc3f3xc2 = $.mobile.activePage.prev('[data-role=page]');
			isDone();
			$.mobile.changePage(_0xc3f3xc2, { transition: 'slide', reverse: true });
		} else {
			window.location = '?host=' + host;
		}
	});
	$(document).on('click', '#reset', function() {
		window.location = '?host=' + host;
	});
});