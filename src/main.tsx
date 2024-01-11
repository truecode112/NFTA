import { ReactNode, useMemo } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './common.css'
import { BrowserRouter } from 'react-router-dom'

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider
} from "@solana/wallet-adapter-react-ui";
import {
  // GlowWalletAdapter,
  PhantomWalletAdapter,
  // SlopeWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";

interface Props {
  children?: ReactNode
}

export const Context = ({ children }: Props) => {
  const network = "https://us-west-1.genesysgo.net/{YOUR_ACCOUNT_UUID_HERE}";
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      // new GlowWalletAdapter(),
      // new SlopeWalletAdapter(),
      new TorusWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider
      endpoint={network}
      config={{
        commitment: "confirmed",
        httpHeaders: {
          Authorization:
            "Bearer {GENESYSGO AUTHENTICATION TOKEN HERE}",
        },
      }}
    >
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter>
)
