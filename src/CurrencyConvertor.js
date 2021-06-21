import React from 'react';
import CurrencyContainer from './Currency/CurrencyContainer';
import CurrencyListContainer from './CurrencyList/CurrencyListContainer';
import { Card, Container, Row, Col } from 'reactstrap';

class CurrencyConvertor extends React.Component {
    constructor() {
        super();

        this.state = {
            currencyValue: null,
            currencies: [{
                symbol: "Dollar",
                rate: 0.04,
                value: 0
            }, {
                symbol: "Euro",
                rate: 0.05,
                value: 0
            }, {
                symbol: "Pound",
                rate: 0.005,
                value: 0
            }]
        }
    }

    currencyHandler = (e) => {
        console.log(e.target.value);
        /*
        this.setState({
            currencyValue:e.target.value
        });
    */

        const newState = JSON.parse(JSON.stringify(this.state));
        newState.currencyValue = e.target.value;
        newState.currencies.forEach(currency => {
            currency.value = e.target.value * currency.rate;
        });
        this.setState(newState);
    }


    render() {
        console.log(this.state);
        return <Container>
            <Row>
                <Col>
                    <div className="text-center mt-5">
                        <h3>Dummy Currency Convertor</h3>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ padding: "10px", margin: "30px" }}>
                        <CurrencyContainer currencyValue={this.state.currencyValue}
                            currencyHandler={this.currencyHandler} />
                        <CurrencyListContainer currencies={this.state.currencies} />
                    </Card>
                </Col>
            </Row>
        </Container>
    }
}

export default CurrencyConvertor;