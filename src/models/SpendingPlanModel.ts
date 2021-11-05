import { makeAutoObservable } from 'mobx';
class Share {
  // name of the share eg. House planning
  private _name: string;
  // percentage you plan to use the share for
  private _amount: number;

  constructor(name: string, amount: number) {
    makeAutoObservable(this);
    this._name = name;
    this._amount = amount;
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

class SpendingPlan {
  private _shares: Share[];

  constructor(shares: Share[] = []) {
    this._shares = shares;
    makeAutoObservable(this);
  }

  public get shares(): Share[] {
    return this._shares;
  }

  public set shares(value: Share[]) {
    this._shares = value;
  }
}

export default SpendingPlan;
export { Share };
