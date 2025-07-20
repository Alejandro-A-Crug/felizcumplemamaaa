window.onload = function () {
const input = document.getElementById("answerbox");
const output = document.getElementById("question");
const submit = document.getElementById("button");

function typeWriterEffect(text, element, speed = 50) {
    element.textContent = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

let progressCount = parseInt(localStorage.getItem("progress")) || 0;
const progress = progressCount.toString();
localStorage.setItem("progress", progress);



if (progress === "0") {
    typeWriterEffect("¿Qué autora escribió el libro El Segundo Sexo?", output);
} else if (progress === "1"){
    typeWriterEffect("¿Cuantos pecados capitales existen según la biblia?", output);
} else if (progress === "2"){
    typeWriterEffect("¿Cual es el hueso más largo del cuerpo humano?", output);
}  else if (progress === "3"){
    typeWriterEffect("¿Cómo se escribe el símbolo químico del mercurio?", output);
} else if (progress === "4"){
    typeWriterEffect("¿Cuál es el nombre del río más largo del mundo?", output);
}  else if (progress === "5"){
    typeWriterEffect("¿Cuál es el cuadro mas famoso de Edvard Munch?", output);
}  else if (progress === "6"){
    typeWriterEffect("¿Cual es el nombre de la única opera compuesta por Ludwig Van Beethoven?", output);
}  else if (progress === "7"){
    typeWriterEffect("¿Quién fué el primer Emperador Romano?", output);
}  else if (progress === "8"){
    typeWriterEffect("¿Cual es el nombre sith del Conde Dooku?", output);
} else if (progress === "9"){
    typeWriterEffect("¿Quién escribió la odisea?", output);
} else if (progress === "10"){
    typeWriterEffect("¿Que villano de marvel responde a nombre de Max Dillon?", output);
} else if (progress === "11"){
    typeWriterEffect("¿Cuántas maravillas del mundo ANTIGUO hay?", output);
}
//estas son las que quedan
else if (progress === "12"){
    typeWriterEffect("¿Cuál fué la primera civilización?", output);
} else if (progress === "13"){
    typeWriterEffect("¿Cuántas notas hay en una escala musical?", output);
} else if (progress === "14"){
    typeWriterEffect("¿En que país se originó la civilización Azteca?", output);
} else if (progress === "15"){
    typeWriterEffect("¿Cuál es el nombre del Héroe griego que venció al terrible Minotauro?", output);
} else if (progress === "16"){
    typeWriterEffect("¿Cuál era la ciudad más cercana a la central nuclear de Chernóbil?", output);
} else if (progress === "17"){
    typeWriterEffect("¿Cuántos continentes hay en el mundo?", output);
} else if (progress === "18"){
    typeWriterEffect("¿Que significan las siglas ADN? (Buena suerte intentando escribirlo :P)", output);
} else if (progress === "19"){
    typeWriterEffect("¿Cuál fue el primer país en tener voto femenino en 1893?", output);
}  

submit.addEventListener("click", () => {

    
    const progress = localStorage.getItem("progress");
    const value = input.value.trim().toLowerCase();

if (Number(progress) === 0){
    if (value === "simone de beauvoir") {
        Swal.fire({
        title: "¡Correcto!",
        text: "Sigue a la siguiente respuesta",
        icon: "success"
        });
        input.value = "";
        progressCount++;
        localStorage.setItem("progress", progressCount);
        typeWriterEffect("¿Cuantos pecados capitales existen según la biblia?", output);
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    }
} else if (Number(progress) === 1){
    if (value === "siete" || value ==="7") {
        Swal.fire({
        title: "¡Correcto!",
        text: "Sigue a la siguiente respuesta",
        icon: "success"
        });
        input.value = "";
        progressCount++;
        localStorage.setItem("progress", progressCount);
        typeWriterEffect("¿Cual es el hueso más largo del cuerpo humano?", output);
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    }
}  else if (Number(progress) === 2){
    if (value === "fémur" || value ==="femur") {
        Swal.fire({
        title: "¡Correcto!",
        text: "Sigue a la siguiente respuesta",
        icon: "success"
        });
        input.value = "";
         progressCount++;
        localStorage.setItem("progress", progressCount);
        typeWriterEffect("¿Cómo se escribe el símbolo químico del mercurio?", output);
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    }
} else if (Number(progress) === 3){
    if (value === "hg") {
        Swal.fire({
        title: "¡Correcto!",
        text: "Sigue a la siguiente respuesta",
        icon: "success"
        });
        input.value = "";
        progressCount++;
        localStorage.setItem("progress", progressCount);
        typeWriterEffect("¿Cuál es el nombre del río más largo del mundo?", output);
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    }
} else if (Number(progress) === 4){
    if (value === "nilo" || value === "río nilo"|| value === "el río nilo"  ) {
        Swal.fire({
        title: "¡Correcto!",
        text: "Sigue a la siguiente respuesta",
        icon: "success"
        });
        input.value = "";
        progressCount++;
        localStorage.setItem("progress", progressCount);
        typeWriterEffect("¿Cuál es el cuadro mas famoso de Edvard Munch", output);
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    }
} else if (Number(progress) === 5){
    if (value === "el grito"  ) {
        Swal.fire({
        title: "¡Correcto!",
        text: "Sigue a la siguiente respuesta",
        icon: "success"
        });
        input.value = "";
        progressCount++;
        localStorage.setItem("progress", progressCount);
        typeWriterEffect("¿Cual es el nombre de la única opera compuesta por Ludwig Van Beethoven?", output);
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    }
}  else if (Number(progress) === 6){
    if (value === "fidelio" || value === "amor conyugal") {
        Swal.fire({
        title: "¡Correcto!",
        text: "Sigue a la siguiente respuesta",
        icon: "success"
        });
        input.value = "";
                progressCount++;
        localStorage.setItem("progress", progressCount);
        typeWriterEffect("¿Quién fué el primer Emperador Romano?", output);
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    }
} else if (Number(progress) === 7){
    if (value === "augusto" || value === "césar augusto" || value === "octavio") {
        Swal.fire({
        title: "¡Correcto!",
        text: "Sigue a la siguiente respuesta",
        icon: "success"
        });
        input.value = "";
                progressCount++;
        localStorage.setItem("progress", progressCount);
        typeWriterEffect("¿Cual es el nombre sith del Conde Dooku?", output);
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    }
} else if (Number(progress) === 8){
    if (value === "darth tyranus") {
        Swal.fire({
        title: "¡Correcto!",
        text: "Sigue a la siguiente respuesta",
        icon: "success"
        });
        input.value = "";
                progressCount++;
        localStorage.setItem("progress", progressCount);
        typeWriterEffect("¿Quién escribió La Odisea?", output);
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    }
} else if (Number(progress) === 9){
    if (value === "homero") {
        Swal.fire({
        title: "¡Correcto!",
        text: "Sigue a la siguiente respuesta",
        icon: "success"
        });
        input.value = "";
                progressCount++;
        localStorage.setItem("progress", progressCount);
        typeWriterEffect("¿Que villano de marvel responde a nombre de Max Dillon?", output);
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    }
} else if (Number(progress) === 10){
    if (value === "electro") {
        Swal.fire({
        title: "¡Correcto!",
        text: "Sigue a la siguiente respuesta",
        icon: "success"
        });
        input.value = "";
                progressCount++;
        localStorage.setItem("progress", progressCount);
        typeWriterEffect("¿Cuántas maravillas del mundo ANTIGUO hay?", output);
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    }
} else if (Number(progress) === 11){
    if (value === "siete" || value ==="7") {
        Swal.fire({
        title: "¡Correcto!",
        text: "Sigue a la siguiente respuesta",
        icon: "success"
        });
        input.value = "";
                progressCount++;
        localStorage.setItem("progress", progressCount);
        typeWriterEffect("¿Cuál fué la primera civilización?", output);
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    }
} else if (Number(progress) === 12){
    if (value === "sumeria" || value === "la civilización sumeria" || value === "la sumeria") {
        Swal.fire({
        title: "¡Correcto!",
        text: "Sigue a la siguiente respuesta",
        icon: "success"
        });
        input.value = "";
                progressCount++;
        localStorage.setItem("progress", progressCount);
        typeWriterEffect("¿Cuántas notas hay en una escala musical?", output);
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    }
} else if (Number(progress) === 13){
    if (value === "siete" || value ==="7") {
        Swal.fire({
        title: "¡Correcto!",
        text: "Sigue a la siguiente respuesta",
        icon: "success"
        });
        input.value = "";
                progressCount++;
        localStorage.setItem("progress", progressCount);
        typeWriterEffect("¿En que país se originó la civilización Azteca?", output);
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    }
} else if (Number(progress) === 14){
    if (value === "mexico" || value === "mejico" || value === "méjico") {
        Swal.fire({
        title: "¡Correcto!",
        text: "Sigue a la siguiente respuesta",
        icon: "success"
        });
        input.value = "";
                progressCount++;
        localStorage.setItem("progress", progressCount);
        typeWriterEffect("¿Cuál es el nombre del Héroe griego que venció al terrible Minotauro?", output);
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    }
} else if (Number(progress) === 15){
    if (value === "teseo") {
        Swal.fire({
        title: "¡Correcto!",
        text: "Sigue a la siguiente respuesta",
        icon: "success"
        });
        input.value = "";
                progressCount++;
        localStorage.setItem("progress", progressCount);
        typeWriterEffect("¿Cuál era la ciudad más cercana a la central nuclear de Chernóbil?", output);
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    }
} else if (Number(progress) === 16){
    if (value === "pripiat" || value === "pripyat") {
        Swal.fire({
        title: "¡Correcto!",
        text: "Sigue a la siguiente respuesta",
        icon: "success"
        });
        input.value = "";
                progressCount++;
        localStorage.setItem("progress", progressCount);
        typeWriterEffect("¿Cuántos continentes hay en el mundo?", output);
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    } 
    
}else if (Number(progress) === 17){
    if (value === "siete" || value ==="7") {
        Swal.fire({
        title: "¡Correcto!",
        text: "Sigue a la siguiente respuesta",
        icon: "success"
        });
        input.value = "";
                progressCount++;
        localStorage.setItem("progress", progressCount);
        typeWriterEffect("¿Que significan las siglas ADN? (Buena suerte intentando escribirlo :P)", output);
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    }
}else if (Number(progress) === 18){
    if (value === "ácido desoxirribonucleico"||value === "acido desoxirribonucleico") {
        Swal.fire({
        title: "¡Correcto!",
        text: "Sigue a la siguiente respuesta",
        icon: "success"
        });
        input.value = "";
                progressCount++;
        localStorage.setItem("progress", progressCount);
        typeWriterEffect("¿Cuál fue el primer país en tener voto femenino en 1893?", output);
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    }
}else if (Number(progress) === 19){
    if (value === "nueva zelanda") {
        Swal.fire({
        title: "¡Correcto!",
        text: "Has ganado, mas este es solo el principio >:P",
        icon: "success"
        });
        //enviar al fin del quiz
        // Crear cookie con expiración de 7 días
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 días
    document.cookie = "quiz=vencido; expires=" + fecha.toUTCString() + "; path=/";

        window.location.href = 'digits.html'
    } else {
        Swal.fire({
        title: "Ups...",
        text: "Vuelve a intentarlo",
        icon: "error"
        });
    }
}




})


}