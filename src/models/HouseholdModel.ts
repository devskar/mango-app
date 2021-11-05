import { makeAutoObservable } from 'mobx';

class HouseholdModel {
  private _name: String;

  constructor(name: String) {
    makeAutoObservable(this);
    this._name = name;
  }

  public get name(): String {
    return this._name;
  }
  public set name(value: String) {
    this._name = value;
  }
}

export default HouseholdModel;
