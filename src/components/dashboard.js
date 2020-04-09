import React from 'react';
import styled from 'styled-components';
import UserDetails from './userdetails';
import pencil from '../images/pencil.jpg'


const DashBox = styled.div`
    box-shadow: 1px 1px 10px 3px yellow;
    padding: 5%;
    width: 40%;
    font-size: 150%;
    margin-left: 40vw;
    margin-top: 5%;
`
const Dash = styled.div`
    background-image: url(${pencil});
    background-position: center;
    background-size: cover;
    height: 100vh;
`
const Heading = styled.text`
    font-size: 600%;
    font-weight: 100;
    color: black;
    margin-top: 10%;
    margin-left: 45vw;
`

function Dashboard(props) {
    var vid = Math.floor(10000000 + Math.random() * 90000000);;
    return (
        <Dash>
            <Heading> Dashboard</Heading>
            <DashBox>

                Account holder name: acctname <br /><br />
                Account number: acctno <br /><br />
                Bank: bank <br /><br />
                IFSC Code: ifsc <br /><br />
                Branch: branch <br /><br /><br />
                Your unique verification id is: <b> {vid} </b>. Please keep it safely for future reference.
            </DashBox>

        </Dash>
    )
}

export default Dashboard;