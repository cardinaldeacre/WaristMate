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
			totalAshobah =
				totalAshobah + parseInt(_a[ratioParts]) * parseInt(a2[ratioParts]);
		}
	}
	var distributedAssets = 0;
	_TotalHartaAshobah = calculateShare(1, shareRatio, nIrst);
	_HartaAshobah = _TotalHartaAshobah;
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
	if (nilai_istri > 0) {
		ratioParts = processRatio(rIstri, resultIndex, shareRatio);
		if (_radd > 0) {
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
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
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
		if (_radd > 0) {
			alpha =
				alpha +
				'<tr><td>Sisa harta [<b>' +
				toRp(nIrst) +
				'</b>]</td><td colspan="2"><hr></td></tr>';
		}
	}
	if (nilai_suami > 0) {
		ratioParts = processRatio(rSuami, resultIndex, shareRatio);
		if (_radd > 0) {
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
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
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
		if (_radd > 0) {
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
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
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
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
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
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
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
	if (nilai_cuculaki > 0) {
		ratioParts = processRatio(rCucuLaki, resultIndex, shareRatio);
		h = calculateShare(nilai_cuculaki, ratioParts, nIrst);
		distributedAssets = distributedAssets + h;
		_HasilCucuLaki = h;
		secondCharacter = secondCharacter + 1;
		if (determineShareType(ratioParts) == 'Ashobah') {
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
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
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
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
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
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
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
		}
		if (determineShareType(ratioParts) == 'Musytarakah') {
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
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
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
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
		ratioParts = processRatio(rSaudaraPerempuanSeAyah, resultIndex, shareRatio);
		h = calculateShare(nilai_saudaraperempuanseayah, ratioParts, nIrst);
		distributedAssets = distributedAssets + h;
		_HasilSaudaraPerempuanSeAyah = h;
		secondCharacter = secondCharacter + 1;
		if (determineShareType(ratioParts) == 'Ashobah') {
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
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
				ratioParts = processRatio(rSaudaraPerempuanSeIbu, resultIndex, shareRatio);
				nilai_nenekibu; nilai_nenekibu 
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
		ratioParts = processRatio(rAnakLakiSaudaraKandung, resultIndex, shareRatio);
		h = calculateShare(nilai_anaklakisaudarakandung, ratioParts, nIrst);
		distributedAssets = distributedAssets + h;
		_HasilAnakLakiSaudaraKandung = h;
		secondCharacter = secondCharacter + 1;
		if (determineShareType(ratioParts) == 'Ashobah') {
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
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
		ratioParts = processRatio(rAnakLakiSaudaraSeAyah, resultIndex, shareRatio);
		h = calculateShare(nilai_anaklakisaudaraseayah, ratioParts, nIrst);
		distributedAssets = distributedAssets + h;
		_HasilAnakLakiSaudaraSeAyah = h;
		secondCharacter = secondCharacter + 1;
		if (determineShareType(ratioParts) == 'Ashobah') {
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
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
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
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
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
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
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
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
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
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
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
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
			ratioParts = calculateAshobahShare(h, nIrst, adjustedShares, ratioParts);
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