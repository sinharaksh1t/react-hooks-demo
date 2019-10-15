import React from 'react';

class UseClassesExample extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Rakshit',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    const { name } = this.state;
    return (
      <React.Fragment>
        <section className="row">
          <span>Name</span>
          <input value={name} onChange={this.handleNameChange} />
        </section>
      </React.Fragment>
    );
  }
}

export default UseClassesExample;
