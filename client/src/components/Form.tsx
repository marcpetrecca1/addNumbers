import React, { useState } from 'react';

interface RecordProps {
  sendNumbers: Function;
}

const Form: Function = (props: RecordProps) => {
  const [inputs, setInputs] = useState({
    firstNumber: '',
    secondNumber: '',
  });

  const handleInputChange: Function = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      {' '}
      <form
        onSubmit={(e) =>
          props.sendNumbers(e, inputs.firstNumber, inputs.secondNumber)
        }
      >
        <label>
          Add Two Numbers:
          <input
            value={inputs.firstNumber}
            onChange={(e) => handleInputChange(e)}
            name='firstNumber'
            type='text'
            placeholder='Number 1'
            required
            pattern='\d*'
          />
          <input
            value={inputs.secondNumber}
            onChange={(e) => handleInputChange(e)}
            name='secondNumber'
            type='text'
            placeholder='Number 2'
            required
            pattern='\d*'
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default Form;
