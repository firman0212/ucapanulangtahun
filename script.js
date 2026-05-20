const NOMOR_WA_PEMBUAT = "6281383159694";

function unlockExperience() {

    const name = document.getElementById('userName').value.trim();

    if (name === "") {
        showModal(
            "Perhatian",
            "Mohon masukkan nama terlebih dahulu."
        );
        return;
    }

    document.getElementById('displayName').innerText = name;

    const gate = document.getElementById('gatekeeper');

    gate.style.opacity = "0";

    setTimeout(() => {

        gate.classList.add('hidden');

        document.getElementById('mainContent')
            .classList.remove('hidden');

        createParticles();

    }, 1000);
}

function showModal(title, message) {

    const modal = document.getElementById('customAlert');

    document.getElementById('modalTitle').innerText = title;

    document.getElementById('alertMessage').innerText = message;

    modal.classList.remove('hidden');

    setTimeout(() => {
        modal.style.opacity = "1";
    }, 10);
}

function closeAlert() {

    const modal = document.getElementById('customAlert');

    modal.style.opacity = "0";

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function sendToWhatsApp() {

    const name =
        document.getElementById('displayName').innerText;

    const msg =
        document.getElementById('replyMessage')
        .value
        .trim();

    if (msg === "") {

        showModal(
            "Pesan Kosong",
            "Tulis pesan terlebih dahulu."
        );

        return;
    }

    const fullMessage =
`Halo bro 👋

Saya ${name}

Pesan:
${msg}`;

    const encoded =
        encodeURIComponent(fullMessage);

    window.open(
`https://wa.me/${NOMOR_WA_PEMBUAT}?text=${encoded}`,
'_blank'
    );

    setTimeout(() => {

        showModal(
            "Berhasil",
            "Pesan berhasil dikirim ke WhatsApp 🎉"
        );

        document.getElementById('replyMessage')
            .value = "";

    }, 1000);
}

function createParticles() {

    const container =
        document.getElementById('particles');

    container.innerHTML = "";

    for (let i = 0; i < 40; i++) {

        const p = document.createElement('div');

        p.className = 'particle';

        const size =
            Math.random() * 4 + 2;

        p.style.width = size + 'px';

        p.style.height = size + 'px';

        p.style.left =
            Math.random() * 100 + 'vw';

        p.style.animationDuration =
            (Math.random() * 5 + 5) + 's';

        p.style.animationDelay =
            Math.random() * 5 + 's';

        container.appendChild(p);
    }
}
