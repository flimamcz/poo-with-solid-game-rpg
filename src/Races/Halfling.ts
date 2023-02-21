import Race from './Race';

class Halfling extends Race {
  public static instancies = 0;
  readonly name: string;
  readonly dexterity: number;

  constructor(
    name: string, 
    dexterity: number,
    public lifePoints = 60,
  ) {
    super(name, lifePoints);
    this.name = name;
    this.dexterity = dexterity;
  }
  
  static createdRacesInstances(): string | number {
    this.instancies += 1;
    return this.instancies;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }
}

export default Halfling;