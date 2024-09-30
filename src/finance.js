import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components';
import { Authorization, History, Main, Registration } from './pages';
import styled from 'styled-components';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
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

    if (!currentUserDataJSON) {
      return;
    }

    const currentUserData = JSON.parse(currentUserDataJSON);

    dispatch(
      setUser({
        ...currentUserData,
        roleId: Number(currentUserData.roleId),
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
