// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
console.log("El script se ha cargado correctamente.");

let listaDeAmigos = [];




function agregarAmigo() {
    let ingresarNombre = document.getElementById('amigo').value;

    if (ingresarNombre === '') {
        alert('Debes ingresar un nombre');
    }
    else {
        listaDeAmigos.push(ingresarNombre);
            document.querySelector('#amigo').value='';
            mostrarAmigos();  
        }
}



function mostrarAmigos (){
    let mostrarLista = document.getElementById ('listaAmigos');
    mostrarLista.innerHTML = '';

    for (let i=0; i<listaDeAmigos.length; i++){
        mostrarLista.innerHTML += `<li>${listaDeAmigos[i]}</li>`;
    }

    let resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = `Total de amigos: ${listaDeAmigos.length}`;
}

function sortearAmigoSecreto(){
    console.log("El botón fue presionado.");
    if (listaDeAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear');
        return;
    }

   let amigoAleatorio = listaDeAmigos[Math.floor(Math.random()*listaDeAmigos.length)];
    alert(`Tu amigo secreto es: ${amigoAleatorio}`);
    document.getElementById('amigo').value='';
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}    



