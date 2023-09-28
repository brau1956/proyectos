var input = document.getElementById("datos");
        var addBtn = document.getElementById("btn1");
        var div = document.getElementById("dv");

        // Función para mostrar las tareas almacenadas en el localStorage
        function mostrarTareasAlmacenadas() {
            let tareas = JSON.parse(localStorage.getItem("tarea"));
            if (tareas) {
                tareas.forEach(function (tarea) {
                    var contenedor = document.createElement('div');
                    var otro = document.createElement('p');
                    otro.textContent = tarea.texto;
                    contenedor.appendChild(otro);
                    contenedor.appendChild(aparecer());
                    div.appendChild(contenedor);
                });
            }
        }

        // Llama a la función al cargar la página
        window.onload = mostrarTareasAlmacenadas;

        function aparecer() {
            const borrar = document.createElement('button');
            borrar.textContent = "X";
            borrar.className = "btn-delete";
            borrar.addEventListener('click', (e) => {
                const item = e.target.parentElement;
                div.removeChild(item); // Esto eliminará el elemento contenedor completo
                actualizarTareas(); // Llama a la función para actualizar las tareas después de eliminar una
            });
            return borrar;
        }

        function presionar() {
            if (input.value.trim() === "") {
                alert("No existen tareas agregadas");
                return;
            }
            
            var presentar = input.value;
            var contenedor = document.createElement('div');
            var otro = document.createElement('p');
            otro.textContent = presentar;

            // Agregar el botón dentro del mismo contenedor
            contenedor.appendChild(otro);
            contenedor.appendChild(aparecer());
            
            div.appendChild(contenedor);

            // Limpiar el valor del input después de agregar la tarea
            input.value = '';

            // Almacenar la tarea en el localStorage
            const tarea = {
                texto: presentar
            };
            
            let tareas = [];
            
            if (localStorage.getItem("tarea") !== null) {
                tareas = JSON.parse(localStorage.getItem("tarea"));
            }

            tareas.push(tarea);
            localStorage.setItem("tarea", JSON.stringify(tareas));
        }

        // Función para actualizar las tareas en el localStorage
        function actualizarTareas() {
            let tareas = [];
            const elementos = div.querySelectorAll('p');
            elementos.forEach(function (elemento) {
                tareas.push({
                    texto: elemento.textContent
                });
            });
            localStorage.setItem("tarea", JSON.stringify(tareas));
        }
 


