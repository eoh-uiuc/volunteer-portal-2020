import React, { Component } from "react";
import Select from 'react-select';
import { Link } from "react-router-dom";

import Logo from '../../assets/eoh-logo.png';
import './styles.scss';

const societies = [
    { value: 'None', label: 'None' },
    { value: 'Aerospace Outreach', label: 'Aerospace Outreach' },
    { value: 'Alma\'s Talking Dogs', label: 'Alma\'s Talking Dogs' },
    { value: 'Alpha Chi Sigma', label: 'Alpha Chi Sigma' },
    { value: 'Alpha Omega Epsilon', label: 'Alpha Omega Epsilon' },
    { value: 'Alpha Pi Mu', label: 'Alpha Pi Mu' },
    { value: 'American Chemical Society', label: 'American Chemical Society' },
    { value: 'American Concrete Institute', label: 'American Concrete Institute' },
    { value: 'American Institute of Aeronautics and Astronautics', label: 'American Institute of Aeronautics and Astronautics' },
    { value: 'American Institute of Chemical Engineers', label: 'American Institute of Chemical Engineers' },
    { value: 'American Nuclear Society', label: 'American Nuclear Society' },
  ]
  
const societySelectorStyles = {
    control: (base, state) => ({
        ...base,
        boxShadow: 'none',
        borderColor: state.isFocused? '#a3a3a3' : '#ccc',
        borderRadius: 7, 
        cursor: 'text',
        '&:hover': { borderColor: 'none' }
    }),
    dropdownIndicator: (base, state) => ({
        ...base,
        '&:hover': { cursor: 'pointer' },
    }),
    option: (base, state) => ({
        ...base,
        '&:hover': { cursor: 'pointer' }
    })
};

const Field = props => {
    const name = props.name;
    let stateName = name.split(' ').join('');
    stateName = stateName.charAt(0).toLowerCase() + stateName.slice(1);

    const type = (name === "Password" ? "password" : "text");
    return (
        <div>
            <p>{name}</p>
            {name === "Society"
                ? <Select styles={societySelectorStyles} options={societies} onChange={e => props.handleChange(e, stateName)} />
                : <input id="form-field" type={type} onChange={e => props.handleChange(e, stateName)} />
            }
        </div>
    );
}

class Form extends Component {
    render() {
        return (
            <div className="form-wrapper">
                {this.props.showLogo && <img src={Logo} id="logo" />}
                <h1>{this.props.formHeader}</h1>
                <div className="form">
                    <form>
                        {this.props.fields.map(c => <Field name={c} handleChange={this.props.handleChange} key={c} />)}
                        <br />
                        <input id="form-button" type="submit" value={this.props.buttonValue} onClick={this.props.onButtonClick} />
                    </form>
                </div>
                {this.props.login && 
                    <Link to="/createaccount" id="create-account-button">
                        Create Account
                    </Link>}
            </div>
        );
    }
}

export default Form;