let pokemon = "Charizard";
let xp = 8490;
let nivel = "";

switch (true) {
  case xp < 1000:
    nivel = "Ferro";
    break;
  case xp >= 1001 && xp <= 2000:
    nivel = "Bronze";
    break;
  case xp >= 2001 && xp <= 5000:
    nivel = "Prata";
    break;
  case xp >= 5001 && xp <= 7000:
    nivel = "Ouro";
    break;
  case xp >= 7000 && xp <= 8000:
    nivel = "Platina";
    break;
  case xp >= 8001 && xp <= 9000:
    nivel = "Ascendente";
    break;
  case xp >= 9001 && xp <= 10000:
    nivel = "Imortal";
    break;
  case xp >= 10001:
    nivel = "Radiante";
    break;
  default:
    nivel = "Nivel não indentificado, você precisa ganhar mais experiência.";
}

console.log(
  `O seu pokemon: ${pokemon} está no nível: ${nivel}, evolua mais e se torne o melhor pokemon de todos os tempos! `
);
