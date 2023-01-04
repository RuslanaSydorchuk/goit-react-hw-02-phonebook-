import PropTypes from 'prop-types';
import {FilterStyled} from '../Components.styled';

export default function Filter({title, value, onChange}){
    return(
        <FilterStyled>
            <span>{title}</span>
            <input type = "text" name = "filter" value = {value} onChange ={onChange}/>
        </FilterStyled>
    )
};

Filter.propTypes ={
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    OnChange: PropTypes.func,
};
