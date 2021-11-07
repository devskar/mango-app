import { makeAutoObservable } from 'mobx';

class HouseholdModel {
  private _name: string;

  constructor(name: string) {
    makeAutoObservable(this);
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}

export default HouseholdModel;
