function toggleDefinition(id) {
    var palabra = document.getElementById(id);
    if (palabra.style.display === "none") {
        palabra.style.display = "block";
    } else {
        palabra.style.display = "none";
    }
}