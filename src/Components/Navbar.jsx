import { useState } from "react";

const Navbar = () => {

            // Get the button that opens the modal
            const [modalState, setModalState] = useState(false);
            const [modalContentState, setModalContentState] = useState(true)

            function openModal() {
                setModalState(true);
            }
              
            function closeModal() {
                setModalState(false);
            }

            function getByPhoneLink(){
                setModalContentState(false);
            }

            function getByQrCode(){
                setModalContentState(true);
            }

    return(
        <>
        <nav>
            <div className="logo" >
              <img src="https://web-assets.cred.club/_next/assets/images/home-page/cred-logo.png"/>
            </div>
            <ul className="NavLinks">
               <li><a href="#">blog</a></li> 
               <li><a href="/careers">we're hiring</a></li> 
            </ul>
            <div className="download-btn-nav">
                <button onClick={openModal}>Download CRED</button> 
            </div>
            
        </nav>

        <div id="myModal" class="modal" style={{display: modalState ? "block" : "none"}}>

            <div class="modal-content">
                <span class="close" onClick={closeModal}>&times;</span>

                <div className="phone-number-link" style={{display:modalContentState?"block":"none"}}>
                    <h4 style={{fontSize:"28px"}}>enter your phone number <br/>
                    to get the link via SMS</h4>
                    <p onClick={getByPhoneLink}  style={{margin:"20px 0 20px 0"}}>alternatively, <strong>scan QR code</strong></p>
                    <input type="text" placeholder="+91 9999988888" style={{padding:"15px",width:"300px",borderRadius:"50px",border:"1px solid black",outline:"none"}}/>
                </div>

                <div className="qr-code-link" style={{display:modalContentState?"none":"block"}}>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div style={{width:"100%",paddingLeft:"10px"}}>
                            <h4 style={{fontSize:"28px"}}>find out if you’ve made it. scan this QR code.</h4>
                            <p onClick={getByQrCode} style={{margin:"20px 0 20px 0"}}>alternatively, <strong>send sms</strong></p>
                            <ul style={{margin:"20px",lineHeight:1.5}}>
                                <li>open your phone camera and point it at the QR code.</li>
                                <li>alternatively, download any QR code scanner to scan.</li>
                                <li style={{display:"none"}}></li>
                                <li>click on the link generated to download CRED.</li>
                            </ul>
                        </div>
                        <div style={{width:"100%",textAlign:"center"}}>
                            <img src="https://web-assets.cred.club/_next/assets/images/home-page/download-qr.png" style={{height:"300px"}}/>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        </>
    )
}

export default Navbar;