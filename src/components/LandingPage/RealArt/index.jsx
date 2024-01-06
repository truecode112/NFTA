
import { useEffect, useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { toast } from "react-toastify"

// const SERVER_URL = "http://localhost:4567"
const SERVER_URL = "https://dev.goodmealtime.com/nfta-api"
const API_ENDPOINT = SERVER_URL + "/complete_order";

const RealArt = () => {
  const [openModal, setOpenModal] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState('');
  const captureDetails = {
    description: 'NFTA Token',
    amount: {
      currency_code: 'USD',
      value: '20.00',
    }
  }

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [captureDetails]
    }).then((orderID) => {
      setOrderID(orderID);
      return orderID;
    })
  }

  const onCancel = (data, actions) => {
    console.log('Payment cancelled');
    setOpenModal(false);
    toast.info("Payment cancelled", {
      position: "top-right",
      autoClose: 4000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  // const order_process = new Promise(async (resolve, reject) => {
  //   try {
  //     console.log('order_process');
  //     if (orderID != '') {
  //       const payload = {
  //         orderId: orderID
  //       }
  //       const res = await fetch(`${API_ENDPOINT}`, {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify(payload),
  //       });
  //       if (res.status == 200) {
  //         const response = await res.json();
  //         if (response.status == 'COMPLETED') {
  //           console.log('resolve');
  //           return resolve('Payment success!!!');
  //         } else {
  //           return reject(`Payment status ${response.status}`)
  //         }
  //       } else {
  //         const response = await res.json();
  //         return reject(response.error);
  //       }
  //     }
  //   } catch (e) {
  //     console.error(e);
  //     return reject(e);
  //   }
  // })

  const completeOrder = async () => {
    if (orderID == '') return;
    const id = toast.loading('Processing...');
    try {
      console.log('completeOrder');
      const payload = {
        orderId: orderID
      }
      const res = await fetch(`${API_ENDPOINT}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.status == 200) {
        const response = await res.json();
        if (response.status == 'COMPLETED') {
          toast.update(id, { render: "Payment success", type: "success", isLoading: false, autoClose: true });
        } else {
          toast.update(id, { render: `Payment status is ${response.status}`, type: "info", isLoading: false, autoClose: true });
        }
      } else {
        const response = await res.json();
        toast.update(id, { render: response.error, type: "error", isLoading: false, autoClose: true });
      }
    } catch (e) {
      console.error(e);
      toast.update(id, { render: e, type: "error", isLoading: false, autoClose: true });
    }
  }

  const onApprove = (data, actions) => {
    return actions.order.capture().then(async function (details) {
      setOpenModal(false);
      console.log('onApprove >>> ', details);
      await completeOrder();
    });
  }

  const onError = (data, actions) => {
    setOpenModal(false);
    toast.error('Error occurred while processing payment')
    setErrorMessage("An Error occured with your payment ");
  }

  // const sleep = ms => new Promise(r => setTimeout(r, ms));

  const onClickBuy = async () => {
    // const id = toast.loading('Processing...');
    // await sleep(2000);
    // toast.update(id, { render: "All is good", type: "success", isLoading: false, autoClose: true });
    setOpenModal(true);
  }

  return (
    <PayPalScriptProvider options={{ "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID }}>
      <section
        id="realart"
        className="flex justify-center items-center flex-col">
        <div className="mt-32 mb-20">
          <h1 className="wb-stl-heading1">
            <span className="text-[#efedff]">
              <strong>THE FUTURE OF EXCHANGE:</strong>
            </span>
          </h1>
          <h1 className="wb-stl-heading1">
            <span className="text-[#2b7040]">
              <strong>REAL ART</strong>
            </span>
          </h1>
        </div>

        <div id="a18bd529f2d100c27a2ba9251b942f3f" className="wb_element wb-layout-element" data-plugin="LayoutElement">
          <div className="wb_content wb-layout-vertical">
            <div id="a18bd64576a300cca6813106111e28d6" className="wb_element wb-layout-element" data-plugin="LayoutElement">
              <div className="wb_content wb-layout-horizontal">
                <div id="a18a3e5c326f00c0d12ee5b2546824b6" className="wb_element wb_text_element leading-normal" data-plugin="TextArea">
                  <h5 className="wb-stl-custom14">
                    <span className="text-[48px]">
                      <strong>COMING SOON!</strong>
                    </span>
                  </h5>
                  <p>&nbsp;</p>

                  <h5 className="wb-stl-custom14">
                    <font color="#efedff">
                      The 2024 Non Fungible Art Token (NFA)
                    </font>
                    <br />
                    <em>limited supply, minted on Solana, all tokens backed by real art!</em>
                  </h5>
                </div>
              </div>
            </div>
            <div id="a18bd52bd91900c1ac3bedc2a6a69527" className="wb_element wb-layout-element" data-plugin="LayoutElement">
              <div className="wb_content wb-layout-horizontal">
                <div id="a18bd52938ae003ee1c1e7d747a0e805" className="wb_element" data-plugin="Button">
                  <button className="wb_button cursor-pointer" data-popup-processed="true" onClick={onClickBuy}>
                    <div className="wrap_button">
                      <span>BUY</span>
                      <div className="subtext">
                        <span>NFA Tokens</span>
                      </div>
                    </div>
                  </button>
                </div>
                <div id="a18bd52bad2900b717dc885209f51f77" className="wb_element" data-plugin="Button">
                  <a className="wb_button" data-popup-processed="true">
                    <div className="wrap_button">
                      <span>REDEEM</span>
                      <div className="subtext">
                        <span>NFA Tokens</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div id="a18c5bffe36e0099c6eeb3ec7739a6d8" className="wb_element wb-layout-element" data-plugin="LayoutElement">
              <div className="wb_content wb-layout-horizontal">
                <div id="a18c5bffe372005cae6498f5bef6a65b" className="wb_element cursor-pointer" data-plugin="Button">
                  <button className="wb_button cursor-pointer" onClick={onClickBuy}>
                    <div className="wrap_button">
                      <span>BUY</span>
                      <div className="subtext">
                        <span>NFA Tokens</span>
                      </div>
                    </div>
                  </button>
                </div>
                <div id="a18c5bffe37b0013f913555ea14c34a0" className="wb_element wb_element_picture" data-plugin="Picture" title="">
                  <div className="wb_picture_wrap">
                    <div className="wb-picture-wrapper">
                      <img alt="" src="imgs/Solana_Favi_NFA-ts1700107126.png" />
                    </div>
                  </div>
                </div>
                <div id="a18c5bffe38000617f9ca67f842125df" className="wb_element" data-plugin="Button">
                  <a className="wb_button" data-popup-processed="true">
                    <div className="wrap_button">
                      <span>REDEEM</span>
                      <div className="subtext">
                        <span>NFA Tokens</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div id="a18bd52a4d0100136b56884d352919ce" className="wb_element wb_text_element leading-normal" data-plugin="TextArea">
              <h5 className="wb-stl-custom14">
                <strong>
                  <span className="text-[28px]">An easy process to buy your first tokens!</span>
                </strong>
              </h5>
              <h5 className="wb-stl-custom14">Or add it to your Solana wallet already setup.</h5>
              <p className="wb-stl-normal">&nbsp;</p>
              <p className="wb-stl-custom13" style={{ textAlign: 'center' }}>
                <span className="text-[#57c478]">
                  <span className="text-[36px]">1&#41; Get a Solana wallet (<a data-_="Link" href="https://phantom.app/download" target="_blank" data-popup-processed="true">HERE</a> or <a data-_="Link" href="https://www.backpack.app/downloads" target="_blank" data-popup-processed="true">HERE</a>&nbsp;or <a data-_="Link" href="https://solflare.com/" data-popup-processed="true">HERE</a>)
                  </span>
                </span>
              </p>
              <p className="wb-stl-custom13" style={{ textAlign: 'center' }}>
                <span className="text-[#57c478]">
                  <span className="text-[36px]">2&#41; Buy as little as $20&nbsp;worth of NFA</span>
                </span>
              </p>
              <h5 className="wb-stl-custom14">&nbsp;</h5>
              <h5 className="wb-stl-custom14">Art Mint Exchange will send your tokens to your wallet address within 24 hours.</h5>
              <h5 className="wb-stl-custom14">&nbsp;</h5>
              <h5 className="wb-stl-custom14">
                <span className="text-[36px]">
                  <span className="text-[#57c478]">"The first coin/token backed by non fungible tokenized&nbsp;art"
                  </span>
                </span>
              </h5>
            </div>
          </div>
        </div>
        <div id="a189d2c8dbb716ca12993a9aed233c30" className="wb_element wb-elm-orient-horizontal" data-plugin="Line">
          <div className="wb-elm-line">
          </div>
        </div>
        <div id="a189d2c8dbb6144c40195108bdfbd2c5" className="wb_element wb-layout-element" data-plugin="LayoutElement">
          <div className="wb_content wb-layout-horizontal">
            <div id="a189d2c8dbb61581a4f52af98339b0b5" className="wb_element wb-layout-element" data-plugin="LayoutElement">
              <div className="wb_content wb-layout-horizontal">
                <div id="a18bd63f4e7d00f63e17eac4188a4eec" className="wb_element wb_text_element leading-normal" data-plugin="TextArea">
                  <h5 className="wb-stl-custom14">
                    <span className="text-[48px]">
                      <strong>COMING JULY 2024!</strong>
                    </span>
                  </h5>
                  <h5 className="wb-stl-custom14">
                    <span className="text-[36px]">
                      <font color="#efedff">THE NFTA TO BACK ALL (My Precious)</font>
                    </span><br />
                    <em>head-to-head with Bitcoin, all tokens backed by real art!</em></h5>
                  <h5 className="wb-stl-custom14">
                    <span className="text-[36px]">
                      <strong>
                        <span className="text-[#57c478]">$250,000 per set of five NFTAs</span>
                      </strong>
                    </span>
                  </h5>
                  <h5 className="wb-stl-custom14">Inquire and don't mis out...only 20 sets in the first collection.</h5>
                </div>
                <div id="a189d2c8dbb616cf802319eadd62ba98" className="wb_element wb-layout-element" data-plugin="LayoutElement">
                  <div className="wb_content wb-layout-vertical">
                    <div id="a189d2c8dbb70f8246db5f5a45f41c54" className="wb_element wb-layout-element" data-plugin="LayoutElement">
                      <div className="wb_content wb-layout-horizontal">
                        <div id="a18a718973690013f0d3e465662b4f2d" className="wb_element wb_text_element leading-normal" data-plugin="TextArea">
                          <h5 className="wb-stl-custom14">Sets Remaining In Presale Event:</h5>
                        </div>
                      </div>
                    </div>
                    <div id="a18a7188eba1003cdcdf01eac45e5702" className="wb_element wb-layout-element" data-plugin="LayoutElement">
                      <div className="wb_content wb-layout-horizontal">
                        <div id="a18a7188eba4001acbc6b5a34eaf8e00" className="wb_element wb_element_picture" data-plugin="Picture" title="">
                          <div className="wb_picture_wrap">
                            <div className="wb-picture-wrapper">
                              <img alt="" src="imgs/Left-removebg-preview-ts1694122229.png" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="a18bd63cffec0040d3d71bc61a37f29d" className="wb_element wb_element_picture" data-plugin="Picture" title="">
              <div className="wb_picture_wrap"><div className="wb-picture-wrapper">
                <img alt="" src="imgs/b09e34b8285f07fb2cb0dd12babee330_898x706_fit.jpg" />
              </div>
              </div>
            </div>
          </div>
        </div>

        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Select Payment Option</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <PayPalButtons
                style={{ layout: 'vertical' }}
                createOrder={createOrder}
                onApprove={onApprove}
                onCancel={onCancel}
                onError={onError}
              />
            </div>
          </Modal.Body>
        </Modal>
      </section>
    </PayPalScriptProvider>
  );
}

export default RealArt;