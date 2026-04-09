// Database Buku Motivasi & Psikologi (10 Buku Lengkap)
const books = [
    {
        title: "Seni Beristirahat",
        author: "Ketenangan Jiwa",
        tag: "Psikologi",
        content: `Halo! Ambil napas dalam-dalam... hembuskan. 🌿\n\nDalam dunia yang menuntut kita untuk selalu cepat, beristirahat adalah tindakan keberanian. Psikologi modern menemukan bahwa otak kita justru paling kreatif saat kita 'tidak melakukan apa-apa'.\n\nJangan merasa bersalah jika hari ini kamu hanya ingin duduk diam. Tubuhmu bukan mesin, ia adalah taman yang butuh dirawat. Istirahat bukanlah hadiah bagi kesuksesan, melainkan bahan bakar untuk perjalananmu selanjutnya.`
    },
    {
        title: "Mencintai Retak di Diri",
        author: "Self-Love Guide",
        tag: "Motivasi",
        content: `Pernahkah kamu melihat seni Kintsugi dari Jepang? Mereka memperbaiki keramik pecah dengan emas, membuat retakannya justru menjadi bagian terindah.\n\nBegitupun jiwamu. Luka, kegagalan, dan rasa sedih di masa lalu adalah 'serbuk emas' yang membentuk siapa kamu hari ini.\n\nJangan sembunyikan kekuranganmu. Kekurangan itulah yang membuatmu manusiawi dan unik. Kamu tidak harus sempurna untuk dicintai.`
    },
    {
        title: "Filosofi Hari Ini",
        author: "Mindfulness Daily",
        tag: "Mindfulness",
        content: `Kekhawatiran adalah menggunakan imajinasimu untuk menciptakan hal yang tidak kamu inginkan.\n\nFokuslah pada apa yang ada di depan matamu sekarang. Sinar matahari di jendela, harum kopi, atau detak jantungmu sendiri.\n\nPsikologi mindfulness mengajarkan bahwa kecemasan berkurang saat kita berhenti hidup di masa depan yang belum tentu terjadi. Kamu aman di sini, di saat ini.`
    },
    {
        title: "Bangkit dari Kegagalan",
        author: "Resilience Master",
        tag: "Semangat",
        content: `Kegagalan hanyalah sebuah peristiwa, bukan identitasmu.\n\nBanyak orang berhenti saat mereka hampir mencapai garis finish hanya karena satu rintangan. Ingatlah, pemenang bukanlah orang yang tidak pernah gagal, tetapi orang yang tidak pernah berhenti setelah gagal.\n\nSetiap kali kamu jatuh, kamu belajar cara berdiri yang lebih kokoh. Jangan biarkan hari yang buruk membuatmu merasa memiliki hidup yang buruk.`
    },
    {
        title: "Kekuatan 'Belum'",
        author: "Growth Mindset",
        tag: "Psikologi",
        content: `Jika kamu merasa tidak bisa melakukan sesuatu, tambahkan kata "Belum" di akhir kalimatmu.\n\n"Aku tidak bisa coding" menjadi "Aku BELUM bisa coding". Kata kecil ini memberikan ruang bagi otakmu untuk berkembang. Bakat hanyalah titik awal, kerja keras dan konsistensi adalah kendaraan sesungguhnya.\n\nJangan bandingkan bab pertama hidupmu dengan bab kedua puluh orang lain. Fokuslah pada kemajuanmu sendiri.`
    },
    {
        title: "Disiplin vs Motivasi",
        author: "Coach Warrior",
        tag: "Motivasi",
        content: `Motivasi adalah apa yang membuatmu memulai. Disiplin adalah apa yang membuatmu terus berjalan.\n\nMotivasi itu seperti cuaca, bisa berubah kapan saja. Jika kamu hanya bekerja saat merasa termotivasi, kamu tidak akan pernah konsisten.\n\nBangunlah sistem, buatlah jadwal, dan tepati janjimu pada diri sendiri. Kesuksesan besar adalah tumpukan dari hal-hal kecil yang dilakukan secara disiplin setiap hari.`
    },
    {
        title: "Keberanian Menjadi Diri Sendiri",
        author: "Authentic Soul",
        tag: "Psikologi",
        content: `Terlalu banyak orang yang hidup dalam bayang-bayang ekspektasi orang lain.\n\nMenjadi dirimu sendiri adalah tugas terberat sekaligus paling memuaskan. Kamu tidak perlu menyenangkan semua orang. Satu-satunya orang yang harus bangga dengan pencapaianmu adalah dirimu sendiri di masa lalu.\n\nSuaramu berharga, impianmu valid. Berhentilah meminta maaf untuk hal-hal yang membuatmu bahagia.`
    },
    {
        title: "Menjemput Impian",
        author: "Dream Chaser",
        tag: "Semangat",
        content: `Impian yang besar seringkali menakutkan, dan itu wajar. Ketakutan adalah tanda bahwa impian itu layak diperjuangkan.\n\nJangan menunggu kondisi sempurna untuk memulai. Mulailah dengan apa yang kamu miliki, di mana pun kamu berada sekarang.\n\nLangkah kecil yang nyata jauh lebih baik daripada rencana besar yang tidak pernah dilakukan. Dunia menunggu karya hebatmu!`
    },
    {
        title: "Mental Baja",
        author: "Stoic Mind",
        tag: "Psikologi",
        content: `Kamu tidak bisa mengendalikan badai, tapi kamu bisa mengendalikan layarmu.\n\nPsikologi Stoik mengajarkan kita untuk memisahkan apa yang bisa kita kontrol dan apa yang tidak. Fokuslah 100% pada pikiran, tindakan, dan responsmu.\n\nBiarkan dunia berisik, biarkan orang lain menilai. Selama batinmu tenang dan kamu tahu jalan mana yang benar, kamu tidak akan pernah goyah.`
    },
    {
        title: "Energi Positif",
        author: "Vibe Creator",
        tag: "Semangat",
        content: `Apa yang kamu beri ke alam semesta, itu yang akan kembali padamu.\n\nTebarkan kebaikan, berikan senyuman, dan bantu orang lain tanpa pamrih. Energi positif adalah magnet bagi peluang-peluang baru.\n\nSaat kamu memilih untuk optimis, kamu sedang membuka pintu bagi keajaiban untuk masuk ke hidupmu. Hari ini adalah hari yang luar biasa untuk memulai hal baik!`
    }
];

// --- LOGIKA APLIKASI ---

const readingOverlay = document.getElementById('readingRoom');

// Saat halaman dimuat, pastikan semua bersih (Refresh = Reset)
window.onload = function() {
    document.getElementById('userNameInput').value = "";
    document.getElementById('welcomeGate').classList.remove('hidden');
    document.getElementById('mainContent').classList.add('hidden');
    renderBooks();
};

// 1. Fungsi Masuk
function masukPerpustakaan() {
    const nameInput = document.getElementById('userNameInput').value;
    const welcomeGate = document.getElementById('welcomeGate');
    const mainContent = document.getElementById('mainContent');
    const userDisplayName = document.getElementById('userDisplayName');

    if (nameInput.trim() !== "") {
        // Tampilkan nama di dashboard (Hanya sesi ini)
        if (userDisplayName) userDisplayName.innerText = nameInput;

        // Animasi transisi
        welcomeGate.style.opacity = "0";
        welcomeGate.style.transition = "0.6s ease";
        
        setTimeout(() => {
            welcomeGate.classList.add('hidden');
            mainContent.classList.remove('hidden');
            mainContent.classList.add('fade-in');
        }, 600);
    } else {
        alert("Silakan masukkan nama panggilanmu dulu ya, Sahabat. 😊");
    }
}

// 2. Render Kartu Buku
function renderBooks() {
    const shelf = document.getElementById('bookShelf');
    if (!shelf) return;
    shelf.innerHTML = '';
    
    books.forEach((book, index) => {
        const card = document.createElement('div');
        card.className = 'book-card fade-in-up';
        card.style.animationDelay = `${index * 0.1}s`;
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
    document.body.style.overflow = 'hidden'; 
    
    readingOverlay.scrollTop = 0;
    document.getElementById('userFeedback').value = "";
    document.getElementById("myBar").style.width = "0%";
}

// 4. Tutup Buku
function tutupBuku() {
    document.getElementById('readingRoom').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// 5. Progress Bar
readingOverlay.onscroll = function() {
    const winScroll = readingOverlay.scrollTop;
    const height = readingOverlay.scrollHeight - readingOverlay.clientHeight;
    if (height > 0) {
        const scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }
};

// 6. Fungsi Kirim Masukan (Refresh = Identitas hilang, jadi ambil dari UI)
async function kirimMasukan() {
    const feedbackText = document.getElementById('userFeedback').value;
    const userName = document.getElementById('userDisplayName').innerText || "Tamu";
    const btn = document.querySelector('.btn-send');

    if (feedbackText.trim() === "") {
        alert("Isi pesanmu dulu ya... 😊");
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

        alert("Terima kasih! Pesanmu sudah terkirim. ✨");
        document.getElementById('userFeedback').value = "";
    } catch (error) {
        alert("Ada kendala koneksi.");
    } finally {
        btn.innerText = "Kirim Kesan";
        btn.disabled = false;
    }
}
