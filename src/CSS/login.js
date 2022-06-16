import styled from 'styled-components';

const Input = styled.input`
display: flex;
flex-direction: column;
position: relative;
align-items: flex-start;
gap: 10px;
text-align: left;
width: 319px;
height: 30px;
left: 184px;
top: 125px;
background: #FFFFFF;
border: 1px solid #E1E5EB;
border-radius: 0px;
margin-left: -60px;
margin-top: -90px;
margin-bottom: 95px;
`;

const Div = styled.div`
position: relative;
width: 570px;
height: 404px;
left: 372px;
top: 101px;
background: #446e51;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.65);
border-radius: 15px;
`;

const Img = styled.img`
width: 130px;
height: 110px;
background: #023031;
justify-content: center;
align-items: center;
margin-left: 220px;
`;

const Button = styled.button`
display: flex;
font-size: 20px;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 8px 32px;
margin-top: 145px;
margin-left: -10px;
gap: 10px;
width: 219px;
height: 40px;
left: 184px;
top: 197px;
background: #003BE5;
color: #FFFFFF;
position: absolute;
:disabled {
  background-color: #45565A;
}
:enabled {
  background-color: black;
}
`;

export { Input, Div, Button, Img };
