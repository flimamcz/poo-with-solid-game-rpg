import Race from './Race';

class Orc extends Race {
  public static instancies = 0;

  readonly name: string;
  readonly dexterity: number;

  constructor(
    name: string, 
    dexterity: number,
    public lifePoints = 74,
  ) {
    super(name, lifePoints);
    this.name = name;
    this.dexterity = dexterity;
  }
  
  static createdRacesInstances(): number {
    this.instancies += 1;
    return this.instancies;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }
}

export default Orc;