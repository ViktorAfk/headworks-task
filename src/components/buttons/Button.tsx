import cn from 'classnames';
import { PropsWithChildren } from 'react';
import styles from './button.module.scss';

type ButtonVariant =
  | { submit?: boolean; cancel?: never; action?: never }
  | { submit?: never; cancel?: boolean; action?: never }
  | { submit?: never; cancel?: never; action?: boolean };

type ButtonSizes =
  | { small?: boolean; medium?: never; large?: never }
  | { small?: never; medium?: boolean; large?: never }
  | { small?: never; medium?: never; large?: boolean };

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type Props = {
  outlined?: boolean;
} & ButtonVariant &
  ButtonSizes &
  ButtonProps;

export const Button: React.FC<PropsWithChildren<Props>> = ({
  small,
  medium,
  large,
  submit,
  cancel,
  action,
  outlined,
  type = 'button',
  children,
  ...rest
}) => {
  const buttonClass = cn(styles.button, {
    [styles['button--medium']]: medium,
    [styles['button--small']]: small,
    [styles['button--large']]: large,
    [styles['button--submit']]: submit,
    [styles['button--cancel']]: cancel,
    [styles['button--add']]: action,
    [styles['button--outlined']]: outlined,
    [styles['button--disabled']]: rest.disabled,
  });

  return (
    <button type={type} className={buttonClass} {...rest}>
      {children}
    </button>
  );
};
