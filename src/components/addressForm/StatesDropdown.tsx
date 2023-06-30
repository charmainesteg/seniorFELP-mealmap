import { Form } from "react-bootstrap";
import { AddressFormProps } from "./AddressForm";
import stateOptions from "../../constants/stateOptions";
import React from "react";

export interface AddressProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const StateDropdown = ({value, onChange, }: AddressFormProps) => {
    return(
        <Form.Select aria-label='state select'
        value={value}
        onChange={onChange}
        >
        <option key="000" value="Select your state">Select your State</option>
        {stateOptions.map((state,index) => (
            <option key={index} value={state}>
                {state}
            </option>
        ))}
        </Form.Select>
    );
};

export default StateDropdown;
