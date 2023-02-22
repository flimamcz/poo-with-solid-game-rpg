import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  constructor(
    private _lifePoints: number = 82, 
    private _strength: number = 63,
  ) {
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number { 
    this._lifePoints -= attackPoints;
    if (this._lifePoints < 1) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }
}