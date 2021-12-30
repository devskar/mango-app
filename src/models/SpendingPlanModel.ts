import { makeAutoObservable } from 'mobx';
import Share from './ShareModel';

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
