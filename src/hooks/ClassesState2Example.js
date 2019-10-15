import React from 'react';

class ClassesEffectExample extends React.PureComponent {
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
      <React.Fragment>
        <section className="row">
          <span>Name</span>
          <input value={name} onChange={this.handleNameChange} />
        </section>
        <section className="row">
          <span>Surname</span>
          <input value={surname} onChange={this.handleSurnameChange} />
        </section>
      </React.Fragment>
    );
  }
}

export default ClassesEffectExample;
