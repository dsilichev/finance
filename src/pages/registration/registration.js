import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthFormError, Input, Button, H2 } from '../../components';
import { setUser } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
// import { selectUserRole } from '../../selectors';
// import { ROLE } from '../../constants';
import { useResetForm } from '../../hooks';
import { request } from '../../utils';

const regFormSchema = yup.object().shape({
  name: yup
  .string(),
  email: yup
    .string()
    .required('Заполните Email')
    .email('Неверно заполнен Email'),
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
      name: '',
      email: '',
      password: '',
      passcheck: '',
    },
    resolver: yupResolver(regFormSchema),
  });

  const [serverError, setServerError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const roleId = useSelector(selectUserRole);

  useResetForm(reset);

  const onSubmit = ({ name, email, password }) => {
    request('http://localhost:3000/api/register', 'POST', { name, email, password }).then(({ error, user }) => {
      if (error) {
        setServerError(`Ошибка запроса: ${error}`);
        return;
      }

      dispatch(setUser(user));
      sessionStorage.setItem('userData', JSON.stringify(user));
      navigate('/');
    });
  };

  const formError =
  errors?.name?.message || errors?.email?.message || errors?.password?.message || errors?.passcheck?.message;
  const errorMessage = formError || serverError;

  // if (roleId !== ROLE.GUEST) {
  //   return <Navigate to="/" />;
  // }

  return (
    <div className={className}>
      <H2>Регистрация</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Input
          type="text"
          placeholder="Имя"
          {...register('name', {
            onChange: () => setServerError(null),
          })}
        />
        <Input
          type="text"
          placeholder="Email"
          {...register('email', {
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
