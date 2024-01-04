import logo from '/imgs/Orginal_inverse_Green_j_small-ts1700073248.jpg';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="w-full font-['NanumGothic'] flex flex-col justify-center items-center bg-primary pt-10">
      <div className='w-50'>
        <img
          src={logo}
          className='h-18 md:h-36 lg:h-44'>
        </img>
      </div>
      <ul className='flex gap-6 text-base items-center ml-48'>
        <li className='text-white cursor-pointer hover:text-[#d6fadc] hover:border-b-[0.5px] px-3 pb-1'>
          <Link onClick={() => {
            window.location.replace("/#a189d2c8dbb8060a8535c00f6860dcd6");
          }}>
            <span>THE ART</span>
          </Link>
        </li>
        <li className='text-white cursor-pointer hover:text-[#d6fadc] hover:border-b-[0.5px] px-3 pb-1'>
          <Link onClick={() => {
            window.location.replace("/#a189d2c8dbb910fd68e46dbcea9dd3a5");
          }}>
            <span>THE TOKEN</span>
          </Link>
        </li>
        <li className='text-white cursor-pointer hover:text-[#d6fadc] hover:border-b-[0.5px] px-3 pb-1'>
          <Link onClick={() => {
            window.location.replace("/#media");
          }}>
            <span>MEDIA</span>
          </Link>
        </li>
        <li className='text-white cursor-pointer hover:text-[#d6fadc] hover:border-b-[0.5px] px-3 pb-1'>
          <Link onClick={() => {
            window.location.replace("/#a189d2c8dbb92a496665b6547260111d");
          }}>
            <span>CONTACT</span>
          </Link>
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