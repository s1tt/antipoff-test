import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useLoginUserMutation } from 'modules/LoginForm/api';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from 'store/userSlice';
import Button from 'ui/Button/Button';
import Input from 'ui/Input/Input';
import * as yup from 'yup';
import styles from './LoginForm.module.css';

interface IFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formSchema = yup.object({
    email: yup
      .string()
      .required('Поле обязательно для заполнения')
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        'Некорректный email'
      ),
    password: yup
      .string()
      .required('Поле обязательно для заполнения')
      .min(3, 'Минимум 3 символа')
  });
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm<IFormValues>({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
    defaultValues: { email: 'eve.holt@reqres.in', password: 'pistol' }
  });

  const [loginUser, { data, isSuccess, isError, isLoading }] =
    useLoginUserMutation();

  const onSubmit: SubmitHandler<IFormValues> = async ({ email, password }) => {
    if (email && password) {
      await loginUser({ email, password });
    }
    reset();
  };

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUser(data.token));
      navigate('/');
    }
  }, [isSuccess, data, dispatch, navigate]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.title}>Вход</h1>
      <div className={styles.inputs}>
        <Input
          name='email'
          register={register}
          error={errors}
          placeholder='Введите ваш email'
          label='Электронная почта'
          id='email'
          type='email'
        />
        <Input
          name='password'
          register={register}
          error={errors}
          placeholder='Введите ваш пароль'
          label='Пароль'
          id='password'
          type='password'
        />
      </div>
      <Button
        type='submit'
        className={styles.formBtn}
        disabled={!isValid || isLoading}
      >
        {isLoading ? 'Загрузка...' : 'Войти'}
      </Button>
      {isError && <p className={styles.fetchError}>Что-то пошло не так...</p>}
      <p className={styles.question}>
        Нет аккаунта?{' '}
        <Link to={'/signup'} className={styles.questionLink}>
          Зарегистрируйтесь
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
