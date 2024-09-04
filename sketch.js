function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }
  function modoNoturno(horario) {
    if (horario > 09) {
      console.log("Você precisa ligar o modo noturno!");
    } else {
      console.log("Modo noturno não é necessário neste momento.");
    }
  }
  
  modoNoturno(15);
  modoNoturno(20);
  function filmesParaAssistir(diaDaSemana, genero) {
  
    // ...
  
    return sugestaoFilme;
  }
  