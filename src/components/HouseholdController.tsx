import { computed, makeAutoObservable, observable } from 'mobx';
import react from 'react';
import Expense from '../models/ExpenseModel';
import HouseholdModel from '../models/HouseholdModel';
import Income from '../models/IncomeModel';
import Resident from '../models/ResidentModel';
import SpendingPlan from '../models/SpendingPlanModel';

class HouseholdController {
  @observable
  private _model: HouseholdModel;

  constructor() {
    makeAutoObservable(this);
    this._model = new HouseholdModel('Test', new SpendingPlan());
  }

  public get spendingPlan(): SpendingPlan {
    return this._model.spendingPlan;
  }

  public set spendingPlan(value: SpendingPlan) {
    this._model.spendingPlan = value;
  }

  public addIncome(...newIncomes: Income[]): Income[] {
    this._model.incomes.push(...newIncomes);
    return this._model.incomes;
  }

  public get incomes(): Income[] {
    return this._model.incomes;
  }

  public addExpense(...newExpenses: Expense[]): Expense[] {
    this._model.expenses.push(...newExpenses);
    return this._model.expenses;
  }

  public get expenses(): Expense[] {
    return this._model.expenses;
  }
  public set expenses(value: Expense[]) {
    this._model.expenses = value;
  }

  public get name(): String {
    return this._model.name;
  }
  public set name(value: String) {
    this._model.name = value;
  }

  public get residents(): Resident[] {
    return this._model.residents;
  }

  public set residents(value: Resident[]) {
    this._model.residents = value;
  }

  public addResident(...newResidents: Resident[]): Resident[] {
    this._model.residents.push(...newResidents);
    return this._model.residents;
  }

  @computed
  public getLeftOverPercentage(): number {
    return this._model.spendingPlan.shares
      .map((s) => s.amount)
      .reduce((a, b) => a - b, 100);
  }
}

export const HouseholdControllerContext =
  react.createContext<HouseholdController>(new HouseholdController());

export default HouseholdController;
