// 3. verilen pozitif olmayan bir tamsayıyı argüman olarak alan ve rakamları azalan sırada döndüren bir fonksiyon yazmaktır. Özetle, rakamları yeniden düzenleyerek mümkün olan en yüksek sayıyı oluşturun.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

let sayi = 42145;

function rvrs(num) {
  return +num.toString().split("").sort().reverse().join("");
}
console.log(rvrs(sayi));
