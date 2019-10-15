import React from 'react';
import { ThemeContext, LocaleContext } from '../context';

class ClassesContextExample extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Rakshit',
      surname: 'Sinha',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleSurnameChange(e) {
    this.setState({
      surname: e.target.value,
    });
  }

  render() {
    const { name, surname } = this.state;
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <React.Fragment>
            <section className={`row ${theme.dark}`}>
              <span>Name</span>
              <input value={name} onChange={this.handleNameChange} />
            </section>
            <section className={`row ${theme.light}`}>
              <span>Surname</span>
              <input value={surname} onChange={this.handleSurnameChange} />
            </section>
            <LocaleContext.Consumer>
              {({ locale }) => (
                <section className={`row ${theme.dark}`}>
                  {' '}
                  <span>Locale</span>
                  <input value={locale.local} />
                </section>
              )}
            </LocaleContext.Consumer>
          </React.Fragment>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ClassesContextExample;
