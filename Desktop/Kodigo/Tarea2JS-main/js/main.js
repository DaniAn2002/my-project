//VARIABLES GLOBALES
const stringreset = null;

//EJERCICIO 1
const edad = () => {
    document.getElementById("respuesta").innerHTML = stringreset;
    //let num = 0;
    //let num = prompt("Introduzca la edad a consultar: ");
    let num = document.getElementById('num').valueGIT;
    console.log(num);
    const respuesta = num <18 ? "Esta persona es menor de edad" : "Esta persona es mayor de edad.";
    console.log(respuesta);
    document.getElementById("respuesta").innerHTML = respuesta;
  };

//EJERCICIO 2
  const notaFinal = () => {
    document.getElementById("respuesta2").innerHTML = stringreset;
    let nombre = document.getElementById('nombre').value;
    console.log(nombre);
    let carnet = document.getElementById('carnet').value;
    console.log(carnet);
    let examen = parseInt(document.getElementById('examen').value,10);
    console.log(examen);
    examen = examen*0.2
    let tareas = parseInt(document.getElementById('tareas').value,10);
    console.log(tareas);
    tareas = tareas*0.4
    let asistencia = parseInt(document.getElementById('asistencia').value,10);
    console.log(asistencia);
    asistencia = asistencia*0.1
    let investigacion = parseInt(document.getElementById('investigacion').value,10);
    console.log(investigacion);
    investigacion = investigacion*0.3
    let suma = examen+tareas+asistencia+investigacion;
    console.log(suma);
    suma = suma.toFixed(1);
    respuesta2 = 'Nombre : '+nombre+"<br>"+'Carnet: '+carnet+"<br>"+'Nota Final: '+suma;
    console.log(respuesta2);
    document.getElementById("respuesta2").innerHTML = respuesta2;
  };

//EJERCICIO 3
  const aumentoSalarial = () => {
    document.getElementById("respuesta3").innerHTML = stringreset;
    let nombre = document.getElementById('nombre3').value;
    console.log(nombre);
    let salario = parseFloat(document.getElementById('salario').value,10);
    console.log(salario);
    let categoria = document.getElementById('categoria').value;
    console.log(categoria);
    let aumento = 0;
    switch(categoria) {
      case "A":
        aumento = salario*1.15;
        break;
      case "B":
        aumento = salario*1.3;
        break;
      case "C":
        aumento = salario*1.1;
        break;
      case "D":
        aumento = salario*1.2;
        break;
      default:
        console.log("Opcion no reconocida")
        document.getElementById("respuesta3").innerHTML = "Opcion no reconocida";
    }
    aumento = aumento.toFixed(2);
    document.getElementById("respuesta3").innerHTML = "Nombre del empleado: "+nombre+"<br>"+"Salario actual: "+salario+"<br>"+"Categoria: "+categoria+"<br>"+"Salario mas aumento: "+aumento;
  };

//EJERCICIO 4

  const comparador = () => {
    document.getElementById("respuesta4").innerHTML = stringreset;
    let numero1 = parseInt(document.getElementById('numero1').value,10);
    console.log(numero1);
    let numero2 = parseInt(document.getElementById('numero2').value,10);
    console.log(numero2);
    const calculo = numero1 > numero2 ? numero1 : numero2;
    respuesta4 = `El numero mayor es: ${calculo}`
    document.getElementById("respuesta4").innerHTML = respuesta4;
  };

//EJERCICIOS 5 Y 6

  document.addEventListener('input', function (event){
    if (event.target.id == 'modelo'){
      let modelo = document.getElementById('modelo').value;
      let descuento = "0%";
      console.log(modelo);
    switch(event.target.value) {
      case "Ford Fiesta":
        document.getElementById("thumbnail").src = "https://res.cloudinary.com/dgxmqoyv4/image/upload/v1699807653/1366_2000_mv6ubd.jpg";
        descuento = "5%";
        break;
      case "Ford Focus":
        document.getElementById("thumbnail").src = "https://res.cloudinary.com/dgxmqoyv4/image/upload/v1699807653/af32f338-114a-3c6b-b2c0-f32bf580f0ab_edrezt.jpg";
        descuento = "10%";
        break;
      case "Ford Escape":
        document.getElementById("thumbnail").src = "https://res.cloudinary.com/dgxmqoyv4/image/upload/v1699807653/ba5049252b394b7f051c34630a396f35_yjrkmy.jpg";
        descuento = "20%";
        break;
      default:
        console.log("Opcion no reconocida");
        document.getElementById("thumbnail").src = "https://res.cloudinary.com/dgxmqoyv4/image/upload/v1699807714/8000f409169eafcd39059d9dcbbc8800_xva9qg.png";
    }
    document.getElementById("descuento").innerHTML = descuento;
    }
    else if (event.target.id == 'destino'){
      let destino = document.getElementById('destino').value;
      let descuento = "0%";
      console.log(destino);
      switch(event.target.value) {
        case "Costa del Sol":
          document.getElementById("thumbnail").src = "https://res.cloudinary.com/dgxmqoyv4/image/upload/v1699820724/costa-del-sol-5-1_cgkovo.jpg";
          descuento = "5%";
          break;
        case "Panchimalco":
          document.getElementById("thumbnail").src = "https://res.cloudinary.com/dgxmqoyv4/image/upload/v1699820724/fnac09052022wupancho367.jpg_1102185208_iaraxv.webp";
          descuento = "10%";
          break;
        case "Puerto El Triunfo":
          document.getElementById("thumbnail").src = "https://res.cloudinary.com/dgxmqoyv4/image/upload/v1699820724/DJI_0391-1-1170x780_td59fy.jpg";
          descuento = "15%";
          break;
        default:
          console.log("Opcion no reconocida");
          document.getElementById("thumbnail").src = "https://res.cloudinary.com/dgxmqoyv4/image/upload/v1699820941/16-1-2-580x386_s0cwxl.png";
      }
      document.getElementById("descuento").innerHTML = descuento;
    }
    
  }, false);
  
//EJERCICIO 7

const arregloNumeros = () => {
  const numeros = [10];
  
}

