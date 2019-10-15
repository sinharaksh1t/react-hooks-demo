import React from 'react';
import { ThemeContext, LocaleContext } from '../context';

class ClassesEffectExample extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Rakshit',
      surname: 'Sinha',
      width: window.innerWidth,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.onHandleResize = this.onHandleResize.bind(this);
  }

  componentDidMount() {
    const { name, age } = this.state;
    document.title = `${name} | ${age}`;
    window.addEventListener('resize', this.onHandleResize);
  }

  componentDidUpdate() {
    const { name, age } = this.state;
    document.title = `${name} | ${age}`;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onHandleResize);
  }

  onHandleResize() {
    this.setState({ width: window.innerWidth });
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
    const { name, surname, width } = this.state;
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
            <section className={`row ${theme.light}`}>
              <span>Width</span>
              <input type="text" value={width} disabled />
            </section>
          </React.Fragment>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ClassesEffectExample;
