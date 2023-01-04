import PropTypes from 'prop-types';
import {ContactItemStyled, DeleteBtn} from '../Components.styled';

export default function ContactItem ({contact, onDeleteContact}){
    const {id, name, number} = contact;
    return (
        <ContactItemStyled>
            <p>{name}</p>
            <p>{number}</p>
            <DeleteBtn type = "button" onClick = {() => onDeleteContact(id)}>
                Delete
            </DeleteBtn>
        </ContactItemStyled>
    )
};

ContactItem.propTypes ={
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
    onDeleteContact: PropTypes.func.isRequired,
};