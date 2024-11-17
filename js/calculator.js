var mode = "USER";
var tirkah = 0;
var hutang = 0;
var wasiat = 0;
var tajhiz = 0;
var warisan = 0;
var totalAshobah = 0;
var masalah = 0;
var muwarrits = 0;

$("#nTirkah, #Hutang, #nWasiat, #nTajhiz, #nIrst").live(
  "change paste keyup",
  function () {
    tirkah = $("nTirkah").val();
    hutang = $("nHutang").val();
    wasiat = $("nWasiat").val();
    tajhiz = $("nTajhiz").val();
    irst = tirkah - hutang - wasiat - tajhiz;
    $("#nIrst").val(toRp(irst));
    $("#nIrst").css({ color: "fff" });
  }
);

$("#muwarrits").change(function () {
  muwarrits = $("input[name=muwarrits]:checked").val();
  if (muwarrits == "laki-laki") {
    
  }
});

//Auto Currency harta kotor
const inputHartaKotor = document.getElementById("i-24");
inputHartaKotor.addEventListener("input", function (e) {
  // Ambil nilai input tanpa karakter selain angka
  let rawValue = e.target.value.replace(/[^0-9]/g, ""); // Hanya angka
  e.target.dataset.rawValue = rawValue; // Simpan nilai mentah
  // Format angka ke format mata uang
  let formattedValue = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Tidak ada desimal
  }).format(rawValue);

  // Perbarui nilai input dengan format
  e.target.value = formattedValue.replace("Rp", "Rp.");
});
