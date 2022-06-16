import styled from 'styled-components';

const Input = styled.input`
display: inline;
align-items: flex-start;
gap: 10px;
text-align: left;
width: 109px;
height: 25px;
background: #FFFFFF;
border: 1px solid #E1E5EB;
border-radius: 0px;
margin-left: 15px;
margin-right: 15px;
margin-top: 13px;
margin-bottom: 85px;
color: black;
`;

const Div = styled.div`
width: 100%;
height: 54px;
left: 272px;
top: 101px;
background: #053114;
box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.65);
margin-bottom: -16px;
color: white;
font-weight: bold;
font-size: 15px;
`;

const Button = styled.button`
display: flex;
font-size: 12px;
font-weight: bold;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 32px;
margin-top: -122px;
margin-left: 1200px;
width: 90px;
height: 40px;
font-family: sans serif;
color: #FFFFFF;
background-color: #0C1602;
`;

const Select = styled.select`
display: inline;
align-items: flex-start;
gap: 10px;
text-align: left;
width: 109px;
height: 25px;
background: #FFFFFF;
border: 1px solid #E1E5EB;
border-radius: 0px;
margin-left: 15px;
margin-right: 15px;
margin-top: 3px;
margin-bottom: 85px;
`;

export { Input, Div, Button, Select };
