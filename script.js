function getPilihanKomputer() {
  const comp = Math.random();
  if (comp < 0.34) return 'gajah';
  if (comp >= 0.34 && comp < 0.67) return 'orang';
  return 'semut';
}

function getHasil(com, player) {
  if (player == com) return 'Seri';
  if (player == 'gajah') return com == 'orang' ? 'menang' : 'kalah';
  if (player == 'orang') return com == 'gajah' ? 'kalah' : 'menang';
  if (player == 'semut') return com == 'orang' ? 'kalah' : 'menang';
}

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//   const imgCom = document.querySelector('.img-komputer');
//   imgCom.setAttribute('src', `img/${pilihanKomputer}.png`);
//   const dHasil = document.querySelector('.info');
//   dHasil.innerHTML = hasil;
// });
function putar() {
  const kgambar = document.querySelector('.img-komputer');
  const daftar = ['gajah', 'orang', 'semut'];
  let i = 0;
  const waktuAwal = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuAwal > 1000) {
      clearInterval;
      return;
    }
    kgambar.setAttribute('src', `img/${daftar[i++]}.png`);
    if (i == daftar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
  pil.addEventListener('click', function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    putar();

    setTimeout(() => {
      const imgCom = document.querySelector('.img-komputer');
      imgCom.setAttribute('src', `img/${pilihanKomputer}.png`);
      const dHasil = document.querySelector('.info');
      dHasil.innerHTML = hasil;
    }, 1000);
  });
});
