export function en_tablero() {
	return dirección_actual() === "index.html" || !dirección_actual();
}

export function en_editor() {
	return dirección_actual() === "editar.html";
}

export function en_visualizador() {
	return dirección_actual() === "ver.html";
}

function dirección_actual() {
	const dirección = location.href.split("/");
	return dirección[dirección.length - 1];
}