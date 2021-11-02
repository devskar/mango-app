import Expense from './ExpenseModel';
import Income from './IncomeModel';
import Resident from './ResidentModel';

class Household {
  private _name: String;
  private _residents: Resident[];
  private _expenses: Expense[];
  private _incomes: Income[];

  constructor(
    name: String,
    residents: Resident[] = [],
    incomes: Income[] = [],
    expenses: Expense[] = [],
  ) {
    this._name = name;
    this._residents = residents;
    this._incomes = incomes;
    this._expenses = expenses;
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

export default Household;
