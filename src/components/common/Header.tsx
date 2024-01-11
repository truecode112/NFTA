import logo from '/imgs/Orginal_inverse_Green_j_small-ts1700073248.jpg';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from 'react';

const Header = () => {
  const wallet = useWallet();

  useEffect(() => {
    (async () => {
      if (wallet) {
        console.log(wallet.publicKey);
      }
    })();
  }, [wallet, wallet.connected])

  return (
    <header className="w-full font-['NanumGothic'] flex flex-col justify-center items-center bg-primary pt-10">
      <div className='w-10/12 flex mt-2 justify-end'>
        <WalletMultiButton />
      </div>

      <div className='w-50'>
        <img
          src={logo}
          className='h-18 md:h-36 lg:h-44'>
        </img>
      </div>
      <ul className='flex gap-6 text-base items-center ml-48'>
        <li className='text-white cursor-pointer hover:text-[#d6fadc] hover:border-b-[0.5px] px-3 pb-1'>
          <a href="#nftas">
            <span>THE ART</span>
          </a>
        </li>
        <li className='text-white cursor-pointer hover:text-[#d6fadc] hover:border-b-[0.5px] px-3 pb-1'>
          <a href="#tokens">
            <span>THE TOKEN</span>
          </a>
        </li>
        <li className='text-white cursor-pointer hover:text-[#d6fadc] hover:border-b-[0.5px] px-3 pb-1'>
          <a href="#media">
            <span>MEDIA</span>
          </a>
        </li>
        <li className='text-white cursor-pointer hover:text-[#d6fadc] hover:border-b-[0.5px] px-3 pb-1'>
          <a href="#contact">
            <span>CONTACT</span>
          </a>
        </li>
        {/* <li className='text-white cursor-pointer hover:text-[#d6fadc] hover:border-b-[0.5px] px-3 pb-1'>
          <Link onClick={() => {
            window.location.replace("/#home");
          }}>
            <span>中國人</span>
          </Link>
        </li> */}
      </ul>
    </header>
  );
}

export default Header;