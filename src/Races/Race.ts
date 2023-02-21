abstract class Race {
  readonly name: string;
  readonly dexterity: number;
  constructor(private _name: string, private _dexterity: number) { 
    this.name = _name;
    this.dexterity = _dexterity;
  }

  static createdRacesInstances(): number | string {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;