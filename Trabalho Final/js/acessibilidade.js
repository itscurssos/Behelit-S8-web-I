let fala;

function pegarTexto() {
  let elementos = document.querySelectorAll("h1, h2, h3, p, li, a");
  let texto = "";

  elementos.forEach(el => {
    texto += el.innerText + ". ";
  });

  return texto;
}

function lerPagina() {
  parar();

  let texto = pegarTexto();

  fala = new SpeechSynthesisUtterance(texto);
  fala.lang = "pt-BR";
  fala.rate = 2;
  fala.pitch = 2;

  speechSynthesis.speak(fala);
}

function pausar() {
  speechSynthesis.pause();
}

function parar() {
  speechSynthesis.cancel();
}