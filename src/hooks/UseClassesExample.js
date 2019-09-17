import React from 'react';
import { ThemeContext, LocaleContext } from '../context';

class UseClassesExample extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Rakshit',
      surname: 'Sinha',
      width: window.innerWidth,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    const { name, surname } = this.state;
    document.title = `${name} ${surname}`;
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    const { name, surname } = this.state;
    document.title = `${name} ${surname}`;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      width: window.innerWidth,
    });
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
              <input
                type="text"
                value={name}
                onChange={this.handleNameChange}
              />
            </section>
            <section className={`row ${theme.light}`}>
              <span>Surname</span>
              <input
                type="text"
                value={surname}
                onChange={this.handleSurnameChange}
              />
            </section>
            <LocaleContext.Consumer>
              {({ locale }) => (
                <section className={`row ${theme.dark}`}>
                  <span>Language</span>
                  <input type="text" value={locale.local} />
                </section>
              )}
            </LocaleContext.Consumer>
            <section className={`row ${theme.light}`}>
              <span>Width</span>
              <input value={width} />
            </section>
          </React.Fragment>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default UseClassesExample;
