# Documentación EORM - Startup Relámpago

## Estructura EORM (Entidades-Objetos-Relaciones-Métodos)

### ENTIDADES
- **Evento**: Startup Relámpago 2024
- **Participante**: Personas que se registran
- **Speaker**: Ponentes del evento
- **Agenda**: Horarios y actividades

### OBJETOS
- **HTML**: index.html (estructura principal)
- **CSS**: styles.css (estilos compilados de SCSS)
- **SCSS**: styles.scss (con mixins para botones y tarjetas)
- **JavaScript**: script.js (funcionalidades interactivas)

### RELACIONES
- HTML conecta con CSS para estilos
- HTML conecta con JS para funcionalidad
- SCSS compila a CSS usando mixins
- Formulario de registro conecta con validación JS

### MÉTODOS
- `scrollToRegistro()`: Navegación suave al registro
- `mostrarMensaje()`: Mostrar mensajes de confirmación
- `iniciarContador()`: Contador para el evento
- Event listeners para formulario y navegación
- Efectos hover en tarjetas

## Características Implementadas
✅ Grid layout para agenda y speakers
✅ Mixins SCSS para botones y tarjetas
✅ JavaScript interactivo para formularios
✅ Navegación suave
✅ Validación de formulario
✅ Efectos hover y animaciones básicas
