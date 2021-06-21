import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

const Currency = (props) =>{
    return <Form>
        <FormGroup>
            <Input type="text" placeholder="Enter amount in INR"
                    value={props.currencyValue} onChange={props.currencyHandler} />
        </FormGroup>
    </Form>
}

export default Currency;