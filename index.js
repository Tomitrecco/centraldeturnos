function Mostrarformularioregistro() {
    var formulario = document.getElementById("formulario");
    formulario.style.display = "block";
}

function Verificarturno(){ 
    
    document.getElementById("dniform").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var dniinput = document.getElementById("dniinput").value;
    var turnosRegistrados = JSON.parse(sessionStorage.getItem("turnosRegistrados")) || [];
    var encontrado = false;

    for (var i = 0; i < turnosRegistrados.length; i++) {
        if (turnosRegistrados[i].dni === dniinput) {
            encontrado = true;
            break;
        }
    }

    var mensaje = document.getElementById("mensaje");
    if (encontrado) {
        mensaje.textContent = "Tiene un turno programado.";
        document.getElementById("dniinput").value = "";
    } else {
        mensaje.textContent = "No tiene un turno programado.";
        Mostrarformularioregistro();
        document.getElementById("dniinput").value = "";
    }
});

    
}



function Registroturno(){
    document.getElementById("registroformulario").addEventListener("submit", function(event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dni = document.getElementById("dni").value;

    var turno = {
        nombre: nombre,
        apellido: apellido,
        dni: dni
    };

    var turnosRegistrados = JSON.parse(sessionStorage.getItem("turnosRegistrados")) || [];
    turnosRegistrados.push(turno);

    sessionStorage.setItem("turnosRegistrados", JSON.stringify(turnosRegistrados));

    var mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Registro exitoso. Tiene un turno programado.";

    var formulario = document.getElementById("formulario");
    formulario.style.display = "none";

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("dni").value = "";
});
}

Verificarturno()
Registroturno()