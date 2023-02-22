import Race from './Race';

class Dwarf extends Race {
  public static instancies = 0;
  readonly name: string;
  readonly dexterity: number;

  constructor(
    name: string, 
    dexterity: number,
    public lifePoints = 80,
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

export default Dwarf;