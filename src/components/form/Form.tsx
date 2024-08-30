import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  useCreateEventMutation,
  useUpdateEventMutation,
} from '../../feature/api/eventSlice';
import { Event } from '../../types/event';
import { Button } from '../buttons/Button';
import { Title } from '../title/Title';
import styles from './form.module.scss';
import { InputField } from './input/InputField';
import { Select } from './select/Select';
import { TicketsContainer } from './tickets-container/TicketsContainer';
import { FormFields, schema } from './types';

const categoryValues = [
  'show',
  'concert',
  'exhibition',
  'performance',
  'other',
];
type Props = {
  currentEvent?: Event | null;
  onHandleCanceled?: () => void;
};

export const Form: React.FC<Props> = ({ currentEvent, onHandleCanceled }) => {
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: currentEvent || {
      name: '',
      date: new Date().toString().slice(0, 16),
      description: '',
      category: 'other',
      totalAvailableTickets: 0,
      additionalInformation: {
        organizer: '',
        place: '',
        seats: 0,
        address: '',
      },
      tickets: [],
    },
    resolver: yupResolver(schema),
  });

  const [addNewEvent, { isLoading: isCreating }] = useCreateEventMutation();
  const [updateEvent, { isLoading: isUpdating }] = useUpdateEventMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: FormFields) => {
    console.log(currentEvent);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (currentEvent && onHandleCanceled) {
      console.log(currentEvent.id);
      updateEvent({ ...data, id: currentEvent.id });
      onHandleCanceled();
      return;
    }
    addNewEvent(data);
    reset();
    navigate('/');
  };

  return (
    <form
      className={cn(styles.form, {
        [styles['form--disabled']]: isCreating || isUpdating || isSubmitting,
      })}
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        errorMessage={errors.name?.message}
        fieldName={'name'}
        attributeLabelName={'name'}
        labelName="name"
        register={register}
        restInputProps={{ type: 'text' }}
      />

      <InputField
        errorMessage={errors.description?.message}
        fieldName={'description'}
        attributeLabelName={'description'}
        labelName="description"
        register={register}
        restInputProps={{ type: 'text' }}
      />
      <InputField
        errorMessage={errors.date?.message}
        fieldName={'date'}
        attributeLabelName={'date'}
        labelName="date"
        register={register}
        restInputProps={{ type: 'datetime-local' }}
      />
      <InputField
        errorMessage={errors.totalAvailableTickets?.message}
        fieldName={'totalAvailableTickets'}
        attributeLabelName={'available-tickets'}
        labelName="available tickets"
        register={register}
        restInputProps={{ type: 'number' }}
      />
      <Select
        options={categoryValues}
        register={register}
        labelName={'category'}
        fieldName={'category'}
        attributeLabelName={'category'}
      />
      <div>
        <Title tag="h3" text="Additional information" />
        <InputField
          errorMessage={errors.additionalInformation?.organizer?.message}
          fieldName={'additionalInformation.organizer'}
          attributeLabelName={'organizer'}
          labelName="organizer"
          register={register}
          restInputProps={{ type: 'text' }}
        />
        <InputField
          errorMessage={errors.additionalInformation?.place?.message}
          fieldName={'additionalInformation.place'}
          attributeLabelName={'place'}
          labelName="place"
          register={register}
          restInputProps={{ type: 'text' }}
        />
        <InputField
          errorMessage={errors.additionalInformation?.address?.message}
          fieldName={'additionalInformation.address'}
          attributeLabelName={'address'}
          labelName="address"
          register={register}
          restInputProps={{ type: 'text' }}
        />

        <InputField
          errorMessage={errors.additionalInformation?.address?.message}
          fieldName={'additionalInformation.seats'}
          attributeLabelName={'seats'}
          labelName="seats"
          register={register}
          restInputProps={{ type: 'number' }}
        />
      </div>
      <TicketsContainer control={control} errors={errors} register={register} />
      <div className={styles['form__buttons-container']}>
        <div className={styles.buttons}>
          <Button
            disabled={isCreating || isUpdating || isSubmitting}
            submit
            medium
            type="submit"
          >
            Submit
          </Button>
          <Button
            onClick={() => {
              if (onHandleCanceled) {
                onHandleCanceled();
                return;
              }
              navigate('/');
            }}
            disabled={isCreating || isUpdating || isSubmitting}
            cancel
            medium
          >
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
};
