import { UseFormRegister } from 'react-hook-form';
import { FormFields } from '../types';
import styles from './select.module.scss';

type Props = {
  fieldName: `tickets.${number}.type` | 'category';
  options: string[];
  register: UseFormRegister<FormFields>;
  labelName: string;
  attributeLabelName: string;
  restSelectProps?: React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >;
  restLabelProps?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
};

export const Select: React.FC<Props> = ({
  options,
  register,
  labelName,
  fieldName,
  attributeLabelName,
  restLabelProps,
  restSelectProps,
}) => {
  return (
    <div className={styles.select}>
      <label {...restLabelProps} htmlFor={attributeLabelName}>
        {labelName}
      </label>
      <select
        {...restSelectProps}
        id={attributeLabelName}
        {...register(fieldName)}
      >
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
