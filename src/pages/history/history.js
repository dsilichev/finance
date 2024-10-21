import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { request } from '../../utils';
import { PAGINATION_LIMIT } from '../../constants';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../selectors';
import { FilterPanel } from './components';
import { Transactions } from './components/transactions';

const HistoryContainer = ({ className }) => {
  const [transactions, setTransactions] = useState([]);
  const [account, setAccount] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const userName = useSelector(selectUserName);

  useEffect(() => {
    if (userName) {
      request(
        `/api/transactions?account=${account}&category=${category}&page=${page}&limit=${PAGINATION_LIMIT}`,
      ).then(({ data: { transactions, lastPage } }) => {
        setTransactions(transactions);

        setLastPage(lastPage);
      });
    }
  }, [account, category, page, userName]);

  console.log(transactions);

  return (
    <div className={className}>
      <FilterPanel/>
      <Transactions transactions={transactions}/>
    </div>
  );
};

export const History = styled(HistoryContainer)`
  
`;
