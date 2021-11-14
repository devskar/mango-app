import { makeAutoObservable } from 'mobx';

class Share {
  // name of the share eg. House planning
  private _name: string;
  // percentage you plan to use the share for
  private _amount: number;
  private readonly _id: string;

  constructor(name: string, amount: number, id: string) {
    makeAutoObservable(this);
    this._name = name;
    this._amount = amount;
    this._id = id;
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get amount(): number {
    return this._amount;
  }

  public set amount(value: number) {
    this._amount = value;
  }
}

export default Share;
