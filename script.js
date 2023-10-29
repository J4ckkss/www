
document.getElementById("nao").addEventListener("mouseenter", function() {
    this.textContent = "SIMMMMMMMMM";
    this.id = "sim";
    this.style.backgroundColor = "#FF6F61";
    this.style.borderColor = "#FF6F61";
    this.style.transform = "scale(1)";
});

document.getElementById("nao").addEventListener("mouseleave", function() {
    this.textContent = "Não";
    this.id = "nao";
    this.style.backgroundColor = "#000000";
    this.style.borderColor = "#000000";
    this.style.transform = "scale(1)";
});
