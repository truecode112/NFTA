import { useState } from "react";

const ContactUs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  return (
    <section id="a189d2c8dbb92a496665b6547260111d" className="wb_element wb-layout-element" data-plugin="LayoutElement">
      <div className="wb_content wb-layout-horizontal">
        <div id="a189d2c8dbb92bb95577b6dfd2029472" className="wb_element wb-layout-element" data-plugin="LayoutElement">
          <div className="wb_content wb-layout-horizontal">
            <div id="a189d2c8dbb92c5e261389335de1ec13" className="wb_element wb-layout-element" data-plugin="LayoutElement">
              <div className="wb_content wb-layout-vertical">
                <div id="a189d2c8dbb92df06ed66eb4715d8e08" className="wb_element wb_text_element leading-normal" data-plugin="TextArea">
                  <h4 className="wb-stl-custom12">Contact us for a meeting</h4>
                </div>
                <div id="a189d2c8dbb92efb75796864385ac815" className="wb_element" data-plugin="Form">
                  <div id="a189d2c8dbb92efb75796864385ac815_form" className="wb_form wb_vertical_form wb_form_ltr wb_form_vertical">
                    <input type="hidden" name="wb_form_id" value="215b176d" />
                    <input type="hidden" name="wb_form_uuid" value="e75104ec" />
                    <textarea name="message" rows="3" cols="20" className="hpc" autoComplete="off">
                    </textarea>
                    <table>
                      <tbody>
                        <tr>
                          <th>Name<span className="text-danger">&nbsp;*</span></th>
                          <td><input type="hidden" name="wb_input_0" value="Name" />
                            <div>
                              <input className="form-control form-field" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="" maxLength={255} name="wb_input_0" required="required" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>E-mail<span className="text-danger">&nbsp;*</span></th>
                          <td><input type="hidden" name="wb_input_1" value="E-mail" />
                            <div>
                              <input className="form-control form-field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="" name="wb_input_1" required="required" />
                            </div>
                          </td>
                        </tr>
                        <tr className="area-row">
                          <th>Message<span className="text-danger">&nbsp;*</span></th>
                          <td><input type="hidden" name="wb_input_2" value="Message" />
                            <div>
                              <textarea className="form-control form-field form-area-field" rows="8" placeholder="" name="wb_input_2" required="required" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                          </td>
                        </tr>
                        <tr className="form-footer">
                          <td colSpan={2} className="text-right">
                            <button type="submit" className="btn btn-default"><span>Submit</span></button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div id="a189d2c8dbb92f9d07d31f220375a1a6" className="wb_element wb-layout-element" data-plugin="LayoutElement">
              <div className="wb_content wb-layout-horizontal">
                <div id="a189d2c8dbb9306f4d3bb3777e267af8" className="wb_element wb-layout-element" data-plugin="LayoutElement">
                  <div className="wb_content wb-layout-vertical">
                    <div id="a189d2c8dbb93191b868043044df0ff6" className="wb_element wb_text_element leading-normal" data-plugin="TextArea">
                      <p className="wb-stl-custom13"><strong>Message Center:</strong></p>
                      <p className="wb-stl-custom13"><span dir="ltr" style={{direction : 'ltr'}}>+1 760 385 3942</span></p>
                      <p className="wb-stl-custom13">&nbsp;</p>
                      <p className="wb-stl-custom13"><strong>E-mail:</strong></p>
                      <p className="wb-stl-custom13">info@nfta.ink</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs;