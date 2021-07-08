import logo from './logo.svg';
import './App.css';
import { SyncButton } from "./components/SyncButton";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://unpkg.com/@metamask/legacy-web3@latest/dist/metamask.web3.min.js';
      //script.async = true;
      document.head.appendChild(script);
    }, []);

  const getAccount = () => {
    const { web3 } = window
    const selectedAddress = web3.eth.defaultAccount
    showConnetion();

    async function showConnetion() {
      if (window.ethereum)
      {
        try {
				  await window.ethereum.enable();
        } catch (err) {
          console.log("Access to your Ethereum account rejected.");
        }
      }
      if (typeof web3 === 'undefined'){
        console.log("CanNOT access the Ethereum Web3 injected API from your Web browser.");
      }
    }
    let account = selectedAddress;
    console.log('v: ', account);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello web3.</h1>
        <SyncButton handleClick={getAccount} title = {"Sync-ETH"}></SyncButton>
      </header>
    </div>
  );
}

export default App;
