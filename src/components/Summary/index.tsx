import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import balanceImg from "../../assets/total.svg";

import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  //const totalDeposits = transactions.reduce((acc, transaction) => {
  //if (transaction.type == 'deposit') {
  //   return acc + transaction.amount;
  //}

  //return acc;
  //}, 0)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type == "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Incomes" />
        </header>
        <strong>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Expenses</p>
          <img src={outcomeImg} alt="Expenses" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(summary.withdraws)}
        </strong>
      </div>

      <div>
        <header>
          <p>Balance</p>
          <img src={balanceImg} alt="Balance" />
        </header>
        <strong>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
