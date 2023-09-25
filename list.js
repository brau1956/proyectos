// function popo(){
// //var lista= document.getElementById("lista");
// //lista.innerHTML +='<p>hola</p>'
// var x=document.createElement("td");
// x.getElementsByid("datos").appendChild(x);

// }

const input = document.getElementById('chorro');
const addBtn = document.getElementById('si');
const ul = document.querySelector('ul');
// const olo = document.querySelector('olo');
addBtn.addEventListener('click', (e) => {
    // console.log(1);
    // console.log(input);
    // if ((input.value).trim() == "") {
    //     alert("no acepto vacios");
    //     return;
    // }
    const teo = input.value;
    const li = document.createElement('p');
    const p = document.createElement('p');
    p.textContent = teo;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);
    input.value = "";
});

function addDeleteBtn() {
    const borrar = document.createElement('button');
    borrar.textContent = "x";
    borrar.className = "btn-delete";
    borrar.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
    });
    return borrar;
}

