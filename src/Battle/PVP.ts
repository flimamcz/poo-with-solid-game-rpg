import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    public characterOne: Fighter,
    public characterTwo: Fighter,
  ) {
    super(characterOne);
  }

  fight(): number {
    this.characterOne.attack(this.characterTwo);
    this.characterTwo.attack(this.characterOne);
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}