import React from 'react';
import Coins from './Coins';
class ReferenceCoin extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            referenceCoin: {
                name: undefined,
                value: null,
                URL_TO_FETCH: "https://api.exchangeratesapi.io/latest",
            },
            Coins: {
                BRL: 0,
                CAD: 0,
                CNY: 0,
            }
        }
    }

    componentDidMount(){
        this.getReferenceCoin();
    }

    getReferenceCoin = () => {
        fetch(this.state.referenceCoin.URL_TO_FETCH)
        .then((response) => response.json())
        .then(this.updateReferenceCoin)
        .then(this.updateCoins)
        .catch(function(err){
            console.error('Failed retrieving information', err);
        });
    }

    updateReferenceCoin = (data) => {
        let newState = this.state.referenceCoin;
        newState.name = "USD";
        newState.value = data.rates.USD;
        this.setState(newState);
        return data;
    }

    updateCoins = (data) => {
        let usdValue = this.state.referenceCoin.value;
        let newState = this.state.Coins;

        console.log(data);

        newState.BRL = Math.round((usdValue/data.rates.BRL) * 100)/100;
        newState.CAD = Math.round((usdValue/data.rates.CAD) * 100)/100;
        newState.CNY = Math.round((usdValue/data.rates.CNY) * 100)/100;
        
        this.setState(newState);
    }

    render() {
        return (
            <div className="ReferenceCoin">
                <p>Working</p>
                <p>Reference: {this.state.referenceCoin.name} {this.state.referenceCoin.value} </p>
                <Coins
                CoinsObject = {this.state.Coins}
                />
            </div>
        );
    }
}

export default ReferenceCoin;
