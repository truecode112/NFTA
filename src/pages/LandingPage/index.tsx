import InquiryNow from "../../components/LandingPage/InquiryNow";
import QA from "../../components/LandingPage/QA";
import NFTACan from "../../components/LandingPage/NFTACAN";
import RealArt from "../../components/LandingPage/RealArt";
import WhyNFTA from "../../components/LandingPage/WhyNFTAs";
import BetterWay from "../../components/LandingPage/BetterWay";
import ONFA from "../../components/LandingPage/ONFA";
import YNFA from "../../components/LandingPage/YNFA";
import Media from "../../components/LandingPage/Media";
import ContactUs from "../../components/LandingPage/ContactUs";
import { ToastContainer } from "react-toastify";

const LandingPage = () => {
  return (
    <>
      <RealArt />
      <InquiryNow />
      <NFTACan />
      <div className="wb_main_bg">
        <QA />
        <WhyNFTA />
        <BetterWay />
        <ONFA />
        <YNFA />
        <Media />
        <ContactUs />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        closeOnClick
        rtl={false}
        theme="light"
      />
    </>
  );
}

export default LandingPage;