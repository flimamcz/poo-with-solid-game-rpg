import { EnergyType } from '../Energy';

abstract class Archetype {
  readonly name: string;
  readonly special: number;
  readonly cost: number;
  constructor(
    private _name: string, 
    private _special: number = 0,
    private _cost: number = 0,
  ) { 
    this.name = _name;
    this.special = _special;
    this.cost = _cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;