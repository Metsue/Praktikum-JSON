document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById('produkSelect');
            
            data.forEach(produk => {
                const option = document.createElement('option');
                option.value = produk.nama;
                option.textContent = produk.nama;
                option.title = produk.nama; 
                select.appendChild(option);
            });
            

            select.addEventListener('change', function() {
                const detailDiv = document.getElementById('detailProduk');
                const selectedProduk = data.find(produk => produk.nama === this.value);

                if (this.value && selectedProduk) {
                    document.getElementById('nama').textContent = selectedProduk.nama;
                    document.getElementById('kategori').textContent = selectedProduk.kategori;
                    document.getElementById('tahun').textContent = selectedProduk.tahun;
                    document.getElementById('produsen').textContent = selectedProduk.produsen;
                    document.getElementById('harga').textContent = selectedProduk.harga;
                    document.getElementById('gambar').src = selectedProduk.gambar;
                    detailDiv.classList.remove('hidden');
                }
                
                 else {
                    detailDiv.classList.add('hidden');
                }
            });
        })
        .catch(error => console.error('Error loading data:', error));
});