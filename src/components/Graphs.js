import React from 'react';
import { VictoryLine, VictoryTheme, VictoryContainer, VictoryChart } from 'victory';

class Graphs extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            victoryLineDefaultStyle: {
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
            victoryLineData: [
                    { x: 1, y: 4 },
                    { x: 3, y: 0 },
            ]
        }
    }
    render() {
        return (
            <div className="Graphs">
                <VictoryChart
                    theme={VictoryTheme.material}
                    containerComponent={<VictoryContainer responsive={false} />}
                    width={450}
                    height={450}
                >
                    <VictoryLine
                        style={this.state.victoryLineDefaultStyle}
                        data={this.state.victoryLineData}
                    />
                </VictoryChart>
            </div>
        );
    }
}

export default Graphs;
