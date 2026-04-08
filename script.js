// Database Buku Motivasi & Psikologi
const books = [
    {
        title: "Seni Beristirahat",
        author: "Ketenangan Jiwa",
        tag: "Psikologi",
        content: `Halo! Ambil napas dalam-dalam... hembuskan. 🌿

        Dalam dunia yang menuntut kita untuk selalu cepat, beristirahat adalah tindakan keberanian. Psikologi modern menemukan bahwa otak kita justru paling kreatif saat kita 'tidak melakukan apa-apa'.

        Jangan merasa bersalah jika hari ini kamu hanya ingin duduk diam. Tubuhmu bukan mesin, ia adalah taman yang butuh dirawat. Istirahat bukanlah hadiah bagi kesuksesan, melainkan bahan bakar untuk perjalananmu selanjutnya.`
    },
    {
        title: "Mencintai Retak di Diri",
        author: "Self-Love Guide",
        tag: "Motivasi",
        content: `Pernahkah kamu melihat seni Kintsugi dari Jepang? Mereka memperbaiki keramik pecah dengan emas, membuat retakannya justru menjadi bagian terindah.

        Begitupun jiwamu. Luka, kegagalan, dan rasa sedih di masa lalu adalah 'serbuk emas' yang membentuk siapa kamu hari ini. 
        
        Jangan sembunyikan kekuranganmu. Kekurangan itulah yang membuatmu manusiawi dan unik. Kamu tidak harus sempurna untuk dicintai.`
    },
    {
        title: "Filosofi Hari Ini",
        author: "Mindfulness Daily",
        tag: "Mindfulness",
        content: `Kekhawatiran adalah menggunakan imajinasimu untuk menciptakan hal yang tidak kamu inginkan.

        Fokuslah pada apa yang ada di depan matamu sekarang. Sinar matahari di jendela, harum kopi, atau detak jantungmu sendiri. 
        
        Psikologi mindfulness mengajarkan bahwa kecemasan berkurang saat kita berhenti hidup di masa depan yang belum tentu terjadi. Kamu aman di sini, di saat ini.`
    },
    {
        title: "Bangkit dari Kegagalan",
        author: "Resilience Master",
        tag: "Semangat",
        content: `Kegagalan hanyalah sebuah peristiwa, bukan identitasmu. 

        Banyak orang berhenti saat mereka hampir mencapai garis finish hanya karena satu rintangan. Ingatlah, pemenang bukanlah orang yang tidak pernah gagal, tetapi orang yang tidak pernah berhenti setelah gagal. 
        
        Setiap kali kamu jatuh, kamu belajar cara berdiri yang lebih kokoh. Jangan biarkan hari yang buruk membuatmu merasa memiliki hidup yang buruk.`
    },
    {
        title: "Kekuatan 'Belum'",
        author: "Growth Mindset",
        tag: "Psikologi",
        content: `Jika kamu merasa tidak bisa melakukan sesuatu, tambahkan kata "Belum" di akhir kalimatmu.

        "Aku tidak bisa coding" menjadi "Aku BELUM bisa coding". Kata kecil ini memberikan ruang bagi otakmu untuk berkembang. Bakat hanyalah titik awal, kerja keras dan konsistensi adalah kendaraan sesungguhnya. 
        
        Jangan bandingkan bab pertama hidupmu dengan bab kedua puluh orang lain. Fokuslah pada kemajuanmu sendiri.`
    },
    {
        title: "Disiplin vs Motivasi",
        author: "Coach Warrior",
        tag: "Motivasi",
        content: `Motivasi adalah apa yang membuatmu memulai. Disiplin adalah apa yang membuatmu terus berjalan.

        Motivasi itu seperti cuaca, bisa berubah kapan saja. Jika kamu hanya bekerja saat merasa termotivasi, kamu tidak akan pernah konsisten. 
        
        Bangunlah sistem, buatlah jadwal, dan tepati janjimu pada diri sendiri. Kesuksesan besar adalah tumpukan dari hal-hal kecil yang dilakukan secara disiplin setiap hari.`
    },
    {
        title: "Keberanian Menjadi Diri Sendiri",
        author: "Authentic Soul",
        tag: "Psikologi",
        content: `Terlalu banyak orang yang hidup dalam bayang-bayang ekspektasi orang lain. 

        Menjadi dirimu sendiri adalah tugas terberat sekaligus paling memuaskan. Kamu tidak perlu menyenangkan semua orang. Satu-satunya orang yang harus bangga dengan pencapaianmu adalah dirimu sendiri di masa lalu.
        
        Suaramu berharga, impianmu valid. Berhentilah meminta maaf untuk hal-hal yang membuatmu bahagia.`
    },
    {
        title: "Menjemput Impian",
        author: "Dream Chaser",
        tag: "Semangat",
        content: `Impian yang besar seringkali menakutkan, dan itu wajar. Ketakutan adalah tanda bahwa impian itu layak diperjuangkan.

        Jangan menunggu kondisi sempurna untuk memulai. Mulailah dengan apa yang kamu miliki, di mana pun kamu berada sekarang. 
        
        Langkah kecil yang nyata jauh lebih baik daripada rencana besar yang tidak pernah dilakukan. Dunia menunggu karya hebatmu!`
    },
    {
        title: "Mental Baja",
        author: "Stoic Mind",
        tag: "Psikologi",
        content: `Kamu tidak bisa mengendalikan badai, tapi kamu bisa mengendalikan layarmu.

        Psikologi Stoik mengajarkan kita untuk memisahkan apa yang bisa kita kontrol dan apa yang tidak. Fokuslah 100% pada pikiran, tindakan, dan responsmu. 
        
        Biarkan dunia berisik, biarkan orang lain menilai. Selama batinmu tenang dan kamu tahu jalan mana yang benar, kamu tidak akan pernah goyah.`
    },
    {
        title: "Energi Positif",
        author: "Vibe Creator",
        tag: "Semangat",
        content: `Apa yang kamu beri ke alam semesta, itu yang akan kembali padamu.

        Tebarkan kebaikan, berikan senyuman, dan bantu orang lain tanpa pamrih. Energi positif adalah magnet bagi peluang-peluang baru. 
        
        Saat kamu memilih untuk optimis, kamu sedang membuka pintu bagi keajaiban untuk masuk ke hidupmu. Hari ini adalah hari yang luar biasa untuk memulai hal baik!`
    }
];

// --- LOGIKA APLIKASI ---

const readingOverlay = document.getElementById('readingRoom');

// 1. Fungsi Masuk (Tombol Buka Perpustakaan)
function masukPerpustakaan() {
    const nameInput = document.getElementById('userNameInput');
    const name = nameInput.value;

    if (name.trim() === "") {
        alert("Boleh tahu nama panggilannya dulu, Kak? 😊");
        return;
    }

    document.getElementById('userDisplayName').innerText = name;
    document.getElementById('welcomeGate').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');

    renderBooks();
}

// 2. Render Daftar Kartu Buku
function renderBooks() {
    const shelf = document.getElementById('bookShelf');
    shelf.innerHTML = '';
    
    books.forEach((book, index) => {
        const card = document.createElement('div');
        card.className = 'book-card fade-in-up';
        card.style.animationDelay = `${index * 0.15}s`;
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
    
    // Scroll overlay ke atas & Reset feedback
    readingOverlay.scrollTop = 0;
    document.getElementById('userFeedback').value = "";
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

// 6. Fungsi Kirim Masukan ke Google Sheets
async function kirimMasukan() {
    const feedbackText = document.getElementById('userFeedback').value;
    const userName = document.getElementById('userDisplayName').innerText;
    const btn = document.querySelector('.btn-send');

    if (feedbackText.trim() === "") {
        alert("Isi pesanmu dulu ya, Kak. 😊");
        return;
    }

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwsnc4N0WIOS4rAzR-WTGxEwiXzZULLUqMu91AywemLLUyA3wJG4XTT8_AHZ8zg4NQ/exec";

    btn.innerText = "Mengirim...";
    btn.disabled = true;

    try {
        // Gunakan mode no-cors jika mengalami kendala CORS, 
        // tapi JSON.stringify biasanya butuh penanganan khusus di Apps Script
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Menghindari error CORS di beberapa browser
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nama: userName,
                pesan: feedbackText
            })
        });

        alert("Terima kasih! Pesanmu sudah dikirim ke Google Sheets. ✨");
        document.getElementById('userFeedback').value = "";
    } catch (error) {
        console.error('Error!', error.message);
        alert("Maaf, ada kendala koneksi.");
    } finally {
        btn.innerText = "Kirim Kesan";
        btn.disabled = false;
    }
}