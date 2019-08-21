import React from 'react';

class ReferenceCoin extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            referenceCoin: {
                name: undefined,
                value: null,
                URL_TO_FETCH: "https://api.exchangeratesapi.io/latest",
            },
        }
    }

    getReferenceCoin = () => {
        fetch(this.state.referenceCoin.URL_TO_FETCH)
        .then((response) => response.json())
        .then(this.updateReferenceCoin)
        .catch(function(err){
            console.error('Failed retrieving information', err);
        });

    }

    updateReferenceCoin = (data) => {
        let newState = this.state.referenceCoin;
        newState.name = "USD";
        newState.value = data.rates.USD;
        this.setState(newState);
    }

    render() {
        return (
            <div className="ReferenceCoin">
                <p>Working</p>
                <button onClick={this.getReferenceCoin}>Fetch</button>
                <p>   {this.state.referenceCoin.name} {this.state.referenceCoin.value} </p>
            </div>
        );
    }
}

export default ReferenceCoin;
