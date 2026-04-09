// --- LOGIKA APLIKASI ---

const readingOverlay = document.getElementById('readingRoom');

// Cek Sesi Pengguna saat Halaman Dimuat
window.onload = function() {
    const savedName = localStorage.getItem('mindLibrary_userName');
    if (savedName) {
        // Jika ada nama, langsung masuk ke perpustakaan
        tampilkanMainContent(savedName);
    }
    // Render buku tetap dijalankan
    renderBooks();
};

// 1. Fungsi Masuk (Tombol Buka Perpustakaan)
function masukPerpustakaan() {
    const nameInput = document.getElementById('userNameInput').value;
    
    if (nameInput.trim() !== "") {
        // Simpan ke memori browser
        localStorage.setItem('mindLibrary_userName', nameInput);
        tampilkanMainContent(nameInput);
    } else {
        alert("Silakan masukkan nama panggilanmu terlebih dahulu. 😊");
    }
}

// Fungsi Helper untuk Transisi Layar
function tampilkanMainContent(name) {
    const welcomeGate = document.getElementById('welcomeGate');
    const mainContent = document.getElementById('mainContent');
    const userDisplayName = document.getElementById('userDisplayName');

    if (userDisplayName) userDisplayName.innerText = name;

    // Animasi Keluar
    welcomeGate.style.opacity = "0";
    setTimeout(() => {
        welcomeGate.classList.add('hidden');
        mainContent.classList.remove('hidden');
        mainContent.classList.add('fade-in');
    }, 600);
}

// 2. Render Daftar Kartu Buku
function renderBooks() {
    const shelf = document.getElementById('bookShelf');
    if (!shelf) return;
    shelf.innerHTML = '';
    
    books.forEach((book, index) => {
        const card = document.createElement('div');
        card.className = 'book-card fade-in-up';
        card.style.animationDelay = `${index * 0.1}s`; // Sedikit lebih cepat
        card.innerHTML = `
            <div class="card-tag">${book.tag}</div>
            <h3>${book.title}</h3>
            <p>Oleh: ${book.author}</p>
            <div style="margin-top:20px; color:#81b29a; font-weight:bold;">Mulai Baca →</div>
        `;
        card.onclick = () => bukaBuku(index);
        shelf.appendChild(card);
    });
}

// 3. Buka Buku
function bukaBuku(index) {
    const book = books[index];
    
    document.getElementById('readTitle').innerText = book.title;
    document.getElementById('readAuthor').innerText = "Karya: " + book.author;
    document.getElementById('readBody').innerText = book.content; 
    
    document.getElementById('readingRoom').classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Kunci scroll layar utama
    
    readingOverlay.scrollTop = 0;
    document.getElementById('userFeedback').value = "";
    // Reset Progress Bar
    document.getElementById("myBar").style.width = "0%";
}

// 4. Tutup Buku
function tutupBuku() {
    document.getElementById('readingRoom').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// 5. Progress Bar Logic
readingOverlay.onscroll = function() {
    const winScroll = readingOverlay.scrollTop;
    const height = readingOverlay.scrollHeight - readingOverlay.clientHeight;
    if (height > 0) {
        const scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }
};

// 6. Fungsi Kirim Masukan
async function kirimMasukan() {
    const feedbackText = document.getElementById('userFeedback').value;
    const userName = localStorage.getItem('mindLibrary_userName') || "Anonim";
    const btn = document.querySelector('.btn-send');

    if (feedbackText.trim() === "") {
        alert("Isi pesanmu dulu ya, Kak. 😊");
        return;
    }

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwsnc4N0WIOS4rAzR-WTGxEwiXzZULLUqMu91AywemLLUyA3wJG4XTT8_AHZ8zg4NQ/exec";

    btn.innerText = "Mengirim...";
    btn.disabled = true;

    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nama: userName,
                pesan: feedbackText
            })
        });

        alert("Terima kasih! Kesanmu sangat berarti. ✨");
        document.getElementById('userFeedback').value = "";
    } catch (error) {
        alert("Maaf, ada kendala koneksi.");
    } finally {
        btn.innerText = "Kirim Kesan";
        btn.disabled = false;
    }
}
