import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import laptop from '../images/laptop.jpg'

const Button = styled.button`
    border: 1px solid white;
    color: white;
    border-radius: 4px;
    background: none;
    font-size: 200%;
    margin-top: 5%;
    font-weight: 100;
    width: 80%;
    padding: 1.5%;
    :hover{
        box-shadow: 1px 1px 10px 1px white;
        cursor: pointer;
    }
`
const Heading = styled.text`
    font-weight: 100;
    color: white;
    font-size: 600%;
    margin-top: 35vh; 
    margin-left: 5vw;    
    position: absolute;
    `
const Main = styled.div`
    background-image: url(${laptop});
    height: 100vh;    
    background-size: cover;
    background-position: center;
`
const Box = styled.div`
    padding: 5%;
    text-align: center;
    border: 1px solid white;
    border-radius: 3px;
    width: 30%;
    position: absolute;
    margin-left: 45vw;
    margin-top: 10vh;
`
function HomePage() {
    return (
        <Main>
            <Heading> DigiFinT </Heading><br />
            <Box>
                <Link to="/userdetails"> <Button> User </Button></Link><br />
                <Link to="/bankpage"> <Button> Bank </Button></Link><br />
                <Link to="/firmpage"> <Button> Firm </Button></Link>
            </Box>
        </Main>
    )
}

export default HomePage;