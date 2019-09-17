import React from 'react';
import { ThemeContext, LocaleContext } from '../context';

const useWindowWidth = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  return width;
};

const useDocumentTitle = title => {
  React.useEffect(() => {
    document.title = title;
  });
};

const useFormInput = initialValue => {
  const [value, setValue] = React.useState(initialValue);

  const handleNameChange = e => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleNameChange,
  };
};

const useHooksExample = () => {
  const name = useFormInput('Rakshit');
  const surname = useFormInput('Sinha');
  const { theme } = React.useContext(ThemeContext);
  const { locale } = React.useContext(LocaleContext);
  const width = useWindowWidth();
  useDocumentTitle(`${name.value} ${surname.value}`);

  return (
    <React.Fragment>
      <section className={`row ${theme.dark}`}>
        <span>Name</span>
        <input type="text" {...name} />
      </section>
      <section className={`row ${theme.light}`}>
        <span>Surname</span>
        <input type="text" {...surname} />
      </section>
      <section className={`row ${theme.dark}`}>
        <span>Language</span>
        <input type="text" value={locale.foreign} />
      </section>
      <section className={`row ${theme.light}`}>
        <span>Width</span>
        <input type="text" value={width} />
      </section>
    </React.Fragment>
  );
};

export default useHooksExample;
