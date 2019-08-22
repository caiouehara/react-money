import React from 'react';
import Coins from './Coins';
class ReferenceCoin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            referenceCoin: {
                name: undefined,
                value: null,
                URL_TO_FETCH: "https://api.exchangeratesapi.io/latest",
                data: undefined,
            },
            Coins: {
                BRL: 0,
                CAD: 0,
                CNY: 0,
            }
        }
    }

    componentDidMount() {
        this.getExchangeData();
    }

    setFirstReferenceCoin = () =>{
        if(this.state.referenceCoin.name === undefined){
            this.updateReferenceCoin("USD", this.state.referenceCoin.data.rates.USD);
            this.updateCoins();
        }
    }

    getExchangeData = () => {
        fetch(this.state.referenceCoin.URL_TO_FETCH)
            .then((response) => response.json())
            .then(this.updateExchangeData)
            .then(this.setFirstReferenceCoin)
            .catch(function (err) {
                console.error('Failed retrieving information', err);
            });
    }

    updateExchangeData = (data) =>{
        let newState = this.state.referenceCoin;
        newState.data = data;
        this.setState(newState);
    }

    updateReferenceCoin = (countryName, countryExchangeRates) => {
        let newState = this.state.referenceCoin;
        newState.name = countryName;
        newState.value = countryExchangeRates;
        this.setState(newState);
    }

    updateCoins = () => {
        let referenceCoinValue = this.state.referenceCoin.value;
        let data = this.state.referenceCoin.data;
        let newState = this.state.Coins;

        newState.BRL = Math.round((referenceCoinValue / data.rates.BRL) * 100) / 100;
        newState.CAD = Math.round((referenceCoinValue / data.rates.CAD) * 100) / 100;
        newState.CNY = Math.round((referenceCoinValue / data.rates.CNY) * 100) / 100;

        this.setState(newState);
    }

    handleSelectBox = (event) => {
        switch (event.target.value) {
            case "USD":
                this.updateReferenceCoin("USD", this.state.referenceCoin.data.rates.USD);
                this.updateCoins();
                break;
            case "CAD":
                this.updateReferenceCoin("CAD", this.state.referenceCoin.data.rates.CAD);
                this.updateCoins();
                break;
            default:
                console.log('error');
                break;
        }
    }

    render() {
        return (
            <div className="ReferenceCoin">
                <p>Working</p>
                <select onChange={this.handleSelectBox}>
                    <option value="USD" >USD</option>
                    <option value="CAD" >CAD</option>
                </select>
                <p> EUR to {this.state.referenceCoin.name} {this.state.referenceCoin.value} </p>
                <Coins
                    CoinsObject={this.state.Coins}
                />
            </div>
        );
    }
}

export default ReferenceCoin;
