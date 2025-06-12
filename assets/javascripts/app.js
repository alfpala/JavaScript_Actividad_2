   // Obtener referencias a los elementos del DOM
        const imagen = document.getElementById('imagen');
        const estadoDiv = document.getElementById('estado');
        
        // Variable para controlar el estado del borde
        let tieneBorde = false;
        
        // Función para agregar el event listener al elemento imagen

        imagen.addEventListener('click', function() {
            // Manipulación del DOM usando operadores lógicos e if-else
            
            // Verificar si la imagen tiene borde usando operador lógico
            if (tieneBorde === true) {
                // Si tiene borde, quitarlo
                imagen.style.border = 'none';
                tieneBorde = false;
                estadoDiv.textContent = 'Estado: Sin borde';
                estadoDiv.style.backgroundColor = '#e8f4fd';
                console.log('Borde removido');
            } else if (tieneBorde === false) {
                // Si no tiene borde, agregarlo
                imagen.style.border = '2px solid red';
                tieneBorde = true;
                estadoDiv.textContent = 'Estado: Con borde rojo';
                estadoDiv.style.backgroundColor = '#ffe8e8';
                console.log('Borde agregado');
            } else {
                // Caso por defecto (aunque no debería llegar aquí)
                console.log('Estado indefinido');
            }
            
            // Manipulación adicional del DOM para efectos visuales
            imagen.style.transform = 'scale(0.95)';
            setTimeout(() => {
                imagen.style.transform = 'scale(1)';
            }, 150);
        });
        
        // Función adicional que demuestra más manipulación del DOM
        function inicializarPagina() {
            console.log('Página inicializada');
            console.log('Elemento imagen encontrado:', imagen !== null);
            console.log('Estado inicial:', tieneBorde);
        }
        
        // Ejecutar cuando la página carga
        document.addEventListener('DOMContentLoaded', inicializarPagina);
        
        // Demostración
        imagen.addEventListener('mouseenter', function() {
            if (tieneBorde && imagen.style.border !== 'none') {
                console.log('Mouse sobre imagen CON borde');
            } else if (!tieneBorde || imagen.style.border === 'none') {
                console.log('Mouse sobre imagen SIN borde');
            }
        });