// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];



function agregarAmigo() {
    let ingresarNombre = document.getElementById('amigo').value;

    if (ingresarNombre === '') {
        alert('Debes ingresar un nombre');
    }
    else {
        listaDeAmigos.push(ingresarNombre);
        console.log(listaDeAmigos);
            document.querySelector('#amigo').value='';
        }
    }

agregarAmigo();

