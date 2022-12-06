import { useEffect } from "react";
import "./App.css";
import HomePage from "./components/pages/HomePage/HomePage";
import { useWeb3React } from "@web3-react/core";
import LogIn from "./components/pages/LogIn/Login";
import { useGlobalContext } from "./useContext/Context";

function App() {
  const { dataTasks, setDataTasks } = useGlobalContext();
  const { account } = useWeb3React();
  useEffect(() => {
    if (account) {
      try {
        const storageArray = JSON.parse(localStorage.getItem(account) || "");
        if (storageArray == undefined) {
          setDataTasks([]);
        }
        setDataTasks(storageArray);
      } catch (err) {
        setDataTasks([]);
      }
    }
  }, [account]);

  useEffect(() => {
    if (account) {
      if (dataTasks) {
        localStorage.setItem(account, JSON.stringify(dataTasks));
      }
    }
  }, [dataTasks]);

  const addressShortcut = (addressWallet: string | any) => {
    let address = `${addressWallet?.slice(0, 6)}...${addressWallet?.slice(
      -4
    )} `;
    return address;
  };

  return (
    <>
      <div className=" bg-slate-50">
        {account && <h3>{addressShortcut(account)}</h3>}
        <br />
        {account ? <HomePage /> : <LogIn />}
      </div>
    </>
  );
}

export default App;
