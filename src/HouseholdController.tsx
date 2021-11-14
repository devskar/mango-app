import { computed, makeAutoObservable, observable } from 'mobx';
import react from 'react';
import Expense from './models/ExpenseModel';
import HouseholdModel from './models/HouseholdModel';
import Income from './models/IncomeModel';
import Resident from './models/ResidentModel';
import SpendingPlan, { Share } from './models/SpendingPlanModel';
import { generateRandomId } from './utils/Utils';

class HouseholdController {
  static MAX_PERCENTAGE = 100;

  @observable
  private _model: HouseholdModel;
  @observable
  private _spendingPlan: SpendingPlan;
  @observable
  private _residents: Resident[];
  @observable
  private _expenses: Expense[];
  @observable
  private _incomes: Income[];

  constructor() {
    makeAutoObservable(this);
    this._model = new HouseholdModel('Household name');
    this._spendingPlan = new SpendingPlan();
    this._residents = [];
    this._expenses = [];
    this._incomes = [];
  }

  public appendShare(share: Share): void {
    if (0 < share.amount && share.amount <= this.getUnusedPercentage()) {
      this._spendingPlan.shares.push(share);
    }
  }

  public addShare(name: string, amount: number): void {
    this.appendShare(new Share(name, amount, generateRandomId()));
  }

  public removeShare(share: Share) {
    this._spendingPlan.shares = this._spendingPlan.shares.filter(
      (s) => s.id !== share.id,
    );
  }

  public get shares(): Share[] {
    return this._spendingPlan.shares;
  }

  public set shares(value: Share[]) {
    this._spendingPlan.shares = value;
  }

  public addIncome(...newIncomes: Income[]): Income[] {
    this._incomes.push(...newIncomes);
    return this._incomes;
  }

  public get incomes(): Income[] {
    return this._incomes;
  }

  public addExpense(...newExpenses: Expense[]): Expense[] {
    this._expenses.push(...newExpenses);
    return this._expenses;
  }

  public get expenses(): Expense[] {
    return this._expenses;
  }
  public set expenses(value: Expense[]) {
    this._expenses = value;
  }

  public get name(): string {
    return this._model.name;
  }
  public set name(value: string) {
    this._model.name = value;
  }

  public get residents(): Resident[] {
    return this._residents;
  }

  public set residents(value: Resident[]) {
    this._residents = value;
  }

  public addResident(...newResidents: Resident[]): Resident[] {
    this._residents.push(...newResidents);
    return this._residents;
  }

  @computed
  public getGetUsedPercentage(): number {
    return this._spendingPlan.shares
      .map((s) => s.amount)
      .reduce((a, b) => a + b, 0);
  }

  @computed
  public getUnusedPercentage(): number {
    return HouseholdController.MAX_PERCENTAGE - this.getGetUsedPercentage();
  }

  public hasUnusedPercentage(): boolean {
    return this.getUnusedPercentage() > 0;
  }
}

export const HouseholdControllerContext =
  react.createContext<HouseholdController>(new HouseholdController());

export default HouseholdController;
