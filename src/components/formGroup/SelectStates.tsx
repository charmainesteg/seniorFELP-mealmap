import { Form } from "react-bootstrap";
import { AddressFormProps } from "./FormGroup";
import { stateOptions } from "../../constants/States";

const StateDropdown = ({
  value,
  onChange, }: AddressFormProps) => {
  return (
    <Form.Select aria-label="state select"
      value={value}
      onChange={onChange}>
      <option key='0000' value='Select your state'>Select your state
      </option>
      {stateOptions.map((state, index) => (
        <option key={index} value={state}>
          {state}
        </option>
      ))}
    </Form.Select>
  );
};

export default StateDropdown;
