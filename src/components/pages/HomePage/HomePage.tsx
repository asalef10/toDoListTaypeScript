import { FC } from "react";
import Table from "../../fetchers/Table/Table";
import LineChart from "../LineChart/LineChart";

const HomePage: FC = () => {
  return (
    <>

      <Table />
      <br />
      <br />
      <LineChart />
  
    </>
  );
};
export default HomePage;
