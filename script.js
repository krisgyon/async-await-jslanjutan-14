// hasil Promise langsung menampilkan OK tanpa pending
// const tes = new Promise((resolve, reject) => {
//   resolve("ok"),
//   reject("error");
// });

// console.log(tes);

// =================================================================================================================================================
// hasil Promise Pending karena memanggil langsung CONSOLE.LOG seharusnya menggunakan THEN agar tidak Pending
// const tes = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("ok");
//   }, 2000);
// });

// console.log(tes);

// menampilan hasil OK tanpa Pending menggunakan THEN
// const tes = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("ok");
//   }, 2000);
// });

// tes.then((hasil) => console.log(hasil));

// =================================================================================================================================================
// untuk menerapkan ASYNC AWAIT HARUS MEMBUTUHKAN FUNCTION
// menampilkan hasil Pending
// function result() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("OK");
//     }, 2000);
//   });
// }

// const tes = result();
// console.log(tes);

// agar tidak PENDING menggunakan THEN
// function result() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("OK");
//     }, 2000);
//   });
// }

// const tes = result();
// tes.then((hasil) => console.log(hasil));

// =================================================================================================================================================
// cara menggunakan ASYNC AWAIT harus menggunakan function
// code bawah ini menghasilkan PROMISE PENDING
// function resultPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("OK");
//     }, 2000);
//   });
// }

// membuat FUNCTION UNTUK MEMBUNGKUS CODE DI ATAS INI agar bisa menggunakan ASYNC AWAIT
// async function resultAsyn() {
//   const coba = await resultPromise();
//   console.log(coba);
// }

// resultAsyn();

// =================================================================================================================================================
// PROMISE memiliki RESOLVE yang akan di tangkap THAN, REJECT yang akan ditangkap CATCH
// function result() {
//   return new Promise((resolve, reject) => {
//     const waktu = 3000;
//     if (waktu < 5000) {
//       setTimeout(() => {
//         resolve("OK");
//       }, waktu);
//     } else {
//       reject("KESUWEN");
//     }
//   });
// }

// const tes = result();
// tes.then((hasil) => console.log(hasil)).catch((hasil) => console.error(hasil));

// membuat ERROR HEADLING PADA ASYNC AWAIT, saat menggunakan ASYNC AWAIT tidak bisa menggunakan THEN
// karena hasil di code "await resultPromise()" di code bawah selalu menghasilkan resolve
// agar bisa menampilan error menggunakan TRY untuk Resolve dan Catch untuk Rejeck
function resultPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 3000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("OK");
      }, waktu);
    } else {
      reject("KESUWEN");
    }
  });
}

async function resultAsyn() {
  try {
    const coba = await resultPromise();
    console.log(coba);
  } catch (error) {
    console.error(error);
  }
}
resultAsyn();
