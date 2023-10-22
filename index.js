function Mostrarformularioregistro() {
    var formulario = document.getElementById("formulario");
    formulario.style.display = "block";
}

function Verificarturno(){ 
    
    document.getElementById("dniform").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var dniinput = document.getElementById("dniinput").value;
    var turnosRegistrados = JSON.parse(sessionStorage.getItem("turnosRegistrados")) || [];
    var encontrado_reg = false;
    

    for (var i = 0; i < turnosRegistrados.length; i++) {
        if (turnosRegistrados[i].dni === dniinput) {
            encontrado_reg = true;
            break;
        }
    }

    fetch("datos_turnos.json")
        .then(response => response.json())
        .then(data =>{
            var encontrado = data.some(turno => turno.dni === dniinput);
         
        if (encontrado || encontrado_reg) {
            Swal.fire(
                'Usted ya tiene turno',
                '',
                'success'
              )
              
            document.getElementById("dniinput").value = "";
        } 
        else {
            Swal.fire(
                'No tiene turno',
                'por favor registrese para obtener su turno',
                'error'
              )
            Mostrarformularioregistro();
            document.getElementById("dniinput").value = "";
        }
        })
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

    Swal.fire(
        'Registro exitoso',
        'Ya tiene turno programado',
        'success'
      )
    var formulario = document.getElementById("formulario");
    formulario.style.display = "none";

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("dni").value = "";
});
}

Verificarturno()
Registroturno()
