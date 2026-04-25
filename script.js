const books = [
{
title: "Seni Beristirahat",
author: "Ketenangan Jiwa",
content: "Istirahat bukan kemunduran, tapi pemulihan."
},
{
title: "Mencintai Retak di Diri",
author: "Self Love",
content: "Luka adalah bagian dari keindahanmu."
},
{
title: "The Alchemist",
author: "Paulo Coelho",
content: "Ketika kamu menginginkan sesuatu, semesta akan membantu."
}
];

function renderBooks(){
const shelf = document.getElementById("bookShelf");
shelf.innerHTML = "";

books.forEach((b,i)=>{
const card = document.createElement("div");
card.className = "card";
card.innerHTML = `<h3>${b.title}</h3><p>${b.author}</p>`;
card.onclick = ()=>openBook(i);
shelf.appendChild(card);
});
}

function masukPerpustakaan(){
const name = document.getElementById("userNameInput").value;
if(!name) return;

document.getElementById("userDisplayName").innerText = name;
document.getElementById("welcomeGate").classList.add("hidden");
document.getElementById("mainContent").classList.remove("hidden");

renderBooks();
}

function openBook(i){
const b = books[i];

document.getElementById("readTitle").innerText = b.title;
document.getElementById("readAuthor").innerText = b.author;
document.getElementById("readBody").innerText = b.content;

document.getElementById("readingRoom").classList.remove("hidden");
}

function tutupBuku(){
document.getElementById("readingRoom").classList.add("hidden");
}

function kirimMasukan(){
alert("Terkirim ✨");
}
