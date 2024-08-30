import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormFields } from '../types';
import styles from './input-field.module.scss';

type FieldName =
  | 'name'
  | 'description'
  | 'date'
  | 'category'
  | 'totalAvailableTickets'
  | 'additionalInformation'
  | 'additionalInformation.organizer'
  | 'additionalInformation.place'
  | 'additionalInformation.seats'
  | 'additionalInformation.address'
  | `tickets.${number}.type`
  | `tickets.${number}.quantity`
  | `tickets.${number}.availableSeats`
  | `tickets.${number}.price`;

type Props = {
  fieldName: FieldName;
  register: UseFormRegister<FormFields>;
  errorMessage: string | undefined;
  labelName: string;
  attributeLabelName: string;
  restInputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  restLabelProps?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
};

export const InputField: React.FC<Props> = ({
  register,
  errorMessage,
  labelName,
  attributeLabelName,
  restLabelProps,
  restInputProps,
  fieldName,
}) => {
  return (
    <div className={styles['input-field']}>
      <label {...restLabelProps} htmlFor={attributeLabelName}>
        {labelName}
      </label>
      {fieldName === 'description' ? (
        <textarea id={attributeLabelName} {...register(fieldName)} />
      ) : (
        <input
          {...restInputProps}
          id={attributeLabelName}
          {...register(fieldName)}
        />
      )}
      {errorMessage && (
        <p
          className={styles['input-field__error']}
        >{`${labelName} should't be empty`}</p>
      )}
    </div>
  );
};
