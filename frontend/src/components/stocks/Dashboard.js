import React, { Fragment } from 'react';
import Form from './Form';
import Stocks from './Stocks';


export default function Dashboard() {
    return (
        <Fragment>
            <Form />
            <Stocks/>            
        </Fragment>
    )
}
