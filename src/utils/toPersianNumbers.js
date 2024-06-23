const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianNumbersWithCammas(n) {
  const numWithCamma = numberWithCommas(n);
  const persianNumber = toPersianNumber(numWithCamma);
  return persianNumber;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function toPersianNumber(n) {
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}
