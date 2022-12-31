import * as React from "react";
import {
  ResponsiveContainer,
  Legend,
  Tooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

interface Props {
  data: any[];
  axisKey: string;
  dataKey: string;
  legend: string;
  maxDataDisplay?: number;
  width?: number;
  height?: number;
  strokeWidth?: number;
  strokeColor?: string;
  fillColor?: string;
  enableGrid?: boolean;
  gridColor?: string;
}

interface State {
  data: any[];
}

export default class ChartRadar extends React.Component<Props, State> {
  public state = {
    data: [],
  };

  updateChart(domain: any, value: any) {
  }

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={this.props.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey={this.props.axisKey} />
        <PolarRadiusAxis />
        <Radar
          name={this.props.legend}
          dataKey={this.props.dataKey}
          stroke={this.props.strokeColor || "#FF0000"}
          strokeWidth={this.props.strokeWidth || 3}
          fill={this.props.fillColor || "#AA0000"}
          fillOpacity={0.6}
        />
        <Legend />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
    );
  }
}
