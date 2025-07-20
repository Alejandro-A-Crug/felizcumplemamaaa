window.onload = function () {

    const name = document.getElementById("name");
    const task = document.getElementById("task");

        function getCookie(username){
            const cookies = document.cookie.split("; ");
             for (let c of cookies) {
            const [key, value] = c.split("=");
            if (key === username) return decodeURIComponent(value);
        }
        return null;
        }

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
    const usuario = getCookie("usernameMJ");

    if (usuario) {
      // Verificamos si el nombre contiene "maría josé" (sin importar mayúsculas)
      if (usuario.toLowerCase().includes("anabel")) {
        typeWriterEffect("Hola Madrina, tienes el segundo dígito del candado con el regalo de mi madre", name);
        typeWriterEffect("Si Mamá te pregunta, pregúntale cuántos puntos cardinales hay", task);
      } else if (usuario.toLowerCase().includes("arturo")) {
        typeWriterEffect("Hola Padrino, tienes el tercer dígito del candado con el regalo de mi madre", name);
        typeWriterEffect("Si Mamá te pregunta, pregúntale cuántas dimensiones tiene un plano", task);
      } else if (usuario.toLowerCase().includes("rocío")) {
        typeWriterEffect("Hola Ro, tienes el cuarto dígito del candado con el regalo de mi madre", name);
        typeWriterEffect("Si Mamá te pregunta, pregúntale cuántos dedos tiene un pie", task);
      } else if (usuario.toLowerCase().includes("andrea")) {
                typeWriterEffect("Hola Pichón, no estás entre los elegidos para esto porque es entre familia", name);
        typeWriterEffect("me apetece una comida a besos ¿Que tal después?", task);
      }
    } 



}