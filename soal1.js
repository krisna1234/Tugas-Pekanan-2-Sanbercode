//untuk memanggil libary agar bisa membuat inputan berupa angka
const prompt = require('prompt-sync')({sigint: true});

//memanggil libary agar bisa melakukan operasi hitung matematika
const math = require('mathjs');


//inisialisasi variabel inputan num1
const num1 = prompt('Masukkan Biangan: ');


if (num1 < 0){// Jika inputan variabel num1 yang diinputkan <0 maka muncul keteranga Angka Tidak boleh minus

    console.log ('Angka Tidak Boleh Minus!')

}if (num1 %2 !== 0) {// Bila terjadi kondisi ivariabel num1 yang diinputkan bukan angka genap maka muncul angka yang dimaksukkan harus genap!
    
    console.log ("Angka yang dimasukkan harus genap!")

} else {

    let sqrtResult = math.sqrt(num1);// variabel yang digunakan untuk menampung dan melakukan operasi perhitungan kuadrat
    console.log (`Akar kuadrat dari ${num1} adalah ${sqrtResult}`);// menampilkan hasil perhitungan kuadrat
}
