import { Component } from 'react';

import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addContact } = this.props;
    addContact({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={css.card}>
        <label className={css.ttitle}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            required
            onChange={this.handleChange}
          />
        </label>
        <label className={css.ttitle}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            placeholder="Enter number"
            value={number}
            required
            onChange={this.handleChange}
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
