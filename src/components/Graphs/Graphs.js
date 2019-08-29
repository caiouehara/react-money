import React from 'react';
import DateRateGraph from './DateRateGraph';

class Graphs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            victoryLine: {
                graphsData: {
                    BRL: {
                        isShowing: false,
                        data: [{ x: 0, y: 0 }],
                    }
                },
                defaultStyle: {
                    parent: {
                        border: "1px solid #ccc"
                    },
                    data: {
                        fill: "#c43a31", fillOpacity: 0.6, stroke: "#c43a31", strokeWidth: 3
                    },
                    labels: {
                        fontSize: 15, fill: "#c43a31", padding: 15,
                    }
                },
            }
        }
    }

    updateGraphs = () => {
        let newState = this.state.victoryLine.graphsData;
        let Coins = this.props.CoinsObject;
        let dateRate = parseInt(this.props.dateRate.slice(8));

        for(var i in Coins){
            if(newState[i]){
                newState[i].data.push({ x: dateRate, y: Coins[i]})
            }
            else{
                console.error(`graphData ${i} don't exist`);
            }
        }

        this.setState(newState);
    }

    render() {
        return (
            <div className="Graphs">
                {this.state.victoryLine.graphsData.BRL.isShowing ? 
                <DateRateGraph
                    victoryLine={this.state.victoryLine}
                    graphData={this.state.victoryLine.graphsData.BRL.data}
                /> : ''}
                <button onClick={this.updateGraphs}>Teste</button>
            </div>
        );
    }
}

export default Graphs;