import React from "react";
import { Form } from "react-bootstrap";

export type AddressFormProps  = {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddressForm = (props: AddressFormProps) => {
    return (
        <Form.Group className="mb-3" controlId={`LocationForm.${props.label}`}>
            <Form.Label className="form-label">{props.label}</Form.Label>
              <Form.Control
                type={props.type}
                placeholder={props.placeholder}
                autoFocus
                value={props.value}
                onChange={props.onChange}
              />
            </Form.Group>
    );
};

export default AddressForm;