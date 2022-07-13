import React from "react"
import {Control, LineChart, SensorStat} from "@/widgets"
import {airHumidity, airTemperature, concentrations, lightIntensity, soilHumidity, soilTemperature} from "@/data"
import {range} from "d3-array"

const colors = [
  "rgb(87,215,236)",
  "rgb(161,105,229)",
  "rgb(236,119,199)",
  "rgb(236,55,97)",
  "rgba(255,211,12,0.88)",
  "rgb(226,163,239)",
  "rgba(229,53,255,0.9)"
]

const Index = ({}) => {

  return <div className={"grid grid-cols-12 gap-x-4 h-screen px-6 py-3 bg-gray-100"}>
    <div className={"col-span-4 flex flex-col space-y-2"}>
      <div className={"h-1/3 rounded-md bg-white"}>
        <div className={"text-gray-700/90 bg-white pl-4 pr-3 pt-5 pb-6"}>
          <h4 className={"text-lg font-medium"}>实时环境监测</h4>

          <div className={"mt-4"}>
            <div className={"grid grid-cols-2 gap-y-2 mb-2"}>
              <SensorStat name={"空气温度"} value={"31°C"}/>
              <SensorStat name={"空气湿度"} value={"83%"}/>
              <SensorStat name={"晴雨"} value={"多云"}/>
              <SensorStat name={"光照强度"} value={"63klux"}/>
              <SensorStat name={"土壤温度"} value={"25°C"}/>
              <SensorStat name={"土壤湿度"} value={"65%"}/>
              <SensorStat name={"风速"} value={"1.3m/s"}/>
              <SensorStat name={"风向"} value={"东北"}/>
            </div>
            <SensorStat name={"二氧化碳浓度"} value={"70ppm"}/>
          </div>
        </div>
      </div>

      <div className={"text-gray-700/90 h-2/3 bg-white pl-4 pr-3 pt-5 pb-6"}>
        <h4 className={"text-lg font-medium"}>日志信息</h4>
      </div>
    </div>

    <div className={"col-span-8 flex flex-col space-y-2"}>
      <div className={"h-2/3 grid grid-cols-3 grid-rows-2 place-content-center bg-white rounded-md"}>
        <LineChart
          data={airTemperature}
          domain={[15, 35]}
          stroke={colors[0]}
          title={"空气温度"}
          alert={30}
          unit={"°C"}
        />
        <LineChart
          data={airHumidity}
          domain={[50, 100]}
          stroke={colors[1]}
          title={"空气湿度"}
          alert={80}
          unit={"%"}
        />
        <LineChart
          data={concentrations}
          domain={[400, 600]}
          stroke={colors[2]}
          title={"二氧化碳浓度"}
          alert={450}
          unit={"ppm"}
        />
        <LineChart
          data={lightIntensity}
          domain={[0, 100]}
          stroke={colors[3]}
          title={"光照强度"}
          alert={80}
          unit={"klux"}
        />
        <LineChart
          data={soilTemperature}
          domain={[15, 35]}
          stroke={colors[4]}
          title={"土壤温度"}
          alert={30}
          unit={"°C"}
        />
        <LineChart
          data={soilHumidity}
          domain={[50, 100]}
          stroke={colors[5]}
          title={"土壤湿度"}
          alert={80}
          unit={"%"}
        />
      </div>

      <div className={"h-1/3 grid grid-cols-3 gap-x-2"}>
        <div className={"text-gray-700/90 bg-white pl-4 pr-3 pt-5 pb-6"}>
          <h4 className={"text-lg font-medium"}>生产智能控制</h4>

          <div className={"grid grid-cols-2 gap-y-2 mt-4"}>
            <Control name={"排气扇1"}/>
            <Control name={"排气扇2"}/>
            <Control name={"遮光帘1"}/>
            <Control name={"遮光帘2"}/>
            <Control name={"加湿设备1"}/>
            <Control name={"加湿设备2"}/>

          </div>
        </div>

        <div className={"text-gray-700/90 bg-white pl-6 pr-8 pt-5 pb-6"}>
          <h4 className={"text-lg font-medium"}>传感器设备状态</h4>

          <div className={"flex justify-between mt-4"}>
            <ul className={"flex flex-col space-y-2 text-gray-600"}>
              <li>温湿度检测仪1</li>
              <li>光照检测仪1</li>
              <li>二氧化碳传感器1</li>
              <li>悬浮物检测仪1</li>
            </ul>

            <ul className={"flex flex-col space-y-2"}>
              {range(4).map(i => <li key={i} className={"text-green-500/90"}>运行正常</li>)}
            </ul>
          </div>
        </div>

        <div className={"text-gray-700/90 bg-white pl-6 pr-8 pt-5 pb-6"}>
          <h4 className={"text-lg font-medium"}>设备警报</h4>

          <div className={"mt-4"}>
            无
          </div>
        </div>

      </div>
    </div>

  </div>
}

export default Index
