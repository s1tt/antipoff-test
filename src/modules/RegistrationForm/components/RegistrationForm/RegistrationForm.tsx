import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useRegistrationUserMutation } from 'modules/RegistrationForm/api';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from 'store/userSlice';
import Button from 'ui/Button/Button';
import * as yup from 'yup';
import Input from '../../../../ui/Input/Input';
import styles from './RegistrationForm.module.css';

interface IFormValues {
  userName?: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formSchema = yup.object({
    userName: yup.string(),
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
      .min(3, 'Минимум 3 символа'),
    confirmPassword: yup
      .string()
      .min(3, 'Минимум 3 символа')
      .test('matchesPassword', 'Пароли не совпадают!', (value, ctx) => {
        const password = ctx.parent.password;
        return value === password;
      })
      .required()
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch,
    trigger
  } = useForm<IFormValues>({
    mode: 'onChange',
    resolver: yupResolver(formSchema)
  });

  const [registrationUser, { data, isError, isSuccess, isLoading }] =
    useRegistrationUserMutation();

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const onSubmit: SubmitHandler<IFormValues> = data => {
    registrationUser({
      email: data.email,
      password: data.password,
      username: data.userName
    });
    reset();
  };

  useEffect(() => {
    if (password && confirmPassword) {
      trigger('confirmPassword');
    }
  }, [password, confirmPassword, trigger]);

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUser(data.token));
      navigate('/');
    }
  }, [isSuccess, data, dispatch, navigate]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.title}>Регистрация</h1>
      <div className={styles.inputs}>
        <Input
          name='userName'
          register={register}
          error={errors}
          placeholder='Артур'
          label='Имя'
          id='userName'
        />
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
        <Input
          name='confirmPassword'
          register={register}
          error={errors}
          placeholder='Подтвердите ваш пароль'
          label='Подтвердите пароль'
          id='confirm-password'
          type='password'
        />
      </div>
      <Button
        type='submit'
        className={styles.formBtn}
        disabled={!isValid || isLoading}
      >
        {isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
      </Button>
      {isError && <p className={styles.fetchError}>Что-то пошло не так...</p>}
      <p className={styles.question}>
        Уже зарегистрированы? <Link to={'/signin'}>Войти</Link>
      </p>
    </form>
  );
};

export default RegistrationForm;
