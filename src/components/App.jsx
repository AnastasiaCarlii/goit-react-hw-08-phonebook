import { ContactsPage } from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refresh } from 'redux/auth/authOperation';
import { Layout } from './Layout/Layout';
import { RegisterPage } from 'pages/RegisterPage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
};
