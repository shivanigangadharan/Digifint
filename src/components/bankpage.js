import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Box = styled.div`
    box-shadow: 1px 1px 10px 3px lightgray;
    width: 85%;
    margin: 5%;
    padding: 2%;
`
function BankPage() {
    return (
        <div>bank page
        <Box>
                <input placeholder="Enter unique id of user" /><br /><br />
                <button> Submit </button> &emsp;
            <Link to="/"><button> Back </button></Link>
            </Box>
        </div>
    )
}

export default BankPage;