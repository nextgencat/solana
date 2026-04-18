function scrollToProducts() {
    const element = document.getElementById("products");
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

function openTg() {
    window.open("https://t.me/get_solana", '_blank')
}

function openGitHub() {
    window.open("https://github.com/nextgencat/solana", '_blank')
}
