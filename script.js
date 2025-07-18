document.getElementById("career").addEventListener("change", updateAvatar);
document.getElementById("start-mission-btn").addEventListener("click", startMission);
document.getElementById("verify-answers-btn").addEventListener("click", checkAnswers);

function updateAvatar() {
    const career = document.getElementById("career").value;
    const avatarImage = document.getElementById("avatar-image");
    const avatarDescription = document.getElementById("avatar-description");
    const startMissionBtn = document.getElementById("start-mission-btn");
    const missionContainer = document.getElementById("mission-feedback");

    if (career === "") {
        avatarImage.style.display = "none";
        startMissionBtn.disabled = true;
        avatarDescription.textContent = "¡Selecciona una carrera para ver tu avatar!";
        missionContainer.innerHTML = "";
    } else {
        avatarImage.style.display = "block";
        startMissionBtn.disabled = false;
        switch (career) {
            case "ingeniera":
                avatarImage.src = "fisica-quimica.png";
                avatarDescription.textContent = "¡Tu avatar de Física - Química está listo!";
                break;
            case "arquitecta":
                avatarImage.src = "Biologia-Quimica.png";
                avatarDescription.textContent = "¡Tu avatar de Biología y Química está listo!";
                break;
            case "cientifica":
                avatarImage.src = "Antropologia-zoología.png";
                avatarDescription.textContent = "¡Tu avatar de Antropología y Zoología está listo!";
                break;
            case "tecnica":
                avatarImage.src = "Medicina-Astronautica.png";
                avatarDescription.textContent = "¡Tu avatar de Medicina y Astronáutica está listo!";
                break;
            case "matematica":
                avatarImage.src = "Matematicas-Computacion.png";
                avatarDescription.textContent = "¡Tu avatar de Matemáticas y Computación está listo!";
                break;
            default:
                avatarImage.src = "avatar.png";
                avatarDescription.textContent = "¡Tu avatar está listo!";
        }
    }
}

function startMission() {
    const career = document.getElementById("career").value;

    // Si seleccionan "Biología y Química" se abre el enlace de Rosalind Franklin
    if (career === "arquitecta") {
        window.open("https://es.educaplay.com/recursos-educativos/8780748-rosalin_franklin.html", "_blank");
    } 
    // Si seleccionan "Física y Química" se abre el enlace de Marie Curie
    else if (career === "ingeniera") {
        window.open("https://www.eslgamesplus.com/marie-curie-facts-science-game/", "_blank");
    } 
    else {
        // Si no se selecciona ninguna carrera válida
        alert("Por favor selecciona una carrera para comenzar la misión.");
    }
}
