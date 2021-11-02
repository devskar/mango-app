// model for payments of the household or an user
abstract class Payment {
  // name of the expense
  private _name: string;
  // amount the payments amount per period
  private _amount: number;
  // period of the payment in days
  private _period: number;

  constructor(name: string, amount: number, period: number) {
    this._name = name;
    this._amount = amount;
    this._period = period;
  }

  public get period(): number {
    return this._period;
  }
  public set period(value: number) {
    this._period = value;
  }

  public get amount(): number {
    return this._amount;
  }
  public set amount(value: number) {
    this._amount = value;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get name() {
    return this._name;
  }
}

export default Payment;
