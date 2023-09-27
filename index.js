
let nombres=[];
let apellidos=[];
let nombre=0;
let apellido=0;

function Crearpersona (nombre,apellido){
    this.nombre=nombre;
    this.apellido=apellido;
    this.agregarlista=function(){
            nombres.push(nombre);
            apellidos.push(apellido);
    }    
       
}


function Centraldeturnos(){

    let paciente=0;
    let contador=0;
    let contadorpaciente=0;
    while (contador<10){
        
        paciente=parseInt(prompt("si tiene turno ingrese 1,si no tiene ingrese 0 para registrarse,si desea salir ingrese otro valor"));
        console.log(paciente);   
        if (paciente==1){
            let buscador=prompt("ingrese su apellido").toUpperCase();
                if(apellidos.includes(buscador)){
                    contador=contador+1;
                    contadorpaciente=contador;   
                    console.log(contador);
                    alert ("usted es el paciente numero "+contadorpaciente+",la espera es de "+contador*15+" minutos" );
                }
                else{
                    alert("Porfavor registrese para sacar su turno");
                }
             
            
        }
           
        
        else if (paciente==0){
            nombre=prompt("Ingrese su nombre para registrarse").toUpperCase();
            apellido=prompt("Ingrese su apellido para registrarse").toUpperCase();        
            const persona=new Crearpersona(nombre,apellido);
            persona.agregarlista()
            contador=contador+1;
            contadorpaciente=contador;  
            alert ("usted es el paciente numero "+contadorpaciente+",la espera es de "+contador*15+" minutos" ); 
                     


        }
        else if (paciente!=1 && paciente!=0){
            contador=11
        }
        
        
    }
}




Centraldeturnos()



