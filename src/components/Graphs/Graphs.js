import React from 'react';
import DateRateGraph from './DateRateGraph';

class Graphs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            victoryLine: {
                graphsData: {
                    BRL: [
                          { x: 1, y: 1 }, 
                          { x: 2, y: 2 }  
                         ],
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

    render() {
        return (
            <div className="Graphs">
                <DateRateGraph
                    victoryLine={this.state.victoryLine}
                    graphData={this.state.victoryLine.graphsData.BRL}
                />
            </div>
        );
    }
}

export default Graphs;