import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components';
import { Authorization, History, Main, Registration } from './pages';
import styled from 'styled-components';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import { request } from './utils';
// import { Modal } from './components';
// import { ERROR } from './constants';

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 1000px;
  min-height: 100%;
  background-color: #fff;
  margin: 0 auto;
`;

const Page = styled.div`
  padding: 120px 0 40px;
`;

export const Finance = () => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    const currentUserDataJSON = sessionStorage.getItem('userData');
    let currentUserData = null;
    
    
    
    if (!currentUserDataJSON) {
      request('/api').then(({data: {user}}) => {
        currentUserData = user;
        console.log("1");
      })
    } else if (!currentUserData && !currentUserDataJSON) {
      console.log("2");
      return;
    } else {
      currentUserData = JSON.parse(currentUserDataJSON);
      console.log("3");
    }

    
    console.log(currentUserData);
    dispatch(
      setUser({
        ...currentUserData,
      }),
    );
  }, [dispatch]);

  return (
    <>
      <AppColumn>
        <Header />
        <Page>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/history" element={<History />} />
            <Route path="/login" element={<Authorization />} />
            <Route path="/register" element={<Registration />} />
            {/* <Route path="/login" element={<Authorization />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/users" element={<Users />} />
            <Route path="/post" element={<Post />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/post/:id/edit" element={<Post />} /> */}

            {/* <Route path="*" element={<Error error={ERROR.PAGE_NOT_EXIST} />} /> */}
          </Routes>
        </Page>
        <Footer />
        {/* <Modal /> */}
      </AppColumn>
    </>
  );
};
