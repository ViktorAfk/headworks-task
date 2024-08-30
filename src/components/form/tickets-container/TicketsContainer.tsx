import {
  Control,
  FieldErrors,
  UseFormRegister,
  useFieldArray,
} from 'react-hook-form';
import { Button } from '../../buttons/Button';
import { Title } from '../../title/Title';
import { InputField } from '../input/InputField';
import { Select } from '../select/Select';
import { FormFields } from '../types';
import styles from './tickets-container.module.scss';

const ticketTypesValues = ['VIP', 'normal', 'cheap'];

type Props = {
  control: Control<FormFields>;
  register: UseFormRegister<FormFields>;
  errors: FieldErrors<FormFields>;
};

export const TicketsContainer: React.FC<Props> = ({
  control,
  register,
  errors,
}) => {
  const { fields, append, remove } = useFieldArray({
    name: 'tickets',
    control,
  });

  const ticketsWithId = fields.map((ticket) => ({
    ...ticket,
    id: crypto.randomUUID(),
  }));

  return (
    <div className={styles['tickets-container']}>
      <div className={styles['tickets-container__head']}>
        <Title tag="h3" text="tickets" />
        <Button
          style={{
            position: 'sticky',
            bottom: 0,
          }}
          small
          action
          onClick={() =>
            append({
              type: 'normal',
              quantity: 0,
              availableSeats: 0,
              price: 0,
            })
          }
          type="button"
        >
          Add ticket
        </Button>
      </div>

      <div>
        {ticketsWithId.map((ticket, index) => (
          <div key={ticket.id}>
            <Select
              options={ticketTypesValues}
              register={register}
              labelName={'type'}
              fieldName={`tickets.${index}.type`}
              attributeLabelName={'tickets-type'}
            />
            <InputField
              errorMessage={errors.tickets?.[index]?.quantity?.message}
              fieldName={`tickets.${index}.quantity`}
              attributeLabelName={'quantity'}
              labelName="quantity"
              register={register}
              restInputProps={{ type: 'number' }}
            />
            <InputField
              errorMessage={errors.tickets?.[index]?.availableSeats?.message}
              fieldName={`tickets.${index}.availableSeats`}
              attributeLabelName={'available-seats'}
              labelName="available seats"
              register={register}
              restInputProps={{ type: 'number' }}
            />
            <InputField
              errorMessage={errors.tickets?.[index]?.price?.message}
              fieldName={`tickets.${index}.price`}
              attributeLabelName={'price'}
              labelName="price"
              register={register}
              restInputProps={{ type: 'number' }}
            />
            {index >= 0 && (
              <Button
                style={{ marginBottom: '30px' }}
                medium
                cancel
                onClick={() => remove(index)}
              >
                Remove ticket
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
