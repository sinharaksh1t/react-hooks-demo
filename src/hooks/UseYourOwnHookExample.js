import React from 'react';
import { ThemeContext, LocaleContext } from '../context';

export const useWindowWidth = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;
};

const UseYourOwnHookExample = () => {
  const [name, setName] = React.useState('Laryr');
  const [surname, setSurname] = React.useState('ellison');
  const { theme } = React.useContext(ThemeContext);
  const { locale } = React.useContext(LocaleContext);
  const width = useWindowWidth();

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
      <section className={`row ${theme.light}`}>
        <span>Width</span>
        <input value={width} type="text" disabled />
      </section>
    </React.Fragment>
  );
};

export default UseYourOwnHookExample;