document.addEventListener("DOMContentLoaded", function () {
    const btnEncriptar = document.getElementById("btnEncriptar");
    const btnDesencriptar = document.getElementById("btnDesencriptar");
    const btnCopiar = document.getElementById("btnCopiar");
    const textoEntrada = document.getElementById("textoentrada");
    const textoSalida = document.getElementById("textoSalida");
    const imagenIlustracion = document.querySelector(".desencriptado__ilustracion");

    const validarTexto = (texto) => {
        const regex = /^[a-z\s]+$/; // solo letras minúsculas y espacios
        return regex.test(texto);
    };

    const encriptarTexto = (texto) => {
        let textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        return textoEncriptado;
    };

    const desencriptarTexto = (texto) => {
        let textoDesencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return textoDesencriptado;
    };

    btnEncriptar.addEventListener("click", function (event) {
        event.preventDefault();
        const texto = textoEntrada.value;

        if (!validarTexto(texto)) {
            alert("El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.");
            return;
        }

        const textoEncriptado = encriptarTexto(texto);
        textoSalida.textContent = textoEncriptado;
        btnCopiar.hidden = false;
        imagenIlustracion.hidden = true;
    });

    btnDesencriptar.addEventListener("click", function (event) {
        event.preventDefault();
        const texto = textoEntrada.value;

        if (!validarTexto(texto)) {
            alert("El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.");
            return;
        }

        const textoDesencriptado = desencriptarTexto(texto);
        textoSalida.textContent = textoDesencriptado;
        btnCopiar.hidden = false;
        imagenIlustracion.hidden = true;
    });

    btnCopiar.addEventListener("click", function (event) {
        event.preventDefault();
        const texto = textoSalida.textContent;

        if (texto !== "Ingresa el texto que desees encriptar o desencriptar.") {
            navigator.clipboard.writeText(texto).then(() => {
                alert("Texto copiado al portapapeles.");
                textoEntrada.value = "";
                textoSalida.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
                btnCopiar.hidden = true;
                imagenIlustracion.hidden = false;
            }).catch(err => {
                alert("Hubo un error al copiar el texto: " + err);
            });
        } else {
            alert("No hay texto para copiar.");
        }
    });
});
