import styled from '@emotion/styled';

export const Container = styled.div`
margin: 40px auto;
width: 800px;
height: auto;
background: lightblue;

`;

export const Phonebook = styled.h1`
font-weight:500;
font-size: 28px;
text-align: center;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
padding: 10px;
font-size: 16px;
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
padding: 10px;
`;

export const Button = styled.button`
display: block;
margin: 0 auto;
padding: 6px;
font-size: 15px;
border: 1px solid white;
background: lightgrey;
`;

export const Contacts = styled.h2`
margin: 18px auto;
font-weigthht: 300;
font-size: 24px;
text-align: center;
`;

export const Section = styled.section`
margin: 16px auto;
`;

export const Message = styled.h3`
color: black;
text-align: center;
`;

export const FilterStyled = styled.label`
color: black;
margin: 10px;
display: flex;
flex-direction: column;

`;

export const ContactListStyled = styled.ul`
display: flex;
justify-content: center;
align-items: center;
padding 5px;

`;

export const ContactItemStyled = styled.li`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items:center;
padding: 8px;
border: 1px solid gray;
font-size: 15px;
`;

export const DeleteBtn = styled.button`
display: block;
padding: 8px;
font-size: 12px;
border: 1px solid white;
background: lightgrey;
`