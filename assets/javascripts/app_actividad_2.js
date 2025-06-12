   // Manipulación del DOM - Obtener referencias a los elementos
        const inputEntrada1 = document.getElementById('entrada1');
        const inputEntrada2 = document.getElementById('entrada2');
        const inputEntrada3 = document.getElementById('entrada3');
        const parrafoResultado = document.getElementById('resultado');
        
        // Variables para almacenar las cantidades
        let cantidadEntrada1 = 0;
        let cantidadEntrada2 = 0;
        let cantidadEntrada3 = 0;
        let totalImgs = 0;
        
        // Función para actualizar el resultado usando if-else-if-else y operadores lógicos
        function actualizarResultado() {
            // Obtener valores de los inputs y convertir a números
            cantidadEntrada1 = parseInt(inputEntrada1.value) || 0;
            cantidadEntrada2 = parseInt(inputEntrada2.value) || 0;
            cantidadEntrada3 = parseInt(inputEntrada3.value) || 0;
            
            // Calcular total usando operadores aritméticos
            totalImgs = cantidadEntrada1 + cantidadEntrada2 + cantidadEntrada3;
            
            // Manipulación del DOM con estructuras condicionales y operadores lógicos
            if (totalImgs <= 10 && totalImgs >= 0) {
                // A. El párrafo muestra la cantidad de stickers seleccionados
                parrafoResultado.textContent = `Llevas ${totalImgs} puntos - stickers`;
                parrafoResultado.className = 'resultado success';
                console.log(`Total válido: ${totalImgs} stickers`);
            } else if (totalImgs > 10) {
                // B. El párrafo muestra que lleva demasiados Img
                parrafoResultado.textContent = "Demasiadas puntos - stickers a las imagenes";
                parrafoResultado.className = 'resultado error';
                console.log(`Total excedido: ${totalImgs} Img (máximo 10)`);
            } else {
                // Caso por defecto para valores negativos o inválidos
                parrafoResultado.textContent = "Cantidad inválida";
                parrafoResultado.className = 'resultado error';
                console.log('Valores inválidos detectados');
            }
            
            // Manipulación adicional del DOM para mostrar detalles
            console.log(`Desglose - Imagen1: ${cantidadEntrada1}, Imagen2: ${cantidadEntrada2}, Imagen3: ${cantidadEntrada3}`);
        }
        
        // Event listeners para manipulación del DOM en tiempo real
        inputEntrada1.addEventListener('input', function() {
            // Validación usando operadores lógicos
            if (this.value < 0 || this.value === '') {
                this.value = 0;
            } else if (this.value > 10) {
                this.value = 10;
            }
            actualizarResultado();
        });
        
        inputEntrada2.addEventListener('input', function() {
            if (this.value < 0 || this.value === '') {
                this.value = 0;
            } else if (this.value > 10) {
                this.value = 10;
            }
            actualizarResultado();
        });
        
        inputEntrada3.addEventListener('input', function() {
            if (this.value < 0 || this.value === '') {
                this.value = 0;
            } else if (this.value > 10) {
                this.value = 10;
            }
            actualizarResultado();
        });
        
        // Función de inicialización que demuestra manipulación del DOM
        function inicializarPagina() {
            console.log('Página de Imagenes inicializada');
            
            // Verificar que todos los elementos existen usando operadores lógicos
            if (inputEntrada1 && inputEntrada2 && inputSonrisas && parrafoResultado) {
                console.log('Todos los elementos del DOM encontrados correctamente');
                actualizarResultado();
            } else {
                console.error('Error: No se encontraron todos los elementos del DOM');
            }
        }
        
        // Ejecutar cuando el DOM está completamente cargado
        document.addEventListener('DOMContentLoaded', inicializarPagina);
        
        // Función adicional para demostrar más operadores lógicos
        function validarSeleccion() {
            const haySeleccion = cantidadEntrada1 > 0 || cantidadEntrada2 > 0 || cantidadEntrada3 > 0;
            const dentroDelLimite = totalImgs <= 10 && totalImgs > 0;
            
            if (haySeleccion && dentroDelLimite) {
                console.log('Selección válida y dentro del límite');
                return true;
            } else if (!haySeleccion) {
                console.log('No hay IMagen seleccionados');
                return false;
            } else {
                console.log('Selección fuera del límite permitido');
                return false;
            }
        }