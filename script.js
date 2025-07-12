// script.js

document.getElementById("career").addEventListener("change", updateAvatar);
document.getElementById("start-mission-btn").addEventListener("click", startMission);

function updateAvatar() {
    const career = document.getElementById("career").value;
    const avatarImage = document.getElementById("avatar-image");
    const avatarDescription = document.getElementById("avatar-description");
    const startMissionBtn = document.getElementById("start-mission-btn");

    if (career === "") {
        avatarImage.style.display = "none"; // No mostrar avatar si no se selecciona una carrera
        startMissionBtn.disabled = true;  // Deshabilitar el botón hasta que se seleccione una carrera
        avatarDescription.textContent = "¡Selecciona una carrera para ver tu avatar!";
    } else {
        avatarImage.style.display = "block"; // Mostrar avatar cuando se elige una carrera
        startMissionBtn.disabled = false;   // Habilitar el botón de misión
        switch (career) {
            case "ingeniera":
                avatarImage.src = "fisica-quimica.png";  // Ruta de la imagen del avatar de ingeniera
                avatarDescription.textContent = "¡Tu avatar de Física - Química está listo!";
                break;
            case "arquitecta":
                avatarImage.src = "Biologia-Quimica.png";  // Imagen de arquitecta
                avatarDescription.textContent = "¡Tu avatar de Biología y Química está listo!";
                break;
            case "cientifica":
                avatarImage.src = "Antropologia-zoología.png";  // Imagen de científica
                avatarDescription.textContent = "¡Tu avatar de Científica está listo!";
                break;
            case "tecnica":
                avatarImage.src = "Medicina-Astronautica.png";  // Imagen de técnica
                avatarDescription.textContent = "¡Tu avatar de Técnica está listo!";
                break;
            case "matematica":
                avatarImage.src = "Matematicas-Computacion.png";  // Imagen de matemática
                avatarDescription.textContent = "¡Tu avatar de Matemática está listo!";
                break;
            default:
                avatarImage.src = "avatar.png";  // Imagen por defecto
                avatarDescription.textContent = "¡Tu avatar está listo!";
        }
    }
}

function startMission() {
    const missionText = "Calcula la cantidad de materiales necesarios para construir una estructura.";
    document.getElementById("mission-feedback").innerText = missionText;

    // Feedback después de completar la misión
    setTimeout(() => {
        document.getElementById("mission-feedback").innerText = "¡Misión completada! Has aprendido sobre cálculo de materiales. ¡Siguiente misión!";
    }, 3000);  // 3 segundos para completar la misión
}
