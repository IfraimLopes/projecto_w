function menu() {
  let item = document.getElementById("item");
  let burguer = document.getElementById("menu");

  // Verifica se o menu está visível
  if (item.style.display === "block") {
    item.style.display = "none"; // Esconde o menu
  } else {
    item.style.display = "block"; // Mostra o menu
  }
}
