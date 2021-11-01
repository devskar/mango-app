import Job from './JobModel';

// Person who lives in the household
class Resident {
  private _name: string;
  private _jobs: Job[];

  constructor(name: string, jobs?: Job[]) {
    if (jobs === undefined) this._jobs = [];
    else this._jobs = jobs;

    this._name = name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get name() {
    return this._name;
  }

  public addJob(...newJobs: Job[]): Job[] {
    this._jobs.push(...newJobs);
    return this._jobs;
  }

  public get jobs(): Job[] {
    return this._jobs;
  }
  public set jobs(value: Job[]) {
    this._jobs = value;
  }
}

export default Resident;
