import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import apiCall from './api/api';

const App: Function = () => {
  const recordList: string[] = [];

  const [records, setRecords] = useState(recordList);

  const sendNumbers: Function = async (
    event: React.FormEvent<HTMLFormElement>,
    number1: string,
    number2: string
  ) => {
    try {
      event.preventDefault();
      let newRecord: string = (await apiCall(number1, number2)).data.toString();
      let slice = records.slice();
      slice.push(newRecord);
      setRecords(slice);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='main_container'>
      <Form sendNumbers={sendNumbers} />
      {records.map((record, i) => (
        <div key={i}>{record}</div>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
