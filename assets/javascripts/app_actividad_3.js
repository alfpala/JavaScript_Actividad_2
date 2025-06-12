   // Manipulación del DOM - Obtener referencias a los elementos
        const digito1Select = document.getElementById('digito1');
        const digito2Select = document.getElementById('digito2');
        const digito3Select = document.getElementById('digito3');
        const ingresarBtn = document.getElementById('ingresarBtn');
        const resultadoParrafo = document.getElementById('resultado');
        const passwordDisplay = document.getElementById('passwordDisplay');
        
        // Variables para almacenar los valores
        let digitoUno = '';
        let digitoDos = '';
        let digitoTres = '';
        let passwordCompleto = '';
        
        // Función para actualizar la visualización del password
        function actualizarPasswordDisplay() {
            // Manipulación del DOM para mostrar password actual
            digitoUno = digito1Select.value || '-';
            digitoDos = digito2Select.value || '-';
            digitoTres = digito3Select.value || '-';
            
            passwordDisplay.textContent = `Password actual: ${digitoUno}${digitoDos}${digitoTres}`;
        }
        
        // Función principal para validar password usando if-else-if-else y operadores lógicos
        function validarPassword() {
            // Obtener valores de los selects
            const valor1 = digito1Select.value;
            const valor2 = digito2Select.value;
            const valor3 = digito3Select.value;
            
            // Formar el password completo
            passwordCompleto = valor1 + valor2 + valor3;
            
            console.log(`Password ingresado: ${passwordCompleto}`);
            
            // Validación usando if-else-if-else y operadores lógicos
            if (passwordCompleto === '911' && valor1 !== '' && valor2 !== '' && valor3 !== '') {
                // A. Password 1 correcto (911)
                resultadoParrafo.textContent = 'password 1 correcto';
                resultadoParrafo.className = 'resultado password1';
                console.log('Password 911 - Acceso autorizado');
                
            } else if (passwordCompleto === '714' && valor1 !== '' && valor2 !== '' && valor3 !== '') {
                // B. Password 2 correcto (714)
                resultadoParrafo.textContent = 'password 2 es correcto';
                resultadoParrafo.className = 'resultado password2';
                console.log('Password 714 - Acceso autorizado');
                
            } else if (valor1 === '' || valor2 === '' || valor3 === '') {
                // Caso cuando no se han seleccionado todos los dígitos
                resultadoParrafo.textContent = 'Debes seleccionar los 3 dígitos';
                resultadoParrafo.className = 'resultado incorrecto';
                console.log('Password incompleto');
                
            } else {
                // C. Password incorrecto - cualquier otro valor
                resultadoParrafo.textContent = 'password incorrecto';
                resultadoParrafo.className = 'resultado incorrecto';
                console.log(`Password ${passwordCompleto} - Acceso denegado`);
            }
            
            // Manipulación adicional del DOM para efectos visuales
            resultadoParrafo.style.transform = 'scale(0.95)';
            setTimeout(() => {
                resultadoParrafo.style.transform = 'scale(1)';
            }, 200);
        }
        
        // Event listener para el botón ingresar
        ingresarBtn.addEventListener('click', function() {
            console.log('Botón ingresar presionado');
            validarPassword();
        });
        
        // Event listeners para los selects para actualizar la visualización
        digito1Select.addEventListener('change', function() {
            actualizarPasswordDisplay();
            console.log(`Dígito 1 cambiado a: ${this.value}`);
        });
        
        digito2Select.addEventListener('change', function() {
            actualizarPasswordDisplay();
            console.log(`Dígito 2 cambiado a: ${this.value}`);
        });
        
        digito3Select.addEventListener('change', function() {
            actualizarPasswordDisplay();
            console.log(`Dígito 3 cambiado a: ${this.value}`);
        });
        
        // Función adicional que demuestra más manipulación del DOM
        function inicializarSistema() {
            console.log('Sistema de seguridad inicializado');
            
            // Verificar que todos los elementos existen usando operadores lógicos
            if (digito1Select && digito2Select && digito3Select && ingresarBtn && resultadoParrafo) {
                console.log('Todos los elementos del DOM encontrados correctamente');
                actualizarPasswordDisplay();
            } else {
                console.error('Error: No se encontraron todos los elementos del DOM');
            }
            
            // Validación adicional con operadores lógicos
            const elementosValidos = (digito1Select !== null) && (digito2Select !== null) && (digito3Select !== null);
            
            if (elementosValidos) {
                console.log('Sistema listo para recibir passwords');
            } else {
                console.error('Sistema no inicializado correctamente');
            }
        }
        
        // Función para permitir validación con Enter
        document.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                validarPassword();
            }
        });
        
        // Ejecutar cuando el DOM está completamente cargado
        document.addEventListener('DOMContentLoaded', inicializarSistema);
        
        // Función adicional que demuestra más operadores lógicos
        function verificarEstadoSistema() {
            const tieneDigito1 = digito1Select.value !== '';
            const tieneDigito2 = digito2Select.value !== '';
            const tieneDigito3 = digito3Select.value !== '';
            
            const sistemaCompleto = tieneDigito1 && tieneDigito2 && tieneDigito3;
            const sistemaIncompleto = !tieneDigito1 || !tieneDigito2 || !tieneDigito3;
            
            if (sistemaCompleto) {
                console.log('Todos los campos están completos');
                return true;
            } else if (sistemaIncompleto) {
                console.log('Faltan campos por completar');
                return false;
            } else {
                console.log('Estado indeterminado');
                return false;
            }
        }