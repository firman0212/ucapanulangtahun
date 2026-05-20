const NOMOR_WA_PEMBUAT = "6281383159694"; // GANTI NOMOR ANDA

function unlockExperience() {
    const name = document.getElementById('userName').value.trim();
    if (name === "") {
        showModal("Perhatian", "Mohon sebutkan nama Anda.");
        return;
    }
    document.getElementById('displayName').innerText = name;
    document.getElementById('gatekeeper').style.opacity = "0";
    setTimeout(() => {
        document.getElementById('gatekeeper').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
        createParticles();
    }, 1000);
}

function showModal(title, message) {
    const modal = document.getElementById('customAlert');
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('alertMessage').innerText = message;
    modal.classList.remove('hidden');
    setTimeout(() => modal.style.opacity = "1", 10);
}

function closeAlert() {
    const modal = document.getElementById('customAlert');
    modal.style.opacity = "0";
    setTimeout(() => modal.classList.add('hidden'), 300);
}

function sendToWhatsApp() {
    const name = document.getElementById('displayName').innerText;
    const msg = document.getElementById('replyMessage').value.trim();

    if (msg === "") {
        showModal("Pesan Kosong", "Silakan tuliskan isi hati Anda sebelum mengirim.");
        return;
    }

    const fullMessage = `Halo! Saya ${name}.\n\nBalasan saya:\n"${msg}"`;
    const encoded = encodeURIComponent(fullMessage);
    
    // Buka WhatsApp
    window.open(`https://wa.me/${NOMOR_WA_PEMBUAT}?text=${encoded}`, '_blank');
    
    // Tampilkan pesan terkirim
    setTimeout(() => {
        showModal("Berhasil", "Terima kasih! Pesan Anda telah diteruskan melalui WhatsApp.");
        document.getElementById('replyMessage').value = ""; // Kosongkan form
    }, 1000);
}

function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 3 + 1 + 'px';
        p.style.width = size; p.style.height = size;
        p.style.left = Math.random() * 100 + 'vw';
        p.style.animationDuration = (Math.random() * 5 + 7) + 's';
        container.appendChild(p);
    }
}
body{
    margin:0;
    padding:0;
    background:#0f0f0f;
    color:white;
    font-family:'Poppins', sans-serif;
}

.hero-center{
    text-align:center;
    padding:40px 20px;
}

.profile-photo{
    width:180px;
    height:180px;
    object-fit:cover;
    border-radius:50%;
    border:4px solid gold;
    box-shadow:0 0 30px rgba(255,215,0,0.4);
    margin-bottom:25px;
}

.title,
.main-name{
    font-family:'Cinzel', serif;
    color:gold;
}

.main-name{
    font-size:42px;
}

.heartfelt-message{
    max-width:700px;
    margin:auto;
    line-height:1.8;
    color:#f5f5f5;
}

.highlight{
    margin-top:20px;
    color:gold;
    font-style:italic;
}

.message-card{
    margin-top:30px;
}

textarea{
    width:100%;
    max-width:500px;
    height:120px;
    border:none;
    border-radius:15px;
    padding:15px;
    font-size:16px;
    outline:none;
}

.btn-wa{
    margin-top:15px;
    padding:14px 30px;
    border:none;
    border-radius:30px;
    background:gold;
    color:black;
    font-weight:bold;
    cursor:pointer;
}

.btn-round{
    border:none;
    width:50px;
    height:50px;
    border-radius:50%;
    background:gold;
    font-size:22px;
    cursor:pointer;
}

.input-group{
    display:flex;
    justify-content:center;
    gap:10px;
}

input{
    padding:14px;
    border-radius:30px;
    border:none;
    width:250px;
}

.app-footer{
    text-align:center;
    margin-top:50px;
    color:#aaa;
}
