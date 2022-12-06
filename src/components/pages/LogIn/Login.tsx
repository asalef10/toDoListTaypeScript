import { useWeb3React } from "@web3-react/core";
import { FC } from "react";
import { injected } from "../../../walletInjected/injected";

const LogIn: FC = () => {
  const { activate, account } = useWeb3React();

  const connectWallet = (): void => {
    if (window.ethereum) {
      activate(injected);
      console.log(account);
    }
  };
  return (
    <>
    <div className="flex justify-center  h-screen	 items-center	">
      <div className="flex justify-center ">
        <div className="w-2/5 rounded shadow-lg flex justify-center">
          <img
            className="w-1/4 animate-bounce"
            src="https://cdn.worldvectorlogo.com/logos/metamask.svg"
            alt="Sunset in the mountains"
            />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"> Welcome ToDoList App</div>
            <br />
            <button
              onClick={connectWallet}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full 	 "
              >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
              </> 
  );
};

export default LogIn;
