import "./StylesCalculator.css";
import Footer from "../../Components/Footer";
import CalNavbar from "./Cal-Components/CalNavbar";
import Calculators from "./CalculatorsPage";
import Calculator from "./Cal-Components/LoanCalculator";

const SipCalculator = () => {
    return(
           <div>
               <CalNavbar/>

                  <div className="sip-cal-container">
                        <h2>SIp Cal</h2>
                        <p>
                            an sip calculator is an online tool using which you can decide on your sip <br/>
                            monthly investment amount and the investment time period. you can also <br/> 
                            find out how much you can expect to earn by investing an amount for a <br/>
                            specific period
                        </p>
                        <div className="sip-cal-cover"></div>
                        
                        <Calculator/>
                  </div>

               <Footer/>
           </div>
    )
}

export default SipCalculator;