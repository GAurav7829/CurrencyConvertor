import React from 'react';
import Currency from './Currency';

class CurrencyContainer extends React.Component {
    render() {
        console.log(this.props);
        return <>
            <Currency
                currencyValue={this.props.currencyValue}
                currencyHandler={this.props.currencyHandler}
            />

        </>
    }
}


export default CurrencyContainer;