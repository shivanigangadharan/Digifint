import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import plant from '../images/plant.jpg'

const Box = styled.div`
    box-shadow: 1px 1px 10px 3px darkgrey;
    width: 40%;
    padding: 2%;
    margin-top: 20vh;
    margin-left: 53vw;

`
const Main = styled.div`
    background-image: url(${plant});
    height: 100vh;
    background-position: center;
    background-size: cover;
    padding: 0.1%;
`
const Input = styled.input`
    background: none;
    border: 1px solid grey;
    font-size: 120%;
    padding: 1.5%;
    margin-top: 8%;
    color: black;
    width: 50%;
`
const Button = styled.button`
background: none;
border: 1px solid black;
font-size: 125%;
padding: 1.5%;
margin-top: 8%;
`
function BankPage() {
    return (
        <Main>
            <Box>
                <h2> Enter user details below </h2>
                <Input placeholder="Enter the unique ID of user" /><br /><br />
                <center><Button> Send account information to NBFC </Button></center>
            </Box>
        </Main>
    )
}

export default BankPage;