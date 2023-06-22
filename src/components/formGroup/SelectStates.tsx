import { Form } from "react-bootstrap";
import { AddressFormProps } from "./FormGroup";
export interface AddressProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
const stateOptions = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming'
];

const StateDropdown = ({
  value,
  onChange, }: AddressFormProps) => {
  return (
    <Form.Select aria-label="state select"
      value={value}
      onChange={onChange}>
      {stateOptions.map((state, index) => (
        <option key={index} value={state}>
          {state}
        </option>
      ))}
    </Form.Select>
  );
};

export default StateDropdown;
