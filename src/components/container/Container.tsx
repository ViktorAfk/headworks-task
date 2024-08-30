import cn from 'classnames';
import { PropsWithChildren } from 'react';
import styles from './container.module.scss';

type BreakPoints = 'mobile' | 'tablet' | 'desktop';

type Props = {
  maxWidth?: BreakPoints;
  classes?: React.CSSProperties;
  center?: boolean;
};

export const Container: React.FC<PropsWithChildren<Props>> = ({
  children,
  maxWidth = 'desktop',
  classes,
  center = false,
}) => {
  const currentClasses = cn(styles.container, {
    [styles['container--tablet']]: maxWidth === 'tablet',
    [styles['container--desktop']]: maxWidth === 'desktop',
    [styles['container--center']]: center,
  });
  return (
    <div style={{ ...classes }} className={currentClasses}>
      {children}
    </div>
  );
};
