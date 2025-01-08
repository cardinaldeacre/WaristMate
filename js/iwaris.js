var mode = 'USER';
var sisasaham = 0;
var totalAshobah = 0;
var jenis = '';
var naul = 0;
var nradd = 0;
var _Halaman = 0;
var nIrst = 0;
var _HartaKotor = 0;
var nTirkah = 0;
var _GonoGini = 0;
var hartaashobah = 0;
var nHutang = 0;
var nTajhiz = 0;
var nWasiat = 0;
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
var _Waris = '';
var _Kelamin = '';
var nilai_anak = 0;
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
	nTirkah = _HartaKotor - _GonoGini;
	nHutang = $('#NilaiHutang').val();
	nTajhiz = $('#NilaiMakam').val();
	nWasiat = $('#NilaiWasiat').val();
	nIrst = nTirkah - nHutang - nTajhiz - nWasiat;
	$('#NilaiHarta').val(nTirkah);
	$('#hasil_harta').val(toRp(nIrst));
	$('#hasil_harta').css({ color: '#000' });
});
$('#gonogini').change(function() {
	_GonoGini = $('input=[name=gonogini]:checked').val() / 100 * _HartaKotor;
	nTirkah = _HartaKotor - _GonoGini;
	nIrst = nTirkah - nHutang - nTajhiz - nWasiat;
	$('#NilaiHarta').val(_HartaKotor - _GonoGini);
	$('#hasil_harta').val(toRp(nIrst));
});
$('#cb_hartabersama').click(function() {
	$('#pewaris').change();
	var ratioParts = $('#cb_hartabersama').attr('checked');
	if (ratioParts) {
		$('#field_tirkah').show();
		$('.field_totalharta').text('Harta Sebelum Tirkah (total Harta)');
	} else {
		$('#field_tirkah').hide();
		$('.field_totalharta').html('Tirkah (Harta <i>muwarrits</i>)');
		_GonoGini = 0;
		nTirkah = _HartaKotor - _GonoGini;
		nIrst = nTirkah - nHutang - nTajhiz - nWasiat;
		$('#NilaiHarta').val(nTirkah);
		$('#hasil_harta').val(toRp(nIrst));
		$('#nilai_istri').val('0').slider().slider('refresh');
		$('#field_istri').hide();
		$('#field_suami').show();
		$('#field_gonogini').hide();
		$('#NilaiGonoGini').val('').val();
	}
});
$('#pewaris').change(function() {
	_Waris = $('input[name=pewaris]:checked').val();
	var isHartaBersamaChecked = $('#cb_hartabersama').attr('checked');
	if (_Waris == 'Laki-laki') {
		if (isHartaBersamaChecked) {
			var gonoginiPercentage = $('input=[name=gonogini]:checked').val();
			if (gonoginiPercentage > 0) {
				_GonoGini =
					$('input=[name=gonogini]:checked').val() / 100 * _HartaKotor;
				nTirkah = _HartaKotor - _GonoGini;
				nIrst = nTirkah - nHutang - nTajhiz - nWasiat;
				$('#NilaiHarta').val(nTirkah);
				$('#hasil_harta').val(toRp(nIrst));
			}
			nilai_suami = 0;
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
		nTirkah = _HartaKotor - _GonoGini;
		nIrst = nTirkah - nHutang - nTajhiz - nWasiat;
		$('#NilaiHarta').val(nTirkah);
		$('#hasil_harta').val(toRp(nIrst));
		$('#nilai_istri').val('0').slider().slider('refresh');
		$('#field_istri').hide();
		$('#field_suami').show();
		$('#field_gonogini').hide();
		$('#NilaiGonoGini').val('').val();
	}
});
$('#cb_ayah,#cb_ibu,#cb_suami,#cb_kakek').live('change', function() {
	if ($('#cb_ayah').is(':checked')) {
		nilai_ayah = 1;
		nilai_kakek = 0;
		nilai_nenekayah = 0;
	} else {
		nilai_ayah = 0;
	}
	if ($('#cb_ibu').is(':checked')) {
		nilai_ibu = 1;
	} else {
		nilai_ibu = 0;
	}
	if ($('#cb_suami').is(':checked')) {
		nilai_suami = 1;
	} else {
		nilai_suami = 0;
	}
	if ($('#cb_kakek').is(':checked')) {
		if (nilai_ayah == 0) {
			nilai_kakek = 1;
		}
	} else {
		nilai_kakek = 0;
	}
	isSaham();
});
$('#nilai_istri').live('change', function() {
	nilai_istri = $(this).val();
	isSaham();
});
$('#nilai_anaklaki').live('change', function() {
	nilai_anaklaki = $(this).val();
	isSaham();
});
$('#nilai_anakperempuan').live('change', function() {
	nilai_anakperempuan = $(this).val();
	isSaham();
});
$('#nilai_cuculaki').live('change', function() {
	nilai_cuculaki = $(this).val();
	isSaham();
});
$('#nilai_cucuperempuan').live('change', function() {
	nilai_cucuperempuan = $(this).val();
	isSaham();
});
$('#nilai_nenekayah').live('change', function() {
	nilai_nenekayah = $(this).val();
	isSaham();
});
$('#nilai_nenekibu').live('change', function() {
	nilai_nenekibu = $(this).val();
	isSaham();
});
$('#nilai_saudaralakikandung').live('change', function() {
	nilai_saudaralakikandung = $(this).val();
	isSaham();
});
$('#nilai_saudaraperempuankandung').live('change', function() {
	nilai_saudaraperempuankandung = $(this).val();
	isSaham();
});
$('#nilai_saudaralakiseayah').live('change', function() {
	nilai_saudaralakiseayah = $(this).val();
	isSaham();
});
$('#nilai_saudaraperempuanseayah').live('change', function() {
	nilai_saudaraperempuanseayah = $(this).val();
	isSaham();
});
$('#nilai_saudaralakiseibu').live('change', function() {
	nilai_saudaralakiseibu = $(this).val();
	isSaham();
});
$('#nilai_saudaraperempuanseibu').live('change', function() {
	nilai_saudaraperempuanseIbu = $(this).val();
	isSaham();
});
$('#nilai_anaklakisaudarakandung').live('change', function() {
	nilai_anaklakisaudarakandung = $(this).val();
	isSaham();
});
$('#nilai_anaklakisaudaraseayah').live('change', function() {
	nilai_anaklakisaudaraseayah = $(this).val();
	isSaham();
});
$('#nilai_pamankandungayah').live('change', function() {
	nilai_pamankandungayah = $(this).val();
	isSaham();
});
$('#nilai_pamansekakekayah').live('change', function() {
	nilai_pamansekakekayah = $(this).val();
	isSaham();
});
$('#nilai_anaklakipamankandung').live('change', function() {
	nilai_anaklakipamankandung = $(this).val();
	isSaham();
});
$('#nilai_anaklakipamansekakek').live('change', function() {
	nilai_anaklakipamansekakek = $(this).val();
	isSaham();
});
$(
	'#nilai_cuculaki,#nilai_saudaralakiseayah,#nilai_anaklakisaudarakandung'
).live('change', function() {
	if (nilai_anakperempuan > 1) {
		if (nilai_cuculaki > 0) {
			$('#field_cucuperempuan').show();
			$('#info_penghalang_1a').hide();
		} else {
			$('#nilai_cucuperempuan').val('0').slider().slider('refresh');
			$('#field_cucuperempuan').hide();
			$('#info_penghalang_1a').show();
		}
	}
	if (nilai_saudaraperempuankandung > 1) {
		if (nilai_saudaralakiseayah > 0) {
			if (nilai_saudaraperempuankandung > 1) {
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
	if (nilai_anaklakisaudarakandung > 0) {
		$('#nilai_anaklakisaudaraseayah').val('0').slider().slider('refresh');
		$('#field_anaklakisaudaraseayah').hide();
	} else {
		$('#field_anaklakisaudaraseayah').show();
	}
});
$('#nilai_anaklakipamankandung').live('change', function() {
	if (
		nilai_anaklakipamankandung > 0 ||
		nilai_pamansekakekayah > 0 ||
		nilai_anaklakisaudaraseayah > 0 ||
		nilai_saudaralakikandung > 0 ||
		nilai_ayah > 0
	) {
		$('#nilai_anaklakipamansekakek').val('0').slider().slider('refresh');
		$('#field_anaklakipamansekakek').hide();
	} else {
		$('#field_anaklakipamansekakek').show();
	}
});
$('#nilai_pamankandungayah').live('change', function() {
	if (
		nilai_pamankandungayah > 0 ||
		nilai_anaklakisaudaraseayah > 0 ||
		nilai_saudaralakikandung > 0 ||
		nilai_ayah > 0
	) {
		$('#nilai_pamansekakekayah').val('0').slider().slider('refresh');
		$('#field_pamansekakekayah').hide();
	} else {
		$('#field_pamansekakekayah').show();
	}
});
function isDone() {
	var alpha = '';
	if (nilai_anaklaki > 0) {
		$('#nilai_cuculaki').val('0').slider().slider('refresh');
		$('#nilai_cucuperempuan').val('0').slider().slider('refresh');
		$('#field_cucu').hide();
		$('#info_penghalang_1').show();
		$('#info_penghalang_1a').hide();
	} else {
		$('#info_penghalang_1').hide();
		$('#field_cucu').show();
	}
	if (nilai_anakperempuan > 1) {
		if (nilai_cuculaki == 0) {
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
	if (nilai_ayah > 0) {
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
	if (nilai_ibu > 0) {
		$('#field_nenekayah,#field_nenekibu').hide();
		$('#nilai_nenekayah,#nilai_nenekibu').val('0').slider().slider('refresh');
		nilai_nenekayah = 0;
		nilai_nenekibu = 0;
		nilai_nenek2 = 0;
	} else {
		if (nilai_ayah == 0) {
			$('#field_nenekayah').show();
		} else {
			nilai_nenek2 = parseInt(nilai_nenekayah) + parseInt(nilai_nenekibu);
		}
		$('#field_nenekibu').show();
	}
	if (nilai_ayah > 0 && nilai_ibu > 0) {
		$('#info_penghalang_2').show();
	} else {
		$('#info_penghalang_2').hide();
	}
	if (nilai_cucuperempuan > 0 || nilai_anakperempuan > 0) {
		$('#nilai_saudaralakiseibu').val('0').slider().slider('refresh');
		$('#nilai_saudaraperempuanseibu').val('0').slider().slider('refresh');
		$('#field_saudaralakiseibu,#field_saudaraperempuanseibu').hide();
		$('#info_penghalang_b4').show();
		if (nilai_saudaraperempuankandung > 0) {
			$('#field_saudaralakikandung').hide();
			$('#info_penghalang_a3').show();
			$('#field_saudaralakiseayah,#field_saudaraperempuanseayah').hide();
			$('#info_penghalang_4').show();
		} else {
			$('#info_penghalang_a3').hide();
		}
		if (nilai_saudaraperempuanseayah > 0) {
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
	if (nilai_saudaralakikandung > 0) {
		$('#nilai_saudaralakiseayah').val('0').slider().slider('refresh');
		$('#nilai_saudaraperempuanseayah').val('0').slider().slider('refresh');
		$('#field_saudaralakiseayah,#field_saudaraperempuanseayah').hide();
		$('#info_penghalang_4').show();
	} else {
		if (
			(nilai_anakperempuan == 0 || nilai_cucuperempuan == 0) &&
			nilai_saudaraperempuankandung == 0
		) {
			$('#info_penghalang_4').hide();
			$('#field_saudaraperempuanseayah').show();
		}
		if (
			(nilai_cucuperempuan > 0 || nilai_anakperempuan > 0) &&
			nilai_saudaraperempuanseayah > 0
		) {
			$('#field_saudaralakiseayah').show();
		}
	}
	if (nilai_saudaraperempuankandung > 1) {
		if (nilai_saudaralakiseayah == 0) {
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
		nilai_anaklakipamankandung > 0 ||
		nilai_pamansekakekayah > 0 ||
		nilai_anaklakisaudaraseayah > 0 ||
		nilai_saudaralakikandung > 0
	) {
		$('#nilai_anaklakipamansekakek').val('0').slider().slider('refresh');
		$('#field_anaklakipamansekakek').hide();
	} else {
		$('#field_anaklakipamansekakek').show();
	}
	if (
		nilai_pamankandungayah > 0 ||
		nilai_anaklakisaudaraseayah > 0 ||
		nilai_saudaralakikandung > 0
	) {
		$('#nilai_pamansekakekayah').val('0').slider().slider('refresh');
		$('#field_pamansekakekayah').hide();
	} else {
		$('#field_pamansekakekayah').show();
	}
	alpha =
		'<div data-role="header" data-position="fixed" data-theme="b"><h1>Hasil</h1></div><div data-role="content">';
	alpha =
		alpha +
		'<div id="hasilperhitungan"><p>Sudah dapat diketahui hasilnya, karena ada penghalang dari ahli waris.</p></div>';
	alpha =
		alpha +
		'<div id="footer" data-role="footer" data-position="fixed"><div data-role="navbar" data-iconpos="top" data-theme="a"><ul class="selesai"><li ckass="restart"><a href="" id="reset">HITUNG ULANG</a></li><li class="hitung"><a href="" id="hitung">LIHAT HASIL</a></li></ul></div></div>';
	if (nilai_anaklaki > 0) {
		alpha = alpha + '</div>';
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
		$('.penghalang_3').html(alpha);
	}
	if (nilai_cuculaki > 0) {
		alpha = alpha + '</div>';
		nilai_saudaralakikandung = 0;
		nilai_saudaraperempuankandung = 0;
		nilai_anaklakisaudarakandung = 0;
		nilai_anaklakisaudaraseayah = 0;
		nilai_pamankandungayah = 0;
		nilai_pamansekakekayah = 0;
		nilai_anaklakipamankandung = 0;
		nilai_anaklakipamansekakek = 0;
		$('.penghalang_3').html(alpha);
	}
	if (nilai_kakek > 0 || nilai_ayah > 0) {
		alpha = alpha + '</div>';
		nilai_saudaralakikandung = 0;
		nilai_saudaraperempuankandung = 0;
		nilai_anaklakisaudarakandung = 0;
		nilai_anaklakisaudaraseayah = 0;
		nilai_pamankandungayah = 0;
		nilai_pamansekakekayah = 0;
		nilai_anaklakipamankandung = 0;
		nilai_anaklakipamansekakek = 0;
		$('.penghalang_3').html(alpha);
	}
	if (nilai_saudaralakikandung > 0 || nilai_saudaralakiseayah > 0) {
		alpha = alpha + '</div>';
		nilai_anaklakisaudarakandung = 0;
		nilai_anaklakisaudaraseayah = 0;
		nilai_pamankandungayah = 0;
		nilai_pamansekakekayah = 0;
		nilai_anaklakipamankandung = 0;
		nilai_anaklakipamansekakek = 0;
		$('.penghalang_5').html(alpha);
	}
	if (nilai_anaklakisaudarakandung > 0 || nilai_anaklakisaudaraseayah > 0) {
		alpha = alpha + '</div>';
		nilai_pamankandungayah = 0;
		nilai_pamansekakekayah = 0;
		nilai_anaklakipamankandung = 0;
		nilai_anaklakipamansekakek = 0;
		$('.penghalang_6').html(alpha);
	}
	if (nilai_pamankandungayah > 0 || nilai_pamansekakekayah > 0) {
		alpha = alpha + '</div>';
		nilai_anaklakipamankandung = 0;
		nilai_anaklakipamansekakek = 0;
		$('.penghalang_7').html(alpha);
	}
	alpha = alpha + '</div>';
	$('.penghalang_8').html(alpha);
}
// isdone = checkblockingcondition
function isSaham() {
	nilai_anak = parseInt(nilai_anaklakisaudaraseayah) + parseInt(nilai_anakperempuan);
	_Cucu = parseInt(nilai_cuculaki) + parseInt(nilai_cucuperempuan);
	nilai_nenek2 = parseInt(nilai_nenekayah) + parseInt(nilai_nenekibu);
	_SaudaraIbu = parseInt(nilai_saudaralakiseibu) + parseInt(nilai_saudaraperempuanseIbu);
	_SaudaraAyah =
		parseInt(nilai_saudaralakiseayah) + parseInt(nilai_saudaraperempuanseayah);
	_SaudaraKandung =
		parseInt(nilai_saudaralakikandung) + parseInt(nilai_saudaraperempuankandung);
	_Saudara =
		parseInt(_SaudaraKandung) + parseInt(_SaudaraAyah) + parseInt(_SaudaraIbu);
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
	if (nilai_anak == 0 || _Cucu == 0 || _Saudara > 1) {
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
	if ((nilai_anak > 0 || _Cucu > 0 || _Saudara > 1) && nilai_ibu > 0 && nilai_ayah > 0) {
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
	if (nilai_anak > 0 || _Cucu > 0 || _Saudara > 1) {
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
			if (_SaudaraIbu == 1) {
				rSaudaraLakiSeIbu = '1/6';
			}
			if (_SaudaraIbu > 1) {
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
			if (_SaudaraIbu == 1) {
				rSaudaraPerempuanSeIbu = '1/6';
			}
			if (_SaudaraIbu > 1) {
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
	if ((nilai_anakperempuan > 0 || nilai_cucuperempuan > 0) && nilai_ibu == 0) {
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
	if (nilai_anak == 0 || _Cucu == 0) {
		if (nilai_suami > 0) {
			rSuami = '1/2';
		} else {
			rSuami = '0';
		}
	}
	if (nilai_anakperempuan == 1 && nilai_anaklaki == 0) {
		rAnakPerempuan = '1/2';
	}
	if (nilai_cucuperempuan == 1 && nilai_cuculaki == 0 && nilai_anakperempuan == 0) {
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
	if (nilai_anak == 0 || _Cucu == 0) {
		if (nilai_istri > 0) {
			rIstri = '1/4';
		} else {
			rIstri = '0';
		}
	}
	if (nilai_anak > 0 || _Cucu > 0) {
		if (nilai_suami > 0) {
			rSuami = '1/4';
		} else {
			rSuami = '0';
		}
	}
	if (nilai_anak > 0 || _Cucu > 0) {
		if (nilai_istri > 0) {
			rIstri = '1/8';
		} else {
			rIstri = '0';
		}
	}
	if (nilai_ayah > 0 && nilai_ibu > 0 && (nilai_anak == 0 || _Cucu == 0 || _Saudara < 2)) {
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
	if (nilai_suami > 0 && nilai_ibu > 0 && _SaudaraIbu > 1 && nilai_saudaralakikandung > 0) {
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
				if (_SaudaraIbu == 1) {
					rSaudaraLakiSeIbu = '1/6';
				}
				if (_SaudaraIbu > 1) {
					rSaudaraLakiSeIbu = '1/3';
				}
			}
			if (nilai_saudaralakiseibu > 0) {
				if (nilai_saudaraperempuanseIbu > 0) {
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
function toRp(eta) {
  var delta = parseInt(Math.round(eta), 10).toString().split("").reverse().join("");
  var _0xc3f3x58 = "";
  for (var _0xc3f3x59 = 0; _0xc3f3x59 < delta.length; _0xc3f3x59++) {
    _0xc3f3x58 += delta[_0xc3f3x59];
    if ((_0xc3f3x59 + 1) % 3 === 0 && _0xc3f3x59 !== delta.length - 1) {
      _0xc3f3x58 += ".";
    }
  }
  return "Rp." + _0xc3f3x58.split("").reverse().join("");
}
function toRp(amount) {
	// Konversi angka ke format Rupiah
	let formattedString = parseInt(Math.round(amount), 10)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
	return 'Rp.' + formattedString;
}
function calculateShare(adjustmentFactor, ratioString, indexmusytarakah) {
	var ratioParts = ratioString.split('/');
	if (ratioParts.length < 2) {
		ratioParts = ratioString.split(':');
		denominator = ratioParts[1].substr(0, 1);
	} else {
		var denominator = ratioParts[1];
	}
	var numerator = ratioParts[0];
	var totalsharedx = ratioString.substr(3, 1);
	var secondCharacter = ratioString.substr(1, 1);
	var a = 0;
	var shareType = 0;
	var totalCalculatedShare = 0;
	if (
		totalsharedx == 'A' ||
		totalsharedx == 'M' ||
		totalsharedx == 'R' ||
		totalsharedx == '+'
	) {
		if (secondCharacter == ':') {
			totalCalculatedShare = conditionalSum();
			a = totalhartaashobah;
			shareType =
				a / totalCalculatedShare * (numerator / denominator) * adjustmentFactor;
			if (shareType > hartaashobah) {
				shareType = hartaashobah;
			}
			hartaashobah = hartaashobah - shareType;
			if (shareType < 0) {
				shareType = 0;
			}
			return shareType;
		} else {
			return numerator / denominator * indexmusytarakah;
		}
	} else {
		return numerator / denominator * indexmusytarakah;
	}
	return ratioParts;
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
function processRatio(ratioString, totalsharedx, a) {
	var numerator = ratioString.substr(0, 1).match(/[0-9]+/g);
	var denominator = ratioString.substr(2, 2).match(/[0-9]+/g);
	var totalsharedx = ratioString.substr(3, 1);
	var secondCharacter = ratioString.substr(1, 1);
	var shareType = 0;
	if (totalsharedx == 'A' || totalsharedx == 'M' || totalsharedx == 'R') {
		if (secondCharacter == ':') {
			return ratioString;
		} else {
			return a;
		}
	} else {
		var ratioParts = totalsharedx / denominator * numerator;
		if (jenis == 'AR-RADD') {
			shareType = ratioParts + '/' + totalsharedx;
		} else {
			shareType = ratioParts + '/' + naul;
		}
		if (ash.length > 1) {
			if (ash.length == 2 && _SaudaraIbu > 1) {
				hartaashobah = 0;
			}
			if (hartaashobah > 0 && totalAshobah == 0) {
				nradd = hartaashobah;
				shareType = ratioParts + '/' + sisasaham;
			}
		}
		return shareType;
	}
}
function calculateRemainingShare(ratioString, totalsharedy, totalsharedy) {
	var numerator = ratioString.substr(0, 1).match(/[0-9]+/g);
	var denominator = ratioString.substr(2, 2).match(/[0-9]+/g);
	return totalsharedy - totalsharedy / denominator;
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
$(window).load(function() {
	$(document).on('click', '#hitung', function() {
		if (nilai_suami > 0) {
			var firstsuami = rSuami.substr(0, 1),
				secondsuami = rSuami.substr(2, 1),
				thirdsuami = rSuami.substr(3, 1);
			ash.push(thirdsuami);
			_a.push(firstsuami);
			a.push(secondsuami);
			a2.push(nilai_suami);
		}
		if (nilai_istri > 0) {
			var firstistri = rIstri.substr(0, 1),
				secondistri = rIstri.substr(2, 1),
				thirdistri = rIstri.substr(3, 1);
			ash.push(thirdistri);
			_a.push(firstistri);
			a.push(secondistri);
			a2.push(nilai_istri);
		}
		if (nilai_anaklaki > 0) {
			var firstanaklaki = rAnakLaki.substr(0, 1),
				secondanaklaki = rAnakLaki.substr(2, 1),
				thirdanaklaki = rAnakLaki.substr(3, 1);
			ash.push(thirdanaklaki);
			_a.push(firstanaklaki);
			a.push(secondanaklaki);
			a2.push(nilai_anaklaki);
		}
		if (nilai_anakperempuan > 0) {
			var firstanakperempuan = rAnakPerempuan.substr(0, 1),
				secondanakperempuan = rAnakPerempuan.substr(2, 1),
				thirdanakperempuan = rAnakPerempuan.substr(3, 1);
			ash.push(thirdanakperempuan);
			_a.push(firstanakperempuan);
			a.push(secondanakperempuan);
			a2.push(nilai_anakperempuan);
		}
		if (nilai_ayah > 0) {
			var firstayah = rAyah.substr(0, 1),
				secondayah = rAyah.substr(2, 1),
				thirdayah = rAyah.substr(3, 1);
			ash.push(thirdayah);
			_a.push(firstayah);
			a.push(secondayah);
			a2.push(nilai_ayah);
		}
		if (nilai_ibu > 0) {
			var firstibu = rIbu.substr(0, 1),
				secondibu = rIbu.substr(2, 1),
				thirdibu = rIbu.substr(3, 1);
			ash.push(thirdibu);
			_a.push(firstibu);
			a.push(secondibu);
			a2.push(nilai_ibu);
		}
		if (nilai_cuculaki > 0) {
			var firstcuculaki = rCucuLaki.substr(0, 1),
				secondcuculaki = rCucuLaki.substr(2, 1),
				thirdcuculaki = rCucuLaki.substr(3, 1);
			ash.push(thirdcuculaki);
			_a.push(firstcuculaki);
			a.push(secondcuculaki);
			a2.push(nilai_cuculaki);
		}
		if (nilai_cucuperempuan > 0) {
			var firstcucuperempuan = rCucuPerempuan.substr(0, 1),
				secondcucuperempuan = rCucuPerempuan.substr(2, 1),
				thirdcucuperempuan = rCucuPerempuan.substr(3, 1);
			ash.push(thirdcucuperempuan);
			_a.push(firstcucuperempuan);
			a.push(secondcucuperempuan);
			a2.push(nilai_cucuperempuan);
		}
		if (nilai_kakek > 0) {
			var firstkakek = rKakek.substr(0, 1),
				secondkakek = rKakek.substr(2, 1),
				thirdkakek = rKakek.substr(3, 1);
			ash.push(thirdkakek);
			_a.push(firstkakek);
			a.push(secondkakek);
			a2.push(nilai_kakek);
		}
		if (nilai_nenekayah > 0) {
			var firstnenekayah = rNenekAyah.substr(0, 1),
				secondnenekayah = rNenekAyah.substr(2, 1),
				thirdnenekayah = rNenekAyah.substr(3, 1);
			ash.push(thirdnenekayah);
			_a.push(firstnenekayah);
			a.push(secondnenekayah);
			a2.push(nilai_nenekayah);
		}
		if (nilai_nenekibu > 0) {
			var firstnenekibu = rNenekIbu.substr(0, 1),
				secondnenekibu = rNenekIbu.substr(2, 1),
				thirdnenekibu = rNenekIbu.substr(3, 1);
			ash.push(thirdnenekibu);
			_a.push(firstnenekibu);
			a.push(secondnenekibu);
			a2.push(nilai_nenekibu);
		}
		if (nilai_saudaralakikandung > 0) {
			var firstsaudaralakikandung = rSaudaraLakiKandung.substr(0, 1),
				secondsaudaralakikandung = rSaudaraLakiKandung.substr(2, 1),
				thirdsaudaralakikandung = rSaudaraLakiKandung.substr(3, 1);
			ash.push(thirdsaudaralakikandung);
			_a.push(firstsaudaralakikandung);
			a.push(secondsaudaralakikandung);
			a2.push(nilai_saudaralakikandung);
		}
		if (nilai_saudaralakiseayah > 0) {
			var firstsaudaralakiseayah = rSaudaraLakiSeAyah.substr(0, 1),
				secondsaudaralakiseayah = rSaudaraLakiSeAyah.substr(2, 1),
				thirdsaudaralakiseayah = rSaudaraLakiSeAyah.substr(3, 1);
			ash.push(thirdsaudaralakiseayah);
			_a.push(firstsaudaralakiseayah);
			a.push(secondsaudaralakiseayah);
			a2.push(nilai_saudaralakiseayah);
		}
		if (nilai_saudaraperempuanseayah > 0) {
			var firstsaudaraperempuanseayah = rSaudaraPerempuanSeAyah.substr(0, 1),
				secondsaudaraperempuanseayah = rSaudaraPerempuanSeAyah.substr(2, 1),
				thirdsaudaraperempuanseayah = rSaudaraPerempuanSeAyah.substr(3, 1);
			ash.push(thirdsaudaraperempuanseayah);
			_a.push(firstsaudaraperempuanseayah);
			a.push(secondsaudaraperempuanseayah);
			a2.push(nilai_saudaraperempuanseayah);
		}
		if (nilai_saudaralakiseibu > 0) {
			var firstsaudaralakiseibu = rSaudaraLakiSeIbu.substr(0, 1),
				secondsaudaralakiseibu = rSaudaraLakiSeIbu.substr(2, 1),
				thirdsaudaralakiseibu = rSaudaraLakiSeIbu.substr(3, 1);
			ash.push(thirdsaudaralakiseibu);
			_a.push(firstsaudaralakiseibu);
			a.push(secondsaudaralakiseibu);
			a2.push(nilai_saudaralakiseibu);
		}
		if (nilai_saudaraperempuanseIbu > 0) {
			var firstsaudaraperempuanseibu = rSaudaraPerempuanSeIbu.substr(0, 1),
				secondsaudaraperempuanseibu = rSaudaraPerempuanSeIbu.substr(2, 1),
				thirdsaudaraperempuanseibu = rSaudaraPerempuanSeIbu.substr(3, 1);
			ash.push(thirdsaudaraperempuanseibu);
			_a.push(firstsaudaraperempuanseibu);
			a.push(secondsaudaraperempuanseibu);
			a2.push(nilai_saudaraperempuanseIbu);
		}
		if (nilai_saudaraperempuankandung > 0) {
			var firstsaudaraperempuankandung = rSaudaraPerempuanKandung.substr(0, 1),
				secondsaudaraperempuankandung = rSaudaraPerempuanKandung.substr(2, 1),
				thirdsaudaraperempuankandung = rSaudaraPerempuanKandung.substr(3, 1);
			ash.push(thirdsaudaraperempuankandung);
			_a.push(firstsaudaraperempuankandung);
			a.push(secondsaudaraperempuankandung);
			a2.push(nilai_saudaraperempuankandung);
		}
		if (nilai_anaklakisaudarakandung > 0) {
			var firstanaklakisaudarakandung = rAnakLakiSaudaraKandung.substr(0, 1),
				secondanaklakisaudarakandung = rAnakLakiSaudaraKandung.substr(2, 1),
				thirdanaklakisaudarakandung = rAnakLakiSaudaraKandung.substr(3, 1);
			ash.push(thirdanaklakisaudarakandung);
			_a.push(firstanaklakisaudarakandung);
			a.push(secondanaklakisaudarakandung);
			a2.push(nilai_anaklakisaudarakandung);
		}
		if (nilai_anaklakisaudaraseayah > 0) {
			var firstanaklakisaudaraseayah = rAnakLakiSaudaraSeAyah.substr(0, 1),
				secondanaklakisaudaraseayah = rAnakLakiSaudaraSeAyah.substr(2, 1),
				thirdanaklakisaudaraseayah = rAnakLakiSaudaraSeAyah.substr(3, 1);
			ash.push(thirdanaklakisaudaraseayah);
			_a.push(firstanaklakisaudaraseayah);
			a.push(secondanaklakisaudaraseayah);
			a2.push(nilai_anaklakisaudaraseayah);
		}
		if (nilai_pamankandungayah > 0) {
			var firstpamankandungayah = rPamanKandungAyah.substr(0, 1),
				secondpamankandung = rPamanKandungAyah.substr(2, 1),
				thirdpamankandung = rPamanKandungAyah.substr(3, 1);
			ash.push(thirdpamankandung);
			_a.push(firstpamankandungayah);
			a.push(secondpamankandung);
			a2.push(nilai_pamankandungayah);
		}
		if (nilai_pamansekakekayah > 0) {
			var firstpamansekakekayah = rPamanSeKakekAyah.substr(0, 1),
				secondpamansekakek = rPamanSeKakekAyah.substr(2, 1),
				thirdpamansekakek = rPamanSeKakekAyah.substr(3, 1);
			ash.push(thirdpamansekakek);
			_a.push(firstpamansekakekayah);
			a.push(secondpamansekakek);
			a2.push(nilai_pamansekakekayah);
		}
		if (nilai_anaklakipamankandung > 0) {
			var firstanaklakipamankandung = rAnakLakiPamanKandung.substr(0, 1),
				secondanaklakipamankandung = rAnakLakiPamanKandung.substr(2, 1),
				thirdanaklakipamankandung = rAnakLakiPamanKandung.substr(3, 1);
			ash.push(thirdanaklakipamankandung);
			_a.push(firstanaklakipamankandung);
			a.push(secondanaklakipamankandung);
			a2.push(nilai_anaklakipamankandung);
		}
		if (nilai_anaklakipamansekakek > 0) {
			var firstanaklakipamansekakek = rAnakLakiPamanSeKakek.substr(0, 1),
				secondanaklakipamansekakek = rAnakLakiPamanSeKakek.substr(2, 1),
				thirdanaklakipamansekakek = rAnakLakiPamanSeKakek.substr(3, 1);
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
		var resultIndex = 0;
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
			if (
				thirdanaklaki != 'A' &&
				thirdanaklaki != 'M' &&
				thirdanaklaki != 'R'
			) {
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
			ratioParts =
				resultIndex / secondsaudaralakiseayah * firstsaudaralakiseayah;
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
				resultIndex /
				secondsaudaraperempuanseayah *
				firstsaudaraperempuanseayah;
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
				ratioParts =
					resultIndex / secondsaudaralakiseibu * firstsaudaralakiseibu;
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
					resultIndex /
					secondsaudaraperempuanseibu *
					firstsaudaraperempuanseibu;
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
				resultIndex /
				secondanaklakisaudarakandung *
				firstanaklakisaudarakandung;
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
		var adjustedShares = resultIndex - sisasaham;
		var shareRatio = adjustedShares + '/' + resultIndex;
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
				totalAshobah =
					totalAshobah + parseInt(_a[ratioParts]) * parseInt(a2[ratioParts]);
			}
		}
		var distributedAssets = 0;
		totalhartaashobah = calculateShare(1, shareRatio, nIrst);
		hartaashobah = totalhartaashobah;
		alpha = '<table id="table">';
		alpha =
			alpha +
			'<tr><td><b>Tirkah</b></td><td align="right"><b>' +
			toRp(nTirkah) +
			'</b></td></tr>';
		if (nHutang > 0) {
			alpha =
				alpha +
				'<tr><td>Hutang</td><td align="right">' +
				toRp(nHutang) +
				'</td></tr>';
		}
		if (nTajhiz > 0) {
			alpha =
				alpha +
				'<tr><td>Biaya Makam</td><td align="right">' +
				toRp(nTajhiz) +
				'</td></tr>';
		}
		if (nWasiat > 0) {
			alpha =
				alpha +
				'<tr><td>Wasiat</td><td align="right">' +
				toRp(nWasiat) +
				'</td></tr>';
		}
		if (nHutang > 0 || nTajhiz > 0 || nWasiat > 0) {
			alpha = alpha + '<tr><td colspan="2"><hr></td></tr>';
			alpha =
				alpha +
				'<tr><td>Al-Irts</td><td align="right"><b>' +
				toRp(nIrst) +
				'</b></td></tr>';
		}
		_hasilmasalah = '';
		if (resultIndex > 1) {
			var ratioParts = processRatio(
				'1/' + resultIndex,
				resultIndex,
				shareRatio
			);
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
			alpha =
				alpha +
				'</td><td align="right"><b>' +
				resultIndex +
				shareArrow +
				'</b></td></tr>';
		}
		if (mode == 'DEVELOPER') {
			alpha = alpha + '<tr><td colspan="2"><hr></td></tr>';
			alpha =
				alpha +
				'<tr><td>Jenis masalah</td><td align="right"><b>' +
				jenis +
				':' +
				sisasaham +
				'</b></td></tr>';
		}
		if (jenis == 'AR-RADD') {
			if (hartaashobah > 0 && totalAshobah == 0) {
			} else {
				if (mode == 'DEVELOPER') {
					if (hartaashobah > 0) {
						alpha =
							alpha +
							'<tr><td>Ashobah(' +
							shareRatio +
							')</td><td align="right"><b>' +
							toRp(hartaashobah) +
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
				nilai_istri +
				' Istri (' +
				rIstri +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha + '</td><td align="right">' + toRp(h / nilai_istri) + '</td></tr>';
			if (nradd > 0) {
				alpha =
					alpha +
					'<tr><td>Sisa harta [<b>' +
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
				alpha + '</td><td align="right">' + toRp(h / nilai_suami) + '</td></tr>';
			if (nradd > 0) {
				alpha =
					alpha +
					'<tr><td>Sisa harta [<b>' +
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
			alpha = alpha + '</td><td align="right">' + toRp(h / nilai_ibu) + '</td></tr>';
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
				alpha + '</td><td align="right">' + toRp(h / nilai_anaklaki) + '</td></tr>';
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
				alpha + '</td><td align="right">' + toRp(h / nilai_cuculaki) + '</td></tr>';
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
				toRp(h / _SaudaraIbu * nilai_saudaralakiseibu / nilai_saudaralakiseibu) +
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
					h / _SaudaraIbu * nilai_saudaraperempuanseIbu / nilai_saudaraperempuanseIbu
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
				toRp(h / nilai_anaklakipamansekakek) +
				'</td></tr>';
		}
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
			alpha =
				alpha +
				'<td>' +
				nilai_ayah +
				' Ayah (' +
				rAyah +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha + '</td><td align="right">' + toRp(h / nilai_ayah) + '</td></tr>';
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
			alpha =
				alpha +
				'<td>' +
				nilai_kakek +
				' Kakek (' +
				rKakek +
				')</td><td align="center">' +
				determineShareType(ratioParts) +
				'</td>';
			alpha =
				alpha + '</td><td align="right">' + toRp(h / nilai_kakek) + '</td></tr>';
		}
		if (nIrst - distributedAssets > 1) {
			alpha =
				alpha +
				'<td colspan="3">Sisa harta ' +
				toRp(nIrst - distributedAssets) +
				' diserahkan ke <i><b>Baitul maal</b></i></td>';
		}
		alpha = alpha + '<tr>';
		alpha = alpha + '</tbody></table>';
		alpha = alpha + '<p id="table">' + partnerHTML + '</p>';
		$('li.hitung').remove();
		$('ul.selesai').html(
			'<li><a href="" id="reset" class="ui-link ui-btn">HITUNG LAGI</a></li>'
		);
		$('#hasilperhitungan').html(alpha);
	});
	_Halaman = 0;
	$(document).on('click', '#next', function() {
		if ($.mobile.activePage.next('[data-role=page]').length !== 0) {
			var currentPage = $.mobile.activePage.next('[data-role=page]');
			if (nIrst > 0 && _Waris != '') {
				if (nWasiat > nTirkah / 3) {
					$('#hasil_harta')
						.val(
							'Wasiat tidak boleh lebih dari 1/3 (' +
								toRp(nTirkah / 3) +
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
									toRp(nTirkah / 2) +
									') harta warist'
							)
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
	$(document).on('click', '#back', function() {
		if ($.mobile.activePage.prev('[data-role=page]').length !== 0) {
			var previousPage = $.mobile.activePage.prev('[data-role=page]');
			isDone();
			$.mobile.changePage(previousPage, { transition: 'slide', reverse: true });
		} else {
			window.location = '?host=' + host;
		}
	});
	$(document).on('click', '#reset', function() {
		window.location = '?host=' + host;
	});
});