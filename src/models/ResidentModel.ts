import { makeAutoObservable } from 'mobx';
import Expense from './ExpenseModel';
import Income from './IncomeModel';

// Person who lives in the household
class Resident {
  private _name: string;
  private _incomes: Income[];
  private _expenses: Expense[];

  constructor(name: string, incomes: Income[] = [], expenses: Expense[] = []) {
    makeAutoObservable(this);
    this._incomes = incomes;
    this._expenses = expenses;
    this._name = name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get name() {
    return this._name;
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
}

export default Resident;
