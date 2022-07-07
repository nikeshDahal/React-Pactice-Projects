import react from "react";
import "./Chart.css";
import "./ChartBar";
const Chart = (props) => {
    const value = props.dataPoints.map(items=>items.value)
    const totalMaximum = Math.max(...value)
  return <div className="chart">
    {props.dataPoints.map(dataPoint=>{
        return(
            <chartBar
            key={dataPoint.label} 
            value={dataPoint.value} 
            maxValue={totalMaximum} 
            label={dataPoint.label}/>
        )
    })}
  </div>
};
export default Chart;
