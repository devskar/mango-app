export interface Share {
  // name of the share eg. House planning
  name: string;
  // percentage you plan to use the share for
  amount: number;
}

class SpendingPlan {
  private _leftOverPercentage: number;
  private _shares: Share[];

  constructor(shares: Share[] = []) {
    this._leftOverPercentage = 100;
    this._shares = shares;
    this._updateLeftOverPercentage();
  }

  private _updateLeftOverPercentage() {
    this._leftOverPercentage = 100;

    this._shares.forEach((share) => {
      this._leftOverPercentage -= share.amount;
    });
  }
}

export default SpendingPlan;
