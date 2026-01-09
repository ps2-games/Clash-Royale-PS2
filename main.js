import { Carta } from "./src/carta.js";
import { Torre } from "./src/torre.js";
import Gamepad from "./src/shared/gamepad.js";
import { CARD_TYPE, TOWER_TYPE } from "./src/shared/constants.js";
import Assets from "./src/shared/assets.js";

Screen.setParam(Screen.DEPTH_TEST_ENABLE, false);

const background = Assets.image("background.png");

const cards = [
  new Carta("Fire", 4, CARD_TYPE.FEITICO, Assets.image("/Cartas/fire.png")),
  new Carta("Esqueleto", 1, CARD_TYPE.TROPA, Assets.image("/Cartas/esqueleto.png"))
]
const playerDeck = Assets.image("deck.png");

const playerTowers = [
  new Torre({
    x: 226,
    y: 230,
    vida: 1792,
    tipo: TOWER_TYPE.PRINCIPE,
    img: "/Torres/blue_princess.png"
  }),

  new Torre({
    x: 370,
    y: 230,
    vida: 1792,
    tipo: TOWER_TYPE.PRINCIPE,
    img: "/Torres/blue_princess.png"
  }),

  new Torre({
    x: 290,
    y: 260,
    vida: 3000,
    tipo: TOWER_TYPE.REI,
    img: "/Torres/Blue_king.png"

  })
]

const enemyTowers = [

  new Torre({

    x: 220,
    y: 70,
    vida: 1792,
    tipo: TOWER_TYPE.PRINCIPE,
    img: "/Torres/red_princess.png"

  }),

    new Torre({
      x: 369, 
      y: 70,
      vida: 1792,
      tipo: TOWER_TYPE.PRINCIPE,
      img: "/Torres/red_princess.png"

  }),

    new Torre({
      x: 291.5,
      y: 20,
      vida: 3000,
      tipo: TOWER_TYPE.REI,
      img: "/Torres/Red_king.png"

  })
]

while (true) {
  Gamepad.update();
  Screen.clear();

  background.draw(0, 0);

  playerTowers.forEach(torre => {
    torre.draw();
  });
  enemyTowers.forEach(torre => {
    torre.draw();
  })
  playerDeck.draw(198, 350);

  Screen.flip();
}