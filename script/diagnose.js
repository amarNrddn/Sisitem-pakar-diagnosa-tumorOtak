const resultContainer = document.querySelector(".result-container");
const result = document.querySelector(".result");
const warning = document.querySelector(".warning");

let cfCombine = 0;
let diagnostic = "";
const redBg = "#fff3cd";
const redBorder = "#ffeeba";
const redColor = "#856404";
const greenBg = "#f8d7da";
const greenBorder = "#f5c6cb";
const greenColor = "#721c24";

function diagnose(cfUser, cfPakar) {
  let cfPerQuestion = [0, 0, 0, 0, 0, 0, 0, 0];

  cfPerQuestion.forEach((cf, index) => {
    cf = cfPakar[index] * cfUser[index];
    index === 0
      ? (cfCombine = cfCombine + cf)
      : (cfCombine = cfCombine + cf * (1 - cfCombine));
  });

  cfCombine = (Math.round(cfCombine * 10000) * 100) / 10000;

  if (cfCombine >= 0 && cfCombine <= 50) {
    diagnostic = "KEMUNGKINAN KECIL";

    setBannerColor(warning, "#cce5ff", "#b8daff", "#004085");
  } else if (cfCombine > 50 && cfCombine <= 79) {
    diagnostic = "KEMUNGKINAN";
    setBannerColor(result, redBg, redBorder, redColor);
    setBannerColor(warning, redBg, redBorder, redColor);

    warning.textContent =
      "Perlu diperhatikan Anda harus konsultasi kepada dokter Anda untuk pemeriksaan lebih lanjut.";
  } else if (cfCombine > 79 && cfCombine <= 99) {
    diagnostic = "KEMUNGKINAN BESAR";
    setBannerColor(result, greenBg, greenBorder, greenColor);
    setBannerColor(warning, greenBg, greenBorder, greenColor);

    warning.textContent =
      "Segeralah periksakan kesehatan Anda ke dokter agar Anda mendapatkan penanganan medis secepat mungkin.";
  } else {
    diagnostic = "SANGAT YAKIN";
    setBannerColor(result, redBg, redBorder, redColor);
    setBannerColor(warning, redBg, redBorder, redColor);
  }

  resultContainer.scrollIntoView();
  result.classList.toggle("disable");
  warning.classList.toggle("disable");
  result.innerHTML = `
  <h3>Hasil Diagnosis Anda</h3>
  Dari gejala-gejala yang Anda rasakan, 
  sistem mendiagnosis Anda memiliki <strong>${diagnostic}</strong> 
  terserang penyakit Tumor Otak dengan persentase <strong>${cfCombine}%.</strong>`;
  cfPerQuestion = [0, 0, 0, 0, 0, 0, 0, 0];
  cfCombine = 0;
}

const setBannerColor = (item, bgColor, borderColor, color) => {
  item.style.backgroundColor = bgColor;
  item.style.borderColor = borderColor;
  item.style.color = color;
};

export { diagnose };
