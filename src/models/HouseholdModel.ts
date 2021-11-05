import { makeAutoObservable } from 'mobx';
import Expense from './ExpenseModel';
import Income from './IncomeModel';
import Resident from './ResidentModel';
import SpendingPlan from './SpendingPlanModel';

class HouseholdModel {
  private _name: String;
  private _spendingPlan: SpendingPlan;
  private _residents: Resident[];
  private _expenses: Expense[];
  private _incomes: Income[];

  constructor(
    name: String,
    spendingPlan: SpendingPlan,
    residents: Resident[] = [],
    incomes: Income[] = [],
    expenses: Expense[] = [],
  ) {
    makeAutoObservable(this);
    this._name = name;
    this._spendingPlan = spendingPlan;
    this._residents = residents;
    this._incomes = incomes;
    this._expenses = expenses;
  }

  public get spendingPlan(): SpendingPlan {
    return this._spendingPlan;
  }

  public set spendingPlan(value: SpendingPlan) {
    this._spendingPlan = value;
  }

  public get incomes(): Income[] {
    return this._incomes;
  }

  public get expenses(): Expense[] {
    return this._expenses;
  }
  public set expenses(value: Expense[]) {
    this._expenses = value;
  }

  public get name(): String {
    return this._name;
  }
  public set name(value: String) {
    this._name = value;
  }

  public get residents(): Resident[] {
    return this._residents;
  }

  public set residents(value: Resident[]) {
    this._residents = value;
  }
}

export default HouseholdModel;
