import cn from 'classnames';
import styles from './title.module.scss';
type TitleProps = {
  text: string;
  tag?: keyof React.JSX.IntrinsicElements;
};

export const Title: React.FC<TitleProps> = ({ text, tag: Tag = 'h2' }) => {
  return (
    <Tag
      className={cn(styles.title__h2, {
        [`${styles.title__h3}`]: Tag === 'h3',
      })}
    >
      {text}
    </Tag>
  );
};
