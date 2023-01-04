import PropTypes from 'prop-types';
import ContactItems from './ContactItems';
import {ContactListStyled} from '../Components.styled';

export default function ContactList ({filteredContacts, onDeleteContact}){
    return(
        <ContactListStyled>
            {filteredContacts.map(({id, name, number})=> {
                return(
                    <ContactItems contact= {{id, name, number}} key={id} onDeleteContact = {onDeleteContact}/>
                )
            })}
        </ContactListStyled>
    )
};

ContactList.propTypes={
    filteredContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
    onDeleteContact: PropTypes.func.isRequired,
}