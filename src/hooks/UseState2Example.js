import React from 'react';

const UseContextExample = () => {
  const [name, setName] = React.useState('Laryr');
  const [surname, setSurname] = React.useState('ellison');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleSurnameChange = e => {
    setSurname(e.target.value);
  };

  return (
    <React.Fragment>
      <section className="row">
        <span>Name</span>
        <input value={name} onChange={handleNameChange} />
      </section>
      <section className="row">
        <span>Surname</span>
        <input value={surname} onChange={handleSurnameChange} />
      </section>
    </React.Fragment>
  );
};

export default UseContextExample;
