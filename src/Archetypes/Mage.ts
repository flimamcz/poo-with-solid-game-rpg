import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  public static instancies = 0;
  private _energyType: EnergyType;
  constructor(
    private nameM: string,
  ) {
    super(nameM);
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    this.instancies += 1;
    return this.instancies;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}