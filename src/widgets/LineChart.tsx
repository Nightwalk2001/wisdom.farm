import {scaleLinear} from "d3-scale"
import {curveNatural, line} from "d3-shape"
import {useRef} from "react"
import {AxisBottom, AxisLeft} from "@visx/axis"
import {Grid} from "@visx/grid"

type Props = {
  data: number[]
  domain?: [number, number]
  title: string
  alert: number
  stroke?: string
  unit?: string
}

export const LineChart = ({
                            data,
                            domain = [70, 100],
                            title,
                            alert,
                            stroke = "#a979e5",
                            unit = ""
                          }: Props) => {
  const width  = 250,
        height = 170,
        margin = {
          left: 45,
          right: 0,
          top: 25,
          bottom: 25
        }

  const ref = useRef(null)

  const x = scaleLinear()
    .domain([0, 16])
    .range([0, width])
    .nice()

  const y = scaleLinear()
    .domain(domain)
    .range([height, 0])
    .nice()

  const lineFn = line<number>()
    .x((_, i) => x(i + 1))
    .y(d => y(d))
    .curve(curveNatural)

  return <svg
    ref={ref}
    width={width + margin.left + margin.right}
    height={height + margin.top + margin.bottom}
  >
    <g transform={`translate(${margin.left}, ${margin.top})`}>
      <AxisLeft
        scale={y}
        stroke={"#606162"}
        hideTicks
        numTicks={5}
        tickLength={5}
        tickStroke={"#606162"}
        tickTransform={"translate(-5, 5)"}
        tickLabelProps={() => ({
          fontSize: 12,
          textAnchor: "end",
          fill: "#606162"
        })}
        label={"单位: " + unit}
        labelOffset={25}
        labelProps={{fontSize: 12, textAnchor: "middle", fill: "#606162"}}
      />
      <AxisBottom
        scale={x}
        top={height}
        numTicks={4}
        hideTicks
        stroke={"#606162"}
        tickFormat={v => `${v}时`}
        tickLabelProps={() => ({
          fontSize: 12,
          textAnchor: "middle",
          fill: "#606162"
        })}
      />
      <Grid width={width} height={height} xScale={x} yScale={y} stroke={"#d8d9dc"}/>

      <path
        d={lineFn(data)}
        fill={"none"}
        stroke={stroke}
        strokeWidth={1.5}
      />

      <text x={x(8)} y={12} fontSize={14} textAnchor={"middle"} fill={"#6f757a"}>{title}</text>

      <line
        x1={0}
        x2={width}
        y1={y(alert)}
        y2={y(alert)}
        stroke={"#ee5579"}
        strokeWidth={1.5}
        strokeDasharray={"3 2"}
        strokeOpacity={0.7}
      />

      <text
        x={5}
        y={y(alert) - 5}
        fontSize={12}
        fill={"#ee5579"}
        fillOpacity={0.7}>
        {alert}
      </text>
    </g>
  </svg>
}
