import { ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';
import StateDropdown from './SelectStates';

export type FormControlChangeEvent =
  ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

export interface AddressFormProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: FormControlChangeEvent) => void;
};

const AddressForm = ({
  label,
  type,
  placeholder,
  value,
  onChange,
}: AddressFormProps) => {
  return (
    <Form.Group className="mb-3" controlId={`LocationForm.${label}`}>
      <Form.Label className="form-label">{label}</Form.Label>
      {type === 'select' ? (
        <StateDropdown value={value} onChange={onChange} />
      ) : (
        <Form.Control
          type={type}
          placeholder={placeholder}
          autoFocus
          value={value}
          onChange={onChange}
        />
      )}
    </Form.Group>
  );
};

export default AddressForm;
