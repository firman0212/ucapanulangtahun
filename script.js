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