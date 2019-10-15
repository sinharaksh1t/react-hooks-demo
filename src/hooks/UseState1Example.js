import React from 'react';

const UseState1Example = () => {
  const [name, setName] = React.useState('Laryr');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  return (
    <React.Fragment>
      <section className="row">
        <span>Name</span>
        <input value={name} onChange={handleNameChange} />
      </section>
    </React.Fragment>
  );
};

export default UseState1Example;
