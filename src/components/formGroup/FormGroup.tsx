import React from 'react';
import { Form } from 'react-bootstrap';

interface AddressFormProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Form.Group className="mb-3" controlId={`LocationForm.${label}`}>
      <Form.Label className="form-label">{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        autoFocus
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default AddressForm;
