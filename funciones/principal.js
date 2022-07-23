import carga_json from "./json.js";

// Carga de JSON.
const línea_temporal = carga_json("archivos/hola.json");

línea_temporal.then(datos => {
	// console.log(datos);
});

// Botones.
const botón_nueva_línea = document.getElementById("nueva_línea");
const botón_mis_líneas = document.getElementById("mis_líneas");

const panel = document.getElementById("panel");

const panel_línea = "paneles/línea.html";
const panel_colección = "paneles/colección.html";

botón_nueva_línea.addEventListener("click", () => {
	panel.setAttribute("src", panel_línea);
});
botón_mis_líneas.addEventListener("click", () => {
	panel.setAttribute("src", panel_colección);
});

import configurar_idioma from "./configuración/opciones.js";
// import cambiar_idioma from "./configuración/idioma.js";
import cambiar_tema from "./configuración/tema.js";

const botón_idioma = document.getElementById("botón_idioma");
const botón_tema = document.getElementById("botón_tema");
const nodo_idioma = document.getElementById("lista_idioma");
const nodo_estilo = document.getElementById("tema");

botón_idioma.addEventListener("click", () => {
	nodo_idioma.classList.toggle("oculto");
});

configurar_idioma(nodo_idioma, ["español", "english"]);

botón_tema.addEventListener("click", () => {
	cambiar_tema(nodo_estilo, botón_tema);
});