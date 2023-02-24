# Fl and Dragons
Este projeto tem como objetivo utilizar a arquitetura SOLID juntamente com os princípios da POO para desenvolver um jogo no estilo Dungeons & Dragons de interpretação de papéis (role play), também conhecido como RPG.

# Tecnologias utilizadas
 - <a href="https://www.docker.com/" target="_blank"> Docker</a> - Para a conteinerização da aplicação;
 - <a href="https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530" target="_blank"> SOLID</a> - Para arquitetura e organização do código realizado em paradigma POO;
 - <a href="https://nodejs.org/api/" target="_blank"> NodeJS</a> - Para o desenvolvimento como um todo.
 - <a href="https://www.typescriptlang.org" target="_blank"> TypeScript</a> - Para tipagem da linguagem.;
# Como rodar o projeto
 1 - Clone o repositório:
git clone https://github.com/flimamcz/poo-with-solid-game-rpg

 2 - Instale as dependências:
npm install

 3 - Inicie o Docker Compose:
docker-compose up -d

 4 - Abra uma linha de comando dentro do container:
docker exec -it trybers_and_dragon bash

 5 - Instale as dependências dentro do contâiner:
npm install

# Instanciando Personagens
const character = new Character('nome genérico');
 ##### Eleva o level do character
 - character.levelUp;
 ##### Realiza o attack no oponente destinado como parâmetro.
 - character.attack(OtherCharacterOrMonster);

# Instanciando Monstros
Monstros podem ser criados. Em especial, os monstros é derivadamente mais simples que os characters, possuindo somente os atributos de attack e receiveDamage.

##### Cria o monstro
const monster = new Monster();
##### Monstro ataca o character passado via parâmetro
monster.attack(character);

# Batalhas no formato PVP
Batalha PVP (Player contra Player)

Com dois personagens do tipo Character criados, é possível criar uma batalha entre os dois. Para saber o vencedor, basta utilizar o método fight. Se o primeiro personagem adicionado ganhar, será retornado 1, se o segundo personagem ganhar, será retornado -1.

Obs: você pode aumentar o nível dos personagens antes da batalha usando o método levelUp:

##### Cria characters para batalha.
- const batalhaPvp = new PVP(personagem1, personagem2);
##### Retorna resultado da batalha
- console.log(batalhaPvp.fight()); // 1 ou -1

