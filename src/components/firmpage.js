import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import piggy from '../images/piggy.jpg'

const Main = styled.div`
    background-image: url(${piggy});
    height: 100vh;
    background-position: center;
    background-size: cover;
    padding: 0.1%;
`
const Box = styled.div`
    box-shadow: 1px 1px 10px 3px darkgrey;
    width: 40%;
    padding: 2%;
    margin-top: 10vh;
    margin-left: 5vw;
`
const Input = styled.input`
    background: none;
    border: 1px solid grey;
    font-size: 120%;
    padding: 1%;
    color: black;
`
const Button = styled.button`
background: none;
border: 1px solid black;
font-size: 125%;
padding: 1.5%;
margin-top: 8%;
:hover{
    background-color:black;
    color:white;
    cursor: pointer;
}
`


function FirmPage() {
    function myFunction() {
        alert("Request sent!");
     }
    return (
        <Main>
            <Box>
                <form>
                <h3>Bank name:</h3>
                <Input placeholder="" />
                <h3>Branch name:</h3>
                <Input placeholder="" />
                <h3>User Name:</h3>
                <Input placeholder="" />
                <h3>User Account No:</h3>
                <Input placeholder="" />
                <h3>Aggregator ID:</h3>
                <Input placeholder="" />
                 <br></br>
                <center><Button onClick="{myFunction}"> Submit </Button></center>
                </form>
            </Box>

        </Main>
    )
    
}


export default FirmPage;