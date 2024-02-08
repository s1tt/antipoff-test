import CloseEyeIcon from 'assets/closeEye.svg?react';
import OpenEyeIcon from 'assets/openEye.svg?react';
import { InputHTMLAttributes, useState } from 'react';
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister
} from 'react-hook-form';
import styles from './Input.module.css';

interface InputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>;
  name: Path<T>;
  type?: string;
  label?: string;
  id?: string;
  error: FieldErrors<T>;
}

const Input = <T extends FieldValues>({
  register,
  name,
  label,
  type = 'text',
  id,
  error,
  ...props
}: InputProps<T>) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [typeOfField, setTypeOfField] = useState(type);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
    setTypeOfField(typeOfField === 'password' ? 'text' : 'password');
  };

  return (
    <label className={styles.label} htmlFor={id}>
      <span>{label}</span>
      {type === 'password' && (
        <div
          className={styles.iconWrapper}
          onClick={togglePasswordVisibility}
          aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
        >
          {isPasswordVisible ? (
            <OpenEyeIcon className={styles.icon} />
          ) : (
            <CloseEyeIcon className={styles.icon} />
          )}
        </div>
      )}
      <input
        className={`${styles.input} ${error[name] ? styles.inputError : ''}`}
        type={typeOfField}
        id={id}
        {...register(name)}
        {...props}
      />
      {error[name]?.message && (
        <p className={styles.error}>
          {(error[name]?.message as string) || 'Ошибка!'}
        </p>
      )}
    </label>
  );
};

export default Input;
