import './App.css';

// ES6 Class Sederhana
class Mobil {
  constructor(nama) {
    this.merek = nama;
  }
}

// ES6 Class Sederhana
function hitung(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multipy = a * b;
  const devide = a / b;

  return [add, subtract, multipy, devide];
}

function App() {
  // Pemanggilan Fungsi
  const [penjumlahan, pengurangan, perkalian, pembagian] = hitung(5, 2);

  // Pemanggilan Class
  const mobil_saya = new Mobil('Toyota');

  // ES6 Arrow Function
  // Sebelum
  angka_hitungan = function () {
    return 'Perhitungan';
  };
  // Sesudah
  angka_hitungan = () => {
    return 'Perhitungan';
  };

  ucapan = (val) => 'Halo, ' + val;

  return (
    <div className="App">
      {ucapan('Irfan')}
      {penjumlahan}
    </div>
  );
}

export default App;
