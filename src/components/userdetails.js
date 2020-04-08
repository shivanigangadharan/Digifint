import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Icon } from 'antd';
import { Link } from 'react-router-dom';
import wallet5 from '../images/wallet5.jpg'

const Box = styled.div`
    padding: 2%;
    width: 40%;
    margin-top: 9%;

`
const Input = styled.input`
    background: none;
    border: 1px solid white;
    font-size: 120%;
    padding: 1%;
    color: white;
    margin-top: 3%;
`
const Button = styled.button`
    background: none;
    color: white;
    font-size: 130%;
    padding: 1.5%;
    border: 1px solid white;
    width: 40%;
    margin-top: 2%;
    :hover{
        background: white;
        opacity: 0.8;
        color: black;
        transition-duration: 1s;
    }
`
const Main = styled.div`
    background-image: url(${wallet5});
    height: 100vh;
    background-repeat: none;
    background-position: center;
    background-size: cover;
    text-align:center;
    padding-top: 1%;
`
function UserDetails() {
    const [acctname, setAcctName] = useState('');
    const [acctno, setAcctNo] = useState();
    const [bank, setBank] = useState('');
    const [ifsc, setIfsc] = useState('');
    const [branch, setBranch] = useState('');
    const [uniqueID, setUniqueId] = useState();
    return (
        <Main><center>
            <Box>
                <Input onChange={e => { setAcctName(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="Account holder name" />
                <br /> <Input onChange={e => { setAcctNo(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="Account Number" />
                <br /><Input onChange={e => { setBank(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="Bank" />
                <br /><Input onChange={e => { setIfsc(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="IFSC Code" />
                <br /><Input onChange={e => { setBranch(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="Branch name" />
                <br />  <Button style={{ margin: '2%' }} htmlType="submit" type="primary"> Submit </Button>
            </Box></center>

        </Main>
    )
}

export default UserDetails;