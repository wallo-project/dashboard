import * as React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

interface Props {
  data: any[];
  dataKey: string;
  name: string;
  limitDataDisplay?: boolean;
  maxDataDisplay?: number;
  width?: number;
  height?: number;
  strokeWidth?: number;
  strokeColor?: string;
  enableGrid?: boolean;
  gridColor?: string;
}

interface State {
  data: any[];
}

export default class ChartLine extends React.Component<Props, State> {
  public state = {
    data: [],
  };

  updateChart(newData: any) {

    if (this.props.limitDataDisplay && (this.state.data.length > (this.props.maxDataDisplay || 30))) {
      this.state.data.shift();
    }
    this.setState({
      data: [...this.state.data, newData],
    });
  }

  render() {
    return (
        <LineChart
          className="object-center mx-auto"
          data={this.props.data}
          width={this.props.width || 600}
          height={this.props.height || 300}
        >
          <Line
            name={this.props.name}
            type={"monotone"}
            dataKey={this.props.dataKey}
            stroke={this.props.strokeColor || "#FF0000"}
            strokeWidth={this.props.strokeWidth || 3}
            activeDot={{ r: 5 }}
          ></Line>
          <XAxis dataKey={this.props.dataKey} />
          <YAxis />
          {this.props.enableGrid && (
            <CartesianGrid stroke={this.props.gridColor || "#ccc"} />
          )}
          <Legend />
          <Tooltip />
        </LineChart>
    );
  }
}
