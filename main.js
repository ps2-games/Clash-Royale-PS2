//import { Animation } from "./scripts/animation.js";
import { Carta } from "./scripts/carta.js";
import { Torre } from "./scripts/torre.js";

const font = new Font('default');
const pad = Pads.get();
const fundo = new Image("assets/imgs/background.png");

/*const cartas = [
  new Carta("Fire", 4, "Feitico", new Image("assets/Cartas/fire.png")),
  new Carta("Esqueleto", 1, "Tropa", new Image("assets/Cartas/esqueleto.png"))
]
*/
const deckDoJogador = new Image("assets/imgs/deck.png");
const TorresPlayer = [
  new Torre({
    x: 226,
    y: 230,
    vida: 1792,
    tipo: "principe",
    img: "assets/imgs/Torres/blue_princess.png"
  }),

  new Torre({
    x: 370,
    y: 230,
    vida: 1792,
    tipo: "principe",
    img: "assets/imgs/Torres/blue_princess.png"
  }),

  new Torre({
    x: 290,
    y: 260,
    vida: 3000,
    tipo: "rei",
    img: "assets/imgs/Torres/Blue_king.png"

  })
]
const TorresInimiga = [

  new Torre({

    x: 220,
    y: 70,
    vida: 1792,
    tipo: "principe",
    img: "assets/imgs/Torres/red_princess.png"

  }),

    new Torre({
      x: 369, 
      y: 70,
      vida: 1792,
      tipo: "principe",
      img: "assets/imgs/Torres/red_princess.png"

  }),

    new Torre({
      x: 291.5,
      y: 20,
      vida: 3000,
      tipo: "rei",
      img: "assets/imgs/Torres/Red_king.png"

  })


]

while (true) {
  update();
  Screen.clear();
  fundo.draw(0, 0);

  TorresPlayer.forEach(torre => {
    torre.draw();
  });
  TorresInimiga.forEach(torre => {
    torre.draw();
  })
  deckDoJogador.draw(198, 350);
  Screen.flip();
}

function update(){
  pad.update();
}