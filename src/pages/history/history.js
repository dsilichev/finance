import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { request } from '../../utils';
import { PAGINATION_LIMIT } from '../../constants';

const HistoryContainer = ({className}) => {

  const [transactions, setTransactions] = useState([]);
  const [account, setAccount] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    request(`/api/transactions?account=${account}&category=${category}&page=${page}&limit=${PAGINATION_LIMIT}`, ).then(({data: {transactions, lastPage}}) => {
      setTransactions(transactions);
      
      setLastPage(lastPage);
    });
  }, [account, category, page])

  console.log(transactions)

  return (
    <div className={className}>{lastPage}</div>
  )
}

export const History = styled(HistoryContainer)`

`
