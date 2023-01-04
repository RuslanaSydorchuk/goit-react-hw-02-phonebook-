import React , {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Label, Button} from '../Components.styled'

class ContactForm extends Component {
    static propTypes ={
        onSubmit: PropTypes.func,
    }

    state ={
        name: '',
        number: '',
    };

    handleInputChange = e => {
        const {name, value} = e.currentTarget;
        this.setState({ [name]:value})
    };

    handleSubmit = e => {
        const {onSubmit} = this.props;
        e.preventDefault();
        onSubmit(this.state);
        this.setState({name: '', number:''});
    };

    render(){
        const {name, number} = this.state;
        return(
            <Form action = "submit" onSubmit={this.handleSubmit}>
                <div>
                    <Label>
                        Name
                        <input type = "text" name ="name" value = {name} onChange={this.handleInputChange} 
                        pattern ="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        />
                    </Label>
                    <Label>
                        Phone number
                        <input type="tel" name = "number" value = {number} onChange={this.handleInputChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        />
                    </Label>
                    <Button type="submit">Add contact</Button>
                </div>
            </Form>
        )
    }
};

export default ContactForm;