import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Input, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';

const Box = styled.div`
    box-shadow: 1px 1px 10px 3px lightgray;
    width: 85%;
    margin: 5%;
    padding: 2%;
`
function UserDetails() {
    const [acctname, setAcctName] = useState('');
    const [acctno, setAcctNo] = useState();
    const [bank, setBank] = useState('');
    const [ifsc, setIfsc] = useState('');
    const [branch, setBranch] = useState('');
    const [uniqueID, setUniqueId] = useState();
    return (
        <div>
            <Box>
                <Input onChange={e => { setAcctName(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="Account holder name" />
                <Input onChange={e => { setAcctNo(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="Account Number" />
                <Input onChange={e => { setBank(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="Bank" />
                <Input onChange={e => { setIfsc(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="IFSC Code" />
                <Input onChange={e => { setBranch(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="Branch name" />
                <Button style={{ margin: '2%' }} htmlType="submit" type="primary"> Submit </Button>
            </Box>
            <Link to="/">
                <Button> Back </Button></Link>
        </div>
    )
}

export default UserDetails;