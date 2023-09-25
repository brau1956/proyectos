// const z = document.getElementById('chorro');

const input = document.getElementById('chorro');
const addBtn = document.getElementById('si6');
const ul = document.querySelector('ul');
const olo = document.querySelector('olo');



function addDeleteBtn() {
    const borrar = document.createElement('button');
    borrar.textContent = "x";
    borrar.className = "btn-delete";
    borrar.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
    });
    return borrar;r
}



function agregar() {

    if ((input.value).trim() == "") {

        alert("no acepto vacios");
        return;
    }

    const teo = input.value;
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = teo;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);
    


    const tarea = {
        li: input.value
    }

    /*

    for(let i = 0; i< array.length; i++){

        array[i] = json;
     // ->  li : "texto";
   var li =  document.documentCreatElement(array[i]);
    //li : -> "texto";
    li.innerHTML =  array[i];
    -> button : "x";
       var btn = document.documentCreatElement(array[i]);
       // button : -> "x";
        btn.value = array[i];

        //asigna eventos
        btn.addEventeListener("click", () => {
            //eliminar
        })


    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    //identificar a'ul' por si no lo encuentra
    ul.appendChild(li);
    }

    */

    if (localStorage.getItem("tareas") === null) {
        let areglo = [];
        areglo.push(tarea);
        localStorage.setItem("tareas", JSON.stringify(areglo));
    } else {
        let obtener = JSON.parse(localStorage.getItem("tareas"));
        obtener.push(tarea);
        localStorage.setItem("tareas", JSON.stringify(obtener));
    }

input.value = "";
}


// Mostrar a partir de localstorage
function mostrar() {
var tener= localStorage.getItem("tareas");
if(localStorage.getItem("tareas")){
    
    
}else{

}
console.log(tener)

}
mostrar()
// Eliminar de localstorage
