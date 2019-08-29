import React from 'react';
import { VictoryLine, VictoryTheme, VictoryContainer, VictoryChart } from 'victory';

class DateRateGraph extends React.Component {
    render() {
        return (
            <div className="DateRateGraph">
                <VictoryChart
                    theme={VictoryTheme.material}
                    containerComponent={<VictoryContainer responsive={false} />}
                    width={450}
                    height={450}
                >
                    <VictoryLine
                        style={this.props.victoryLine.defaultStyle}
                        data={this.props.graphData}
                    />
                </VictoryChart>
            </div>
        );
    }
}

export default DateRateGraph;