function batasiNisn(input) {
    input.value = input.value.slice(0, 10);
}

function batasiHp(input) {
    input.value = input.value.replace(/\D/g, '').slice(0, 13);
}

function SIMPANWOII(event) {
    event.preventDefault();
    const value = id => document.getElementById(id).value;

    const data = {
        nisn: value('nisn'),
        nama: value('nama'),
        tempatLahir: value('tempat_lahir'),
        tanggalLahir: value('tanggal_lahir'),
        gender: document.querySelector('input[name="gender"]:checked').value,
        berat: value('berat'),
        tinggi: value('tinggi'),
        agama: value('agama'),
        jurusan: value('jurusan'),
        noHp: value('no_hp'),
        alamat: value('alamat'),
        email: value('email'),
        password: '•'.repeat(value('password').length),
        hobi: [...document.querySelectorAll('input[name="hobi"]:checked')]
            .map(({ value }) => value).join(', ') || 'Tidak ada'
    };

    const fotoFile = document.getElementById('foto').files[0];
    if (!fotoFile) return tampilkanHasil(data, '');

    const reader = new FileReader();
    reader.onload = () => tampilkanHasil(data, reader.result);
    reader.readAsDataURL(fotoFile);
}

function tampilkanHasil(data, fotoSrc) {
    const rows = [
        ['Foto', fotoSrc ? `<img src="${fotoSrc}" style="width:80px;height:100px;object-fit:cover;border-radius:4px">` : 'Tidak ada foto'],
        ['NISN', data.nisn], ['Nama', data.nama],
        ['Tempat, Tanggal Lahir', `${data.tempatLahir}, ${data.tanggalLahir}`],
        ['Jenis Kelamin', data.gender],
        ['Berat Badan', data.berat ? `${data.berat} kg` : '-'],
        ['Tinggi Badan', data.tinggi ? `${data.tinggi} cm` : '-'],
        ['Agama', data.agama], ['Jurusan', data.jurusan], ['No. HP', data.noHp],
        ['Alamat', data.alamat], ['Hobi', data.hobi], ['Email', data.email],
        ['Password', data.password]
    ];

    document.querySelector('.form-container').innerHTML = `
        <h2>Data Berhasil Disimpan</h2>
        <table class="result-table">${rows.map(([label, value]) => `<tr><th>${label}</th><td>${value}</td></tr>`).join('')}</table>
        <button onclick="location.reload()" class="btn-submit">Kembali ke Form</button>`;
}