let proyectos =[
    {nombre:"Landing page",descripcion:"Página inicial con HTML y CSS."},
    {nombre:"Portafolio",descripcion:"Sitio personal con diseño responsive."},
    {nombre:"Tienda Online",descripcion:"Catálogo básico con JS."}
];

const lista = document.getElementById("lista-proyectos");
function mostrarProyectos() {
    lista.innerHTML = "";
    proyectos.forEach((p,i)=>{
        const card =document.createElement("div");
        card.classList.add("proyecto");
        card.innerHTML=`
      <h3>${p.nombre}</h3>
      <p>${p.descripcion}</p>
      <button onclick="eliminarProyecto(${i})">Eliminar</button>
    `;
     lista.appendChild(card);
    });
}

function eliminarProyecto(index) {
    proyectos.splice(index,1);
    mostrarProyectos()
}

document.getElementById("agregarBtn").addEventListener("click",()=>{
    const nombre = prompt("Nombre del Proyecto:");
    const descripcion = prompt("Descripcion corta:");
    if (nombre && descripcion) {
        proyectos.push({nombre, descripcion});
        mostrarProyectos();
    } 
});
mostrarProyectos();


const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click",()=>{
    menu.classList.toggle("oculto");
});

let imagenActual = 1;
function cambiarSlide() {
    imagenActual++;
    if (imagenActual>5) imagenActual = 1;
     document.getElementById("slideImg").src =
    `https://picsum.photos/900/300?random=${imagenActual}`;
}
 


// Cambia cada 3 segundos
setInterval(cambiarSlide, 3000);



const form = document.getElementById("formulario");
const estado = document.getElementById("estado");

form.addEventListener("submit",(e)=>{
    e.preventDefault(); // evita reload


const nombre = document.getElementById("nombre").value.trim();
const email = document.getElementById("email").value.trim();
const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !email || !mensaje) {
    estado.textContent = "Todos los campos son obligatorios";
    estado.style.color = "red";
    return;
  }

const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

if (!emailValido) {
    estado.textContent = "Email inválido";
    estado.style.color = "red";
    return;
}


  estado.textContent = "Mensaje enviado correctamente 🎉";
  estado.style.color = "green";

  form.reset();
  });
  document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.add("oculto"); 
    });
});
const buscador = document.getElementById("buscador");

buscador.addEventListener("input", (e) => {
    const texto = e.target.value.toLowerCase();

    document.querySelectorAll(".proyecto").forEach(card => {
        const nombre = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = nombre.includes(texto) ? "block" : "none";
    });
});

/* ===== Lógica Calculadora ===== */
const display = document.getElementById("display");
const botonesCalc = document.querySelectorAll(".buttons button");

botonesCalc.forEach(btn => {
    btn.addEventListener("click", () => {
        const valor = btn.textContent;

        if (valor === "C") {
            display.value = "";
        } 
        else if (valor === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } 
        else {
            display.value += valor;
        }
    });
});
