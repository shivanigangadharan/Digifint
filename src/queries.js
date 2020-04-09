import React from 'react';
import { gql } from 'apollo-boost';

const addUserDetails = gql`
mutation(
    $AcctNumber: Int
) {
    insert_ProviderBank(objects: {Account_Number: $AcctNumber}){
        affected_rows
        returning {
          Account_Number
        }
    }
  }
  
`

export { addUserDetails };