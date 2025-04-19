fetch("data.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(products) {
    let placeholder = document.getElementById("daftar-laptop");
    let out = "";
    let totalHarga = 0;
    let totalStok = 0;
    let hargaTertinggi = 0;
    let hargaTerendah = 0;

    for (let product of products) {
      totalHarga += product.harga;
      totalStok += product.stok;

      if (product.harga > hargaTertinggi) {
        hargaTertinggi = product.harga;
      }

      if (product.harga < hargaTerendah || hargaTerendah === 0) {
        hargaTerendah = product.harga;
      }

      out += `
        <tr>
          <td>${product.nama}</td>
          <td>${product.merek}</td>
          <td>${product.prosesor}</td>
          <td>${product.ram}</td>
          <td>Rp${product.harga}</td>
          <td>${product.stok}</td>
          <td><img src='${product.gambar}' width="100"></td>
        </tr>
      `;
    }

    placeholder.innerHTML = out;

    const rataRata = (totalHarga / products.length).toFixed(2);

    let hasil = `<p>Rata-rata harga laptop: Rp${rataRata}</p>`;
    hasil += `<p>Total stok semua laptop: ${totalStok} unit</p>`;
    hasil += `<p>Harga tertinggi: Rp${hargaTertinggi}</p>`;
    hasil += `<p>Harga terendah: Rp${hargaTerendah}</p>`;

    document.getElementById("hasil-perhitungan").innerHTML = hasil;
  });