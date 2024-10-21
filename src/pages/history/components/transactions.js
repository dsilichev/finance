import styled from 'styled-components';
import { Icon } from '../../../components';

const TransactionsContainer = ({ transactions, className }) => {
  return (
    <div className={className}>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="transaction-item">
            <Icon id="fa-shopping-basket" margin="0 0 0 10px" onClick={() => {}} />
            <div>{transaction.account.title}</div>
            <div>{transaction.amount.$numberDecimal}</div>
            <Icon id="fa-pen" margin="0 0 0 10px" onClick={() => {}} />
            <Icon id="fa-trash" margin="0 0 0 10px" onClick={() => {}} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Transactions = styled(TransactionsContainer)`
  .transaction-item {
    display: flex;
    gap: 10px;
  }
`;
