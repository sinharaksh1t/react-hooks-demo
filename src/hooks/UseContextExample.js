import React from 'react';
import { ThemeContext, LocaleContext } from '../context';

const UseContextExample = () => {
  const [name, setName] = React.useState('Laryr');
  const [surname, setSurname] = React.useState('ellison');
  const { theme } = React.useContext(ThemeContext);
  const { locale } = React.useContext(LocaleContext);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleSurnameChange = e => {
    setSurname(e.target.value);
  };

  return (
    <React.Fragment>
      <section className={`row ${theme.dark}`}>
        <span>Name</span>
        <input value={name} onChange={handleNameChange} />
      </section>
      <section className={`row ${theme.light}`}>
        <span>Surname</span>
        <input value={surname} onChange={handleSurnameChange} />
      </section>
      <section className={`row ${theme.dark}`}>
        <span>Locale</span>
        <input value={locale.foreign} />
      </section>
    </React.Fragment>
  );
};

export default UseContextExample;
