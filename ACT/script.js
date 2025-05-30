// script.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("btn-toggle");
    const datosAcademicos = document.querySelector(".educacion");

    toggleButton.addEventListener("click", () => {
        if (datosAcademicos.style.display === "none") {
            datosAcademicos.style.display = "block";
        } else {
            datosAcademicos.style.display = "none";
        }
    });
});
