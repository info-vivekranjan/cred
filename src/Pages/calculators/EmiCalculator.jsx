import CalNavbar from "./Cal-Components/CalNavbar";
import LoanCalculator from "./Cal-Components/LoanCalculator";
import Footer from "../../Components/Footer";

const EmiCalculator = () => {

    return(
       <div>
          <CalNavbar/>

            <div className="emi-cal-container">
                        <h2>Emi Calculator</h2>
                        <p>
                            an sip calculator is an online tool using which you can decide on your sip <br/>
                            monthly investment amount and the investment time period. you can also <br/> 
                            find out how much you can expect to earn by investing an amount for a <br/>
                            specific period
                        </p>
                        <div className="sip-cal-cover"></div>
                        
                        <LoanCalculator/>
             </div>

          <Footer/>

       </div>
    )
}

export default EmiCalculator;