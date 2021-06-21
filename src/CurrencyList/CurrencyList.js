import React from 'react';
import { Table } from 'reactstrap';

const CurrencyList = (props) => {
    console.log(props);
    return <Table>
        <thead>
            <tr>
                <th>Currency</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
                {
                props.currencies.map(currency => <tr>
                            <td>{currency.symbol}</td>
                            <td>{currency.value}</td>
                        </tr>
                )}
        </tbody>
    </Table>
}

export default CurrencyList;