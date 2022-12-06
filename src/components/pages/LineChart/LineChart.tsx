import { useWeb3React } from "@web3-react/core";
import { FC, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useGlobalContext } from "../../../useContext/Context";
const LineChart:FC = () => {
  const { account } = useWeb3React();
  const {dataTasks} = useGlobalContext();
  const [chartDetails, setChartDetails] = useState({});
  useEffect(() => {
    try {
      setChartDetails(
        JSON.parse(localStorage.getItem(`${account}_chartDetails`) || "{}")
      );
    } catch (err) {
      setChartDetails({});
    }
  }, [account, dataTasks]);
  
  const keysItem = Object.keys(chartDetails || {});
  const valuesItem = Object.values(chartDetails || {});

  let series: any = [
    {
      name: "Quantity",
      data: valuesItem,
    },
  ];

  let options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Trends in tasks by date",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: keysItem,
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};
export default LineChart;
