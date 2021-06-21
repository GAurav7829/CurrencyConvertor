import React from 'react';
import CurrencyList from './CurrencyList';

class CurrencyListContainer extends React.Component {
    render() {
        console.log(this.props);
        return <>
            <CurrencyList
                currencies={this.props.currencies}
            />
        </>
    }
}

export default CurrencyListContainer;