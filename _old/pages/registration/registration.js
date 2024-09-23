import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthFormError, Input, Button, H2 } from '../../components';
import { setUser } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../constants';
import { useResetForm } from '../../hooks';
import { request } from '../../utils';

const regFormSchema = yup.object().shape({
  login: yup
    .string()
    .required('Заполните логин')
    .matches(/^\w+$/, 'Неверно заполнен логин')
    .min(3, 'Неверно заполнен логин. Минимум 3 символа')
    .max(15, 'Неверно заполнен логин. Максимум 15 симвовлов'),
  password: yup
    .string()
    .required('Заполните пароль')
    .matches(/^[\w#%]+$/, 'Неверно заполнен пароль. Допускаются буквы, цифры, знаки #, %')
    .min(6, 'Неверно заполнен пароль. Минимум 6 символов')
    .max(20, 'Неверно заполнен пароль. Максимум 20 симвовлов'),
  passcheck: yup
    .string()
    .required('Заполните повтор пароля')
    .oneOf([yup.ref('password'), null], 'Повтор пароля не совпадает'),
});

export const RegistrationContainer = ({ className }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
      passcheck: '',
    },
    resolver: yupResolver(regFormSchema),
  });

  const [serverError, setServerError] = useState(null);

  const dispatch = useDispatch();

  const roleId = useSelector(selectUserRole);

  useResetForm(reset);

  const onSubmit = ({ login, password }) => {
    request('/api/register', 'POST', { login, password }).then(({ error, user }) => {
      if (error) {
        setServerError(`Ошибка запроса: ${error}`);
        return;
      }

      dispatch(setUser(user));
      sessionStorage.setItem('userData', JSON.stringify(user));
    });
  };

  const formError =
    errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;
  const errorMessage = formError || serverError;

  if (roleId !== ROLE.GUEST) {
    return <Navigate to="/" />;
  }

  return (
    <div className={className}>
      <H2>Регистрация</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Логин"
          {...register('login', {
            onChange: () => setServerError(null),
          })}
        />
        <Input
          type="password"
          placeholder="Пароль"
          {...register('password', {
            onChange: () => setServerError(null),
          })}
        />
        <Input
          type="password"
          placeholder="Проверка пароля"
          {...register('passcheck', {
            onChange: () => setServerError(null),
          })}
        />
        <Button type="submit" disabled={!!formError}>
          Зарегистрироваться
        </Button>
        {errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
      </form>
    </div>
  );
};

export const Registration = styled(RegistrationContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 260px;
  }
`;
