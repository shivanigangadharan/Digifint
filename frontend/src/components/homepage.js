import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
    border: 1px solid black;
    border-radius: 4px;
`

function HomePage() {
    return (
        <div>
            homepage
            <br /><br />
            <Link to="/userdetails"> <Button> User </Button></Link>
            <Link to="/bankpage"> <Button> Bank </Button></Link>
            <Link to="/firmpage"> <Button> Firm </Button></Link>

        </div>
    )
}

export default HomePage;