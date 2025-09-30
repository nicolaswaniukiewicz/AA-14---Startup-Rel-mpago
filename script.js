// Función para scroll suave al registro
function scrollToRegistro() {
  document.getElementById("registro").scrollIntoView({
    behavior: "smooth",
  })
}

// Navegación suave
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault()
    const targetId = this.getAttribute("href").substring(1)
    const targetSection = document.getElementById(targetId)

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

// Manejo del formulario de registro
document.getElementById("registroForm").addEventListener("submit", function (e) {
  e.preventDefault()

  // Obtener datos del formulario
  const formData = new FormData(this)
  const nombre = this.querySelector('input[type="text"]').value
  const email = this.querySelector('input[type="email"]').value
  const empresa = this.querySelectorAll('input[type="text"]')[1].value

  // Validación básica
  if (nombre && email && empresa) {
    // Simular registro exitoso
    mostrarMensaje("¡Registro exitoso! Te contactaremos pronto.", "success")
    this.reset()
  } else {
    mostrarMensaje("Por favor completa todos los campos.", "error")
  }
})

// Función para mostrar mensajes
function mostrarMensaje(texto, tipo) {
  const mensajeDiv = document.getElementById("mensaje")
  mensajeDiv.textContent = texto
  mensajeDiv.className = tipo
  mensajeDiv.style.display = "block"

  // Ocultar mensaje después de 3 segundos
  setTimeout(() => {
    mensajeDiv.style.display = "none"
  }, 3000)
}

// Efecto de hover en las tarjetas 
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)"
  })
})

// Contador simple para el evento 
function iniciarContador() {
  const fechaEvento = new Date("2024-12-15T09:00:00")

  setInterval(() => {
    const ahora = new Date()
    const diferencia = fechaEvento - ahora

    if (diferencia > 0) {
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24))
      console.log(`Faltan ${dias} días para el evento`)
    }
  }, 1000)
}

// Inicializar cuando carga la página
document.addEventListener("DOMContentLoaded", () => {
  iniciarContador()
  console.log("Startup Relámpago - Sitio cargado correctamente")
})
