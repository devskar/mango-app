class Job {
  // name of the job
  private _name: string;
  // amount the jobs pays per period
  private _amount: number;
  // period in which the job pays out in days
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

export default Job;
