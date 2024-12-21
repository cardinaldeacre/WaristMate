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
